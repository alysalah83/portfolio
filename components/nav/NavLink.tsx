import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ item, className }: { item: string; className?: string }) {
  const pathname = usePathname();
  const inHomePage = pathname === "/";

  return inHomePage ? (
    <a href={`#${item}`} className={className}>
      {item}
    </a>
  ) : (
    <Link href="/" className={className}>
      {item}
    </Link>
  );
}

export default NavLink;
