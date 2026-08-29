interface PhotoPlaceholderProps {
  label: string;
  height?: number;
  tint?: string;
}

export function PhotoPlaceholder({
  label,
  height = 280,
  tint = "var(--color-blue-50)",
}: PhotoPlaceholderProps) {
  return (
    <div
      className="rounded-[20px] flex items-center justify-center relative overflow-hidden border border-dashed border-slate-300 text-sm text-text-muted font-mono"
      style={{
        height,
        background: tint,
      }}
    >
      {label}
    </div>
  );
}
