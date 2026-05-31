import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";
import ApiTooltip from "@/components/ApiTooltip";

export const metadata: Metadata = {
  title: "Taplio Alternative — Performance-Driven LinkedIn Growth | VYRAL",
  description:
    "Taplio generates posts from other people's viral content. VYRAL generates from your own performance data. See why serious creators are making the switch.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/taplio" },
  openGraph: {
    title: "VYRAL vs Taplio — Performance vs Automation",
    description:
      "Your data. Your voice. Your results. Not someone else's viral posts.",
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
const rows: Array<{ feature: string; vyral: true; taplio: true | false | "partial" }> = [
  { feature: "Analytics tied to content performance",  vyral: true, taplio: false },
  { feature: "Content pattern analysis",               vyral: true, taplio: false },
  { feature: "Blueprint strategy system",              vyral: true, taplio: false },
  { feature: "AI trained on your own data",            vyral: true, taplio: "partial" },
  { feature: "Hook, tone & structure analysis",        vyral: true, taplio: false },
  { feature: "Post quality scoring",                   vyral: true, taplio: false },
  { feature: "Ideas grounded in your analytics",       vyral: true, taplio: false },
  { feature: "Draft coaching & improvement",           vyral: true, taplio: false },
  { feature: "Content calendar & scheduling",          vyral: true, taplio: true },
  { feature: "Built on LinkedIn's official API",       vyral: true, taplio: "partial" },
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

export default function TaplioPage() {
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
        <h1 style={h1}>VYRAL vs Taplio</h1>
        <p style={{ ...body, maxWidth: 540, margin: "0 auto 32px" }}>
          Taplio generates content from other people&apos;s viral posts. VYRAL generates from your
          own performance data — so every draft is grounded in what actually works for your audience.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>

      {/* OVERVIEW */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>Two different philosophies</h2>
        <p style={body}>
          <strong style={{ color: "#fff" }}>Taplio is a volume tool.</strong>{" "}
          Post more, automate engagement, generate content fast from a database of 4M+ viral posts.
        </p>
        <p style={body}>
          <strong style={{ color: "#fff" }}>VYRAL is a performance tool.</strong>{" "}
          Understand what works in your own content, build a strategy around it, and let AI help you
          execute it — in your voice, grounded in your data.
        </p>
        <p style={{ ...body, margin: 0 }}>
          If you want to post more, Taplio does that. If you want your content to actually grow your
          business, VYRAL is the better fit.
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
              What Taplio is good at
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "High-volume content generation",
                "Post scheduling and calendar",
                "Viral post inspiration library (4M+ posts)",
                "Lead database features on higher plans",
                "Content repurposing",
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
              Where Taplio falls short
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "AI output consistently described as generic and formulaic",
                "No connection between your analytics and your content",
                "No strategy layer or Blueprint alignment",
                "No post quality scoring",
                "Credits burn fast — real AI access starts at $65/month",
                "Analytics don't inform generation",
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

      {/* WHY SWITCH */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Why creators switch to VYRAL</h2>
        <p style={{ ...body, maxWidth: 520, margin: "0 auto 32px" }}>
          The fundamental problem with generating from other people&apos;s viral posts: it optimises
          for what worked for someone else, in someone else&apos;s voice, with someone else&apos;s
          audience. VYRAL flips the model. Your top-performing posts become the training signal. Your
          patterns, your hooks, your tone — scored, analysed, and used to make your next post better.
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
            Taplio helps you post more.
          </span>
          <br />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            VYRAL helps you post{" "}
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>better.</span>
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
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Taplio</div>
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
                  <FeatureCell value={row.taplio} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Your content, optimised for your audience.</h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Stop guessing what works. Start building from what already does.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>
    </main>
  );
}
