"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" aria-label="Ratesboard home">
          {/* eslint-disable-next-line @next/next/no-img-element -- kit SVG; must not rasterize or resize off-ratio */}
          <img
            src="/brand/ratesboard-wordmark-color.svg"
            alt="Ratesboard"
            height={40}
            style={{ width: "auto", height: 40, display: "block" }}
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        <nav className="site-header__nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link href="/contact" className="btn btn--primary btn--sm">
            Request a demo
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn--primary mobile-nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            Request a demo
          </Link>
        </nav>
      ) : null}
    </header>
  );
}