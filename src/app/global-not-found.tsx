import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import { Button } from "@/components/Button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Page Not Found | Vertex STEM Education",
  description: "The page you're looking for doesn't exist or may have moved.",
};

// This bypasses (en)/layout.tsx and zh/layout.tsx entirely, so there's no
// route param to read the locale from — fall back to the browser's
// language preference instead.
export default async function GlobalNotFound() {
  const headersList = await headers();
  const primaryLang =
    headersList.get("accept-language")?.split(",")[0]?.trim().toLowerCase() ?? "";
  const isZh = primaryLang.startsWith("zh");

  const copy = isZh
    ? {
        lang: "zh-CN",
        heading: "抱歉，找不到该页面。",
        body: "该页面可能已被移动、重命名，或从未存在。",
        home: "返回首页",
        homeHref: "/zh",
        secondary: "浏览课程",
        secondaryHref: "/zh/programs",
      }
    : {
        lang: "en",
        heading: "We couldn't find that page.",
        body: "It may have been moved, renamed, or never existed.",
        home: "Go to Homepage",
        homeHref: "/",
        secondary: "Browse Programs",
        secondaryHref: "/programs",
      };

  return (
    <html
      lang={copy.lang}
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col items-center justify-center bg-surface-page text-text-body font-body px-5 py-20">
        <div className="text-center max-w-[480px]">
          <Image
            src="/images/vertex-stem-logo.png"
            alt="Vertex STEM Education"
            width={1650}
            height={700}
            priority
            className="h-10 w-auto mx-auto mb-10"
          />
          <div className="font-display text-brand-primary text-[5rem] leading-none mb-2">
            404
          </div>
          <h1 className="text-2xl mb-3">{copy.heading}</h1>
          <p className="text-text-muted mb-8">{copy.body}</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button variant="primary" href={copy.homeHref}>
              {copy.home}
            </Button>
            <Button variant="outline" href={copy.secondaryHref}>
              {copy.secondary}
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
