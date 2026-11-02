"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/urls";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const PRODUCT = [
  { label: "How it works", href: "/how-vyral-works", desc: "Connect LinkedIn, write, publish and measure." },
  { label: "Analytics", href: "/linkedin-analytics", desc: "See why each post performed." },
  { label: "AI Coach", href: "/ai-coach", desc: "Drafts in your voice, from your numbers." },
  { label: "Strategy", href: "/linkedin-content-strategy", desc: "One Blueprint for every plan and draft." },
];

const LINKS = [
  { label: "Use cases", href: "/solutions" },
  { label: "Official API", href: "/linkedin-tool-safe" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const navLink = "inline-flex min-h-11 items-center rounded-md text-[15px] font-medium text-ink hover:text-primary-strong";
const panelLink = "flex min-h-12 items-center rounded-md px-1 text-[17px] font-medium text-ink hover:text-primary-strong";

export default function Nav() {
  const [productOpen, setProductOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const productButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const productId = useId();
  const menuId = useId();

  const closeAll = useCallback(() => {
    setProductOpen(false);
    setMenuOpen(false);
  }, []);

  // Escape closes whatever is open and returns focus to its button.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (productOpen) productButton.current?.focus();
      else if (menuOpen) menuButton.current?.focus();
      closeAll();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [productOpen, menuOpen, closeAll]);

  // A click outside the dropdown closes it.
  useEffect(() => {
    if (!productOpen) return;
    function onClick(e: MouseEvent) {
      if (!productRef.current?.contains(e.target as Node)) setProductOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [productOpen]);

  // Lock page scroll while the mobile panel is open, and close it if the window grows to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 860px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = previous;
      mq.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  return (
    <header className="vy-band relative z-40" data-variant="tint">
      <Container className="flex h-20 items-center gap-4 desk:gap-9">
        <Link href="/" onClick={closeAll} className="inline-flex min-h-11 items-center rounded-md" aria-label="VYRAL home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 desk:flex">
          <div
            ref={productRef}
            className="relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setProductOpen(false);
            }}
          >
            <button
              ref={productButton}
              type="button"
              aria-expanded={productOpen}
              aria-controls={productId}
              onClick={() => setProductOpen((o) => !o)}
              className={cx(navLink, "gap-1.5")}
            >
              Product
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className={cx("transition-transform motion-reduce:transition-none", productOpen && "rotate-180")}
              >
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              id={productId}
              hidden={!productOpen}
              className="absolute top-full left-0 mt-2 w-[340px] rounded-lg bg-surface p-2 shadow-2"
            >
              <ul className="m-0 flex list-none flex-col p-0">
                {PRODUCT.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="block rounded-md px-3.5 py-3 hover:bg-surface-soft"
                    >
                      <span className="block text-[15px] font-semibold text-ink">{item.label}</span>
                      <span className="block text-[13.5px] leading-snug text-muted">{item.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 desk:gap-5">
          <a href={APP_LOGIN_URL} className={cx(navLink, "hidden desk:inline-flex")}>
            Log in
          </a>
          <Button href={APP_SIGNUP_URL} size="sm">
            Start free trial
          </Button>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex size-11 min-w-11 shrink-0 items-center justify-center rounded-md text-ink hover:text-primary-strong desk:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto bg-base shadow-2 desk:hidden"
      >
        <Container className="py-4">
          <nav aria-label="Menu">
            <ul className="m-0 flex list-none flex-col p-0">
              <li className="px-1 pt-1 pb-1 text-[13px] font-semibold text-muted">Product</li>
              {PRODUCT.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeAll} className={cx(panelLink, "pl-4")}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="my-2 border-t border-hairline" aria-hidden="true" />
              {[...LINKS, { label: "About", href: "/about" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={closeAll} className={panelLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={APP_LOGIN_URL} onClick={closeAll} className={panelLink}>
                  Log in
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4 pb-2">
            <Button href={APP_SIGNUP_URL} size="lg" className="w-full">
              Start free trial
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
