import { ReactNode } from "react";

type AccentColor = "blue" | "coral" | "mint" | "sunny";

interface CardProps {
  title?: ReactNode;
  accent?: AccentColor;
  media?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const accentColors: Record<AccentColor, string> = {
  blue: "var(--color-blue-500)",
  coral: "var(--color-coral-500)",
  mint: "var(--color-mint-500)",
  sunny: "var(--color-yellow-500)",
};

export function Card({ title, accent, media, footer, children }: CardProps) {
  return (
    <div
      className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-slate-200 flex flex-col transition-shadow hover:shadow-md"
      style={{
        ...(accent
          ? { borderTop: `4px solid ${accentColors[accent]}` }
          : {}),
      }}
    >
      {media}
      <div className="p-6 flex flex-col gap-2.5 flex-1">
        {title && (
          <div className="font-semibold text-md font-display text-text-heading">
            {title}
          </div>
        )}
        <div className="text-sm leading-relaxed text-text-body">
          {children}
        </div>
        {footer && <div className="mt-auto pt-3">{footer}</div>}
      </div>
    </div>
  );
}
