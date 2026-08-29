import type { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  color?: string;
}

export function Highlight({ children, color = "var(--color-yellow-300)" }: HighlightProps) {
  return (
    <span
      className="font-semibold text-text-heading"
      style={{
        backgroundImage: `linear-gradient(${color}, ${color})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.4em",
        backgroundPosition: "0 88%",
      }}
    >
      {children}
    </span>
  );
}
