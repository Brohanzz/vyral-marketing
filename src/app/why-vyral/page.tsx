import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Zap,
  TrendingUp,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why VYRAL — Strategy, Analytics & AI for LinkedIn Creators",
  description:
    "Most LinkedIn tools show metrics without meaning. VYRAL connects strategy, content, and outcomes so you grow with clarity.",
  alternates: { canonical: "https://www.getvyral.io/why-vyral" },
  openGraph: {
    title: "Why VYRAL — Built for Real LinkedIn Growth",
    description:
      "Strategy-first. Insight-driven. Built for creators who want to grow with clarity.",
  },
};

// ── Shared style constants ────────────────────────────────────────────────────
const sectionPad: React.CSSProperties = { padding: "64px 48px" };
const innerMax: React.CSSProperties = { maxWidth: 1100, margin: "0 auto" };
const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 38,
  color: "#fff",
  letterSpacing: "-0.5px",
  lineHeight: 1.08,
  margin: "0 0 16px",
};
const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 28px",
};
const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 100,
  padding: "4px 14px",
  fontSize: 11,
  letterSpacing: "1.2px",
  color: "rgba(255,255,255,0.4)",
  textTransform: "uppercase",
  marginBottom: 20,
};
const gridCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
  borderLeft: "2px solid rgba(124,58,237,0.4)",
};
const btnPurple: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  borderRadius: 100,
  padding: "13px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
};
const btnGhost: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 100,
  padding: "13px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
};

const problemCards = [
  {
    Icon: Zap,
    title: "AI Writers",
    bullets: ["Generic outputs", "Not your voice", "No strategy alignment"],
  },
  {
    Icon: Target,
    title: "Schedulers",
    bullets: ["Just post-and-pray", "No guidance", "No performance insight"],
  },
  {
    Icon: BarChart3,
    title: "Analytics Tools",
    bullets: ["Numbers without context", "No recommendations", "Vanity metrics only"],
  },
];

const differenceCards = [
  {
    Icon: Target,
    title: "Strategy + Blueprint",
    text: "Define your positioning, pillars, and voice once — AI follows it everywhere",
  },
  {
    Icon: Zap,
    title: "Personalized AI (not templates)",
    text: "Content that actually sounds like you, matched to your audience and goals",
  },
  {
    Icon: TrendingUp,
    title: "Real analytics (consistency, execution, momentum)",
    text: "Track what matters: consistency, execution rate, momentum — not just likes",
  },
  {
    Icon: Lightbulb,
    title: "Performance Lab (patterns + recommendations)",
    text: "Understand why posts work and get clear next steps, not just vanity metrics",
  },
];

const tableRows: Array<{
  feature: string;
  vyral: "check" | "text";
  other: "check" | "cross" | "text";
  otherText?: string;
}> = [
  { feature: "Strategy integration", vyral: "check", other: "cross" },
  { feature: "Personalized AI", vyral: "check", other: "text", otherText: "Limited" },
  { feature: "Consistency tracking", vyral: "check", other: "cross" },
  { feature: "Momentum insights", vyral: "check", other: "cross" },
  { feature: "Pattern recognition", vyral: "check", other: "cross" },
  { feature: "Posting engine", vyral: "check", other: "check" },
  { feature: "Proof Page", vyral: "check", other: "cross" },
];

const outcomeCards = [
  { title: "Better posts", body: "Strategy-aligned content" },
  { title: "Consistent publishing", body: "Build momentum over time" },
  { title: "Clear feedback loops", body: "Know what's working" },
];

export default function WhyVyralPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "72px 48px 60px",
          textAlign: "center",
        }}
      >
        <div style={pill}>WHY VYRAL EXISTS</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 1.12,
            color: "#fff",
            margin: "0 0 20px",
          }}
        >
          Your content deserves more than tools that show metrics without meaning
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            margin: "0 0 36px",
          }}
        >
          VYRAL connects strategy, AI, analytics, and insights — not just
          numbers. This is why creators choose us.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/waitlist" style={btnPurple}>
            Join the waitlist
          </a>
          <Link href="/product" style={btnGhost}>View product</Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ ...sectionPad, ...innerMax }}>
        <h2
          style={{
            ...h2Style,
            fontSize: 40,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Most tools show you what happened — not why it happened
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {problemCards.map(({ Icon, title, bullets }) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <Icon size={32} color="rgba(255,255,255,0.4)" style={{ marginBottom: 14 }} />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  margin: "0 0 14px",
                }}
              >
                {title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <X size={14} color="#ef4444" style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* VYRAL DIFFERENCE */}
      <section style={{ ...sectionPad, ...innerMax }}>
        <h2
          style={{
            ...h2Style,
            fontSize: 40,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Strategy-first. Insight-driven. Built for real growth.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {differenceCards.map(({ Icon, title, text }) => (
            <div key={title} style={gridCard}>
              <Icon size={28} color="#7c3aed" style={{ marginBottom: 14 }} />
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
                  fontSize: 15,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section
        style={{
          ...sectionPad,
          maxWidth: 860,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ ...h2Style, fontSize: 40, textAlign: "center", marginBottom: 36 }}>
          How VYRAL compares
        </h2>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            overflow: "hidden",
            width: "100%",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                textAlign: "left",
              }}
            >
              Feature
            </div>
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#a78bfa",
                background: "rgba(124,58,237,0.06)",
                textAlign: "center",
              }}
            >
              VYRAL
            </div>
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
              }}
            >
              Other Tools
            </div>
          </div>

          {/* Rows */}
          {tableRows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom:
                  i < tableRows.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
            >
              <div
                style={{
                  padding: "13px 20px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  textAlign: "left",
                }}
              >
                {row.feature}
              </div>
              <div
                style={{
                  padding: "13px 20px",
                  background: "rgba(124,58,237,0.04)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckCircle2 size={16} color="#2dd4bf" />
              </div>
              <div
                style={{
                  padding: "13px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {row.other === "check" ? (
                  <CheckCircle2 size={16} color="rgba(255,255,255,0.3)" />
                ) : row.other === "cross" ? (
                  <X size={16} color="#ef4444" />
                ) : (
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {row.otherText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE OUTCOMES */}
      <section
        style={{
          ...sectionPad,
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ ...h2Style, textAlign: "center", marginBottom: 36 }}>
          Everything in VYRAL is built to help you grow — not just post more
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {outcomeCards.map(({ title, body }) => (
            <div
              key={title}
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 14,
                padding: 28,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                  margin: "0 0 10px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "72px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={{ ...h2Style, fontSize: 40, textAlign: "center" }}>
          Choose a tool built for long-term growth
        </h2>
        <p style={{ ...bodyStyle, maxWidth: 440, margin: "0 auto 32px" }}>
          Not just more posts — better strategy, clearer insights, real outcomes
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/waitlist" style={btnPurple}>
            Join the waitlist
          </a>
          <Link href="/product" style={btnGhost}>View product</Link>
        </div>
      </section>
    </main>
  );
}
