# Production migration — Cloudflare Workers + `vertexstem.ca`

Moving the marketing site (this repo, Next.js 16 + OpenNext, deployed as a Cloudflare
Worker named `vertexstem`) into production on `vertexstem.ca`, replacing the current
Squarespace site.

Status legend: ✅ done · ⏸️ paused · ⬜ not started

---

## 1. Production Resend secret — ✅ done

- `RESEND_API_KEY` is set as a Worker secret on `vertexstem` (`wrangler secret list` shows it).
- The key was **rotated** on 2026-08-29 (old key `re_XAP6pLe1_…` revoked; new key `re_K2PBrA6j_…`,
  a send-only restricted key).
- Gotcha hit during setup — the **version/deployment split**:
  - A Cloudflare Worker separates **versions** (code + config + secrets snapshots) from the
    **deployment** (which version is actually live).
  - This worker's history used `wrangler versions upload` (upload without release), so adding
    the secret via the dashboard created version `746eba74` but left the older `488ebd25` live.
    `process.env.RESEND_API_KEY` stayed undefined in prod until `746eba74` was promoted to 100%.
  - Fix applied: promoted `746eba74` from the dashboard.
  - **Prevention:** standardize on `npm run deploy` (`opennextjs-cloudflare deploy` → plain
    `wrangler deploy`, which uploads *and* releases in one step). Decision still open — see §6.
- OpenNext copies every string binding (vars + secrets) into `process.env` at request time
  (`node_modules/@opennextjs/cloudflare/dist/cli/templates/init.js` → `populateProcessEnv`),
  so `process.env.RESEND_API_KEY` resolves in the route once the right version is live.
- Local parity still TODO: `.dev.vars` only has `NEXTJS_ENV`; add `RESEND_API_KEY=…` there
  (gitignored) so `npm run preview` can send. `.env` (used by `next dev`) already updated to
  the new key.

## 2. Resend domain verification — ✅ done

- `vertexstem.ca` is verified in Resend. Confirmed by a direct API send from
  `noreply@vertexstem.ca` returning HTTP 200.
- The contact route (`src/app/api/contact/route.ts`) sends
  `from: "Vertex STEM Website <noreply@vertexstem.ca>"` → `to: ORG_EMAIL`
  (`office@vertexstem.ca`, from `src/lib/orgInfo.ts`).
- Resend DNS records now on the zone (added at Squarespace DNS):
  - `resend._domainkey` TXT — DKIM public key
  - `send.vertexstem.ca` — Resend bounce/return-path (CNAME → `send.forge.rmta.net`,
    which carries SPF TXT `v=spf1 ip4:52.3.252.119 ip4:44.222.39.36 ip4:199.249.231.0/24 ~all`
    and MX `10 feedback.forge.rmta.net`)
- Not yet done: a live end-to-end test through the deployed `/api/contact` (deliberately
  skipped to avoid test emails). Do one real submission during final QA.

## 3. Point `vertexstem.ca` at the Worker — ⏸️ paused

Blocked on a decision: **whether to move nameservers to Cloudflare.** See §4 / §5.

## 4. Custom-domain options WITHOUT switching nameservers

For a Cloudflare **Worker** on an **apex** domain there is no cheap way to avoid Cloudflare
being the authoritative DNS:

| Option | Verdict |
|---|---|
| **Partial (CNAME) setup** — keep NS, add CNAME + TXT | **Business plan only ($200/mo)**. No. |
| **Cloudflare for SaaS (custom hostnames)** | Only NS-free path that works. Built for SaaS serving *customers'* domains; needs a separate CF zone to host it, apex needs CNAME flattening Squarespace doesn't offer, per-hostname billing. Heavy for one self-owned domain. |
| **Plain external CNAME → `vertexstem.tommyguo77.workers.dev`** | Does not work. Edge has no route mapping the hostname to the worker → errors. |

If "no nameserver switch" is a hard requirement, the realistic answer is to **host the app
somewhere that accepts an external A/CNAME** — e.g. Vercel (native for Next.js 16; gives an
apex `A` `76.76.21.21` + `www` CNAME to point at from Squarespace DNS). That means dropping
the OpenNext/Workers setup, but for a static marketing site it's ~an afternoon.

## 5. Full-setup migration plan (move NS to Cloudflare)

### What moving nameservers does NOT change

- **Registrar** — domain stays registered where it is (Tucows backend via Google Domains /
  Squarespace). Only the `NS` records at the registry change to Cloudflare's two.
- **Email** — inbound to Google Workspace keeps working as long as `MX` + mail TXT records
  are copied. Delivery uses `MX`, not `A`; the apex `A` change is irrelevant to mail.
- **`courses` / `app`** — same CNAME targets; Cloudflare just relays the answer (set DNS-only).
- **DNSSEC** — currently **unsigned**, so nothing to coordinate at the registrar.

### Current DNS inventory (authoritative NS today: `ns-cloud-d{1..4}.googledomains.com`)

| Host | Type | Value | Notes |
|---|---|---|---|
| `vertexstem.ca` | A | `198.185.159.144/145`, `198.49.23.144/145` | Squarespace — **replace with Worker** |
| `www` | CNAME | `ext-sq.squarespace.com` | Squarespace — **replace with Worker / redirect** |
| `courses` | CNAME | `d33u8mvsot7sn3.cloudfront.net` | AWS CloudFront (LMS). TTL 14400. **DNS only** |
| `app` | CNAME | `roboedu-webapp-xt0l.onrender.com` | Render (origin itself behind Cloudflare). TTL 14400. **DNS only** |
| `vertexstem.ca` | MX | `1 smtp.google.com` | Google Workspace — **keep exactly** |
| `vertexstem.ca` | TXT | `google-site-verification=a5eX1r55qyf8mo1DDHBfBjLFWwycmpPs0h0r8MV8ykk` | Workspace / Search Console — **keep** |
| `resend._domainkey` | TXT | `p=MIGfMA0GCSqGSIb3DQEB…` (DKIM) | Resend — **keep** |
| `send` | CNAME | `send.forge.rmta.net` | Resend return-path (carries SPF TXT + MX `10 feedback.forge.rmta.net`) — **keep, DNS only** |
| `_domainconnect` | CNAME | `_domainconnect.domains.squarespace.com` | Squarespace automation — safe to drop once off Squarespace |

No `AAAA`, no `_dmarc`, no `google._domainkey`, no apex SPF currently exist.

### Proxy (orange) vs DNS-only (grey)

Rule: **only hostnames the Worker serves are proxied. Everything pointing at a third party is DNS-only.**

| Record | Setting | Reason |
|---|---|---|
| `vertexstem.ca` (apex) | **Proxied** (automatic) | Worker custom domains require it |
| `www` | **Proxied** (automatic) | Worker custom domain / redirect |
| `courses` → CloudFront | **DNS only (grey)** | CloudFront does its own TLS + Host routing; proxying on top → 525/526 or loops, and it's already a CDN |
| `app` → Render | **DNS only (grey)** | Render does its own TLS; its origin is already behind Cloudflare (would be triple-proxied) |
| `MX`, all TXT | n/a | never proxyable — just replicate |
| `send` (Resend) | **DNS only** | third-party mail infra |

**Trap:** Cloudflare's importer defaults `A`/`CNAME` records to **orange**. After the scan,
before flipping NS, manually grey-cloud `courses`, `app`, and anything else resolving to a
non-Cloudflare host.

### Google Workspace safety

- Email is unaffected — `MX` is never proxied; mail servers connect straight to
  `smtp.google.com` regardless of who hosts DNS.
- **Do NOT enable Cloudflare Email Routing** — it rewrites `MX` to Cloudflare's and would
  hijack inbound mail.
- Keep the `google-site-verification` TXT (Google re-checks periodically).

### Pre-existing email-auth gap (fix while migrating, not caused by the move)

Apex domain has **no SPF, no DKIM, no DMARC** for Workspace sending. Mail from
`@vertexstem.ca` via Gmail is increasingly likely to be spam-filtered/rejected. Add during
migration:
- SPF TXT @ apex: `v=spf1 include:_spf.google.com ~all` (must also cover Resend if any mail
  is sent from the apex via Resend — but Resend uses the `send` subdomain, so apex SPF can be
  Google-only)
- Google Workspace DKIM: generate in Admin console → Apps → Google Workspace → Gmail →
  Authenticate email; add the `google._domainkey` TXT it provides
- DMARC TXT `_dmarc`: start with `v=DMARC1; p=none; rua=mailto:postmaster@vertexstem.ca`,
  tighten to `p=quarantine` / `p=reject` after monitoring

### Cutover sequence

1. **Pre-flight:** new site content final. Cutover removes Squarespace from the apex/`www`.
2. Export the full zone from Squarespace (Settings → Domains → DNS) for later diffing.
3. Cloudflare dashboard → **Add a Site** → `vertexstem.ca` → Free plan → run the DNS scan.
4. **Audit** imported records against the inventory table above. Add anything missed
   (esp. `MX`, `resend._domainkey`, `send`, TXT). Grey-cloud `courses` + `app`.
5. **Do not** enable DNSSEC or Email Routing yet.
6. Stage the Worker custom domain on the Cloudflare zone **before** the NS flip, so during
   propagation both sides serve a working homepage:
   - `wrangler.jsonc`:
     ```jsonc
     "routes": [
       { "pattern": "vertexstem.ca", "custom_domain": true },
       { "pattern": "www.vertexstem.ca", "custom_domain": true }
     ]
     ```
     then `npm run deploy` — or add via dashboard (Worker → Settings → Domains & Routes →
     Add Custom Domain), twice.
7. Add a **Redirect Rule** `www → apex` (301). Code hardcodes `https://vertexstem.ca`
   everywhere (`metadataBase`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/seo.ts`),
   so **apex is canonical**, `www` redirects to it.
8. At Squarespace domain settings → change nameservers to the two Cloudflare NS.
   Propagation minutes–48h; old NS keeps serving during it. Email never drops (MX unchanged).
9. Once the zone is **Active** and the edge cert is issued, verify (see checklist).
10. Post-cutover: enable DNSSEC on Cloudflare + add DS record at registrar; disable the
    `workers.dev` route (§7); update Google Search Console + resubmit sitemap; keep the
    Squarespace subscription a few days as rollback, then cancel.

### Verification checklist

- [ ] `https://vertexstem.ca` serves the new site, valid cert
- [ ] `https://www.vertexstem.ca` 301-redirects to apex
- [ ] `https://courses.vertexstem.ca` unchanged (CloudFront)
- [ ] `https://app.vertexstem.ca` unchanged (Render)
- [ ] Inbound email to `office@vertexstem.ca` still arrives (send a test from an external account)
- [ ] Contact form: one real submission delivers to `office@vertexstem.ca` via Resend
- [ ] `dig MX vertexstem.ca` → `1 smtp.google.com`
- [ ] `dig +short NS vertexstem.ca` → Cloudflare NS
- [ ] HSTS header present (`next.config.ts` sets `max-age=63072000; includeSubDomains; preload`
      — note `preload` is hard to undo; only keep if committed to HTTPS-forever, which is fine)
- [ ] All 20 routes + both locales (`/` and `/zh`) load without runtime errors
- [ ] `robots.txt` and `sitemap.xml` resolve and reference `https://vertexstem.ca`

## 6. Deploy workflow / CI-CD — ⬜ not started

- Move deploys off the laptop: GitHub Actions running `opennextjs-cloudflare deploy` on push
  to `main` (needs a `CLOUDFLARE_API_TOKEN` repo secret with Workers Scripts:Edit).
- Folds in the fix for the §1 version/deployment split (always upload + release together).
- Open decision: standardize on `npm run deploy` vs the current upload-then-promote flow.

## 7. Disable `workers.dev` route — ⬜ not started (depends on §3)

Once the custom domain is live, turn off `vertexstem.tommyguo77.workers.dev`
(Worker → Settings → Domains & Routes) so Google doesn't index a duplicate of the site.

## 8. Other nice-to-haves — ⬜ not started

- **Observability:** add `"observability": { "enabled": true }` to `wrangler.jsonc` for
  Workers logs (needed to see the route's `console.error` output in prod).
- **Turnstile / zone rate-limiting** on the contact form — the route's in-memory per-IP
  limit isn't real protection (isolates recycle). Needs the domain on Cloudflare.
- **R2 incremental cache** — commented out in `open-next.config.ts`; fine to skip for a
  mostly-static site.
- **Cloudflare Web Analytics** — optional.
- **Full smoke test** of all routes on the current `workers.dev` deployment.

---

## Account / environment facts

- Cloudflare account: `Tommyguo77@gmail.com's Account` (`1a02aa0831611c97b90b4ae4410576d2`)
- Worker name: `vertexstem` · live at `https://vertexstem.tommyguo77.workers.dev`
- Registrar: Tucows (via Google Domains / Squarespace) · `vertexstem.ca` expiry 2027-09-12 · DNSSEC unsigned
- Google Workspace on `vertexstem.ca` (`MX 1 smtp.google.com`); `office@vertexstem.ca` is the ops mailbox
- Existing subdomains that must keep working: `courses` (CloudFront LMS), `app` (Render webapp)
