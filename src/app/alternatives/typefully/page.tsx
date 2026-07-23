import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";
import ApiTooltip from "@/components/ApiTooltip";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Typefully Alternative for LinkedIn — Strategy Beyond the Editor | VYRAL",
  description:
    "Typefully is a great writing tool. VYRAL is a growth system. See what serious LinkedIn creators add when they're ready to go beyond drafts and scheduling.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/typefully" },
  openGraph: {
    title: "VYRAL vs Typefully — Beyond the Editor",
    description:
      "Great writing tool. Zero analytics. No strategy. VYRAL closes the gap.",
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
const rows: Array<{ feature: string; vyral: true | "partial"; typefully: true | false | "partial" }> = [
  { feature: "Clean writing UI",                      vyral: true, typefully: true },
  { feature: "Post scheduling",                       vyral: true, typefully: true },
  { feature: "Draft management",                      vyral: true, typefully: true },
  { feature: "LinkedIn analytics",                    vyral: true, typefully: false },
  { feature: "Performance scoring",                   vyral: true, typefully: false },
  { feature: "Blueprint strategy system",             vyral: true, typefully: false },
  { feature: "AI trained on your data",               vyral: true, typefully: false },
  { feature: "Hook & structure analysis",             vyral: true, typefully: false },
  { feature: "Content pattern detection",             vyral: true, typefully: false },
  { feature: "Built on LinkedIn's official API",      vyral: true, typefully: false },
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

export default function TypefullyPage() {
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
        <h1 style={h1}>VYRAL vs Typefully</h1>
        <p style={{ ...body, maxWidth: 540, margin: "0 auto 32px" }}>
          Typefully is one of the cleanest writing and scheduling tools available. VYRAL is what you
          add when you&apos;re ready to understand why your content performs — and build a strategy
          around it.
        </p>
        <a href={APP_SIGNUP_URL} style={btnPurple}>
          Sign up for a trial
        </a>
      </section>

      {/* OVERVIEW */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>A writing tool vs a growth system</h2>
        <p style={body}>
          <strong style={{ color: "#fff" }}>Typefully excels at the writing experience.</strong>{" "}
          Clean editor, multi-platform scheduling, simple draft management. For writers who want
          friction removed from publishing, it&apos;s excellent.
        </p>
        <p style={body}>
          <strong style={{ color: "#fff" }}>VYRAL is built for what comes after publishing.</strong>{" "}
          Understanding which posts landed and why, building a content strategy aligned to your
          goals, and using that intelligence to make every future post better.
        </p>
        <p style={{ ...body, margin: 0 }}>
          They solve different problems. If you&apos;ve outgrown just writing and scheduling, VYRAL
          is the next step.
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
              What Typefully does well
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Clean, distraction-free writing UI",
                "Multi-platform post scheduling",
                "Draft management and collaboration",
                "Simple, fast publishing workflow",
                "Thread and formatting support",
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
              What Typefully doesn&apos;t include
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "No LinkedIn analytics",
                "No performance scoring",
                "No content strategy layer",
                "No AI trained on your own posts",
                "No hook or structure analysis",
                "No coaching or improvement engine",
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
          Writing and scheduling gets your content published. VYRAL gets it to perform. Analytics
          that explain why posts work, a Blueprint strategy system that keeps your content aligned to
          your goals, and an AI coach that improves your drafts before they go live — all built on
          officially authorised LinkedIn data.
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
            Typefully helps you write and publish.
          </span>
          <br />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff" }}>
            VYRAL helps you{" "}
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>grow.</span>
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
              <div style={{ padding: "13px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Typefully</div>
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
                  <FeatureCell value={row.typefully} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ ...h2, textAlign: "center" }}>Ready to go beyond the editor?</h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Writing is the start. Understanding what works is how you grow.
        </p>
        <a href={APP_SIGNUP_URL} style={btnPurple}>
          Sign up for a trial
        </a>
      </section>
    </main>
  );
}
