import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Brain,
  BarChart3,
  Zap,
  Users,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Content Strategy Blueprint — Build Your Creator System | VYRAL",
  description:
    "Blueprint helps you define your positioning, audience, themes, tone, and content pillars — then integrates it directly into your analytics and AI coaching.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-content-strategy" },
  openGraph: {
    title: "Build Your LinkedIn Content Strategy — Blueprint by VYRAL",
    description:
      "Turn your expertise into a repeatable content system that guides your analytics and your AI Coach.",
  },
};

// ── Shared styles ─────────────────────────────────────────────────────────────
const h2base: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",
  margin: "0 0 16px",
};
const bodyBase: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 16px",
};
const dotTeal: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#2dd4bf",
  flexShrink: 0,
  marginTop: 7,
};
const btnPurple: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  borderRadius: 100,
  padding: "15px 32px",
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
  borderRadius: 100,
  padding: "15px 32px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

const strategyBullets = [
  "A clear positioning",
  "Defined audiences",
  "Themes & content pillars",
  "Your tone of voice",
  "What “good” content looks like for you",
  "A structure for consistency",
];

const analyticsIntegrations = [
  { Icon: BarChart3, label: "Interpret your performance" },
  { Icon: Target,    label: "Highlight alignment or drift" },
  { Icon: Sparkles,  label: "Generate ideas that fit your niche" },
  { Icon: Brain,     label: "Coach you based on your strengths" },
  { Icon: FileText,  label: "Score execution quality" },
  { Icon: TrendingUp,label: "Drive weekly recommendations" },
];

const aiArrows = [
  "Your audience",
  "Your themes",
  "Your tone",
  "Your positioning",
  "Your best-performing patterns",
];

const advantages = [
  { Icon: Zap,        title: "Faster writing",          body: "Know what to write before you start" },
  { Icon: Target,     title: "More consistent posts",   body: "Stay on-brand every time" },
  { Icon: FileText,   title: "Clearer messaging",       body: "Your audience gets you instantly" },
  { Icon: TrendingUp, title: "Higher-performing themes",body: "Double down on what works" },
  { Icon: Users,      title: "Better alignment",        body: "Content that resonates with your audience" },
  { Icon: Sparkles,   title: "Scalable system",         body: "A content engine that grows with you" },
];

export default function LinkedInContentStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "LinkedIn Content Strategy Blueprint",
            description:
              "Define your audience, themes, tone, positioning, and what 'good content' looks like.",
          }),
        }}
      />
      <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
        {/* HERO */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "80px 48px 48px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(45,212,191,0.08)",
              border: "1px solid rgba(45,212,191,0.3)",
              borderRadius: 100,
              padding: "4px 14px",
              fontSize: 11,
              letterSpacing: "1.2px",
              color: "#2dd4bf",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            LINKEDIN CONTENT STRATEGY
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.08,
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            Your LinkedIn content strategy{" "}
            <span style={{ color: "#a78bfa" }}>— built the right way.</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 20,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Blueprint turns your expertise into a repeatable system that guides
            your content, analytics, and AI coaching.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>
              Create your Blueprint
            </a>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnGhost}>
              Start free
            </a>
          </div>
        </section>

        {/* WHY STRATEGY MATTERS */}
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ ...h2base, fontSize: 44 }}>Why strategy matters</h2>
              <p style={bodyBase}>Most creators post without a plan. Blueprint gives you:</p>
              <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none" }}>
                {strategyBullets.map((b) => (
                  <li key={b} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={dotTeal} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "#a78bfa",
                  fontWeight: 700,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                It&apos;s not a document — it&apos;s your operating system.
              </p>
            </div>

            <div
              style={{
                background: "#13131e",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 32,
                minHeight: 280,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Target size={36} color="#7c3aed" />
                </div>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>
                  Blueprint
                </span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>
                Your strategy becomes the foundation for everything in VYRAL —
                from analytics interpretation to AI coaching. Every feature
                understands your goals, audience, and voice.
              </p>
            </div>
          </div>
        </section>

        {/* INTEGRATED WITH ANALYTICS */}
        <section
          style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px", textAlign: "center" }}
        >
          <h2 style={{ ...h2base, fontSize: 44 }}>Fully integrated with your analytics</h2>
          <p style={{ ...bodyBase, maxWidth: 520, margin: "0 auto 36px" }}>
            Blueprint isn&apos;t separate. VYRAL uses your strategy to power every insight.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
              marginBottom: 28,
            }}
          >
            {analyticsIntegrations.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Icon size={20} color="#7c3aed" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#fff" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              color: "#a78bfa",
              fontWeight: 700,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Your strategy becomes data-driven.
          </p>
        </section>

        {/* AI COACH ON BLUEPRINT */}
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#13131e",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 32,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <Brain size={36} color="#7c3aed" />
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>
                  AI Coach
                </span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 16px" }}>
                Every idea, sparring session, rewrite, and optimization uses:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {aiArrows.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
                    <span style={{ color: "#2dd4bf", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>→</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ ...h2base, fontSize: 44 }}>
                AI Coach trained on{" "}
                <span style={{ color: "#a78bfa" }}>your Blueprint</span>
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "#a78bfa",
                  fontWeight: 700,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                VYRAL becomes your creator strategist.
              </p>
            </div>
          </div>
        </section>

        {/* BLUEPRINT ADVANTAGE */}
        <section
          style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px", textAlign: "center" }}
        >
          <h2 style={{ ...h2base, fontSize: 44 }}>The Blueprint Advantage</h2>
          <p style={{ ...bodyBase, maxWidth: 400, margin: "0 auto 36px" }}>
            This is how professionals operate.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {advantages.map(({ Icon, title, body }) => (
              <div
                key={title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: 24,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <Icon size={22} color="#7c3aed" />
                </div>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#fff",
                    margin: "0 0 6px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
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
            padding: "64px 48px 80px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2base, fontSize: 44 }}>
            Build your creator strategy{" "}
            <span style={{ color: "#a78bfa" }}>today.</span>
          </h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>
              Create your Blueprint
            </a>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnGhost}>
              Start free
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
