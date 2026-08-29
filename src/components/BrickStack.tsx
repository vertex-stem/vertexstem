export function BrickStack({ size = 54 }: { size?: number }) {
  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden shadow-md"
      style={{ width: size, height: size * 1.7 }}
    >
      <div className="flex-1 bg-yellow-500" />
      <div className="flex-1 bg-skyblue-500" />
      <div className="flex-1 bg-mint-500" />
    </div>
  );
}
