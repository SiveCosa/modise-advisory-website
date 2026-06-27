"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/constants";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-midnight-navy/10 bg-pure-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-pure-white/90">
      <Container as="div" className="flex h-[var(--navbar-height)] items-center justify-between">
        <Link
          href="/"
          aria-label="Modise Advisory Group home"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/assets/logos/logo-icon.svg"
            alt=""
            width={44}
            height={44}
            priority
            aria-hidden="true"
            className="h-9 w-auto shrink-0 sm:h-10 lg:h-11"
          />
          <span className="font-heading text-sm font-semibold leading-snug text-midnight-navy sm:text-base lg:text-lg">
            <span className="sm:hidden">Modise Advisory</span>
            <span className="hidden sm:inline">Modise Advisory Group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-rich-gold"
                    : "text-midnight-navy hover:text-rich-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-midnight-navy transition-colors hover:bg-midnight-navy/5 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </Container>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-midnight-navy/10 bg-pure-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container as="div" className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-midnight-navy/5 text-rich-gold"
                      : "text-midnight-navy hover:bg-midnight-navy/5 hover:text-rich-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
