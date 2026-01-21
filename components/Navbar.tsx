"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Event", href: "/event" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Destination Weddings", href: "/services/destination-weddings" },
  { label: "Private Party Events", href: "/services/private-party" },
  { label: "Music & Entertainment", href: "/services/music-entertainment" },
  { label: "Beach Wedding", href: "/services/beach-wedding" },
  { label: "Corporate Events", href: "/services/corporate-events" },
  { label: "Wedding Planners", href: "/services/wedding-planners" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isContactPage = pathname === "/contact";
  const isAboutPage = pathname === "/about";
  const isServicePage = pathname?.startsWith("/services");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/contact") return pathname === "/contact";
    if (href === "/about") return pathname === "/about";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${isContactPage || isAboutPage || isServicePage ? "bg-white/80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className={isContactPage || isAboutPage || isServicePage ? "bg-white/80 backdrop-blur-md" : "bg-transparent"}>
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between">
            <Link href="/" className={`text-lg font-semibold tracking-wide ${isContactPage || isAboutPage || isServicePage ? "text-slate-900" : "text-white"}`}>
              GREENIX
            </Link>

            <nav className="hidden flex-1 items-center justify-end gap-6 md:flex">
              {navItems.map((item) => {
                const baseDesktopClasses = isContactPage || isAboutPage || isServicePage
                  ? "text-slate-900 hover:text-sky-600"
                  : "text-white/80 hover:text-white";

                if (item.label === "Services") {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseLeave={() => setServicesOpen(false)}
                      onBlurCapture={() => setServicesOpen(false)}
                    >
                      <button
                        className={`inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors ${
                          isContactPage || isAboutPage || isServicePage ? "text-slate-900" : "text-white"
                        }`}
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={servicesOpen}
                        onMouseEnter={() => setServicesOpen(true)}
                        onClick={() => setServicesOpen((v) => !v)}
                      >
                        Services
                        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4">
                        <div
                          className={`rounded-2xl border border-slate-100 bg-white p-3 shadow-xl transition duration-200 ${
                            servicesOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
                          }`}
                          role="menu"
                        >
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                      isActive(item.href)
                        ? isContactPage || isAboutPage || isServicePage
                          ? "text-sky-600"
                          : "text-white"
                        : baseDesktopClasses
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              aria-label="Toggle Menu"
              className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                isContactPage || isAboutPage || isServicePage ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
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
              {navItems.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key="services-mobile" className="rounded-md bg-white/5 px-3 py-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Services</p>
                      <div className="mt-3 space-y-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white"
                            onClick={() => setOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/90 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
