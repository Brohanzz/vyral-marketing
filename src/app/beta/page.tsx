import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join VYRAL — Early Access",
  description:
    "Get early access to VYRAL. Full Pro trial for 14 days, no credit card required.",
  alternates: { canonical: "https://www.getvyral.io/beta" },
};

const features = [
  {
    heading: "14-day Pro trial",
    body: "Full access to every feature from day one.",
  },
  {
    heading: "No extensions",
    body: "100% official LinkedIn API — no risk to your account.",
  },
  {
    heading: "Cancel anytime",
    body: "No contracts, no lock-in. Your data stays yours.",
  },
];

export default function BetaPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 160,
          textAlign: "center",
          padding: "160px 24px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(124,58,237,0.9)",
            marginBottom: 20,
          }}
        >
          Early Access
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1.1,
            color: "#fff",
            maxWidth: 640,
            margin: "0 auto 24px",
          }}
        >
          Build a LinkedIn presence that compounds
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 40px",
          }}
        >
          Full Pro access for 14 days. No credit card required. Join the first
          creators using VYRAL.
        </p>
        <a
          href="https://www.getvyral.io/beta"
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
            borderRadius: 999,
            padding: "16px 40px",
          }}
        >
          Create your free account
        </a>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
            marginTop: 20,
          }}
        >
          No credit card · Cancel anytime · Built on LinkedIn&apos;s official API
        </p>

        {/* Feature row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            maxWidth: 700,
            margin: "64px auto 0",
            flexWrap: "wrap",
          }}
        >
          {features.map((f) => (
            <div
              key={f.heading}
              style={{
                flex: "1 1 180px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                {f.heading}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
