import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kleo Alternative — From Voice Matching to Performance Intelligence | VYRAL",
  description:
    "Kleo learns how you write. VYRAL learns what your audience responds to — then helps you write more of that. Built on LinkedIn's official API with no Chrome extension required.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/kleo" },
  openGraph: {
    title: "VYRAL vs Kleo — Beyond Voice Matching",
    description:
      "Kleo learns your writing style. VYRAL learns what actually performs for your audience.",
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
const rows: Array<{ feature: string; vyral: true | "partial"; kleo: true | false | "partial" }> = [
  { feature: "AI post generation",                         vyral: true, kleo: true },
  { feature: "Voice & style matching",                     vyral: true, kleo: true },
  { feature: "Post templates & hooks library",             vyral: true, kleo: true },
  { feature: "LinkedIn analytics",                         vyral: true, kleo: false },
  { feature: "Performance-driven content intelligence",    vyral: true, kleo: false },
  { feature: "Blueprint strategy system",                  vyral: true, kleo: false },
  { feature: "Post quality scoring",                       vyral: true, kleo: false },
  { feature: "Hook & structure analysis",                  vyral: true, kleo: false },
  { feature: "Content pattern detection",                  vyral: true, kleo: false },
  { feature: "Built on LinkedIn's official API",           vyral: true, kleo: "partial" },
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

export default function KleoPage() {
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
        <h1 style={h1}>VYRAL vs Kleo</h1>
        <p style={{ ...body, maxWidth: 540, margin: "0 auto 32px" }}>
          Kleo builds a deep model of how you write. VYRAL builds a deep model of what your audience
          responds to — and uses that to make every draft better.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>

      {/* OVERVIEW */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>Two approaches to personalisation</h2>
        <p style={body}>
          <strong style={{ color: "#fff" }}>Kleo&apos;s strength is personalisation depth.</strong>{" "}
          Upload your content, transcripts, and writing samples, and it builds a detailed style
          guide that shapes every draft. For creators who want their voice preserved, it goes further
          than most tools.
        </p>
        <p style={body}>
          <strong style={{ color: "#fff" }}>VYRAL approaches personalisation differently.</strong>{" "}
          Instead of learning from what you&apos;ve written, it learns from what has performed. Your
          analytics become your creative brief. Your top posts become your training signal.
        </p>
        <p style={{ ...body, margin: 0 }}>
          The result is content that doesn&apos;t just sound like you — it&apos;s optimised for your
          actual audience.
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
              What Kleo is good at
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Deep knowledge-base personalisation",
                "Strong voice matching from uploaded content",
                "Large library of post templates and hooks",
                "Anti-generic AI mechanisms",
                "All-inclusive pricing with no credit caps",
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
              Where Kleo falls short
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "No LinkedIn analytics or performance data",
                "Voice learning is input-driven, not performance-driven",
                "No strategy layer or Blueprint alignment",
                "No post quality scoring",
                "Requires significant setup time to onboard knowledge base",
                "Chrome extension dependency",
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

      {/* THE DIFFERENCE THAT MATTERS */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>The difference that matters</h2>
        <p style={{ ...body, maxWidth: 520, margin: "0 auto 32px" }}>
          Kleo learns how you write. That&apos;s valuable. But the question that actually grows your
          LinkedIn isn&apos;t &ldquo;does this sound like me?&rdquo; — it&apos;s &ldquo;does this
          work for my audience?&rdquo; VYRAL answers the second question. Your engagement data, your
          hook performance, your format patterns — all connected to the AI that helps you write your
          next post. That&apos;s the loop Kleo doesn&apos;t close.
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
            Kleo learns your writing style.
          </span>
          <br />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            VYRAL learns what your audience{" "}
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>responds to.</span>
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
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Kleo</div>
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
                  {row.feature}
                </div>
                <div style={{ ...tblCell("center", true) }}>
                  <FeatureCell value={row.vyral} />
                </div>
                <div style={tblCell("center")}>
                  <FeatureCell value={row.kleo} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Write in your voice. Optimised for your audience.</h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Your style matters. So does knowing what resonates. VYRAL gives you both.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>
    </main>
  );
}
