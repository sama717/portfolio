import Link from "next/link";
import MobileMenu from "../client/MobileMenu";
import { navLinks } from "@/lib/nav-links";

export default function Navbar() {
  return (
    <header className="relative border-b border-text/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" className="font-heading text-lg font-semibold">
          Sama Farag
        </Link>

        <ul className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-text/70 hover:text-text">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>
    </header>
  );
}