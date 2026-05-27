import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Lightbulb, Calendar, TrendingUp, RefreshCw } from "lucide-react";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "How VYRAL Works — Blueprint, Create, Analyze, Improve",
  description:
    "Blueprint → Create → Analyze → Improve. A closed feedback loop that makes your LinkedIn content better every week.",
  alternates: { canonical: "https://www.getvyral.io/how-it-works" },
  openGraph: {
    title: "How VYRAL Works — Blueprint, Create, Analyze, Improve",
    description:
      "A closed feedback loop that makes your LinkedIn content better every week.",
    url: "https://www.getvyral.io/how-it-works",
    images: [
      {
        url: "https://www.getvyral.io/og-default.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── SHARED STYLES ────────────────────────────────────────────────────────────

const inter: CSSProperties = { fontFamily: "Inter, sans-serif" };

const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 28,
};

const sectionH2: CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 44,
  lineHeight: 1.15,
  color: "#ffffff",
  margin: "0 0 14px",
};

const sectionSubtext: CSSProperties = {
  ...inter,
  fontSize: 16,
  color: "rgba(255,255,255,0.5)",
  margin: 0,
  lineHeight: 1.65,
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Set your Blueprint",
    body: "Define who you are, who you serve, what you talk about, and what your content should achieve.",
    Icon: Lightbulb,
  },
  {
    num: "02",
    title: "Write, publish & track",
    body: "Write posts with your AI Coach, publish directly to LinkedIn, and track performance automatically. No copy-pasting, no manual data entry.",
    Icon: Calendar,
  },
  {
    num: "03",
    title: "Analyze & improve",
    body: "Understand performance with Analytics + Performance Lab, see patterns, get recommendations, refine your strategy.",
    Icon: TrendingUp,
  },
];

const weekSchedule = [
  {
    day: "Monday",
    title: "Plan the week",
    body: "Review your Blueprint, set campaign goals, and plan your posting schedule for the week ahead.",
  },
  {
    day: "During the week",
    title: "AI-assisted content",
    body: "Use AI Coach to write posts, generate ideas on demand, and let the scheduler handle publishing.",
  },
  {
    day: "Friday",
    title: "Review & adjust",
    body: "Check Analytics + Performance Lab insights, see what worked, adjust your strategy for next week.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <div style={{ background: "#080510", color: "#ffffff" }}>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          padding: "80px 24px 0",
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
          How VYRAL fits into your week
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 52px)",
            lineHeight: 1.08,
            color: "#ffffff",
            margin: "0 0 20px",
          }}
        >
          Turn LinkedIn into a repeatable content engine
        </h1>

        <p
          style={{
            ...inter,
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Blueprint → Create → Analyze → Improve. A closed feedback loop that
          makes you better every week.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 28,
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
            href="/product"
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
            See the product
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — 3-STEP CARDS
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px 0",
          textAlign: "center",
        }}
      >
        <h2 style={sectionH2}>How VYRAL works in practice</h2>
        <p style={sectionSubtext}>
          Three simple steps that create a compounding content system
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginTop: 48,
            textAlign: "left",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                ...cardStyle,
                borderLeft: "2px solid rgba(124,58,237,0.4)",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 64,
                  color: "rgba(124,58,237,0.2)",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  ...inter,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#ffffff",
                  margin: "8px 0 0",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  ...inter,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                  margin: "8px 0 0",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — FEEDBACK LOOP
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px 0",
          textAlign: "center",
        }}
      >
        <h2 style={sectionH2}>Strategy → Execution → Feedback</h2>
        <p style={sectionSubtext}>
          VYRAL is a closed feedback loop, not just a one-off AI tool or
          analytics dashboard
        </p>

        {/* Loop card */}
        <div
          style={{
            maxWidth: 680,
            margin: "48px auto 0",
            ...cardStyle,
            padding: 40,
          }}
        >
          {/* Three nodes */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Node 1 — Blueprint */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(124,58,237,0.12)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <Lightbulb size={18} color="#7c3aed" />
              </div>
              <div
                style={{
                  ...inter,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginTop: 10,
                }}
              >
                Blueprint
              </div>
              <div
                style={{
                  ...inter,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 2,
                }}
              >
                Your strategy
              </div>
            </div>

            {/* Arrow */}
            <div
              style={{
                ...inter,
                fontSize: 20,
                color: "rgba(255,255,255,0.2)",
                alignSelf: "center",
                marginTop: -8,
              }}
            >
              →
            </div>

            {/* Node 2 — Content & Publish */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(124,58,237,0.12)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <Calendar size={18} color="#7c3aed" />
              </div>
              <div
                style={{
                  ...inter,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginTop: 10,
                }}
              >
                Content & Publish
              </div>
              <div
                style={{
                  ...inter,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 2,
                }}
              >
                Write & publish to LinkedIn
              </div>
            </div>

            {/* Arrow */}
            <div
              style={{
                ...inter,
                fontSize: 20,
                color: "rgba(255,255,255,0.2)",
                alignSelf: "center",
                marginTop: -8,
              }}
            >
              →
            </div>

            {/* Node 3 — Analytics & Lab */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(124,58,237,0.12)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <TrendingUp size={18} color="#7c3aed" />
              </div>
              <div
                style={{
                  ...inter,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginTop: 10,
                }}
              >
                Analytics & Lab
              </div>
              <div
                style={{
                  ...inter,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 2,
                }}
              >
                Your insights
              </div>
            </div>
          </div>

          {/* Feedback line */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 20,
              marginTop: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <RefreshCw size={16} color="rgba(255,255,255,0.45)" />
            <p
              style={{
                ...inter,
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                lineHeight: 1.6,
                textAlign: "left",
              }}
            >
              Every week, insights feed back into your Blueprint, making your
              strategy sharper and content better
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — WEEKLY SCHEDULE
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px 0",
          textAlign: "center",
        }}
      >
        <h2 style={sectionH2}>What a week with VYRAL looks like</h2>
        <p style={sectionSubtext}>
          A simple rhythm that compounds into real growth
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginTop: 48,
            textAlign: "left",
          }}
        >
          {weekSchedule.map((slot) => (
            <div key={slot.day} style={cardStyle}>
              <div
                style={{
                  ...inter,
                  fontSize: 10,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  color: "#a78bfa",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {slot.day}
              </div>
              <h3
                style={{
                  ...inter,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {slot.title}
              </h3>
              <p
                style={{
                  ...inter,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                  margin: "8px 0 0",
                }}
              >
                {slot.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
          padding: "80px 24px 72px",
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
          Ready to build your content engine?
        </h2>
        <p
          style={{
            ...inter,
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 32px",
          }}
        >
          Stop posting blindly. Start improving on purpose.
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
  );
}
