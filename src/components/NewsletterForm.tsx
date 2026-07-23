"use client";

import { useId, useState } from "react";

import { LOOPS_NEWSLETTER_LIST_ID } from "@/lib/urls";

// Loops-hosted newsletter form endpoint. Public by design: it takes no API key
// and is safe to call from the browser. Do not replace this with a Next.js API
// route, and never put LOOPS_API_KEY in this repo.
//
// Contract: POST application/x-www-form-urlencoded with `email`, `firstName`
// and `mailingLists`. Responds { success: true } on accept.
//
// `mailingLists` is not optional. The form builder's "Select a list" setting is
// only carried by a hidden input in Loops' own generated HTML; this markup is
// hand-built, so omitting it creates the contact with "mailingLists": {} and
// the subscriber silently never joins the list.
//
// Double opt-in is enabled on the Loops side, so a successful POST means the
// confirmation email has been sent, NOT that the person is subscribed. The
// success copy below must keep saying that.
const LOOPS_FORM_ENDPOINT =
  "https://app.loops.so/api/newsletter-form/cmplkkyl3026m0jx7kvtuyzuv";

type Status = "idle" | "loading" | "success" | "error";

const FONT = "Inter, sans-serif";

export default function NewsletterForm({
  variant = "footer",
}: {
  variant?: "footer" | "standalone";
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Blog posts render this component twice (once in the body, once in the
  // global footer), so the field ids must be unique per instance or the labels
  // bind to the wrong inputs.
  const uid = useId();
  const firstNameId = `newsletter-first-name-${uid}`;
  const emailId = `newsletter-email-${uid}`;

  const standalone = variant === "standalone";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch(LOOPS_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          email,
          firstName,
          mailingLists: LOOPS_NEWSLETTER_LIST_ID,
        }).toString(),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setError(
          typeof data?.message === "string" && data.message
            ? data.message
            : "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setFirstName("");
      setEmail("");
    } catch {
      setError("Could not reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 100,
    padding: "11px 18px",
    fontSize: 14,
    fontFamily: FONT,
    color: "#ffffff",
    outline: "none",
  };

  return (
    <div style={{ width: "100%", maxWidth: standalone ? 560 : 420 }}>
      <style>{`
        .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
        .newsletter-input:focus { border-color: rgba(124,58,237,0.7) !important; }
        .newsletter-submit:hover:not(:disabled) { background: #8b5cf6 !important; }
        .newsletter-submit:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      {standalone && (
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 24,
            color: "#ffffff",
            margin: "0 0 8px",
          }}
        >
          Get the VYRAL newsletter
        </h3>
      )}

      {!standalone && (
        <span
          style={{
            color: "rgba(255,255,255,0.22)",
            fontSize: 10,
            letterSpacing: "1.2px",
            fontWeight: 600,
            textTransform: "uppercase",
            fontFamily: FONT,
            marginBottom: 12,
            display: "block",
          }}
        >
          Newsletter
        </span>
      )}

      <p
        style={{
          fontSize: standalone ? 15 : 13,
          color: "rgba(255,255,255,0.45)",
          fontFamily: FONT,
          margin: "0 0 16px",
          lineHeight: 1.5,
        }}
      >
        Practical LinkedIn growth tactics and product updates, once a week.
      </p>

      {status === "success" ? (
        <p
          role="status"
          aria-live="polite"
          style={{
            fontSize: 14,
            color: "#2dd4bf",
            fontFamily: FONT,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Almost there. Check your inbox and click the confirmation link to
          finish signing up.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <label htmlFor={firstNameId} style={{ display: "none" }}>
              First name
            </label>
            <input
              id={firstNameId}
              className="newsletter-input"
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={status === "loading"}
              style={inputStyle}
            />

            <label htmlFor={emailId} style={{ display: "none" }}>
              Email address
            </label>
            <input
              id={emailId}
              className="newsletter-input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              style={inputStyle}
            />

            <button
              type="submit"
              className="newsletter-submit"
              disabled={status === "loading"}
              style={{
                background: "#7c3aed",
                border: "none",
                borderRadius: 100,
                padding: "11px 24px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: FONT,
                color: "#ffffff",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s ease",
              }}
            >
              {status === "loading" ? "Signing up..." : "Sign up"}
            </button>
          </div>

          {status === "error" && (
            <p
              role="alert"
              aria-live="assertive"
              style={{
                fontSize: 13,
                color: "#fbbf24",
                fontFamily: FONT,
                margin: "10px 0 0",
                lineHeight: 1.5,
              }}
            >
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
