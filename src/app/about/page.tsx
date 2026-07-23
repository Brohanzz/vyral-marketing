import type { Metadata } from "next";
import Link from "next/link";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "About VYRAL — LinkedIn Growth Platform for Creators",
  description:
    "VYRAL connects strategy, content, and outcomes in one platform. Built on LinkedIn's official API. No scraping, no automation, no risk.",
  alternates: { canonical: "https://www.getvyral.io/about" },
};

const bulletPoints = [
  "VYRAL uses LinkedIn's official APIs (Community Management API and Share on LinkedIn) for all data access and publishing.",
  "We never use browser extensions, scraping, automation scripts, or any unofficial methods to access LinkedIn.",
  "Your LinkedIn account is connected via OAuth — we never see or store your LinkedIn password.",
  "VYRAL is fully compliant with LinkedIn's Platform Terms of Service and API Terms of Use.",
  "Your data is encrypted at rest and in transit. We never share or sell your data.",
];

const pill = (color?: "teal"): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  background: color === "teal" ? "rgba(45,212,191,0.08)" : "rgba(255,255,255,0.05)",
  border: `1px solid ${color === "teal" ? "rgba(45,212,191,0.3)" : "rgba(255,255,255,0.1)"}`,
  borderRadius: 100,
  padding: "4px 14px",
  fontSize: 11,
  letterSpacing: "1.2px",
  color: color === "teal" ? "#2dd4bf" : "rgba(255,255,255,0.4)",
  textTransform: "uppercase",
  marginBottom: 18,
});

const badge = (color?: "purple" | "teal"): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  background:
    color === "teal" ? "rgba(45,212,191,0.08)" : "rgba(124,58,237,0.12)",
  border: `1px solid ${color === "teal" ? "rgba(45,212,191,0.3)" : "rgba(124,58,237,0.3)"}`,
  borderRadius: 100,
  padding: "4px 14px",
  fontSize: 11,
  letterSpacing: "1.2px",
  color: color === "teal" ? "#2dd4bf" : "#a78bfa",
  textTransform: "uppercase",
  marginBottom: 18,
});

const h2base: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",
  margin: "0 0 16px",
};

const bodyBase: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: 0,
};

export default function AboutPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "60px 48px 56px",
          textAlign: "center",
        }}
      >
        <div style={pill()}>ABOUT VYRAL</div>
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
          We&apos;re building the{" "}
          <span style={{ color: "#a78bfa" }}>LinkedIn growth platform</span>{" "}
          creators actually need
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          No vanity metrics. No generic AI. Just clear insights and content that converts.
        </p>
      </section>

      {/* MISSION */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "56px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <div style={badge("purple")}>OUR MISSION</div>
            <h2 style={{ ...h2base, fontSize: 36 }}>Our mission</h2>
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Most LinkedIn tools show you metrics without meaning. They tell you what
            happened, not why it happened or what to do next. We built VYRAL to be
            different: a platform that connects strategy, content, and outcomes in
            one place. So you can finally grow on LinkedIn with confidence, not
            guesswork.
          </p>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: 64,
          }}
        />
      </section>

      {/* VALUES */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={pill()}>VALUES</div>
          <h2 style={{ ...h2base, fontSize: 40 }}>What we believe</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              emoji: "⚡",
              title: "Clarity over complexity",
              text: "Your LinkedIn growth should be simple to understand and easy to act on. No dashboards full of meaningless numbers.",
            },
            {
              emoji: "🎯",
              title: "Outcomes over vanity",
              text: "Likes are nice, but leads and opportunities pay the bills. We help you track what actually matters.",
            },
          ].map(({ emoji, title, text }) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "2px solid rgba(124,58,237,0.5)",
                borderRadius: 14,
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(124,58,237,0.12)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  marginBottom: 16,
                }}
              >
                {emoji}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                  margin: "0 0 12px",
                }}
              >
                {title}
              </h3>
              <p style={{ ...bodyBase, fontSize: 15, lineHeight: 1.65 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section
        style={{
          background: "rgba(45,212,191,0.03)",
          borderTop: "1px solid rgba(45,212,191,0.1)",
          borderBottom: "1px solid rgba(45,212,191,0.1)",
          padding: "56px 48px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <div style={badge("teal")}>COMPLIANCE &amp; TRUST</div>
            <h2 style={{ ...h2base, fontSize: 36 }}>
              Built on LinkedIn&apos;s official API
            </h2>
            <p style={{ ...bodyBase, fontSize: 16, lineHeight: 1.7 }}>
              VYRAL uses LinkedIn&apos;s official Community Management API — the same
              infrastructure trusted by LinkedIn&apos;s own ecosystem. We never scrape,
              never automate engagement, and never compromise your account.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "🔒", title: "Official API", desc: "LinkedIn Community Management API integration" },
              { icon: "✓", title: "No scraping", desc: "Only official, approved API endpoints" },
              { icon: "✗", title: "No fake engagement", desc: "No bots, no automation, no workarounds" },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: "2px solid rgba(45,212,191,0.5)",
                  borderRadius: 10,
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#fff",
                      marginBottom: 2,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "56px 48px" }}>
        <div style={pill()}>TECHNICAL TRANSPARENCY</div>
        <h2 style={{ ...h2base, fontSize: 36, marginBottom: 32 }}>
          How VYRAL works with LinkedIn
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
          {bulletPoints.map((point, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2dd4bf",
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.65,
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "56px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={{ ...h2base, fontSize: 40 }}>
          Start building your content engine
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.4)",
            margin: "0 0 28px",
          }}
        >
          14-day free Pro trial · No credit card required
        </p>
        <a
          href={APP_SIGNUP_URL}
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            borderRadius: 100,
            padding: "15px 32px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          Start building your content engine
        </a>
      </section>
    </main>
  );
}
