import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | VYRAL",
  description:
    "How VYRAL protects your account, LinkedIn connection, and personal data.",
  alternates: { canonical: "https://www.getvyral.io/legal/security" },
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

export default function SecurityPage() {
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
          Security
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

        <h2 style={h2Style}>LinkedIn connection</h2>
        <p style={bodyStyle}>
          VYRAL connects to LinkedIn via OAuth 2.0 — the same standard used by
          Slack, Notion, and enterprise software. We never see or store your
          LinkedIn password. Access tokens are encrypted at rest.
        </p>

        <h2 style={h2Style}>Official API only</h2>
        <p style={bodyStyle}>
          VYRAL uses only LinkedIn&apos;s official APIs (Community Management API
          and Share on LinkedIn). No browser extensions, scraping, or unofficial
          automation. Your LinkedIn account is never at risk.
        </p>

        <h2 style={h2Style}>Data encryption</h2>
        <p style={bodyStyle}>
          All data encrypted at rest (AES-256) and in transit (TLS 1.3). Hosted
          on Supabase and Vercel, both SOC 2 compliant.
        </p>

        <h2 style={h2Style}>Payments</h2>
        <p style={bodyStyle}>
          Card processing handled entirely by Stripe. VYRAL never stores payment
          card details.
        </p>

        <h2 style={h2Style}>Access controls</h2>
        <p style={bodyStyle}>
          Role-based access controls. Your data is never accessible to other
          VYRAL users. VYRAL staff access to production data is restricted and
          logged.
        </p>

        <h2 style={h2Style}>Responsible disclosure</h2>
        <p style={bodyStyle}>
          Found a security issue? Email{" "}
          <a
            href="mailto:security@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            security@getvyral.io
          </a>
          . We respond within 48 hours.
        </p>
      </div>
    </main>
  );
}
