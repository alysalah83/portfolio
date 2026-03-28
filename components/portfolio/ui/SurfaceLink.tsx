import Link from "next/link";

type SurfaceLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function SurfaceLink({ href, children }: SurfaceLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="border-border text-text hover:border-border-hover hover:bg-surface2 inline-flex items-center gap-2 rounded-lg border bg-transparent px-6 py-2.5 font-mono text-sm transition-all duration-200"
    >
      {children}
    </Link>
  );
}
