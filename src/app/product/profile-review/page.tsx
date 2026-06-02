import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile Review — AI LinkedIn Profile Audit | VYRAL",
  description:
    "Upload a screenshot of your LinkedIn profile and get an instant AI audit. Section scores, priority fixes, and headline rewrites tailored to your strategy.",
  alternates: { canonical: "https://www.getvyral.io/product/profile-review" },
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 38,
  color: "#fff",
  lineHeight: 1.1,
  margin: "0 0 16px",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 16px",
};

const pill: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(124,58,237,0.15)",
  color: "#a78bfa",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "4px 12px",
  borderRadius: 100,
  marginBottom: 16,
};

const cardBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: "28px 24px",
};

const sections = [
  {
    emoji: "🎯",
    title: "Strategy Alignment",
    desc: "See how well your profile positions you for your content goals — not just your job title.",
  },
  {
    emoji: "📝",
    title: "About Section",
    desc: "Is your About section built for conversion or just a copy of your CV? You'll know.",
  },
  {
    emoji: "🖼️",
    title: "Banner & Photo",
    desc: "Visual first impressions scored and compared against what works for LinkedIn creators.",
  },
  {
    emoji: "✏️",
    title: "Headline",
    desc: "Your headline is the most important line on your profile. Get rewrites that actually convert.",
  },
  {
    emoji: "⭐",
    title: "Featured Section",
    desc: "The most underused section on LinkedIn. Find out if you're leaving authority on the table.",
  },
  {
    emoji: "🔄",
    title: "Overall Consistency",
    desc: "Does your profile tell a coherent story? VYRAL checks alignment across every section.",
  },
];

export default function ProfileReviewPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "120px 48px 80px",
          textAlign: "center",
        }}
      >
        <div style={pill}>Profile Review</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(38px, 6vw, 60px)",
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 24px",
          }}
        >
          Your LinkedIn profile is either{" "}
          <span style={{ color: "#a78bfa" }}>working for you or against you.</span>
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            margin: "0 auto 36px",
            maxWidth: 580,
          }}
        >
          Upload a screenshot and get an instant AI audit — section-by-section scores, priority fixes, and headline rewrites tailored to your content strategy.
        </p>
        <a
          href="/waitlist"
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            borderRadius: 100,
            padding: "14px 32px",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 8px 28px rgba(124,58,237,0.32)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Start free trial
        </a>
        <p
          style={{
            marginTop: 16,
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          14-day free trial · No credit card required
        </p>
      </section>

      {/* SCREENSHOT */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 48px 88px",
        }}
      >
        <img
          src="/profileviewer.png"
          alt="VYRAL Profile Review — AI LinkedIn profile audit"
          style={{
            width: "100%",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            display: "block",
          }}
        />
      </section>

      {/* WHAT GETS SCORED */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "88px 48px",
          textAlign: "center",
        }}
      >
        <div style={pill}>What gets reviewed</div>
        <h2 style={h2Style}>Every section of your profile — scored and explained</h2>
        <p
          style={{
            ...bodyStyle,
            maxWidth: 520,
            margin: "0 auto 48px",
          }}
        >
          Not a generic checklist. Every score is contextualised against your content strategy and goals.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
            textAlign: "left",
          }}
        >
          {sections.map((s) => (
            <div key={s.title} style={cardBase}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>{s.emoji}</div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                {s.title}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "88px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={pill}>How it works</div>
          <h2 style={h2Style}>Three steps to a stronger profile</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              marginTop: 48,
              textAlign: "left",
            }}
          >
            {[
              {
                num: "01",
                title: "Take a screenshot",
                desc: "Screenshot your LinkedIn profile — the full page or just the top section. Upload it directly in VYRAL.",
              },
              {
                num: "02",
                title: "Get your audit",
                desc: "VYRAL's AI scores every section, flags the biggest gaps, and explains exactly what to fix and why.",
              },
              {
                num: "03",
                title: "Fix with the Coach",
                desc: "Take your priority fixes straight into the AI Coach to rewrite your headline, About section, and more — in your voice.",
              },
            ].map((step) => (
              <div key={step.num} style={cardBase}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: 56,
                    color: "rgba(124,58,237,0.25)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {step.num}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#fff",
                    margin: "0 0 8px",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "88px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={{ ...h2Style, fontSize: 40 }}>
          Find out what your profile is really saying
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            margin: "0 0 36px",
          }}
        >
          14-day free trial · No credit card required
        </p>
        <a
          href="/waitlist"
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            borderRadius: 100,
            padding: "15px 32px",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 8px 28px rgba(124,58,237,0.32)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Start free trial
        </a>
        <div style={{ marginTop: 32 }}>
          <Link
            href="/product"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "#a78bfa",
              textDecoration: "none",
            }}
          >
            ← Back to product
          </Link>
        </div>
      </section>
    </main>
  );
}
