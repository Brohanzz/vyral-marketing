import type { Metadata } from "next";
import Link from "next/link";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "VYRAL Solutions — For Creators, Ghostwriters & Agencies",
  description:
    "Whether you're a solo creator, ghostwriter, or agency — VYRAL gives you the tools to grow on LinkedIn with strategy, analytics, and AI coaching.",
  alternates: { canonical: "https://www.getvyral.io/solutions" },
};

// ── Shared styles ─────────────────────────────────────────────────────────────
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
  margin: "0 0 16px",
};
const body: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 28px",
};
const dotTeal: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#2dd4bf",
  flexShrink: 0,
  marginTop: 6,
};
const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 32,
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

const personas = [
  {
    title: "Solopreneurs & Consultants",
    desc: "Show expertise, create predictable inbound, and build trust with your Proof Page",
    bullets: [
      "Strategy blueprint",
      "AI content tuned to your niche",
      "Lead tracking",
      "Proof Page portfolio",
    ],
  },
  {
    title: "Creators & Individual Contributors",
    desc: "Grow your audience, stay consistent, and understand what actually works",
    bullets: [
      "Content calendar",
      "Performance insights",
      "Momentum tracking",
      "Best time to post",
    ],
  },
  {
    title: "Ghostwriters & Agencies",
    desc: "Manage multiple client workspaces, prove ROI with analytics, and showcase results",
    bullets: [
      "Multiple workspaces (coming soon)",
      "Voice tuning per profile",
      "Campaign tracking",
      "Analytics per client",
    ],
  },
  {
    title: "Founders",
    desc: "Build thought leadership that generates leads while running your company",
    bullets: [
      "Quick content creation",
      "Scheduler automation",
      "Executive insights",
      "Brand consistency",
    ],
  },
];

const featureMap = [
  { feature: "Blueprint", benefit: "Clarity" },
  { feature: "AI", benefit: "Speed" },
  { feature: "Scheduler", benefit: "Consistency" },
  { feature: "Analytics", benefit: "Feedback loops" },
  { feature: "Performance Lab", benefit: "Improvement" },
  { feature: "Proof Page", benefit: "Credibility" },
];

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getvyral.io" },
              { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.getvyral.io/solutions" },
            ],
          }),
        }}
      />
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
          <div style={pill}>SOLUTIONS FOR EVERY TYPE OF CREATOR</div>
          <h1 style={h1}>
            Whether you&apos;re a solopreneur, ghostwriter, or founder — VYRAL fits your workflow
          </h1>
          <p style={{ ...body, maxWidth: 580, margin: "0 auto 36px" }}>
            Different personas, same powerful engine. VYRAL adapts to how you work and what you need to grow on LinkedIn.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={APP_SIGNUP_URL} style={btnPurple}>
              Sign up for a trial
            </a>
            <Link href="/product" style={btnGhost}>Explore product</Link>
          </div>
        </section>

        {/* PERSONAS */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {personas.map(({ title, desc, bullets }) => (
              <div key={title} style={card}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#fff",
                    margin: "0 0 10px",
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
                    margin: "0 0 18px",
                  }}
                >
                  {desc}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                      <span style={dotTeal} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE MAPPING */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
          <h2 style={{ ...h2, textAlign: "center", marginBottom: 14 }}>
            How VYRAL&apos;s features map to your success
          </h2>
          <p style={{ ...body, maxWidth: 520, margin: "0 auto 40px" }}>
            Every feature is designed to solve a real problem and drive measurable outcomes
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {featureMap.map(({ feature, benefit }) => (
              <div
                key={feature}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: 28,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 6,
                  }}
                >
                  {feature}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  → {benefit}
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
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, textAlign: "center" }}>
            Find your path to predictable LinkedIn growth
          </h2>
          <p style={{ ...body, maxWidth: 440, margin: "0 auto 32px" }}>
            Start building your content engine today — no matter your role or goals
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={APP_SIGNUP_URL} style={btnPurple}>
              Sign up for a trial
            </a>
            <Link href="/product" style={btnGhost}>Explore product</Link>
          </div>
        </section>
      </main>
    </>
  );
}
