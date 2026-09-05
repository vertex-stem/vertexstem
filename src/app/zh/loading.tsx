export default function Loading() {
  return (
    <div className="flex items-center justify-center py-32">
      <div
        className="w-10 h-10 rounded-full border-4 border-slate-200 animate-spin"
        style={{ borderTopColor: "var(--color-brand-primary)" }}
      />
    </div>
  );
}
