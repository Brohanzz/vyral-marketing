import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "VYRAL vs Typefully — For Creators Who Want Depth, Not Just Drafts",
  description:
    "Compare VYRAL and Typefully. Typefully helps you write. VYRAL helps you understand, plan, and improve your LinkedIn content strategy.",
  alternates: { canonical: "https://www.getvyral.io/alternatives/typefully" },
  openGraph: {
    title: "VYRAL vs Typefully — Writing vs Strategy",
    description: "Typefully helps you write. VYRAL helps you understand, plan, and improve.",
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
const rows: Array<{ feature: string; vyral: true; typefully: true | false | "partial" }> = [
  { feature: "Clean writing UI",                       vyral: true, typefully: true },
  { feature: "Scheduling",                             vyral: true, typefully: true },
  { feature: "Draft management",                       vyral: true, typefully: true },
  { feature: "Deep LinkedIn analytics",                vyral: true, typefully: false },
  { feature: "Performance scoring",                    vyral: true, typefully: false },
  { feature: "Blueprint strategy system",              vyral: true, typefully: false },
  { feature: "AI trained on your data",               vyral: true, typefully: false },
  { feature: "Hook & structure analysis",             vyral: true, typefully: false },
  { feature: "Tone modeling",                         vyral: true, typefully: false },
  { feature: "Performance Lab",                       vyral: true, typefully: false },
];

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

const vyralAdds = [
  "Deep performance insights",
  "Strategy system (Blueprint)",
  "Personalized AI coaching",
  "Performance Lab analysis",
  "Tone modeling",
  "Execution scoring",
  "Pattern & theme detection",
  "Improvement recommendations",
];

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
          Typefully helps you write. VYRAL helps you understand, plan, and improve.
        </p>
        <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>
          Sign up for early launch
        </a>
      </section>

      {/* OVERVIEW */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>For creators who want depth, not just drafts</h2>
        <p style={body}>
          <strong style={{ color: "#fff" }}>Typefully excels at writing and scheduling.</strong>{" "}
          It has a clean UI, great draft management, and simple scheduling.
        </p>
        <p style={body}>
          <strong style={{ color: "#fff" }}>But writing is only part of the equation.</strong>{" "}
          To grow consistently, you need to understand what works, build strategy, and improve execution over time.
        </p>
        <p style={{ ...body, margin: 0 }}>
          That&apos;s where VYRAL comes in.
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
              What Typefully offers
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {(
                [
                  { label: "Excellent writing UI", type: "check" },
                  { label: "Post scheduling", type: "check" },
                  { label: "Draft management", type: "check" },
                  { label: "Basic AI assistance", type: "partial" },
                ] as const
              ).map(({ label, type }) => (
                <li key={label} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
                  {type === "check" ? (
                    <Check size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
                  ) : (
                    <AlertCircle size={16} color="#fbbf24" style={{ flexShrink: 0 }} />
                  )}
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                    {label}
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
              What Typefully doesn&apos;t have
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Real analytics",
                "Performance improvement engine",
                "Personalized AI trained on your posts",
                "Blueprint strategy system",
                "Performance scoring",
                "Hook, tone & structure analysis",
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
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
        <h2 style={h2}>What VYRAL adds</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 10,
          }}
        >
          {vyralAdds.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: 8,
                padding: "12px 16px",
              }}
            >
              <Check size={15} color="#7c3aed" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, textAlign: "center" }}>Feature Comparison</h2>
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
                <div style={tblCell("left")}>{row.feature}</div>
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
        <h2 style={{ ...h2, textAlign: "center" }}>
          Upgrade from surface-level writing to strategic creation.
        </h2>
        <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
          Sign up and see how analytics-driven content outperforms.
        </p>
        <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>
          Sign up for early launch
        </a>
      </section>
    </main>
  );
}
