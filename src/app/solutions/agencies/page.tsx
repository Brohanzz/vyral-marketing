import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VYRAL for Agencies — The LinkedIn Content Engine for Agencies",
  description:
    "Manage clients, deliver insights, and produce better content — all in one place. The agency-grade LinkedIn content system.",
  alternates: { canonical: "https://www.getvyral.io/solutions/agencies" },
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
  "Consistency across clients",
  "Clear strategy",
  "Personalized AI",
  "Analytics at scale",
  "Repeatable systems",
];

const workspaceBullets = [
  "Blueprint",
  "Tone profile",
  "Analytics history",
  "AI Coach context",
  "Drafts and ideas",
  "Campaigns and playbooks",
];

const reportsItems = [
  "What's working",
  "Why posts perform",
  "Theme patterns",
  "Hook performance",
  "Tone clarity",
  "Structure analysis",
  "Momentum trends",
  "Opportunities to improve",
];

const teamBullets = [
  "AI Coach",
  "Draft improvements",
  "Strategy alignment checks",
  "Weekly insights",
  "Playbooks",
  "Templates",
];

export default function AgenciesPage() {
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
              { "@type": "ListItem", position: 3, name: "Agencies", item: "https://www.getvyral.io/solutions/agencies" },
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
          <div style={pill}>FOR AGENCIES</div>
          <h1 style={h1}>
            The <span style={{ color: "#a78bfa" }}>LinkedIn</span> content engine for agencies
          </h1>
          <p style={{ ...body, maxWidth: 520, margin: "0 auto 36px" }}>
            Manage clients, deliver insights, and produce better content — all in one place.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>
              Sign up for early launch
            </a>
            <Link href="/pricing" style={btnGhost}>See pricing</Link>
          </div>
        </section>

        {/* WHY AGENCIES */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>
            Why agencies choose VYRAL
          </h2>
          <p style={{ ...body, maxWidth: 520, margin: "0 auto 28px" }}>
            Agencies need scale without sacrificing quality — VYRAL is built for multi-client operations.
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
            VYRAL gives you a tool built for multi-client operations.
          </p>
        </section>

        {/* CLIENT WORKSPACES */}
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
              <div style={badge}>WORKSPACES (COMING SOON)</div>
              <h2 style={{ ...h2, fontSize: 38 }}>Client workspaces</h2>
              <p style={body}>
                Every client gets their own complete environment. You stay organized at scale.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {workspaceBullets.map((b) => (
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
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 40 }}>👥</span>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", margin: 0 }}>
                Scale without losing quality
              </p>
            </div>
          </div>
        </section>

        {/* REPORTS */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, fontSize: 38, textAlign: "center" }}>
            Insights that impress clients
          </h2>
          <p style={{ ...body, maxWidth: 480, margin: "0 auto 32px" }}>
            Deliver reports that show real value. This is what clients pay for.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              textAlign: "left",
            }}
          >
            {reportsItems.map((item) => (
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

        {/* TEAM TOOLS */}
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
              <div style={badge}>TEAM TOOLS</div>
              <h2 style={{ ...h2, fontSize: 38 }}>Produce better content, faster</h2>
              <p style={body}>
                Your team gets everything they need to deliver exceptional work.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {teamBullets.map((b) => (
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
            Give your agency a creator-grade content engine.
          </h2>
          <p style={{ ...body, maxWidth: 420, margin: "0 auto 32px" }}>
            Sign up and see how VYRAL transforms client delivery.
          </p>
          <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>
            Sign up for early launch
          </a>
        </section>
      </main>
    </>
  );
}
