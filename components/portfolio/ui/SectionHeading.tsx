export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted-text mb-8 flex items-center gap-3 font-mono text-sm tracking-widest uppercase">
      {children}
      <span className="bg-border h-px w-20" />
    </div>
  );
}
