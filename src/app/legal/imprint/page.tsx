import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | VYRAL",
  description: "Legal company information for VYRAL.",
  alternates: { canonical: "https://www.getvyral.io/legal/imprint" },
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

export default function ImprintPage() {
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
          Imprint
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

        <h2 style={h2Style}>Company</h2>
        <p style={bodyStyle}>
          VYRAL
          <br />
          <a
            href="https://www.getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            getvyral.io
          </a>
        </p>

        <h2 style={h2Style}>Contact</h2>
        <p style={bodyStyle}>
          <a
            href="mailto:hello@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            hello@getvyral.io
          </a>
        </p>

        <h2 style={h2Style}>Responsible for content</h2>
        <p style={bodyStyle}>Johan Mortensen, Co-founder</p>

        <h2 style={h2Style}>Platform</h2>
        <p style={bodyStyle}>
          EU Online Dispute Resolution:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            marginTop: 48,
          }}
        >
          For press enquiries or partnership requests, email{" "}
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
