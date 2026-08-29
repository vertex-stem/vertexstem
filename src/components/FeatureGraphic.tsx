import Image from "next/image";

type FeatureGraphicType = "instructors" | "class-size" | "programs";

interface FeatureGraphicProps {
  type: FeatureGraphicType;
  color: string;
  image?: string;
}

const dotBg = {
  backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1.5px, transparent 1.5px)",
  backgroundSize: "16px 16px",
};

function tint(color: string) {
  return color.replace("-500)", "-100)");
}

function Icon({ type }: { type: FeatureGraphicType }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "instructors") {
    return (
      <svg {...props}>
        <path d="M12 3L2 8l10 5 10-5-10-5z" />
        <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
        <path d="M22 8v6" />
      </svg>
    );
  }

  if (type === "class-size") {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
        <circle cx="17.5" cy="8.5" r="2.2" />
        <path d="M15.8 20c.2-2.6 1.7-4.7 3.7-5" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </svg>
  );
}

export function FeatureGraphic({ color, image }: FeatureGraphicProps) {
  return (
    <div
      className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4"
      style={{ background: tint(color), ...dotBg }}
    >
      <div
        className="absolute top-[-22px] right-[-16px] w-[70px] h-[70px] rounded-full"
        style={{ background: color, opacity: 0.12 }}
      />
      <div
        className="absolute bottom-[-26px] left-[-14px] w-[56px] h-[56px] rounded-full"
        style={{ background: color, opacity: 0.1 }}
      />
      {image && (
        <div className="absolute inset-2.5 rounded-xl overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      )}
    </div>
  );
}

export function FeatureIconBadge({ type, color }: FeatureGraphicProps) {
  return (
    <div
      className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center shadow-sm"
      style={{ background: color }}
    >
      <Icon type={type} />
    </div>
  );
}
