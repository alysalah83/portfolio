import Link from "next/link";

function Footer() {
  return (
    <footer className="border-border text-muted-text border-t py-8 text-center font-mono text-[11px]">
      Built by Aly Salah · 2026 ·
      <Link
        href="https://github.com/alysalah83/portfolio"
        target="_blank"
        className="hover:text-accent ml-1 transition-colors duration-200"
      >
        View Source →
      </Link>
    </footer>
  );
}

export default Footer;
