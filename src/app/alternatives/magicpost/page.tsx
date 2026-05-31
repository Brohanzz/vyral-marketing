import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";
import ApiTooltip from "@/components/ApiTooltip";

export const metadata: Metadata = {
  title: "MagicPost Alternative — From Content Generation to Content Intelligence | VYRAL",
  description:
    "MagicPost generates LinkedIn posts. VYRAL generates posts and tells you why they'll work — grounded in your own performance data and built on LinkedIn's official API.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/magicpost" },
  openGraph: {
    title: "VYRAL vs MagicPost — Intelligence Beyond Generation",
    description:
      "MagicPost writes posts. VYRAL writes posts that are grounded in what actually works for your audience.",
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
const rows: Array<{ feature: string; vyral: true | "partial"; magicpost: true | false | "partial" }> = [
  { feature: "AI post generation",               vyral: true, magicpost: true },
  { feature: "LinkedIn-safe API access",         vyral: true, magicpost: true },
  { feature: "Clean writing interface",          vyral: true, magicpost: true },
  { feature: "LinkedIn analytics",               vyral: true, magicpost: false },
  { feature: "Performance scoring",              vyral: true, magicpost: false },
  { feature: "Blueprint strategy system",        vyral: true, magicpost: false },
  { feature: "AI trained on your own data",      vyral: true, magicpost: false },
  { feature: "Hook & structure analysis",        vyral: true, magicpost: false },
  { feature: "Content pattern detection",        vyral: true, magicpost: false },
  { feature: "Draft coaching & improvement",     vyral: true, magicpost: false },
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

export default function MagicPostPage() {
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
        <h1 style={h1}>VYRAL vs MagicPost</h1>
        <p style={{ ...body, maxWidth: 540, margin: "0 auto 32px" }}>
          MagicPost helps you generate LinkedIn content quickly. VYRAL helps you generate content
          that&apos;s grounded in your own performance data — so you&apos;re not guessing what will
          land.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>

      {/* OVERVIEW */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>Generation vs intelligence</h2>
        <p style={body}>
          <strong style={{ color: "#fff" }}>MagicPost is built around speed.</strong>{" "}
          Turn ideas into posts fast, with AI that gets you from blank page to draft quickly. For
          creators who need volume, it removes friction well.
        </p>
        <p style={body}>
          <strong style={{ color: "#fff" }}>VYRAL is built around performance.</strong>{" "}
          Every draft is informed by your real analytics — what hook styles work for your audience,
          which formats drive engagement, what your top posts have in common.
        </p>
        <p style={{ ...body, margin: 0 }}>
          Generation is just one part of the system.
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
              What MagicPost is good at
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Fast AI post generation",
                "Clean, simple interface",
                "Low friction from idea to draft",
                "LinkedIn-safe API access",
                "Solid entry point for new creators",
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
              Where MagicPost falls short
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "No analytics or performance data",
                "No connection between results and content",
                "No strategy or Blueprint layer",
                "No post quality scoring",
                "No coaching or improvement engine",
                "No pattern or hook analysis",
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
          MagicPost gets you to a draft. VYRAL gets you to a draft that&apos;s built on evidence.
          Your analytics inform your ideas. Your patterns inform your hooks. Your Blueprint aligns
          every post to your actual goals. And an AI coach scores and improves your content before
          it goes live — not after.
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
            MagicPost generates content.
          </span>
          <br />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            VYRAL generates content that{" "}
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>performs.</span>
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
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>MagicPost</div>
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
                  <FeatureCell value={row.magicpost} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Ready to create with intelligence, not just speed?</h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Your next post should be informed by your last ten. That&apos;s what VYRAL makes possible.
        </p>
        <a href="/waitlist" style={btnPurple}>
          Join the waitlist
        </a>
      </section>
    </main>
  );
}
