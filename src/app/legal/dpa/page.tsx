import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement | VYRAL",
  description: "VYRAL's Data Processing Agreement for business customers.",
  alternates: { canonical: "https://www.getvyral.io/legal/dpa" },
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

export default function DpaPage() {
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
          Data Processing Agreement
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

        <h2 style={h2Style}>Purpose</h2>
        <p style={bodyStyle}>
          This DPA governs the processing of personal data by VYRAL on behalf of
          business customers where VYRAL acts as a data processor.
        </p>

        <h2 style={h2Style}>Scope</h2>
        <p style={bodyStyle}>
          Applies to all personal data processed through VYRAL&apos;s platform in
          connection with your subscription.
        </p>

        <h2 style={h2Style}>Processing details</h2>
        <p style={bodyStyle}>
          Data types: LinkedIn profile data, post content, email addresses.
          Purpose: delivery of VYRAL services. Duration: length of subscription.
        </p>

        <h2 style={h2Style}>Sub-processors</h2>
        <p style={bodyStyle}>
          Supabase, Stripe, Vercel, Google Cloud, Anthropic. Full sub-processor
          list available on request.
        </p>

        <h2 style={h2Style}>Security measures</h2>
        <p style={bodyStyle}>
          Encryption at rest and in transit, access controls, regular security
          reviews.
        </p>

        <h2 style={h2Style}>Data subject rights</h2>
        <p style={bodyStyle}>
          VYRAL will assist with data subject access requests within 30 days.
        </p>

        <h2 style={h2Style}>Enterprise DPA</h2>
        <p style={bodyStyle}>
          For signed DPAs or custom agreements, contact{" "}
          <a
            href="mailto:hello@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            hello@getvyral.io
          </a>
          .
        </p>
      </div>
    </main>
  );
}
