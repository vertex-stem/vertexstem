export type Locale = "en" | "zh";

export function getLocaleFromPathname(pathname: string | null): Locale {
  return pathname === "/zh" || pathname?.startsWith("/zh/") ? "zh" : "en";
}

export function localizeHref(href: string, locale: Locale): string {
  if (locale !== "zh") return href;
  if (!href.startsWith("/") || href.startsWith("/zh")) return href;
  return href === "/" ? "/zh" : `/zh${href}`;
}

export function toggleLocalePath(pathname: string): string {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    return pathname.slice(3) || "/";
  }
  return pathname === "/" ? "/zh" : `/zh${pathname}`;
}
