// Chinese (zh-CN) translation, hand-maintained.
// Source: src/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { ORG_ADDRESS, ORG_EMAIL, ORG_PHONE } from "@/lib/orgInfo";

const linkColumns = [
  {
    title: "STEM 与课程",
    links: [
      { label: "课程", href: "/zh/programs" },
      { label: "竞赛", href: "/zh/competition" },
      { label: "营地", href: "/zh/camp" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "关于我们", href: "/zh/about" },
      { label: "合作伙伴", href: "/zh/partnerships" },
    ],
  },
  {
    title: "联系我们",
    links: [
      { label: "联系我们", href: "/zh/contact" },
      { label: "家长门户", href: "https://courses.vertexstem.ca/" },
      { label: "立即预订", href: "/zh/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white font-body">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10 md:py-14 grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center bg-white rounded-md px-3 py-1.5 mb-4 w-fit">
            <Image
              src="/images/vertex-stem-logo.png"
              alt="Vertex STEM Education"
              width={1650}
              height={700}
              className="h-11 w-auto"
            />
          </div>
          <p
            className="text-sm leading-relaxed max-w-[260px]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            为东约克区幼儿园至 11 年级的学生提供实践性 STEM、机器人和编程课程。
                                </p>
        </div>
        {linkColumns.map((col) => (
          <div key={col.title}>
            <div className="font-bold text-sm mb-3 font-display">
              {col.title}
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="hover:text-yellow-400 hover:no-underline transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div
          className="max-w-[1200px] mx-auto px-5 md:px-10 py-5 flex flex-wrap justify-between items-center gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <span>
            © {new Date().getFullYear()} Vertex STEM Education。版权所有。
                                </span>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            <span>{ORG_ADDRESS}</span>
            <span>{ORG_PHONE}</span>
            <a
              href={`mailto:${ORG_EMAIL}`}
              className="hover:text-yellow-400 hover:no-underline transition-colors"
              style={{ color: "inherit" }}
            >
              {ORG_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
