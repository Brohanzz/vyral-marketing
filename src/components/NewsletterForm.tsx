"use client";

import { useId, useState } from "react";

import { subscribeToNewsletter } from "@/lib/newsletter";

// Submission (and why `mailingLists` must be sent) lives in lib/newsletter.ts.
// Double opt-in: the success copy below must keep saying an email was sent.

type Status = "idle" | "loading" | "success" | "error";

const FONT = "Inter, sans-serif";

export default function NewsletterForm({
  variant = "footer",
}: {
  variant?: "footer" | "standalone" | "bare";
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
  // "bare" renders only the inputs and the built-in status messages, for pages
  // that supply their own heading and sub-copy (e.g. /newsletter).
  const bare = variant === "bare";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError("");

    const result = await subscribeToNewsletter(email, firstName);
    if (!result.ok) {
      setError(result.message);
      setStatus("error");
      return;
    }

    setStatus("success");
    setFirstName("");
    setEmail("");
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
    <div style={{ width: "100%", maxWidth: standalone || bare ? 560 : 420 }}>
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

      {!standalone && !bare && (
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

      {!bare && (
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
      )}

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
