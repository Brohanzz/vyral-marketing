import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Policy | VYRAL",
  description:
    "VYRAL's GDPR compliance — your rights under European data protection law.",
  alternates: { canonical: "https://www.getvyral.io/legal/gdpr" },
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

export default function GdprPage() {
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
          GDPR Policy
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

        <h2 style={h2Style}>Data controller</h2>
        <p style={bodyStyle}>
          VYRAL is the data controller for personal data processed through the
          platform.
        </p>

        <h2 style={h2Style}>Legal basis for processing</h2>
        <p style={bodyStyle}>
          Contract performance (account and billing), legitimate interests
          (product improvement), consent (marketing emails).
        </p>

        <h2 style={h2Style}>Your rights under GDPR</h2>
        <p style={bodyStyle}>
          Right to access, rectify, erase, restrict processing, data
          portability, and object. To exercise any right, email{" "}
          <a
            href="mailto:privacy@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            privacy@getvyral.io
          </a>
          .
        </p>

        <h2 style={h2Style}>Data transfers</h2>
        <p style={bodyStyle}>
          Data may be processed outside the EU by our infrastructure providers
          (Supabase, Vercel, Google, Anthropic) under Standard Contractual
          Clauses.
        </p>

        <h2 style={h2Style}>Data retention</h2>
        <p style={bodyStyle}>
          Personal data retained while account is active or as required by law.
          Deleted within 30 days of account deletion request.
        </p>

        <h2 style={h2Style}>Complaints</h2>
        <p style={bodyStyle}>
          You have the right to lodge a complaint with your local supervisory
          authority.
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
