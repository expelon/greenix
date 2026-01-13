"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Event", href: "/event" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="bg-transparent">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-wide text-white">
              GREENIX
            </Link>

            <nav className="hidden flex-1 items-center justify-end gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-white ${
                    isActive(item.href) ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              aria-label="Toggle Menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                {open ? (
                  <path
                    fillRule="evenodd"
                    d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <>
                    <path d="M4 6h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
                    <path d="M4 11h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
                    <path d="M4 16h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/70">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
