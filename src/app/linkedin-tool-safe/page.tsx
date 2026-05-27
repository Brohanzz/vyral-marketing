import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle, Send, BarChart3, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Is VYRAL Safe for LinkedIn? — Official API, No Extensions | VYRAL",
  description:
    "VYRAL uses only LinkedIn's official APIs. No browser extensions, no scraping, no automation. Your account is never at risk.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-tool-safe" },
};

// ── Shared styles ─────────────────────────────────────────────────────────────
const h2base: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",
  margin: "0 0 16px",
};
const bodyStyle: React.CSSProperties = {
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
const mutedBadge: React.CSSProperties = {
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
  marginBottom: 18,
};
const tealBadge: React.CSSProperties = {
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
  marginBottom: 18,
};
const purpleBadge: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(124,58,237,0.12)",
  border: "1px solid rgba(124,58,237,0.3)",
  borderRadius: 100,
  padding: "4px 14px",
  fontSize: 11,
  letterSpacing: "1.2px",
  color: "#a78bfa",
  textTransform: "uppercase",
  marginBottom: 18,
};

const howItems = [
  {
    Icon: Key,
    title: "OAuth — no passwords",
    body: "You connect your LinkedIn account via OAuth, the same secure protocol used by Google, GitHub, and thousands of other apps. VYRAL never sees or stores your LinkedIn password. You authorize specific permissions, and you can revoke access at any time.",
  },
  {
    Icon: BarChart3,
    title: "Community Management API — analytics",
    body: "VYRAL reads your post analytics (impressions, likes, comments, reposts) through LinkedIn's Community Management API. This is the official, approved API for accessing creator analytics. It's the same API that LinkedIn recommends for third-party tools.",
  },
  {
    Icon: Send,
    title: "Share on LinkedIn API — publishing",
    body: "When you publish a post through VYRAL, we use the Share on LinkedIn API. This is LinkedIn's official publishing endpoint, designed for exactly this purpose. Your post is published as if you typed it directly into LinkedIn.",
  },
];

const neverDoes = [
  "No browser extensions",
  "No scraping of LinkedIn data",
  "No automated likes, comments, or connections",
  "No data harvesting or selling",
  "No password storage",
  "No unauthorized API usage",
  "No inbox automation or messaging bots",
  "No profile viewing automation",
];

const doesDo = [
  "Read your post analytics (with your permission)",
  "Publish posts on your behalf (with your permission)",
  "Help you write better content with AI coaching",
  "Analyze your writing patterns to match your voice",
  "Store your data securely and privately",
  "Provide strategy guidance based on your data",
  "Encrypt all data at rest and in transit",
  "Let you revoke access at any time",
];

export default function LinkedInToolSafePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is VYRAL safe to use with LinkedIn?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. VYRAL uses only LinkedIn's official APIs (Community Management API and Share on LinkedIn). No browser extensions, no scraping, no automation. Your account is never at risk.",
                },
              },
              {
                "@type": "Question",
                name: "Can LinkedIn ban my account for using VYRAL?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. VYRAL is fully compliant with LinkedIn's Platform Terms of Service and API Terms of Use. We use only official, approved API endpoints. LinkedIn cannot and will not flag your account for using VYRAL.",
                },
              },
              {
                "@type": "Question",
                name: "Does VYRAL use a browser extension?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. VYRAL is a web application that connects to LinkedIn via OAuth. There is no browser extension to install. All data access happens through LinkedIn's official server-side APIs.",
                },
              },
            ],
          }),
        }}
      />
      <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
        {/* HERO */}
        <section style={{ maxWidth: 820, margin: "0 auto", padding: "120px 48px 80px", textAlign: "center" }}>
          <div style={purpleBadge}>LinkedIn Safety &amp; Compliance</div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 6vw, 60px)",
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            VYRAL is built on LinkedIn&apos;s official API —{" "}
            <span style={{ color: "#a78bfa" }}>your account is safe.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            Many LinkedIn tools have been banned for using browser extensions, scraping, and automation. VYRAL takes a fundamentally different approach.
          </p>
        </section>

        {/* WHY BANNED */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
            <div style={mutedBadge}>The Problem</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 38px)",
                lineHeight: 1.1,
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              Why LinkedIn bans some tools
            </h2>
            <p style={bodyStyle}>
              LinkedIn has cracked down on tools that use browser extensions, automated actions (auto-liking, auto-commenting, auto-connecting), and data scraping. These tools violate LinkedIn&apos;s Terms of Service and can result in account restrictions or permanent bans. Users of these tools risk losing their entire professional network.
            </p>
            <p style={{ ...bodyStyle, margin: 0 }}>
              VYRAL was designed from day one to work within LinkedIn&apos;s rules — using only the official APIs that LinkedIn provides to approved partners.
            </p>
          </div>
        </section>

        {/* HOW VYRAL CONNECTS */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 48px" }}>
          <div style={{ marginBottom: 36 }}>
            <div style={mutedBadge}>Technical Transparency</div>
            <h2 style={{ ...h2base, fontSize: 38, textAlign: "center" }}>How VYRAL connects to LinkedIn</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {howItems.map(({ Icon, title, body: b }) => (
              <div
                key={title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "2px solid rgba(124,58,237,0.5)",
                  borderRadius: 14,
                  padding: "28px 32px",
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  width: 44, height: 44, background: "rgba(124,58,237,0.12)",
                  borderRadius: 10, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={20} color="#a78bfa" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEVER/DOES */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 48px" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={mutedBadge}>Full Transparency</div>
              <h2 style={{ ...h2base, fontSize: 38 }}>Exactly what VYRAL does — and doesn&apos;t do</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
              {/* Never */}
              <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 14, padding: 32 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: "#ef4444", margin: "0 0 20px" }}>
                  What VYRAL never does
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {neverDoes.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Does */}
              <div style={{ background: "rgba(45,212,191,0.03)", border: "1px solid rgba(45,212,191,0.15)", borderRadius: 14, padding: 32 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: "#2dd4bf", margin: "0 0 20px" }}>
                  What VYRAL does
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {doesDo.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckCircle size={18} color="#2dd4bf" style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 48px", textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, background: "rgba(45,212,191,0.1)",
            border: "1px solid rgba(45,212,191,0.2)", borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 20px",
          }}>
            <Shield size={30} color="#2dd4bf" />
          </div>
          <div style={tealBadge}>Compliance &amp; Trust</div>
          <h2 style={{ ...h2base, fontSize: 38 }}>Fully compliant with LinkedIn&apos;s terms</h2>
          <p style={bodyStyle}>
            VYRAL is fully compliant with LinkedIn&apos;s Platform Terms of Service and API Terms of Use. We use only the Community Management API (approved) and Share on LinkedIn API (approved) for all data access and publishing.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#fff", fontWeight: 700, lineHeight: 1.7, margin: "0 0 16px" }}>
            Your LinkedIn account will never be flagged, restricted, or banned because of VYRAL.
          </p>
          <p style={{ ...bodyStyle, margin: 0 }}>
            Your data is encrypted at rest and in transit. We never share or sell your data. You can read our full{" "}
            <Link href="/legal/privacy-policy" style={{ color: "#a78bfa", textDecoration: "none" }}>privacy policy</Link>
            {" "}and{" "}
            <Link href="/legal/security" style={{ color: "#a78bfa", textDecoration: "none" }}>security statement</Link>
            {" "}for details.
          </p>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            borderTop: "1px solid rgba(124,58,237,0.2)",
            background: "linear-gradient(to bottom, rgba(124,58,237,0.06), transparent)",
            padding: "80px 48px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 0 16px",
            }}
          >
            Grow your LinkedIn presence —{" "}
            <span style={{ color: "#a78bfa" }}>safely</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Join the first 100 creators using VYRAL. Official API only. No risk to your account.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>Sign up for early launch</a>
            <Link href="/product" style={btnGhost}>See how it works</Link>
          </div>
        </section>
      </main>
    </>
  );
}
