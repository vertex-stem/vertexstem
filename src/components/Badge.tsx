import { ReactNode } from "react";

type BadgeColor = "blue" | "coral" | "mint" | "sunny";

interface BadgeProps {
  color?: BadgeColor;
  children: ReactNode;
}

const badgeStyles: Record<BadgeColor, { bg: string; color: string }> = {
  blue: { bg: "var(--color-blue-100)", color: "var(--color-blue-700)" },
  coral: { bg: "var(--color-coral-100)", color: "var(--color-coral-700)" },
  mint: { bg: "var(--color-mint-100)", color: "var(--color-mint-700)" },
  sunny: { bg: "var(--color-yellow-100)", color: "#8a6a00" },
};

export function Badge({ color = "blue", children }: BadgeProps) {
  const s = badgeStyles[color];
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-mono"
      style={{
        background: s.bg,
        color: s.color,
      }}
    >
      {children}
    </span>
  );
}
