"use client";

import { useState } from "react";
import Image from "next/image";
import { business } from "@/content/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/ui/icons";

/**
 * Sticky site header. Client component because of the mobile menu toggle.
 * On desktop: logo + nav links + click-to-call CTA.
 * On mobile: logo + hamburger that reveals a full-width menu.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center" aria-label={`${business.name} home`}>
            <Image
              src={business.logo}
              alt={business.name}
              width={300}
              height={158}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {business.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-700 transition-colors hover:text-accent-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop call CTA */}
          <div className="hidden md:block">
            <Button href={`tel:${business.phoneHref}`} size="sm" variant="primary">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-800 hover:bg-brand-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-brand-100 bg-white md:hidden">
          <Container>
            <nav className="flex flex-col py-2" aria-label="Mobile">
              {business.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium text-brand-800 hover:bg-brand-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="py-3">
                <Button
                  href={`tel:${business.phoneHref}`}
                  variant="primary"
                  className="w-full"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {business.phone}
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
