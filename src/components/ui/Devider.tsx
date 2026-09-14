export default function Divider() {
  return (
    <div className="flex items-center gap-4">
      <span className="h-2 w-2 rounded-full bg-(--purple)" />

      <div className="h-px flex-1 bg-(--border)" />
    </div>
  );
}