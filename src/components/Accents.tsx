export function RingAccent({
  size = 56,
  color = "var(--color-yellow-500)",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <div
      className="rounded-full"
      style={{ width: size, height: size, border: `4px solid ${color}` }}
    />
  );
}

export function DotCluster({
  color = "var(--color-coral-500)",
}: {
  color?: string;
}) {
  return (
    <div className="flex items-end gap-2">
      <div className="rounded-full" style={{ width: 9, height: 9, background: color }} />
      <div className="rounded-full" style={{ width: 17, height: 17, background: color }} />
      <div className="rounded-full" style={{ width: 12, height: 12, background: color }} />
    </div>
  );
}

export function DuoStack({
  size = 46,
  colors = ["var(--color-coral-500)", "var(--color-mint-500)"],
}: {
  size?: number;
  colors?: [string, string];
}) {
  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden shadow-md"
      style={{ width: size, height: size * 1.2 }}
    >
      <div className="flex-1" style={{ background: colors[0] }} />
      <div className="flex-1" style={{ background: colors[1] }} />
    </div>
  );
}
