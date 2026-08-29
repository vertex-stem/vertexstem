import type { Metadata } from "next";

const SITE_NAME = "Vertex STEM Education";
const DEFAULT_OG_IMAGE = { url: "/images/og-image.png", width: 1200, height: 630 };

interface PageMetadataInput {
  title: string;
  description: string;
  /** English path, e.g. "/about" or "/" for the homepage. */
  path: string;
}

function buildPageMetadata({
  title,
  description,
  enPath,
  zhPath,
  canonical,
  locale,
}: {
  title: string;
  description: string;
  enPath: string;
  zhPath: string;
  canonical: string;
  locale: "en_CA" | "zh_CN";
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-CA": enPath,
        "zh-CN": zhPath,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      locale,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** For pages under src/app/(en) — `path` is the English path, e.g. "/about". */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const zhPath = path === "/" ? "/zh" : `/zh${path}`;
  return buildPageMetadata({
    title,
    description,
    enPath: path,
    zhPath,
    canonical: path,
    locale: "en_CA",
  });
}

/** For pages under src/app/zh — `path` is the Chinese path, e.g. "/zh/about". */
export function pageMetadataZh({ title, description, path }: PageMetadataInput): Metadata {
  const enPath = path === "/zh" ? "/" : path.replace(/^\/zh/, "");
  return buildPageMetadata({
    title,
    description,
    enPath,
    zhPath: path,
    canonical: path,
    locale: "zh_CN",
  });
}
