import Link from "next/link";
import NavOverLay from "./NavOverLay";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  return (
    <NavOverLay>
      <Link href="/">
        <h2 className="cursor-pointer text-base font-medium">
          <span className="text-text">Aly</span>
          <span className="text-accent">Salah</span>
        </h2>
      </Link>
      <div className="flex items-center gap-3 sm:gap-7">
        <NavLinks />
        <ThemeToggle />
      </div>
    </NavOverLay>
  );
}

export default Nav;
