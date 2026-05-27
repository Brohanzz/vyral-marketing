import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Brain,
  Shield,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Post Analytics — Understand Why Posts Perform | VYRAL",
  description:
    "Go beyond likes and impressions. VYRAL's analytics explain WHY your LinkedIn posts perform and what to do about it.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-post-analytics" },
};

// ── Shared styles ─────────────────────────────────────────────────────────────
const h2: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",
  margin: "0 0 16px",
};
const body: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 16px",
};
const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
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

const features = [
  {
    Icon: TrendingUp,
    title: "Engagement rate tracking",
    body: "Track ER trends over time, by format, by pillar, and by time of day. See what's actually moving the needle.",
  },
  {
    Icon: BarChart3,
    title: "Format breakdown",
    body: "Compare performance across text posts, carousels, images, videos, and polls. Know where to invest your effort.",
  },
  {
    Icon: Clock,
    title: "Timing analysis",
    body: "Discover your best posting days and times based on your actual data — not generic best practices.",
  },
  {
    Icon: Sparkles,
    title: "Hook effectiveness",
    body: "See which hook types drive the most engagement. Questions? Bold claims? Stories? Your data tells you.",
  },
  {
    Icon: Target,
    title: "Pillar performance",
    body: "Track which content pillars resonate most with your audience. Double down on what works.",
  },
  {
    Icon: MessageSquare,
    title: "Data Analyst",
    body: "Ask your data questions in plain English and get instant answers. 'What's my best post format this month?'",
  },
];

const insightCards = [
  "Your carousels outperform text posts by 3.2x because they force multi-step engagement.",
  "Posts published on Tuesday mornings get 40% more impressions for your audience.",
  "Question hooks drive 2x more comments than statement hooks for your content.",
  "Your Leadership pillar has the highest ER — consider increasing its share in your content mix.",
];

export default function LinkedInPostAnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VYRAL — LinkedIn Post Analytics",
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
            LinkedIn Post Analytics
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            LinkedIn analytics that explain{" "}
            <span style={{ color: "#a78bfa" }}>WHY, not just WHAT.</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Other tools show you charts. VYRAL explains the patterns behind your
            numbers and tells you what to do about them.
          </p>
          <div
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="https://www.getvyral.io/beta"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPurple}
            >
              Sign up for early launch
            </a>
            <Link href="/linkedin-analytics" style={btnGhost}>
              See analytics features
            </Link>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}
          >
            <h2
              style={{ ...h2, fontSize: 40, textAlign: "center" }}
            >
              The problem with LinkedIn analytics tools
            </h2>
            <p
              style={{
                ...body,
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 16px",
              }}
            >
              You open your analytics dashboard. Impressions: 12,400. Likes: 87.
              Comments: 12. Great — but what does that mean? Was this a good
              post? Why did it outperform last week&apos;s? What should you do
              differently next time?
            </p>
            <p
              style={{
                ...body,
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 0",
              }}
            >
              Most analytics tools give you numbers without context. They show
              you what happened, but not why it happened. You&apos;re left staring at
              charts, trying to reverse-engineer patterns that the tool should
              surface for you. That&apos;s not analytics — that&apos;s data entry.
            </p>
          </div>
        </section>

        {/* SOLUTION */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>
            Analytics that explain patterns
          </h2>
          <p
            style={{
              ...body,
              textAlign: "center",
              maxWidth: 580,
              margin: "0 auto 32px",
            }}
          >
            VYRAL&apos;s analytics are contextual. They connect your performance data
            to your content strategy, writing patterns, and posting behavior to
            surface actionable insights — not just charts.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {insightCards.map((text) => (
              <div
                key={text}
                style={{
                  background: "rgba(124,58,237,0.05)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: 12,
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.7)",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  &ldquo;{text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center", marginBottom: 36 }}>
              What you can track
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {features.map(({ Icon, title, body: b }) => (
                <div key={title} style={card}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(124,58,237,0.1)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} color="#7c3aed" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#fff",
                      margin: "12px 0 6px",
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
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DATA ANALYST */}
        <section
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <Brain
            size={44}
            color="#2dd4bf"
            style={{ margin: "0 auto 20px", display: "block" }}
          />
          <h2 style={{ ...h2, fontSize: 36 }}>
            Ask your data questions in plain English
          </h2>
          <p style={{ ...body, maxWidth: 500, margin: "0 auto 12px" }}>
            VYRAL&apos;s Data Analyst lets you query your analytics conversationally.
            Ask &ldquo;What&apos;s my best-performing format this month?&rdquo; or &ldquo;Which pillar
            drives the most profile views?&rdquo; and get instant, data-backed answers.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            Available on Pro plan
          </p>
        </section>

        {/* TRUST + CTA */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              padding: "72px 48px 80px",
              textAlign: "center",
            }}
          >
            <Shield
              size={40}
              color="#2dd4bf"
              style={{ margin: "0 auto 16px", display: "block" }}
            />
            <h2 style={{ ...h2, fontSize: 32 }}>Safe and official</h2>
            <p style={{ ...body, maxWidth: 480, margin: "0 auto 8px" }}>
              All analytics data comes from LinkedIn&apos;s official API. No browser
              extensions, no scraping. Your account is never at risk.{" "}
              <Link
                href="/linkedin-tool-safe"
                style={{ color: "#a78bfa", textDecoration: "none" }}
              >
                Learn more →
              </Link>
            </p>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                margin: "36px 0",
              }}
            />
            <h2 style={{ ...h2, fontSize: 38 }}>
              See what&apos;s really driving your LinkedIn growth
            </h2>
            <p style={{ ...body, maxWidth: 440, margin: "0 auto 28px" }}>
              Join the first 100 creators using VYRAL. Full Pro access for 14
              days.
            </p>
            <a
              href="https://www.getvyral.io/beta"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPurple}
            >
              Sign up for early launch
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
