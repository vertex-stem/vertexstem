import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { ORG_EMAIL } from "@/lib/orgInfo";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Requires vertexstem.ca to be verified in Resend (SPF/DKIM DNS records
// added) for delivery to actually work — see README.
const FROM_ADDRESS = "Vertex STEM Website <noreply@vertexstem.ca>";

const MAX_BODY_BYTES = 20_000;
const MAX_LENGTHS = { name: 100, interest: 100, message: 5000 } as const;

// Best-effort per-IP rate limit, held in module scope so it persists across
// requests handled by the same Worker isolate. Not a substitute for a
// zone-level Cloudflare Rate Limiting rule or Turnstile (isolates can be
// recycled or requests routed to a different one), but it stops naive
// scripted spam without needing a new KV/Durable Object binding.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Sweep expired entries first so the map doesn't grow forever for IPs
  // that hit the endpoint once and never come back.
  for (const [key, entry] of rateLimitHits) {
    if (now > entry.resetAt) rateLimitHits.delete(key);
  }

  const entry = rateLimitHits.get(ip);
  if (!entry) {
    rateLimitHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  // Require an exact application/json Content-Type. Without this, a
  // cross-origin page can send Content-Type: text/plain (a CORS-safelisted
  // value) and reach this handler with no browser preflight — bypassing the
  // Origin check below in browsers that don't send Origin on simple
  // requests, and letting an attacker submit crafted bodies that skip the
  // honeypot entirely.
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
  }

  // Reject cross-origin submissions. Same-origin fetch() calls (including
  // the real contact form) always send a matching Origin header; a request
  // with no Origin header at all is not a browser cross-origin request and
  // is allowed through unchanged.
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  }

  // Measured on the actual received body, not the client-supplied
  // Content-Length header — that header can be omitted or lied about,
  // but request.text() reports what was really sent.
  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request body too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot field: hidden from real visitors via CSS, so a filled-in
  // value means a bot submitted the form. Pretend success either way.
  if (typeof body._gotcha === "string" && body._gotcha.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const updates = body.updates === "on";

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name and email address." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_LENGTHS.name ||
    interest.length > MAX_LENGTHS.interest ||
    message.length > MAX_LENGTHS.message
  ) {
    return NextResponse.json(
      { error: "One or more fields exceed the maximum allowed length." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; dropped contact form submission from", email);
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const { cf } = await getCloudflareContext({ async: true });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: ORG_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Location: ${cf?.city ?? "?"}, ${cf?.region ?? "?"}, ${cf?.country ?? "?"} (IP: ${ip})`,
        interest && `Interested in: ${interest}`,
        `Wants program updates: ${updates ? "Yes" : "No"}`,
        "",
        message || "(No message provided)",
      ]
        .filter((line): line is string => Boolean(line))
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
