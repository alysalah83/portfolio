type SkillPillProps = {
  label: string;
  highlighted?: boolean;
};

export function SkillPill({ label, highlighted = false }: SkillPillProps) {
  return (
    <span
      className={`flex cursor-default items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition duration-300 ${
        highlighted
          ? "bg-surface3 text-accent border-[rgba(203,255,71,0.25)]"
          : "border-border bg-surface3 text-muted-text hover:border-accent hover:bg-accent-dim hover:text-accent"
      } `}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${highlighted ? "bg-accent" : "bg-muted"}`}
      />
      {label}
    </span>
  );
}
