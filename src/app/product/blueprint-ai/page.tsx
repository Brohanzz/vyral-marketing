import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blueprint — Set Your Strategy Once, Let AI Follow It Forever — VYRAL",
  description:
    "Blueprint turns your LinkedIn positioning, offers, and voice into a clear system that every VYRAL feature follows — from ideas and AI writing to analytics and your Proof Page.",
  alternates: {
    canonical: "https://www.getvyral.io/product/blueprint-ai",
  },
  openGraph: {
    title: "VYRAL Blueprint — Strategy-First AI Content",
    description: "Set your strategy once. Let AI follow it forever.",
  },
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
};

const cardAccent: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "2px solid rgba(124,58,237,0.4)",
  borderRadius: 14,
  padding: 24,
};

const overlinePill = (muted?: boolean): React.CSSProperties => ({
  display: "inline-block",
  background: muted ? "rgba(255,255,255,0.05)" : "rgba(124,58,237,0.15)",
  border: muted
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(124,58,237,0.3)",
  borderRadius: 100,
  padding: "6px 16px",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  color: muted ? "rgba(255,255,255,0.4)" : "#a78bfa",
  marginBottom: 24,
});

const h1Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 52,
  lineHeight: 1.15,
  color: "#fff",
  margin: "0 0 20px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 36,
  lineHeight: 1.2,
  color: "#fff",
  margin: "0 0 16px",
};

const body: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  fontSize: 17,
  margin: "0 0 32px",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  borderRadius: 8,
  padding: "14px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

const btnGhost: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  padding: "14px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

const blueprintItems = [
  {
    title: "Positioning & audience",
    text: "Define who you are, who you help, and why they should listen.",
  },
  {
    title: "Offers & outcomes",
    text: "Map your services, products, and the outcomes your content should lead to.",
  },
  {
    title: "Content pillars & themes",
    text: "Turn your expertise into clear pillars and recurring angles.",
  },
  {
    title: "Stories, proof & examples",
    text: "Collect your top case studies, wins, and stories AI can use.",
  },
  {
    title: "Voice & personality",
    text: "Describe tone, style, and what you'd never say.",
  },
  {
    title: "Boundaries & red lines",
    text: "Rules AI must follow to stay on-brand and ethical.",
  },
];

const aiUsageItems = [
  "Ideas Library – Generates ideas matching audience, offers, and pillars",
  "AI Coach – Writes aligned content in your voice",
  "Post reviews – Feedback tied to your goals, not vanity metrics",
  "Campaigns – Stay consistent across themes",
  "Performance Lab – Interprets analytics in context of your strategy",
  "Proof Page – Highlights wins aligned with your positioning",
];

export default function BlueprintAIPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 48px 60px",
          textAlign: "center",
        }}
      >
        <div style={overlinePill(true)}>BLUEPRINT-POWERED AI CONTENT</div>
        <h1 style={h1Style}>
          Set your strategy once.{" "}
          <span style={{ color: "#a78bfa" }}>Let AI follow it forever.</span>
        </h1>
        <p style={body}>
          Blueprint turns your LinkedIn positioning, offers, and voice into a
          clear system that every VYRAL feature follows — from ideas and AI
          writing to analytics and your Proof Page.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 10,
          }}
        >
          <a
            href="https://www.getvyral.io/beta"
            target="_blank"
            rel="noopener noreferrer"
            style={btnPrimary}
          >
            Start free
          </a>
          <Link href="/pricing" style={btnGhost}>
            See pricing
          </Link>
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.28)",
            margin: "10px 0 0",
          }}
        >
          No credit card required
        </p>
      </section>

      {/* WHAT'S INSIDE */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>What&apos;s inside your Blueprint</h2>
        <p style={{ ...body, maxWidth: 600, margin: "0 auto 32px" }}>
          A practical, living document that tells VYRAL exactly who you are,
          who you help, and what &apos;good&apos; looks like.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            textAlign: "left",
          }}
        >
          {blueprintItems.map(({ title, text }) => (
            <div key={title} style={cardAccent}>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  fontSize: 15,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW AI USES BLUEPRINT */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div style={overlinePill(true)}>AI INTEGRATION</div>
            <h2 style={h2Style}>
              How VYRAL&apos;s AI actually uses your Blueprint
            </h2>
            <p style={body}>
              Every suggestion, draft, and improvement is grounded in your
              strategy — not generic prompts. Once your Blueprint is set, VYRAL
              uses it everywhere behind the scenes.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {aiUsageItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 14,
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#2dd4bf",
                      flexShrink: 0,
                      marginTop: 8,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div
            style={{
              background: "#13131e",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: 28,
              minHeight: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 40 }}>🧠</span>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              One Blueprint. Every feature aligned.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>
          Why Blueprint + AI beats generic AI (and guessing)
        </h2>
        <p style={{ ...body, maxWidth: 560, margin: "0 auto 36px" }}>
          You don&apos;t need more outputs. You need a system that knows what good
          looks like.
        </p>

        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Generic AI
            </div>
            <div
              style={{
                padding: "16px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#a78bfa",
                background: "rgba(124,58,237,0.06)",
                borderLeft: "1px solid rgba(124,58,237,0.2)",
                borderRight: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              VYRAL Blueprint + AI
            </div>
            <div
              style={{
                padding: "16px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Manual writing
            </div>
          </div>

          {/* Description row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
              }}
            >
              One-off prompts. Inconsistent. No memory of your strategy.
            </div>
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                background: "rgba(124,58,237,0.04)",
                borderLeft: "1px solid rgba(124,58,237,0.2)",
                borderRight: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              Strategy-first engine that improves over time.
            </div>
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
              }}
            >
              High effort, no feedback, no system.
            </div>
          </div>

          {/* Data rows */}
          {[
            [
              "Forgets your positioning",
              "One shared Blueprint across all features",
              "Everything scattered",
            ],
            [
              "Generic output",
              "Posts sound like you",
              "Reinventing the wheel",
            ],
            [
              "No link to your offers or funnel",
              "Performance feedback loops",
              "No clarity about what works",
            ],
          ].map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom:
                  i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                style={{
                  padding: "14px 20px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                }}
              >
                {row[0]}
              </div>
              <div
                style={{
                  padding: "14px 20px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                  background: "rgba(124,58,237,0.04)",
                  borderLeft: "1px solid rgba(124,58,237,0.2)",
                  borderRight: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                {row[1]}
              </div>
              <div
                style={{
                  padding: "14px 20px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                }}
              >
                {row[2]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "64px 48px 80px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>
          Create content that actually sounds like you — and leads somewhere.
        </h2>
        <p style={body}>
          Blueprint is where your LinkedIn strategy becomes visible, structured,
          and reusable. Set it up once, refine it as you learn, and let VYRAL
          do the heavy lifting.
        </p>
        <div style={{ marginBottom: 14 }}>
          <a
            href="https://www.getvyral.io/beta"
            target="_blank"
            rel="noopener noreferrer"
            style={btnPrimary}
          >
            Start free
          </a>
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.28)",
            margin: 0,
          }}
        >
          Set up your Blueprint in under an hour
        </p>
      </section>
    </main>
  );
}
