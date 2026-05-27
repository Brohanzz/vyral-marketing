"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why VYRAL", href: "/why-vyral" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#080510" }}
      className="sticky top-0 z-50 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#7c3aed",
            }}
          >
            VYRAL
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: "#a1a1aa" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#7c3aed" }}
            >
              Get Started
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`block h-0.5 w-6 transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
                style={{ backgroundColor: "#f8f8f8" }}
              />
              <span
                className={`block h-0.5 w-6 transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: "#f8f8f8" }}
              />
              <span
                className={`block h-0.5 w-6 transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
                style={{ backgroundColor: "#f8f8f8" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/10 px-4 pb-4 pt-2"
          style={{ backgroundColor: "#080510" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5"
                style={{ color: "#a1a1aa" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg px-4 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#7c3aed" }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
