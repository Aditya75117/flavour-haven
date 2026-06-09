"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Specials", href: "#specials" },
  { label: "Menu", href: "#menu" },
  { label: "Chefs", href: "#chefs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#reservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          Flavour<span>Haven</span>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reservation" className="navbar__cta">
          Book a Table
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar__overlay ${mobileOpen ? "navbar__overlay--visible" : ""}`}
        onClick={closeMobile}
      />

      {/* Mobile drawer */}
      <aside className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
        <button
          className="navbar__mobile-close"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reservation"
          className="navbar__mobile-cta"
          onClick={closeMobile}
        >
          Book a Table
        </a>
      </aside>
    </nav>
  );
}
