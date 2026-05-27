import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Your LinkedIn Growth Engine — VYRAL",
  description:
    "VYRAL gives you a personal LinkedIn coach, analytics that explain why posts work, and a strategy that evolves with your results. All in one platform.",
  alternates: {
    canonical: "https://www.getvyral.io",
  },
  openGraph: {
    title: "Your LinkedIn Growth Engine — Powered by AI | VYRAL",
    description:
      "AI coaching, deep analytics, and a strategy that evolves with your results. Built for serious LinkedIn creators.",
    images: [
      {
        url: "https://www.getvyral.io/og-default.png",
        width: 1200,
        height: 630,
        alt: "VYRAL — LinkedIn Content Intelligence",
      },
    ],
    url: "https://www.getvyral.io",
    type: "website",
    siteName: "VYRAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your LinkedIn Growth Engine — Powered by AI | VYRAL",
    description:
      "AI coaching, deep analytics, and a strategy that evolves with your results. Built for serious LinkedIn creators.",
    images: ["https://www.getvyral.io/og-default.png"],
  },
};

// ─── JSON-LD SCHEMAS ──────────────────────────────────────────────────────────

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VYRAL",
  url: "https://www.getvyral.io",
  description:
    "AI-powered LinkedIn growth platform with personalized coaching, analytics, and strategy building.",
  sameAs: [
    "https://linkedin.com/company/vyral",
    "https://twitter.com/getvyral",
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "VYRAL",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: 0,
    highPrice: 99,
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is VYRAL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VYRAL is an AI-powered LinkedIn growth platform that combines personalized coaching, deep analytics, and strategy building. Unlike generic tools, VYRAL's AI learns your writing voice from your posts and coaches you in your own style.",
      },
    },
    {
      "@type": "Question",
      name: "How is VYRAL different from Taplio or Shield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taplio focuses on content scheduling and basic AI writing. Shield focuses on analytics dashboards. VYRAL combines both and adds: AI coaching that matches your voice, a Strategy Builder for content planning, a Data Analyst you can chat with, and a Knowledge Hub with LinkedIn growth frameworks.",
      },
    },
    {
      "@type": "Question",
      name: "Is VYRAL safe for my LinkedIn account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VYRAL uses only LinkedIn's official APIs (Community Management API and Share on LinkedIn). We never use browser extensions, scraping, or automation. Your account is never at risk.",
      },
    },
    {
      "@type": "Question",
      name: "How much does VYRAL cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VYRAL offers a free tier with basic analytics and 10 AI coaching messages per month. The Creator plan is $49/month with full coaching and analytics. The Pro plan is $99/month with unlimited AI, a Data Analyst, and advanced features. All paid plans include a 14-day free trial.",
      },
    },
    {
      "@type": "Question",
      name: "Can VYRAL write LinkedIn posts for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VYRAL's AI Coach helps you write posts in your own voice — it doesn't generate generic content. It analyzes your best-performing posts, learns your tone, and coaches you through brainstorming, drafting, and refining. Every draft is scored on 6 dimensions.",
      },
    },
  ],
};

// ─── SHARED STYLE CONSTANTS ───────────────────────────────────────────────────

const cardBase: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: "28px 24px",
};

const sectionHeading: CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 44,
  lineHeight: 1.15,
  color: "#ffffff",
  margin: "0 0 16px",
};

const bodyText: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  color: "rgba(255,255,255,0.62)",
  fontSize: 16,
  lineHeight: 1.7,
  margin: 0,
};

const overlinePill = (variant: "purple" | "muted"): CSSProperties => ({
  display: "inline-block",
  background:
    variant === "purple"
      ? "rgba(124,58,237,0.15)"
      : "rgba(255,255,255,0.06)",
  color:
    variant === "purple" ? "#a78bfa" : "rgba(255,255,255,0.45)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "4px 12px",
  borderRadius: 100,
  marginBottom: 16,
});

const labelText: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.4)",
  margin: "0 0 12px",
};

const priceDisplay: CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 40,
  fontWeight: 700,
  color: "#ffffff",
  margin: "0 0 4px",
};

const priceSuffix: CSSProperties = {
  fontSize: 16,
  color: "rgba(255,255,255,0.5)",
};

const annualNote: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 13,
  color: "rgba(255,255,255,0.4)",
  margin: "0 0 24px",
};

// ─── REUSABLE FEATURE CHECK ITEM ─────────────────────────────────────────────

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ color: "#2dd4bf", fontSize: 14, marginTop: 2, flexShrink: 0 }}>
        ✓
      </span>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 14,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {text}
      </span>
    </div>
  );
}

// ─── VIDEO BLOCK ──────────────────────────────────────────────────────────────

function FeatureVideo({ src }: { src: string }) {
  return (
    /* eslint-disable-next-line jsx-a11y/media-has-caption */
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
      <source src={src} type="video/mp4" />
    </video>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Smooth scroll */}
      <style dangerouslySetInnerHTML={{ __html: `html { scroll-behavior: smooth; }` }} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#080510" }}>
        {/* Announcement bar */}
        <div
          style={{
            background: "rgba(124,58,237,0.12)",
            borderBottom: "1px solid rgba(124,58,237,0.2)",
            textAlign: "center",
            padding: "10px 16px",
            color: "#a78bfa",
            fontSize: 13,
            fontFamily: "Inter, sans-serif",
          }}
        >
          ✦ Now in early access — built on LinkedIn&apos;s official API. No
          scraping. No risk.
        </div>

        {/* Hero content */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            paddingTop: 120,
            paddingBottom: 100,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <ScrollReveal>
            <div style={overlinePill("purple")}>LinkedIn Growth Intelligence</div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 6vw, 64px)",
                lineHeight: 1.1,
                color: "#ffffff",
                maxWidth: 720,
                margin: "0 auto 20px",
              }}
            >
              Your LinkedIn Growth Engine —{" "}
              <span style={{ color: "#a78bfa" }}>Powered by AI</span>
            </h1>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 20,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              A personal AI coach, analytics that explain why posts work, and a
              strategy that evolves with your results.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 36,
              }}
            >
              <a
                href="https://www.getvyral.io/beta"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#7c3aed",
                  color: "#ffffff",
                  borderRadius: 100,
                  padding: "14px 32px",
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(124,58,237,0.32)",
                  display: "inline-block",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Start free trial
              </a>
              <a
                href="#how-it-works"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.68)",
                  borderRadius: 100,
                  padding: "14px 32px",
                  fontSize: 16,
                  textDecoration: "none",
                  display: "inline-block",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                See how it works
              </a>
            </div>

            {/* Trust line */}
            <p
              style={{
                marginTop: 16,
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              14-day free trial · No credit card required · Built on
              LinkedIn&apos;s official API
            </p>
          </ScrollReveal>

          {/* Hero video */}
          <ScrollReveal delay={120}>
            <div style={{ marginTop: 56 }}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                  display: "block",
                }}
              >
                <source src="/vyral-hero-intro-v3.mp4" type="video/mp4" />
              </video>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — SOCIAL PROOF BAR
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "24px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Built on LinkedIn&apos;s official API · No browser extensions · No
          scraping · Account safety guaranteed
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — PAIN POINTS
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          style={{
            maxWidth: 860,
            margin: "0 auto",
            paddingTop: 88,
            paddingBottom: 88,
            paddingLeft: 48,
            paddingRight: 48,
            textAlign: "center",
          }}
        >
          <div style={overlinePill("muted")}>Sound familiar?</div>
          <h2 style={sectionHeading}>Sounds familiar?</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px 48px",
              marginTop: 48,
              textAlign: "left",
            }}
          >
            {[
              {
                emoji: "📉",
                title: "Posting consistently but engagement is flat",
                desc: "You're showing up every week but the numbers don't move. No idea what's working or why.",
              },
              {
                emoji: "🤖",
                title: "AI tools write posts that sound like everyone else",
                desc: "Generic templates, robotic tone. The content doesn't sound like you — and your audience can tell.",
              },
              {
                emoji: "📊",
                title: "Analytics show charts but never explain WHY",
                desc: "Lots of impressions data, zero insight. You can see what happened but not what to do about it.",
              },
              {
                emoji: "💸",
                title:
                  "LinkedIn courses cost $2,500 and teach outdated frameworks",
                desc: "Expensive, time-consuming, and built for a LinkedIn that no longer exists.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>
                  {item.emoji}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#ffffff",
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </p>
                <p style={bodyText}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: 32,
              color: "rgba(255,255,255,0.5)",
              marginTop: 80,
              marginBottom: 48,
            }}
          >
            There&apos;s a better way.
          </p>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          />
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — FEATURE DEEP-DIVES (alternating)
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 88 }}>
        {/* Row 1 — AI Coach: text left, video right */}
        <ScrollReveal>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div style={overlinePill("purple")}>AI Coach</div>
              <h2 style={sectionHeading}>
                AI Coach that writes in{" "}
                <span style={{ color: "#a78bfa" }}>YOUR</span> voice
              </h2>
              <p style={bodyText}>
                Learns from your top posts. Matches your tone, formatting, and
                style. Scores every draft on 6 dimensions. Like having a senior
                content strategist in your pocket.
              </p>
              <Link
                href="/ai-coach"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  color: "#a78bfa",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Learn more →
              </Link>
            </div>
            <FeatureVideo src="/vyral-the-coach.mp4" />
          </div>
        </ScrollReveal>

        {/* Row 2 — Analytics: video left, text right */}
        <ScrollReveal>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <FeatureVideo src="/vyral-analytics.mp4" />
            <div>
              <div style={overlinePill("purple")}>Analytics</div>
              <h2 style={sectionHeading}>
                Analytics that explain{" "}
                <span style={{ color: "#a78bfa" }}>why posts work</span>
              </h2>
              <p style={bodyText}>
                Not just charts — contextual insights that tell you why
                carousels outperform text posts and what hook styles drive
                engagement.
              </p>
              <Link
                href="/linkedin-analytics"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  color: "#a78bfa",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 3 — Strategy: text left, video right */}
        <ScrollReveal>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div style={overlinePill("purple")}>Strategy</div>
              <h2 style={sectionHeading}>
                Strategy that{" "}
                <span style={{ color: "#a78bfa" }}>evolves with you</span>
              </h2>
              <p style={bodyText}>
                Build a content strategy with the Strategy Builder, then watch
                VYRAL track alignment. Get nudged when you drift off-pillar.
              </p>
              <Link
                href="/how-it-works"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  color: "#a78bfa",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Learn more →
              </Link>
            </div>
            <FeatureVideo src="/vyral-data-analyst.mp4" />
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — FEATURE GRID
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "88px 48px",
            textAlign: "center",
          }}
        >
          <div style={overlinePill("muted")}>Features</div>
          <h2 style={sectionHeading}>
            Everything you need — nothing you don&apos;t
          </h2>
          <p
            style={{
              ...bodyText,
              maxWidth: 540,
              margin: "0 auto 48px",
            }}
          >
            A complete toolkit for LinkedIn creators who take growth seriously.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                emoji: "🤖",
                title: "AI Coach",
                desc: "Personal writing assistant that knows your voice",
                pro: false,
              },
              {
                emoji: "📊",
                title: "Full Analytics",
                desc: "Engagement, timing, and format insights",
                pro: true,
              },
              {
                emoji: "⭐",
                title: "Post Scoring",
                desc: "6-dimension quality scores for every draft",
                pro: false,
              },
              {
                emoji: "🎯",
                title: "Strategy Builder",
                desc: "Guided strategy creation and tracking",
                pro: true,
              },
              {
                emoji: "📅",
                title: "Content Calendar",
                desc: "Plan, schedule, and publish to LinkedIn",
                pro: false,
              },
              {
                emoji: "💬",
                title: "Data Analyst",
                desc: "Chat with your data using natural language",
                pro: true,
              },
              {
                emoji: "📚",
                title: "Knowledge Hub",
                desc: "LinkedIn growth frameworks and guides",
                pro: false,
              },
              {
                emoji: "🔍",
                title: "Creator Intelligence",
                desc: "Competitive analysis of other creators",
                pro: true,
              },
              {
                emoji: "🪝",
                title: "Hook Library",
                desc: "Never face a blank page again",
                pro: false,
              },
              {
                emoji: "💾",
                title: "Swipe File",
                desc: "Save and analyse inspiration posts",
                pro: true,
              },
            ].map((feat) => (
              <div key={feat.title} style={cardBase}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{feat.emoji}</span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#ffffff",
                    }}
                  >
                    {feat.title}
                  </span>
                  {feat.pro && (
                    <span
                      style={{
                        background: "rgba(124,58,237,0.2)",
                        color: "#c4b5fd",
                        fontSize: 10,
                        padding: "2px 7px",
                        borderRadius: 100,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Pro
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6 — HOW IT WORKS
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          id="how-it-works"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "88px 48px",
            textAlign: "center",
          }}
        >
          <div style={overlinePill("muted")}>Process</div>
          <h2 style={sectionHeading}>How it works</h2>
          <p
            style={{
              ...bodyText,
              maxWidth: 480,
              margin: "0 auto 56px",
            }}
          >
            Three simple steps that create a compounding content system.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              textAlign: "left",
            }}
          >
            {[
              {
                num: "01",
                emoji: "📥",
                title: "Import your LinkedIn posts",
                desc: "Connect your account or paste a CSV. Your entire post history, analysed in minutes.",
              },
              {
                num: "02",
                emoji: "🧠",
                title: "Get AI-powered strategy insights",
                desc: "VYRAL breaks down what works, builds your strategy, and starts coaching you.",
              },
              {
                num: "03",
                emoji: "🚀",
                title: "Write, publish, and grow",
                desc: "Create better content with AI, publish directly, and watch your results compound.",
              },
            ].map((step) => (
              <div key={step.num} style={cardBase}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: 64,
                    color: "rgba(124,58,237,0.25)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {step.num}
                </div>
                <div style={{ fontSize: 28, marginBottom: 12 }}>
                  {step.emoji}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#ffffff",
                    margin: "0 0 8px",
                  }}
                >
                  {step.title}
                </p>
                <p style={bodyText}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7 — WHAT MAKES VYRAL DIFFERENT
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "88px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={sectionHeading}>What makes VYRAL different</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginTop: 48,
              textAlign: "left",
            }}
          >
            {[
              {
                emoji: "🧠",
                title: "AI that learns YOUR voice",
                desc: "Not generic templates — content that actually sounds like you.",
              },
              {
                emoji: "📈",
                title: "Analytics that explain WHY",
                desc: "Not just charts — contextual insights that tell you why posts work.",
              },
              {
                emoji: "🔒",
                title:
                  "Built on LinkedIn's official API — safe by design",
                desc: "No browser extensions, no risk to your account. Enterprise-grade security.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  ...cardBase,
                  borderLeft: "2px solid rgba(124,58,237,0.5)",
                  paddingLeft: 24,
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 12 }}>
                  {item.emoji}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#ffffff",
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </p>
                <p style={bodyText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8 — PRICING PREVIEW
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "88px 48px",
            textAlign: "center",
          }}
        >
          <div style={overlinePill("muted")}>Pricing</div>
          <h2 style={sectionHeading}>Simple, transparent pricing</h2>
          <p style={{ ...bodyText, maxWidth: 480, margin: "0 auto 32px" }}>
            Start with a 14-day free trial. No credit card required.
          </p>

          {/* Trial banner */}
          <div
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: 10,
              padding: "12px 20px",
              maxWidth: 680,
              margin: "0 auto 40px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "#a78bfa",
                margin: 0,
              }}
            >
              ✦ Every plan starts with a 14-day free trial — full Pro access,
              no credit card required.
            </p>
          </div>

          {/* Pricing cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              maxWidth: 960,
              margin: "0 auto",
              textAlign: "left",
              alignItems: "start",
            }}
          >
            {/* ── CREATOR ── */}
            <div style={cardBase}>
              <p style={labelText}>CREATOR</p>
              <p style={priceDisplay}>
                $49
                <span style={priceSuffix}>/mo</span>
              </p>
              <p style={annualNote}>or $39/mo · Save 20% with annual</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  "Full AI Coach",
                  "Ideas Generator",
                  "Blueprint (create & edit)",
                  "Campaigns",
                  "Content Calendar & Publishing",
                  "Weekly Performance Reviews",
                  "Full Analytics",
                  "250 AI runs/month",
                ].map((f) => (
                  <CheckItem key={f} text={f} />
                ))}
              </div>
              <a
                href="https://www.getvyral.io/beta"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#7c3aed",
                  color: "#ffffff",
                  borderRadius: 10,
                  padding: "12px 20px",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Start free trial
              </a>
            </div>

            {/* ── PRO (highlighted) ── */}
            <div>
              <div style={{ textAlign: "center", marginBottom: 8 }}>
                <span
                  style={{
                    background: "rgba(124,58,237,0.2)",
                    color: "#c4b5fd",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 100,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Most Popular
                </span>
              </div>
              <div
                style={{
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.45)",
                  borderRadius: 14,
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    ...labelText,
                    color: "#a78bfa",
                  }}
                >
                  PRO
                </p>
                <p style={priceDisplay}>
                  $99
                  <span style={priceSuffix}>/mo</span>
                </p>
                <p style={annualNote}>or $79/mo · Save 20% with annual</p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.4)",
                    margin: "0 0 12px",
                  }}
                >
                  Everything in Creator, plus:
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 28,
                  }}
                >
                  {[
                    "Improve (patterns, timing, suggestions)",
                    "Data Analyst",
                    "Swipe File",
                    "Blueprint Strategy Inference",
                    "Unlimited AI runs",
                  ].map((f) => (
                    <CheckItem key={f} text={f} />
                  ))}
                </div>
                <a
                  href="https://www.getvyral.io/beta"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "#7c3aed",
                    color: "#ffffff",
                    borderRadius: 10,
                    padding: "12px 20px",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(124,58,237,0.35)",
                  }}
                >
                  Start free trial
                </a>
              </div>
            </div>

            {/* ── TEAM ── */}
            <div style={cardBase}>
              <p style={labelText}>TEAM</p>
              <p style={priceDisplay}>Custom</p>
              <p style={annualNote}>For teams and agencies</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  "Everything in Pro",
                  "Team workspaces",
                  "Custom integrations",
                  "Dedicated account manager",
                  "Custom onboarding",
                ].map((f) => (
                  <CheckItem key={f} text={f} />
                ))}
              </div>
              <Link
                href="/contact"
                style={{
                  display: "block",
                  background: "transparent",
                  border: "1px solid rgba(124,58,237,0.4)",
                  color: "#a78bfa",
                  borderRadius: 10,
                  padding: "12px 20px",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* See full pricing */}
          <Link
            href="/pricing"
            style={{
              display: "inline-block",
              marginTop: 32,
              color: "#a78bfa",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            See full pricing →
          </Link>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9 — KNOWLEDGE HUB CTA
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          style={{
            background: "rgba(124,58,237,0.05)",
            borderTop: "1px solid rgba(124,58,237,0.12)",
            borderBottom: "1px solid rgba(124,58,237,0.12)",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ fontSize: 40, marginBottom: 20 }}>📚</div>
            <h2 style={sectionHeading}>Learn LinkedIn growth for free</h2>
            <p
              style={{
                ...bodyText,
                maxWidth: 540,
                margin: "0 auto 32px",
              }}
            >
              The Knowledge Hub is packed with frameworks, guides, and
              strategies — free for every VYRAL user. No paywall, no upsell.
            </p>
            <a
              href="https://www.getvyral.io/beta"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.68)",
                borderRadius: 100,
                padding: "12px 28px",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Start learning for free →
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "88px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...sectionHeading, fontSize: 40 }}>
            Start growing on LinkedIn today
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 36px",
            }}
          >
            14-day free Pro trial · No credit card required
          </p>
          <a
            href="https://www.getvyral.io/beta"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "#ffffff",
              borderRadius: 100,
              padding: "15px 32px",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(124,58,237,0.32)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Sign up for early access
          </a>
        </section>
      </ScrollReveal>
    </>
  );
}
