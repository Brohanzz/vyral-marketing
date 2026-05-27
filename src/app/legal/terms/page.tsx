import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | VYRAL",
  description:
    "VYRAL's terms of service — the rules and conditions for using the platform.",
  alternates: { canonical: "https://www.getvyral.io/legal/terms" },
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

export default function TermsPage() {
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
          Terms of Service
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

        <h2 style={h2Style}>Acceptance</h2>
        <p style={bodyStyle}>
          By creating an account, you agree to these terms.
        </p>

        <h2 style={h2Style}>What VYRAL provides</h2>
        <p style={bodyStyle}>
          Access to LinkedIn content analytics, AI coaching, scheduling, and
          publishing tools via LinkedIn&apos;s official API.
        </p>

        <h2 style={h2Style}>Your responsibilities</h2>
        <p style={bodyStyle}>
          You must own or have rights to any content you publish via VYRAL. You
          may not use VYRAL to violate LinkedIn&apos;s Terms of Service, spam,
          harass, or engage in fraudulent activity.
        </p>

        <h2 style={h2Style}>Subscriptions and billing</h2>
        <p style={bodyStyle}>
          Plans are billed monthly. Trials are 14 days. Cancellation takes
          effect at end of billing period. No refunds for partial months.
        </p>

        <h2 style={h2Style}>Intellectual property</h2>
        <p style={bodyStyle}>
          VYRAL owns the platform. You own your content.
        </p>

        <h2 style={h2Style}>Limitation of liability</h2>
        <p style={bodyStyle}>
          VYRAL is provided as-is. We are not liable for LinkedIn account
          actions, API changes by LinkedIn, or business losses.
        </p>

        <h2 style={h2Style}>Changes to terms</h2>
        <p style={bodyStyle}>
          We may update these terms with notice via email or in-app banner.
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
      </div>
    </main>
  );
}
