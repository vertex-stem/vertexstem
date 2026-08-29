const dotBg = {
  backgroundImage:
    "radial-gradient(rgba(46,49,146,0.16) 2px, transparent 2px)",
  backgroundSize: "20px 20px",
};

const steps = [
  { id: "start", color: "var(--color-skyblue-500)", height: 60 },
  { id: "progress", color: "var(--color-coral-500)", height: 92 },
  { id: "peak", color: "var(--color-mint-500)", height: 126 },
];

export function GrowthPathGraphic() {
  return (
    <div
      className="relative w-[280px] h-[240px] max-w-full mx-auto md:mx-0 rounded-[20px] overflow-hidden border border-slate-200"
      style={{ background: "var(--color-blue-50)", ...dotBg }}
    >
      <div
        className="absolute top-[-26px] left-[-26px] w-[90px] h-[90px] rounded-full"
        style={{ background: "var(--color-yellow-500)", opacity: 0.35 }}
      />
      <div
        className="absolute bottom-[-30px] right-[-20px] w-[110px] h-[110px] rounded-full"
        style={{ background: "var(--color-brand-secondary)", opacity: 0.14 }}
      />

      <div className="absolute inset-0 flex items-end justify-center gap-3.5 px-8 pb-8">
        {steps.map((s, i) => (
          <div key={s.id} className="flex flex-col items-center gap-2">
            {i === steps.length - 1 && (
              <svg width="22" height="22" viewBox="0 0 24 24" className="mb-0.5">
                <path
                  d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.9l-6.18 3.12L7 13.14 2 8.27l6.91-1.01L12 1z"
                  fill="var(--color-coral-500)"
                />
              </svg>
            )}
            <div
              className="w-[52px] rounded-t-lg shadow-sm"
              style={{ height: s.height, background: s.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
