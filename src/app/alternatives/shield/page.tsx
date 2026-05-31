import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";
import ApiTooltip from "@/components/ApiTooltip";

export const metadata: Metadata = {
  title: "Shield Analytics Alternative — Where Shield Users Go Next | VYRAL",
  description:
    "Shield Analytics is shutting down. VYRAL gives you everything Shield offered — plus AI coaching, content strategy, and a performance loop built on LinkedIn's official API.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/shield" },
  openGraph: {
    title: "Shield is closing. VYRAL is where serious creators go next.",
    description:
      "Official API analytics, AI coaching, and a strategy layer. Everything Shield couldn't offer.",
  },
};

// ── Shared styles ─────────────────────────────────────────────────────────────
const h1: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 52,
  lineHeight: 1.12,
  color: "#fff",
  margin: "0 0 20px",
};
const h2: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 38,
  lineHeight: 1.08,
  letterSpacing: "-0.5px",
  color: "#fff",
  margin: "0 0 20px",
};
const body: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 16px",
};
const btnPurple: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  borderRadius: 100,
  padding: "13px 26px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
};

// ── FeatureCell helper ────────────────────────────────────────────────────────
function FeatureCell({ value }: { value: true | false | "partial" }) {
  if (value === true)
    return <Check size={18} color="#2dd4bf" />;
  if (value === "partial")
    return <AlertCircle size={18} color="#fbbf24" />;
  return <X size={18} color="rgba(255,255,255,0.25)" />;
}

// ── Comparison data ───────────────────────────────────────────────────────────
const rows: Array<{ feature: string; vyral: true; shield: true | false }> = [
  { feature: "Basic KPI dashboards",                    vyral: true, shield: true },
  { feature: "Reach & impressions tracking",            vyral: true, shield: true },
  { feature: "Engagement trend analysis",               vyral: true, shield: true },
  { feature: "Why posts performed (AI insight)",        vyral: true, shield: false },
  { feature: "Hook, tone & structure analysis",         vyral: true, shield: false },
  { feature: "Performance scoring",                     vyral: true, shield: false },
  { feature: "Blueprint strategy system",               vyral: true, shield: false },
  { feature: "AI coaching & draft improvement",         vyral: true, shield: false },
  { feature: "Content creation workflow",               vyral: true, shield: false },
  { feature: "Built on LinkedIn's official API",        vyral: true, shield: false },
];

// ── Table styles ──────────────────────────────────────────────────────────────
const tblCell = (align: "left" | "center", highlight?: boolean): React.CSSProperties => ({
  padding: "13px 20px",
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  color: align === "left" ? "rgba(255,255,255,0.6)" : undefined,
  textAlign: align,
  background: highlight ? "rgba(124,58,237,0.04)" : undefined,
  display: "flex",
  alignItems: "center",
  justifyContent: align === "center" ? "center" : "flex-start",
});

export default function ShieldPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 48px 64px",
          textAlign: "center",
        }}
      >
        <h1 style={h1}>Shield is closing. Here&apos;s what comes next.</h1>
        <p style={{ ...body, maxWidth: 540, margin: "0 auto 32px" }}>
          Shield showed you the numbers. VYRAL shows you what they mean — and helps you act on them.
          Built on LinkedIn&apos;s official API, with no browser extension required.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>

      {/* WHAT SHIELD BUILT */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>What Shield built</h2>
        <p style={body}>
          Shield spent seven years building the cleanest analytics dashboard in the LinkedIn creator
          space. Reach, impressions, engagement over time — presented beautifully. For creators who
          wanted to understand their baseline performance, it was the go-to tool.
        </p>
        <p style={{ ...body, margin: 0 }}>
          But Shield was always a dashboard. It showed you what happened. It never told you why, or
          what to do next.
        </p>
      </section>

      {/* TWO COLUMNS */}
      <section style={{ background: "rgba(255,255,255,0.02)" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "72px 48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          {/* Left */}
          <div>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              What Shield was good at
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Clean, visual performance dashboards",
                "Reach and impressions tracking over time",
                "Engagement trend analysis",
                "Team reporting features",
                "Simple, focused interface",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
                  <Check size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              Where Shield stopped
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "No insight into why posts performed",
                "No hook, tone, or structure analysis",
                "No content strategy layer",
                "No AI coaching or draft improvement",
                "No post quality scoring",
                "No content creation workflow",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
                  <X size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE GAP VYRAL CLOSES */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>The gap VYRAL closes</h2>
        <p style={{ ...body, maxWidth: 520, margin: "0 auto 32px" }}>
          VYRAL starts where Shield stopped. Official API analytics — the same data foundation —
          plus an AI layer that explains what&apos;s driving your numbers, a strategy system that
          connects your content to your goals, and a coach that helps you write better posts from
          that insight.
        </p>
        <p style={{ ...body, maxWidth: 520, margin: "0 auto 32px" }}>
          One platform. The full loop.
        </p>
        <div
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: 14,
            padding: 28,
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            Shield showed you the data.
          </span>
          <br />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            VYRAL shows you{" "}
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>what to do with it.</span>
          </span>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 38, textAlign: "center" }}>Feature Comparison</h2>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              overflow: "hidden",
              width: "100%",
            }}
          >
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 120px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>Feature</div>
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#a78bfa", background: "rgba(124,58,237,0.06)", textAlign: "center" }}>VYRAL</div>
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Shield</div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 120px",
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div style={tblCell("left")}>
                  {row.feature === "Built on LinkedIn's official API" ? (
                    <ApiTooltip>{row.feature}</ApiTooltip>
                  ) : (
                    row.feature
                  )}
                </div>
                <div style={{ ...tblCell("center", true) }}>
                  <FeatureCell value={row.vyral} />
                </div>
                <div style={tblCell("center")}>
                  <FeatureCell value={row.shield} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Your analytics home, rebuilt for growth.</h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Everything you tracked in Shield — plus the strategy and coaching layer to actually act on it.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>
    </main>
  );
}
