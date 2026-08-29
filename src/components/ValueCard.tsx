export type ValueIconType = "hands-on" | "mentorship" | "inclusion" | "future-ready";

interface ValueCardProps {
  icon: ValueIconType;
  title: string;
  description: string;
  color: string;
}

const dotBg = {
  backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1.5px, transparent 1.5px)",
  backgroundSize: "16px 16px",
};

function tint(color: string) {
  return color.replace("-500)", "-100)");
}

function Icon({ type }: { type: ValueIconType }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "hands-on") {
    return (
      <svg {...props}>
        <path d="M9 12V5a1.5 1.5 0 0 1 3 0v6" />
        <path d="M12 11.5V4a1.5 1.5 0 0 1 3 0v7.5" />
        <path d="M15 11.5V6a1.5 1.5 0 0 1 3 0v9c0 3.5-2.5 6-6.5 6-3 0-4.5-1-6-3l-2.3-3.7a1.4 1.4 0 0 1 2.2-1.7L8 15" />
      </svg>
    );
  }

  if (type === "mentorship") {
    return (
      <svg {...props}>
        <circle cx="8.5" cy="8" r="2.8" />
        <path d="M3.5 19c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5" />
        <path d="M15 5.5c1.6.3 2.8 1.7 2.8 3.4 0 1.7-1.2 3.1-2.8 3.4" />
        <path d="M15.5 13.5c2.3.4 4 2.4 4 5.5" />
      </svg>
    );
  }

  if (type === "inclusion") {
    return (
      <svg {...props}>
        <path d="M12 20s-7-4.35-9.3-8.5C1.2 8.2 3 5 6.2 5c1.8 0 3.1 1 3.8 2.2C10.7 6 12 5 13.8 5 17 5 18.8 8.2 21.3 11.5 19 15.65 12 20 12 20z" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M12 2.5c2.5 1.8 4 4.8 4 8.2 0 2-.6 3.7-1.4 5H9.4c-.8-1.3-1.4-3-1.4-5 0-3.4 1.5-6.4 4-8.2z" />
      <path d="M9.5 15.5 7 19l2 .8" />
      <path d="M14.5 15.5 17 19l-2 .8" />
      <circle cx="12" cy="10.5" r="1.6" />
    </svg>
  );
}

export function ValueCard({ icon, title, description, color }: ValueCardProps) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1"
      style={{ background: tint(color), ...dotBg }}
    >
      <div
        className="absolute top-[-30px] right-[-24px] w-[100px] h-[100px] rounded-full pointer-events-none"
        style={{ background: color, opacity: 0.12 }}
      />
      <div
        className="absolute bottom-[-34px] left-[-20px] w-[76px] h-[76px] rounded-full pointer-events-none"
        style={{ background: color, opacity: 0.1 }}
      />
      <div
        className="relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
        style={{ background: color }}
      >
        <Icon type={icon} />
      </div>
      <div className="relative font-semibold text-md font-display text-text-heading">
        {title}
      </div>
      <p className="relative text-sm leading-relaxed m-0 text-text-body">
        {description}
      </p>
    </div>
  );
}
