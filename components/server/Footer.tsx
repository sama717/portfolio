import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import CurrentYear from "@/components/client/CurrentYear";

export default function Footer() {
  return (
    <footer className="border-t border-text/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-text/60">
          © <CurrentYear/> Sama Farag
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-text/70 hover:text-text">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/sama717"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/70 hover:text-text"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}