import type { Metadata } from "next";
import Link from "next/link";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title:
    "AI Coach for LinkedIn Creators — Personalized Strategy + Content | VYRAL",
  description:
    "A personalized AI Coach trained on your content, analytics, tone, themes, and strategy. Generate ideas, improve drafts, fix structure and tone.",
  alternates: { canonical: "https://www.getvyral.io/ai-coach" },
  openGraph: {
    title: "Your Personal AI Coach for LinkedIn",
    description:
      "Not generic generation — a creator-grade coach built on your own data.",
  },
};

// ── Shared style constants ────────────────────────────────────────────────────
const sectionPad: React.CSSProperties = { padding: "64px 48px" };
const innerMax: React.CSSProperties = { maxWidth: 1100, margin: "0 auto" };
const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 38,
  color: "#fff",
  letterSpacing: "-0.5px",
  lineHeight: 1.08,
  margin: "0 0 16px",
};
const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 28px",
};
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
const featurePill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 100,
  padding: "8px 16px",
  fontSize: 13,
  color: "rgba(255,255,255,0.7)",
  fontFamily: "Inter, sans-serif",
};
const dotTeal: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#2dd4bf",
  flexShrink: 0,
  marginTop: 6,
};
const gridCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
  borderLeft: "2px solid rgba(124,58,237,0.4)",
};
const darkCard: React.CSSProperties = {
  background: "#13131e",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 28,
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
const purpleItalic: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "italic",
  fontSize: 15,
  color: "#a78bfa",
  margin: "16px 0 0",
};

const coachPills = [
  "Ideas based on your best themes",
  "Sparring to improve drafts",
  "Structure & clarity upgrades",
  "Tone alignment",
  "Rewrites that match your voice",
  "Pacing enhancements",
  "Storytelling improvements",
  "Actionable content fixes",
];

const dataBullets = [
  "Your Blueprint",
  "Your posting history",
  "Your analytics",
  "Your strongest themes",
  "Your tone patterns",
  "Your content structure",
  "Your growth trends",
];

const capabilitiesGrid = [
  { title: "Turn ideas into posts", text: "From concept to polished draft in minutes" },
  { title: "Improve execution", text: "Better hooks, structure, and clarity" },
  { title: "Replicate past winners", text: "Analyze what worked and do it again" },
  { title: "Build consistency", text: "Stay on-brand with every post" },
  { title: "Understand what to change", text: "Get specific, actionable feedback" },
  { title: "Write in half the time", text: "Focus on ideas, not wordsmithing" },
];

export default function AICoachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "AI Coach for LinkedIn Creators",
              description:
                "A personalized AI Coach trained on your content, analytics, and Blueprint.",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.getvyral.io",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Product",
                  item: "https://www.getvyral.io/product",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI Coach",
                  item: "https://www.getvyral.io/ai-coach",
                },
              ],
            },
          ]),
        }}
      />
      <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
        {/* HERO */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "72px 48px 60px",
            textAlign: "center",
          }}
        >
          <div style={pill}>AI COACH</div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.12,
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            An AI Coach trained on{" "}
            <span style={{ color: "#a78bfa" }}>
              your content, your data, and your strategy.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: "0 0 36px",
            }}
          >
            Not generic generation. Personalized, creator-grade guidance based
            on your Blueprint and analytics.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={APP_SIGNUP_URL} style={btnPurple}>
              Try the AI Coach
            </a>
            <Link href="/product" style={btnGhost}>See demo</Link>
          </div>
        </section>

        {/* WHY CREATORS NEED AN AI COACH */}
        <section
          style={{
            ...sectionPad,
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2Style, fontSize: 40, textAlign: "center" }}>
            Why creators need an AI coach
          </h2>
          <p style={{ ...bodyStyle, maxWidth: 560, margin: "0 auto 32px" }}>
            Most AI tools generate generic posts. VYRAL helps you create content
            that performs — on your terms.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            {coachPills.map((label) => (
              <span key={label} style={featurePill}>{label}</span>
            ))}
          </div>
          <p style={purpleItalic}>This is AI that knows who you are.</p>
        </section>

        {/* POWERED BY YOUR DATA */}
        <section style={{ ...sectionPad, ...innerMax }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div style={pill}>PERSONALIZATION</div>
              <h2 style={h2Style}>
                Powered by{" "}
                <span style={{ color: "#a78bfa" }}>your data</span>
              </h2>
              <p style={bodyStyle}>
                The AI Coach is trained on everything that makes you unique:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {dataBullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={dotTeal} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={purpleItalic}>This is why it works — it knows you.</p>
            </div>
            <div style={darkCard}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <source src="/vyral-the-coach.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* CAPABILITIES GRID */}
        <section
          style={{
            ...sectionPad,
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2Style, fontSize: 38, textAlign: "center" }}>
            Write faster. Post smarter. Improve consistently.
          </h2>
          <p style={{ ...bodyStyle, maxWidth: 480, margin: "0 auto 32px" }}>
            Smarter creation — not more creation.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              textAlign: "left",
            }}
          >
            {capabilitiesGrid.map(({ title, text }) => (
              <div key={title} style={gridCard}>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#fff",
                    margin: "0 0 8px",
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
                    margin: 0,
                  }}
                >
                  {text}
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
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2Style, fontSize: 40, textAlign: "center" }}>
            Meet your personal{" "}
            <span style={{ color: "#a78bfa" }}>LinkedIn AI Coach.</span>
          </h2>
          <p style={{ ...bodyStyle, maxWidth: 480, margin: "0 auto 32px" }}>
            Not generic generation — a creator-grade coach built on your own
            data.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={APP_SIGNUP_URL} style={btnPurple}>
              Try the AI Coach
            </a>
            <a href={APP_SIGNUP_URL} style={btnGhost}>
              Start free
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
