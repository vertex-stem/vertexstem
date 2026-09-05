const SITE_URL = "https://vertexstem.ca";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const ROUTES: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/camp", priority: 0.9, changeFrequency: "weekly" },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/competition", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partnerships", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partnerships/marketing", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

function roundPriority(value: number): number {
  return Number(value.toFixed(2));
}

function buildUrlEntry({
  loc,
  enHref,
  zhHref,
  lastmod,
  changefreq,
  priority,
}: {
  loc: string;
  enHref: string;
  zhHref: string;
  lastmod: string;
  changefreq: ChangeFrequency;
  priority: number;
}): string {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="en-CA" href="${enHref}" />`,
    `    <xhtml:link rel="alternate" hreflang="zh-CN" href="${zhHref}" />`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${roundPriority(priority)}</priority>`,
    "  </url>",
  ].join("\n");
}

export async function GET() {
  const lastmod = new Date().toISOString();

  const entries = ROUTES.flatMap(({ path, priority, changeFrequency }) => {
    const zhPath = path === "/" ? "/zh" : `/zh${path}`;
    const enHref = `${SITE_URL}${path}`;
    const zhHref = `${SITE_URL}${zhPath}`;

    return [
      buildUrlEntry({ loc: enHref, enHref, zhHref, lastmod, changefreq: changeFrequency, priority }),
      buildUrlEntry({
        loc: zhHref,
        enHref,
        zhHref,
        lastmod,
        changefreq: changeFrequency,
        priority: priority * 0.9,
      }),
    ];
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
