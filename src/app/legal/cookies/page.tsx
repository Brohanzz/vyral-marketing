import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | VYRAL",
  description: "VYRAL's cookie policy — what cookies we use and why.",
  alternates: { canonical: "https://www.getvyral.io/legal/cookies" },
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 600,
  fontSize: 24,
  color: "#fff",
  marginTop: 48,
  marginBottom: 16,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 15,
  color: "rgba(255,255,255,0.65)",
  lineHeight: 1.75,
  marginBottom: 24,
};

export default function CookiesPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "128px 24px 128px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 44,
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          Cookie Policy
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 64,
          }}
        >
          Last updated: June 2025
        </p>

        <h2 style={h2Style}>What are cookies</h2>
        <p style={bodyStyle}>
          Small text files stored in your browser to remember preferences and
          session state.
        </p>

        <h2 style={h2Style}>Cookies we use</h2>
        <p style={bodyStyle}>
          <strong style={{ color: "#fff", fontWeight: 600 }}>
            Essential cookies:
          </strong>{" "}
          authentication session (Supabase), CSRF protection. Cannot be
          disabled.
          <br />
          <br />
          <strong style={{ color: "#fff", fontWeight: 600 }}>
            Analytics cookies:
          </strong>{" "}
          anonymous usage tracking via Vercel Analytics. Can be disabled.
          <br />
          <br />
          <strong style={{ color: "#fff", fontWeight: 600 }}>
            Preference cookies:
          </strong>{" "}
          light/dark mode, UI state. Stored locally.
        </p>

        <h2 style={h2Style}>Third-party cookies</h2>
        <p style={bodyStyle}>
          Stripe may set cookies during checkout. These are governed by
          Stripe&apos;s policy.
        </p>

        <h2 style={h2Style}>Managing cookies</h2>
        <p style={bodyStyle}>
          You can disable non-essential cookies in your browser settings or via
          the cookie banner.
        </p>

        <h2 style={h2Style}>Contact</h2>
        <p style={bodyStyle}>
          <a
            href="mailto:privacy@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            privacy@getvyral.io
          </a>
        </p>
      </div>
    </main>
  );
}
