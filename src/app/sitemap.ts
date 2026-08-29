import type { MetadataRoute } from "next";

const SITE_URL = "https://vertexstem.ca";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/camp", priority: 0.9, changeFrequency: "weekly" },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/competition", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partnerships", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partnerships/marketing", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Applied uniformly to every URL rather than tracking real per-page
  // change dates — there's no CMS or content-versioning system behind
  // this site to source accurate per-route timestamps from.
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => {
    const zhPath = path === "/" ? "/zh" : `/zh${path}`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "en-CA": `${SITE_URL}${path}`,
          "zh-CN": `${SITE_URL}${zhPath}`,
        },
      },
    };
  }).concat(
    ROUTES.map(({ path, priority, changeFrequency }) => {
      const zhPath = path === "/" ? "/zh" : `/zh${path}`;
      return {
        url: `${SITE_URL}${zhPath}`,
        lastModified,
        changeFrequency,
        priority: priority * 0.9,
        alternates: {
          languages: {
            "en-CA": `${SITE_URL}${path}`,
            "zh-CN": `${SITE_URL}${zhPath}`,
          },
        },
      };
    })
  );
}
