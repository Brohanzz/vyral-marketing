import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VYRAL for Creators — The Growth Engine for Serious LinkedIn Creators",
  description:
    "Understand your content. Build your strategy. Execute better posts — consistently. VYRAL helps LinkedIn creators decode performance and grow faster.",
  alternates: { canonical: "https://www.getvyral.io/solutions/creators" },
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
const badge: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(124,58,237,0.15)",
  border: "1px solid rgba(124,58,237,0.3)",
  borderRadius: 100,
  padding: "4px 14px",
  fontSize: 11,
  letterSpacing: "1.2px",
  color: "#a78bfa",
  textTransform: "uppercase",
  marginBottom: 18,
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
  margin: "0 0 24px",
};
const dotTeal: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#2dd4bf",
  flexShrink: 0,
  marginTop: 6,
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
const smallCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: 16,
};

const whyTags = [
  "Decode their performance",
  "Build a winning strategy",
  "Create higher-quality content",
  "Stay consistent",
  "Grow faster — without hacks",
];

const clarityItems = [
  { title: "Hook strength", text: "See which hooks stop the scroll" },
  { title: "Structure quality", text: "Understand what flows and what doesn't" },
  { title: "Tone analysis", text: "Match your voice to your audience" },
  { title: "Theme alignment", text: "Know which topics resonate" },
  { title: "Consistency tracking", text: "Build habits that compound" },
  { title: "Momentum scoring", text: "See your growth trajectory" },
];

const blueprintBullets = [
  "Who you are",
  "Who you help",
  "What you talk about",
  "How you speak",
  "What good content looks like",
];

const aiCoachBullets = [
  "Improves drafts",
  "Fixes structure",
  "Suggests hooks",
  "Aligns tone",
  "Rewrites in your style",
  "Generates ideas from analytics",
];

const workflowItems = [
  "Content calendar",
  "Draft workflow",
  "Ideas library",
  "Playbooks (Pro)",
  "Weekly insights",
  "Smart recommendations",
];

export default function CreatorsPage() {
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
              { "@type": "ListItem", position: 3, name: "Creators", item: "https://www.getvyral.io/solutions/creators" },
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
          <div style={pill}>FOR CREATORS</div>
          <h1 style={h1}>
            The growth engine for serious{" "}
            <span style={{ color: "#a78bfa" }}>LinkedIn</span> creators
          </h1>
          <p style={{ ...body, maxWidth: 560, margin: "0 auto 36px" }}>
            Understand your content. Build your strategy. Execute better posts — consistently.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>
              Sign up for early launch
            </a>
            <Link href="/pricing" style={btnGhost}>See pricing</Link>
          </div>
        </section>

        {/* WHY CREATORS */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>
            Why creators choose VYRAL
          </h2>
          <p style={{ ...body, maxWidth: 520, margin: "0 auto 28px" }}>
            Creating more posts isn&apos;t the answer. Understanding what works — and why — is.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            {whyTags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  borderRadius: 100,
                  padding: "8px 16px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#7c3aed",
                    flexShrink: 0,
                  }}
                />
                {tag}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            VYRAL helps creators decode performance, build strategy, and grow faster.
          </p>
        </section>

        {/* CLARITY */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, fontSize: 38, textAlign: "center" }}>
            Get clarity on what actually works
          </h2>
          <p style={{ ...body, maxWidth: 520, margin: "0 auto 32px" }}>
            Every post is analyzed. You&apos;ll know exactly why a post performs — and how to recreate it.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              textAlign: "left",
            }}
          >
            {clarityItems.map(({ title, text }) => (
              <div key={title} style={smallCard}>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#fff",
                    marginBottom: 6,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BLUEPRINT */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div style={badge}>STRATEGY</div>
              <h2 style={{ ...h2, fontSize: 38 }}>Build your creator strategy</h2>
              <p style={body}>
                Your Blueprint turns content from guesswork into a repeatable system.
              </p>
              <p style={body}>Your Blueprint defines:</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {blueprintBullets.map((b) => (
                  <li key={b} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={dotTeal} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                ...darkCard,
                minHeight: 240,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 40 }}>🎯</span>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", margin: 0 }}>
                Strategy → System → Growth
              </p>
            </div>
          </div>
        </section>

        {/* AI COACH */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div style={{ borderRadius: 14, overflow: "hidden" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "block",
                }}
              >
                <source src="/vyral-the-coach.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <div style={badge}>AI COACH</div>
              <h2 style={{ ...h2, fontSize: 38 }}>Create better content with AI Coach</h2>
              <p style={body}>
                Your AI Coach is trained on your Blueprint, tone, and top posts.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {aiCoachBullets.map((b) => (
                  <li key={b} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={dotTeal} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, fontSize: 38, textAlign: "center" }}>
            Stay consistent with the right tools
          </h2>
          <p style={{ ...body, maxWidth: 480, margin: "0 auto 32px" }}>
            Consistency becomes a habit — not a struggle.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              textAlign: "left",
            }}
          >
            {workflowItems.map((item) => (
              <div key={item} style={smallCard}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {item}
                </span>
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
          <h2 style={{ ...h2, fontSize: 38, textAlign: "center" }}>
            Become a better creator — with data and strategy.
          </h2>
          <p style={{ ...body, maxWidth: 440, margin: "0 auto 32px" }}>
            Sign up and see what&apos;s actually driving your growth.
          </p>
          <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>
            Sign up for early launch
          </a>
        </section>
      </main>
    </>
  );
}
