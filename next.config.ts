import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.147"],
  poweredByHeader: false,
  experimental: {
    // (en) and zh each define their own root layout (own <html>/<body>), so
    // there's no single layout to compose a global 404 from — this renders
    // a standalone page for URLs that don't match either locale's routes.
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: "/programs-cn", destination: "/zh/programs", permanent: true },
    ];
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Next.js emits inline bootstrap/hydration scripts on every
              // page; without 'unsafe-inline' (or a per-request nonce, which
              // would force dynamic rendering on this statically-generated
              // site) the browser blocks them and hydration fails.
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self'",
              "connect-src 'self'",
              "frame-src https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
