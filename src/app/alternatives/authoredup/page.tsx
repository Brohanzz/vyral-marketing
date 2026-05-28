import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AuthoredUp Alternative — From Formatting to Full Growth | VYRAL",
  description:
    "AuthoredUp is a strong LinkedIn formatting and analytics tool. VYRAL is what serious creators add when they're ready to connect those insights to strategy, AI coaching, and a performance loop.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/authoredup" },
  openGraph: {
    title: "VYRAL vs AuthoredUp — Beyond the Formatter",
    description:
      "AuthoredUp formats your posts beautifully. VYRAL helps you understand what makes them perform.",
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
const rows: Array<{ feature: string; vyral: true | "partial"; authoredup: true | false | "partial" }> = [
  { feature: "Post formatting & preview",             vyral: "partial", authoredup: true },
  { feature: "Post library with labels",              vyral: true,      authoredup: true },
  { feature: "Hook & template library",               vyral: true,      authoredup: true },
  { feature: "Performance analytics",                 vyral: true,      authoredup: true },
  { feature: "AI coaching & draft improvement",       vyral: true,      authoredup: false },
  { feature: "Blueprint strategy system",             vyral: true,      authoredup: false },
  { feature: "Performance-to-generation loop",        vyral: true,      authoredup: false },
  { feature: "Post quality scoring",                  vyral: true,      authoredup: false },
  { feature: "Content pattern detection",             vyral: true,      authoredup: false },
  { feature: "Built on LinkedIn's official API",      vyral: true,      authoredup: false },
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

export default function AuthoredUpPage() {
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
        <h1 style={h1}>VYRAL vs AuthoredUp</h1>
        <p style={{ ...body, maxWidth: 540, margin: "0 auto 32px" }}>
          AuthoredUp is the gold standard for LinkedIn post formatting and previewing. VYRAL is what
          you add when formatting isn&apos;t the bottleneck anymore — and growth is.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>

      {/* OVERVIEW */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>A formatting tool vs a growth system</h2>
        <p style={body}>
          <strong style={{ color: "#fff" }}>AuthoredUp genuinely excels at what it does.</strong>{" "}
          Rich text formatting, accurate LinkedIn previews, a post library, hook templates, and solid
          performance analytics — for creators who want to format well and track results, it covers
          that ground well.
        </p>
        <p style={body}>
          <strong style={{ color: "#fff" }}>VYRAL is built for the layer above that.</strong>{" "}
          Not just what performed — but why, and what to do next. A strategy system that aligns your
          content to your goals, an AI coach that improves drafts before they go live, and a
          performance loop that connects your analytics directly to your next post.
        </p>
        <p style={{ ...body, margin: 0 }}>
          AuthoredUp shows you the data. VYRAL helps you act on it.
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
              What AuthoredUp does well
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Best-in-class LinkedIn post formatting",
                "Accurate mobile and desktop preview",
                "Post history and engagement analytics",
                "Post library with search and labels",
                "Hook and template library",
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
              What AuthoredUp doesn&apos;t include
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "No AI coaching or draft improvement",
                "No content strategy or Blueprint layer",
                "No performance-to-generation loop",
                "No post quality scoring",
                "Analytics via Chrome extension, not LinkedIn's official API",
                "No connection between insights and content creation",
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

      {/* WHAT VYRAL ADDS */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>What VYRAL adds</h2>
        <p style={{ ...body, maxWidth: 520, margin: "0 auto 32px" }}>
          Formatting gets your post ready. VYRAL gets it to perform. Once you understand which hooks
          drive clicks, which formats your audience engages with, and how your content aligns to your
          goals — formatting becomes one small part of a much larger system. That system is what
          VYRAL builds for you.
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
            AuthoredUp perfects your posts.
          </span>
          <br />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            VYRAL makes them{" "}
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>perform.</span>
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
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>AuthoredUp</div>
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
                  <FeatureCell value={row.authoredup} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Great content deserves more than great formatting.</h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Understand what performs, build a strategy around it, and let AI help you execute it.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>
    </main>
  );
}
