"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Button from "@/components/site/Button";

// Google Analytics only loads after the visitor says yes. Before a choice, or
// after "Decline", no analytics script is requested and no analytics cookies
// are set. The choice lives in localStorage under CONSENT_KEY.

const GA_ID = "G-7PCGETZ0BP";
const CONSENT_KEY = "vyral_cookie_consent";
const SETTINGS_EVENT = "vyral:cookie-settings";

type Choice = "granted" | "denied";

type GtagWindow = {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
};

// "none" means no choice saved yet. If storage is blocked the choice is kept in
// memory for this visit only.
type Snapshot = Choice | "none";

let memoryChoice: Snapshot = "none";
const listeners = new Set<() => void>();

function readChoice(): Snapshot {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    if (v === "granted" || v === "denied") return v;
    return "none";
  } catch {
    return memoryChoice;
  }
}

function writeChoice(choice: Snapshot) {
  memoryChoice = choice;
  try {
    if (choice === "none") window.localStorage.removeItem(CONSENT_KEY);
    else window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage blocked: the choice just will not persist.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// Removes the Google Analytics cookies (_ga, _ga_<id>) on every domain level
// they could have been set on (www.getvyral.io, .getvyral.io, and so on).
function deleteAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid");
  const parts = window.location.hostname.split(".");
  const domains: string[] = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.push(d, "." + d);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
        (domain ? `; domain=${domain}` : "");
    }
  }
}

function startAnalytics() {
  const w = window as unknown as GtagWindow;
  w[`ga-disable-${GA_ID}`] = false;
  if (document.getElementById("ga-script")) return; // already loaded this visit

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag.js reads the arguments object, so this must not use rest params.
    // eslint-disable-next-line prefer-rest-params
    (w.dataLayer as unknown[]).push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);

  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

// If analytics was already running in this visit, stop it and clear cookies.
function stopAnalytics() {
  (window as unknown as GtagWindow)[`ga-disable-${GA_ID}`] = true;
  deleteAnalyticsCookies();
}

export default function CookieConsent() {
  // The server never shows the banner ("denied" stands in for "hidden"); the
  // browser reads the real saved choice right after hydration.
  const choice = useSyncExternalStore<Snapshot>(
    subscribe,
    readChoice,
    () => "denied",
  );

  useEffect(() => {
    if (choice === "granted") startAnalytics();
  }, [choice]);

  useEffect(() => {
    const reopen = () => {
      stopAnalytics();
      writeChoice("none");
    };
    window.addEventListener(SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(SETTINGS_EVENT, reopen);
  }, []);

  function decide(next: Choice) {
    if (next === "denied") stopAnalytics();
    writeChoice(next);
  }

  const visible = choice === "none";
  if (!visible) return null;

  // Accept and Decline carry equal visual weight on purpose.
  const button = "w-full ring-1 ring-hairline-strong";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="vy-ui fixed inset-x-4 bottom-4 z-[1000] mx-auto flex max-w-[920px] flex-wrap items-center gap-4 rounded-lg bg-surface px-5 py-[18px] font-body text-ink shadow-2 ring-1 ring-hairline"
    >
      <p className="m-0 flex-[1_1_320px] text-[14.5px] leading-[1.6] text-ink-2">
        We use Google Analytics to see which pages help people. Nothing loads
        until you say yes.{" "}
        <Link
          href="/legal/cookies"
          className="font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong"
        >
          Read cookie policy
        </Link>
      </p>
      <div className="grid flex-[0_1_340px] grid-cols-2 gap-2.5">
        <Button variant="ghost" size="sm" className={button} onClick={() => decide("granted")}>
          Accept analytics
        </Button>
        <Button variant="ghost" size="sm" className={button} onClick={() => decide("denied")}>
          Decline
        </Button>
      </div>
    </div>
  );
}

// Footer link. Clears the saved choice and shows the banner again. With a
// className it takes that styling (redesigned footer); without, the legacy look.
export function CookieSettingsLink({ className }: { className?: string }) {
  if (className) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}
      >
        Cookie settings
      </button>
    );
  }
  return (
    <button
      type="button"
      className="footer-link"
      onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}
      style={{
        fontSize: 14,
        color: "rgba(255,255,255,0.38)",
        fontFamily: "Inter, sans-serif",
        display: "block",
        marginBottom: 10,
        padding: 0,
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      Cookie settings
    </button>
  );
}
