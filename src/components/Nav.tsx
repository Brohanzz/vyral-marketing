"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// ─── NAV DATA ─────────────────────────────────────────────────────────────────

type DropdownItem = { label: string; href: string; desc: string };

const productItems: DropdownItem[] = [
  { label: "Overview", href: "/product", desc: "See the full platform" },
  { label: "AI Coach", href: "/ai-coach", desc: "Voice-matched writing assistant" },
  { label: "Analytics", href: "/linkedin-analytics", desc: "Understand why posts work" },
  { label: "Strategy Builder", href: "/product/blueprint-ai", desc: "Build your content strategy" },
];

const solutionsItems: DropdownItem[] = [
  { label: "Creators", href: "/solutions/creators", desc: "Grow your personal brand" },
  { label: "Ghostwriters", href: "/solutions/ghostwriters", desc: "Deliver better client results" },
  { label: "Agencies", href: "/solutions/agencies", desc: "Scale content operations" },
];

const resourcesItems: DropdownItem[] = [
  { label: "Knowledge Hub", href: "/how-it-works", desc: "Learn LinkedIn growth" },
  { label: "Blog", href: "/blog", desc: "Tips and strategies" },
  { label: "Help Center", href: "/help", desc: "Guides and support" },
];

const dropdownMap: Record<string, DropdownItem[]> = {
  Product: productItems,
  Solutions: solutionsItems,
  Resources: resourcesItems,
};

// ─── DESKTOP DROPDOWN PANEL ───────────────────────────────────────────────────

function DropdownPanel({ items }: { items: DropdownItem[] }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        paddingTop: 8,
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: 256,
          borderRadius: 12,
          background: "rgba(8,5,16,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          overflow: "hidden",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ display: "block", textDecoration: "none" }}
            className="nav-dropdown-item"
          >
            <div style={{ padding: "12px 16px" }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 2,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN NAV ─────────────────────────────────────────────────────────────────

export default function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  const plainLinkStyle = {
    color: "rgba(255,255,255,0.58)",
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    textDecoration: "none",
    transition: "color 0.15s",
    whiteSpace: "nowrap" as const,
  };

  return (
    <>
      {/* Dropdown hover styles injected once */}
      <style>{`
        .nav-dropdown-item:hover > div { background: rgba(255,255,255,0.05); }
        .nav-plain-link:hover { color: #ffffff !important; }
      `}</style>

      {/* ── OUTER WRAPPER ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          padding: "14px 24px",
        }}
      >
        {/* ── INNER PILL ── */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "rgba(8,5,16,0.85)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 14,
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* ── LEFT: LOGO ── */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vyral-logo-new.png"
              alt="VYRAL"
              style={{ height: 32, width: "auto", display: "block" }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 17,
                color: "#ffffff",
              }}
            >
              VYRAL
            </span>
          </Link>

          {/* ── CENTRE: DESKTOP NAV LINKS ── */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 26,
              marginLeft: 36,
              flex: 1,
            }}
          >
            {/* Product dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleMouseEnter("Product")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  ...plainLinkStyle,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
                className="nav-plain-link"
              >
                Product
                <ChevronDown
                  size={13}
                  style={{
                    opacity: 0.5,
                    transform: openDropdown === "Product" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {openDropdown === "Product" && (
                <DropdownPanel items={productItems} />
              )}
            </div>

            {/* Solutions dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleMouseEnter("Solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  ...plainLinkStyle,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
                className="nav-plain-link"
              >
                Solutions
                <ChevronDown
                  size={13}
                  style={{
                    opacity: 0.5,
                    transform: openDropdown === "Solutions" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {openDropdown === "Solutions" && (
                <DropdownPanel items={solutionsItems} />
              )}
            </div>

            {/* LinkedIn Safe — plain link */}
            <Link
              href="/linkedin-tool-safe"
              style={plainLinkStyle}
              className="nav-plain-link"
            >
              LinkedIn Safe
            </Link>

            {/* Resources dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleMouseEnter("Resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  ...plainLinkStyle,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
                className="nav-plain-link"
              >
                Resources
                <ChevronDown
                  size={13}
                  style={{
                    opacity: 0.5,
                    transform: openDropdown === "Resources" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {openDropdown === "Resources" && (
                <DropdownPanel items={resourcesItems} />
              )}
            </div>

            {/* Pricing — plain link */}
            <Link
              href="/pricing"
              style={plainLinkStyle}
              className="nav-plain-link"
            >
              Pricing
            </Link>

            {/* About — plain link */}
            <Link
              href="/about"
              style={plainLinkStyle}
              className="nav-plain-link"
            >
              About
            </Link>
          </nav>

          {/* ── RIGHT: AUTH BUTTONS ── */}
          <div
            className="desktop-auth"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginLeft: 36,
              flexShrink: 0,
            }}
          >
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              style={plainLinkStyle}
              className="nav-plain-link"
            >
              Log in
            </a>
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#7c3aed",
                borderRadius: 100,
                padding: "8px 18px",
                fontSize: 14,
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 0 0 1px rgba(124,58,237,0.4)",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              Sign up for early launch
            </a>
          </div>

          {/* ── HAMBURGER (mobile only) ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
              display: "none",
              padding: 4,
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-auth { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: 110,
            zIndex: 40,
            background: "rgba(8,5,16,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 32,
            paddingBottom: 32,
            overflowY: "auto",
          }}
        >
          {/* Dropdown sections */}
          {(["Product", "Solutions", "Resources"] as const).map((name) => (
            <div key={name} style={{ marginBottom: 4 }}>
              <button
                onClick={() =>
                  setMobileAccordion(mobileAccordion === name ? null : name)
                }
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {name}
                <ChevronDown
                  size={16}
                  style={{
                    opacity: 0.5,
                    transform:
                      mobileAccordion === name
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {mobileAccordion === name && (
                <div style={{ marginLeft: 16, marginBottom: 8 }}>
                  {dropdownMap[name].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.38)",
                          fontFamily: "Inter, sans-serif",
                          marginTop: 2,
                        }}
                      >
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Plain links */}
          {[
            { label: "LinkedIn Safe", href: "/linkedin-tool-safe" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "rgba(255,255,255,0.75)",
                fontSize: 16,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Bottom auth buttons */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 24,
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px 20px",
                color: "rgba(255,255,255,0.68)",
                fontSize: 15,
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
              }}
            >
              Log in
            </a>
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px 20px",
                background: "#7c3aed",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
                borderRadius: 100,
                boxShadow: "0 0 0 1px rgba(124,58,237,0.4)",
              }}
            >
              Sign up for early launch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
