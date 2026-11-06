"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="py-2 text-sm"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full bg-panel px-4 py-2"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}