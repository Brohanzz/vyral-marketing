"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

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

  const button: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(167,139,250,0.55)",
    borderRadius: 100,
    padding: "10px 22px",
    minWidth: 150,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    color: "#ffffff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 1000,
        maxWidth: 920,
        margin: "0 auto",
        background: "#13131e",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: "18px 22px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 16,
      }}
    >
      <p
        style={{
          flex: "1 1 320px",
          margin: 0,
          fontSize: 14,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.75)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        We use Google Analytics to see which pages help people. Nothing loads
        until you say yes.{" "}
        <Link
          href="/legal/cookies"
          style={{ color: "#a78bfa", textDecoration: "underline" }}
        >
          Read cookie policy
        </Link>
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          flex: "0 1 340px",
        }}
      >
        <button type="button" style={button} onClick={() => decide("granted")}>
          Accept analytics
        </button>
        <button type="button" style={button} onClick={() => decide("denied")}>
          Decline
        </button>
      </div>
    </div>
  );
}

// Footer link. Clears the saved choice and shows the banner again.
export function CookieSettingsLink() {
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
