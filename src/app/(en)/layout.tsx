import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ORG_JSON_LD } from "@/lib/orgInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexstem.ca"),
  title: {
    template: "%s | Vertex STEM Education",
    default: "Vertex STEM Education | STEM, Robotics & Coding Programs",
  },
  description:
    "Discover innovative STEM programs designed to inspire curiosity and enhance learning for students.",
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "zh-CN": "/zh",
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.webp", type: "image/webp" },
      {
        url: "/images/favicon_dark.webp",
        type: "image/webp",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Vertex STEM Education",
    locale: "en_CA",
    url: "/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:text-blue-900 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
