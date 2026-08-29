// Chinese (zh-CN) translation, hand-maintained.
// Source: src/components/NavBar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toggleLocalePath } from "@/lib/locale";

interface SubItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  subItems?: SubItem[];
}

const links: NavLink[] = [
  { label: "首页", href: "/zh" },
  {
    label: "课程",
    href: "/zh/programs",
    subItems: [
      { label: "STEM与编程", href: "/zh/programs" },
      { label: "竞赛", href: "/zh/competition" },
    ],
  },
  { label: "营地", href: "/zh/camp" },
  {
    label: "合作关系",
    href: "/zh/partnerships",
    subItems: [
      { label: "现有合作伙伴", href: "/zh/partnerships" },
      { label: "合作营销", href: "/zh/partnerships/marketing" },
    ],
  },
  { label: "关于我们", href: "/zh/about" },
  { label: "联系我们", href: "/zh/contact" },
];

function TranslateIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
      <rect x="1" y="2" width="12" height="12" rx="3" fill="currentColor" />
      <text
        x="7"
        y="10.5"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-blue-900)"
        fontFamily="var(--font-body)"
      >
        A
      </text>
      <rect
        x="10"
        y="10"
        width="13"
        height="13"
        rx="3"
        fill="var(--color-blue-900)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <text
        x="16.5"
        y="19.5"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="currentColor"
        fontFamily="var(--font-body)"
      >
        文
      </text>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function NavBar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const translateHref = toggleLocalePath(pathname ?? "/");

  return (
    <div className="sticky top-0 z-10 bg-blue-900">
      <header className="flex items-center justify-between px-5 md:px-10 py-4">
        <Link href="/zh" className="shrink-0 flex items-center bg-white rounded-md px-3 py-1.5">
          <Image
            src="/images/vertex-stem-logo.png"
            alt="Vertex STEM Education"
            width={1650}
            height={700}
            priority
            className="h-11 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-8 font-semibold text-base font-body">
          {links.map((link) => {
            if (link.subItems) {
              const isOpen = openMenu === link.label;
              const isActive =
                pathname === link.href ||
                link.subItems.some((item) => pathname === item.href);
              const submenuId = `${link.label.toLowerCase().replace(/\s+/g, "-")}-submenu`;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(link.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenMenu(null);
                  }}
                >
                  <span
                    className="inline-flex items-center gap-1.5 pb-1 border-b-2 transition-colors"
                    style={{
                      color: isActive
                        ? "var(--color-yellow-400)"
                        : "rgba(255,255,255,0.85)",
                      borderColor: isActive
                        ? "var(--color-yellow-400)"
                        : "transparent",
                    }}
                  >
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className="hover:no-underline"
                      style={{ color: "inherit" }}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={submenuId}
                      aria-label={`展开${link.label}子菜单`}
                      onClick={() => setOpenMenu(isOpen ? null : link.label)}
                      className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0 text-[10px] transition-transform"
                      style={{
                        color: "inherit",
                        transform: isOpen ? "rotate(180deg)" : "none",
                      }}
                    >
                      &#9660;
                    </button>
                  </span>
                  {isOpen && (
                    <div
                      id={submenuId}
                      className="absolute top-full left-[-12px] pt-3 min-w-[190px]"
                    >
                      <div className="bg-white rounded-[14px] shadow-lg p-2 flex flex-col gap-0.5">
                        {link.subItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            aria-current={pathname === item.href ? "page" : undefined}
                            onClick={() => setOpenMenu(null)}
                            className="px-3.5 py-2.5 rounded-lg font-semibold text-sm hover:no-underline"
                            style={{
                              color:
                                pathname === item.href
                                  ? "var(--color-brand-primary)"
                                  : "var(--color-text-body)",
                              background:
                                pathname === item.href
                                  ? "var(--color-surface-brand-tint)"
                                  : "transparent",
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="pb-1 border-b-2 transition-colors hover:no-underline"
                style={{
                  color:
                    pathname === link.href
                      ? "var(--color-yellow-400)"
                      : "rgba(255,255,255,0.85)",
                  borderColor:
                    pathname === link.href
                      ? "var(--color-yellow-400)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            href="https://courses.vertexstem.ca/"
            className="px-[22px] py-2.5 rounded-full font-semibold cursor-pointer transition-colors hover:no-underline"
            style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            家长门户
          </Link>
          <Link
            href="/zh/contact"
            className="px-[22px] py-2.5 rounded-full font-semibold border-none cursor-pointer transition-colors hover:no-underline"
            style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              background: "var(--color-brand-secondary)",
            }}
          >
            立即预订
          </Link>
          <Link
            href={translateHref}
            aria-label="切换到英语"
            title="切换到英语"
            className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-colors hover:no-underline"
            style={{
              color: "#ffffff",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            <TranslateIcon />
          </Link>
        </div>

        <div className="flex xl:hidden items-center gap-2">
          <Link
            href={translateHref}
            aria-label="切换到英语"
            title="切换到英语"
            className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-colors hover:no-underline"
            style={{
              color: "#ffffff",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            <TranslateIcon />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((open) => !open);
              setOpenMenu(null);
            }}
            className="flex items-center justify-center w-9 h-9 rounded-full text-white cursor-pointer transition-colors"
            style={{ border: "2px solid rgba(255,255,255,0.6)" }}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="xl:hidden px-5 pb-5 pt-2 flex flex-col gap-1 font-body"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          {links.map((link) => {
            if (link.subItems) {
              const isOpen = openMenu === link.label;
              const isActive =
                pathname === link.href ||
                link.subItems.some((item) => pathname === item.href);

              return (
                <div key={link.label}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`展开${link.label}子菜单`}
                    onClick={() => setOpenMenu(isOpen ? null : link.label)}
                    className="w-full flex items-center justify-between py-3 font-semibold text-base cursor-pointer"
                    style={{ color: isActive ? "var(--color-yellow-400)" : "#ffffff" }}
                  >
                    {link.label}
                    <span
                      className="text-[10px] transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    >
                      &#9660;
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {link.subItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                          onClick={() => {
                            setMobileOpen(false);
                            setOpenMenu(null);
                          }}
                          className="py-2 font-medium text-sm hover:no-underline"
                          style={{
                            color:
                              pathname === item.href
                                ? "var(--color-yellow-400)"
                                : "rgba(255,255,255,0.85)",
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-semibold text-base hover:no-underline"
                style={{
                  color: pathname === link.href ? "var(--color-yellow-400)" : "#ffffff",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex flex-col gap-2.5 mt-3">
            <Link
              href="https://courses.vertexstem.ca/"
              className="text-center px-[22px] py-2.5 rounded-full font-semibold cursor-pointer transition-colors hover:no-underline"
              style={{
                fontFamily: "var(--font-display)",
                color: "#ffffff",
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.6)",
              }}
            >
              家长门户
            </Link>
            <Link
              href="/zh/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center px-[22px] py-2.5 rounded-full font-semibold border-none cursor-pointer transition-colors hover:no-underline"
              style={{
                fontFamily: "var(--font-display)",
                color: "#ffffff",
                background: "var(--color-brand-secondary)",
              }}
            >
              立即预订
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
