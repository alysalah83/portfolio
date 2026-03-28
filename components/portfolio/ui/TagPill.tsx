type TagPillProps = {
  label: string;
  interactive?: boolean;
};

export function TagPill({ label, interactive = false }: TagPillProps) {
  return (
    <span
      className={`border-border bg-surface2 text-muted-text rounded border px-2 py-1 font-mono text-[10px] ${
        interactive
          ? "hover:border-accent hover:text-accent cursor-pointer transition-all duration-200"
          : ""
      } `}
    >
      {label}
    </span>
  );
}
