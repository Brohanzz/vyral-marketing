import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "One Platform for LinkedIn Growth — VYRAL",
  description:
    "AI coaching, deep analytics, strategy builder, content calendar, and competitive intelligence — everything LinkedIn creators need in one platform.",
  alternates: { canonical: "https://www.getvyral.io/product" },
  openGraph: {
    title: "One Platform for LinkedIn Growth — VYRAL",
    description:
      "AI coaching, analytics that explain WHY, a strategy that evolves, and everything you need to write, publish, and grow.",
    url: "https://www.getvyral.io/product",
    images: [
      {
        url: "https://www.getvyral.io/og-default.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
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
  ],
};

// ─── FEATURE SECTIONS DATA ────────────────────────────────────────────────────

type FeatureSection = {
  layout: "text-left" | "video-left";
  video: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  link: string;
  linkText: string;
};

const featureSections: FeatureSection[] = [
  {
    layout: "text-left",
    video: "/vyral-the-coach.mp4",
    badge: "AI & COACHING",
    title: "AI Coach that writes in your voice",
    description:
      "Your personal LinkedIn coach learns from your top posts, matches your tone and style, and scores every draft on 6 dimensions. Get brainstorming, critique, rewriting, and optimization — all aligned to your strategy.",
    features: [
      "Voice-matched writing assistance",
      "6-dimension draft scoring",
      "Ideas generation from your data",
      "Hook Library with proven openers",
    ],
    link: "/ai-coach",
    linkText: "Explore AI Coach →",
  },
  {
    layout: "video-left",
    video: "/vyral-analytics.mp4",
    badge: "ANALYTICS",
    title: "Analytics that explain why posts work",
    description:
      "Go beyond vanity metrics. See contextual insights that tell you why carousels outperform text posts, what hook styles drive engagement, and when your audience is most active.",
    features: [
      "Full Performance Lab",
      "Timing & pattern analysis",
      "Data Analyst — chat with your data",
      "EMV tracking & weekly reviews",
    ],
    link: "/linkedin-analytics",
    linkText: "Explore Analytics →",
  },
  {
    layout: "text-left",
    video: "/vyral-data-analyst.mp4",
    badge: "STRATEGY",
    title: "Build a strategy that evolves with you",
    description:
      "Most LinkedIn tools help you create content. VYRAL helps you create the strategy behind the content. The Strategy Builder guides you through 7 steps, and VYRAL tracks alignment over time.",
    features: [
      "7-step guided strategy builder",
      "Auto-Blueprint from imported posts",
      "Content pillar alignment tracking",
      "Strategy nudges when you drift",
    ],
    link: "/product/blueprint-ai",
    linkText: "Explore Strategy Builder →",
  },
  {
    layout: "video-left",
    video: "/vyral-the-coach.mp4",
    badge: "CONTENT & PUBLISHING",
    title: "Write, schedule, and publish — all in one place",
    description:
      "Plan your content calendar, schedule posts, and publish directly to LinkedIn. Track campaigns, manage drafts, and never miss a posting slot.",
    features: [
      "Content calendar with scheduling",
      "Direct LinkedIn publishing",
      "Campaign tracking & goals",
      "Draft management with folders",
    ],
    link: "/how-it-works",
    linkText: "See how it works →",
  },
  {
    layout: "text-left",
    video: "/vyral-analytics.mp4",
    badge: "GROWTH & INTELLIGENCE",
    title: "Competitive analysis and growth tools",
    description:
      "Analyze other creators' strategies with Creator Intelligence, save inspiration to your Swipe File, build playbooks from winning patterns, and showcase your results on a public Proof Page.",
    features: [
      "Creator Intelligence",
      "Swipe File for inspiration",
      "Playbook builder",
      "Public Proof Page",
    ],
    link: "/solutions/creators",
    linkText: "See creator tools →",
  },
];

// ─── DIFFERENTIATORS DATA ─────────────────────────────────────────────────────

const differentiators = [
  {
    emoji: "🧠",
    title: "AI that learns YOUR voice",
    body: "Most tools generate generic content. VYRAL analyzes your top posts and matches your exact writing style.",
  },
  {
    emoji: "📊",
    title: "Analytics that explain WHY",
    body: "Not just charts. Contextual insights that tell you why certain posts outperform others.",
  },
  {
    emoji: "🎯",
    title: "Strategy Builder",
    body: "Guided 7-step strategy creation, not just post scheduling. Build the strategy behind the content.",
  },
  {
    emoji: "💬",
    title: "Data Analyst",
    body: "Ask questions about your LinkedIn data in plain English and get instant, actionable answers.",
  },
  {
    emoji: "📚",
    title: "Knowledge Hub",
    body: "LinkedIn growth frameworks, guides, and strategies — free for every VYRAL user, on every plan.",
  },
  {
    emoji: "🛠",
    title: "Full creator toolkit",
    body: "Content calendar, LinkedIn publishing, campaigns, swipe file, playbooks, and competitive intelligence — all in one.",
  },
];

// ─── SHARED STYLES ────────────────────────────────────────────────────────────

const inter: CSSProperties = { fontFamily: "Inter, sans-serif" };

const sectionHeading: CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 40,
  lineHeight: 1.15,
  color: "#ffffff",
  margin: "0 0 16px",
};

const bodyText: CSSProperties = {
  ...inter,
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: 0,
};

const featureBadge: CSSProperties = {
  display: "inline-block",
  color: "#a78bfa",
  background: "rgba(124,58,237,0.12)",
  border: "1px solid rgba(124,58,237,0.25)",
  borderRadius: 100,
  fontSize: 10,
  letterSpacing: "1.4px",
  textTransform: "uppercase",
  padding: "4px 14px",
  marginBottom: 18,
  ...inter,
  fontWeight: 600,
};

// ─── VIDEO ELEMENT ────────────────────────────────────────────────────────────

function FeatureVideo({ src }: { src: string }) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          minHeight: 280,
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ProductPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div style={{ background: "#080510", color: "#ffffff" }}>

        {/* ══════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════════════════════ */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "80px 48px 60px",
            textAlign: "center",
          }}
        >
          {/* Overline */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.45)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 100,
              marginBottom: 20,
              ...inter,
            }}
          >
            Product Overview
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 52px)",
              lineHeight: 1.15,
              color: "#ffffff",
              margin: "0 0 20px",
            }}
          >
            One platform for{" "}
            <span style={{ color: "#a78bfa" }}>LinkedIn growth</span>
          </h1>

          <p
            style={{
              ...inter,
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 560,
              margin: "0 auto 36px",
              lineHeight: 1.65,
            }}
          >
            AI coaching, analytics that explain WHY, a strategy that evolves,
            and everything you need to write, publish, and grow — in one place.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://app.getvyral.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#7c3aed",
                color: "#ffffff",
                borderRadius: 100,
                padding: "13px 26px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                ...inter,
              }}
            >
              Sign up for early launch
            </a>
            <Link
              href="/pricing"
              style={{
                border: "1px solid rgba(255,255,255,0.16)",
                background: "transparent",
                borderRadius: 100,
                padding: "13px 22px",
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                display: "inline-block",
                ...inter,
              }}
            >
              See pricing
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — FEATURE DEEP-DIVES
        ══════════════════════════════════════════════════════════ */}
        <section>
          {featureSections.map((sec, i) => {
            const textCol = (
              <div style={{ maxWidth: 440 }}>
                <div style={featureBadge}>{sec.badge}</div>
                <h2 style={sectionHeading}>{sec.title}</h2>
                <p style={{ ...bodyText, marginBottom: 24 }}>{sec.description}</p>

                {/* Feature list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {sec.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#a78bfa",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          ...inter,
                          fontSize: 14,
                          color: "rgba(255,255,255,0.65)",
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={sec.link}
                  style={{
                    ...inter,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#a78bfa",
                    textDecoration: "none",
                  }}
                >
                  {sec.linkText}
                </Link>
              </div>
            );

            const videoCol = <FeatureVideo src={sec.video} />;

            return (
              <div key={sec.badge}>
                {/* Divider (not before first) */}
                {i > 0 && (
                  <div
                    style={{
                      maxWidth: 800,
                      margin: "0 auto",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  />
                )}

                {/* Grid row */}
                <div
                  style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "56px 48px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 64,
                    alignItems: "center",
                  }}
                >
                  {sec.layout === "text-left" ? (
                    <>
                      {textCol}
                      {videoCol}
                    </>
                  ) : (
                    <>
                      {videoCol}
                      {textCol}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 — WHAT MAKES VYRAL DIFFERENT
        ══════════════════════════════════════════════════════════ */}
        <section
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "80px 48px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1.15,
                color: "#ffffff",
                margin: "0 0 12px",
              }}
            >
              What makes VYRAL different
            </h2>
            <p
              style={{
                ...inter,
                fontSize: 16,
                color: "rgba(255,255,255,0.45)",
                margin: 0,
              }}
            >
              VYRAL is the only LinkedIn growth platform that combines all of these.
            </p>
          </div>

          {/* 3-col card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {differentiators.map((d) => (
              <div
                key={d.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "2px solid rgba(124,58,237,0.5)",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                {/* Emoji box */}
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    marginBottom: 14,
                  }}
                >
                  {d.emoji}
                </div>
                <h3
                  style={{
                    ...inter,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: "0 0 8px",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    ...inter,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.48)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 — KNOWLEDGE HUB CTA
        ══════════════════════════════════════════════════════════ */}
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
            <div style={{ fontSize: 36, marginBottom: 20 }}>📚</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 38,
                lineHeight: 1.15,
                color: "#ffffff",
                margin: "0 0 16px",
              }}
            >
              Plus: Free LinkedIn growth education
            </h2>
            <p
              style={{
                ...inter,
                fontSize: 16,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: 520,
                margin: "0 auto 32px",
              }}
            >
              The Knowledge Hub is packed with frameworks, guides, and
              strategies — free for every VYRAL user.
            </p>
            <Link
              href="/how-it-works"
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "transparent",
                color: "rgba(255,255,255,0.68)",
                borderRadius: 100,
                padding: "12px 28px",
                ...inter,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Start learning →
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 — FINAL CTA
        ══════════════════════════════════════════════════════════ */}
        <section
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "80px 48px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.15,
              color: "#ffffff",
              margin: "0 0 16px",
            }}
          >
            Ready to see it in action?
          </h2>
          <p
            style={{
              ...inter,
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 32px",
            }}
          >
            14-day Pro trial · No credit card required
          </p>
          <a
            href="https://app.getvyral.io"
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
              ...inter,
            }}
          >
            Sign up for early launch
          </a>
        </section>

      </div>
    </>
  );
}
