"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import type { CSSProperties } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type BillingInterval = "monthly" | "yearly";

// ─── PLAN DATA ────────────────────────────────────────────────────────────────

const creatorFeatures = [
  "Full AI Coach",
  "Ideas Generator",
  "Blueprint (create & edit)",
  "Campaigns",
  "Content Calendar & Publishing",
  "Weekly Performance Reviews",
  "Full Analytics",
  "Claude Sonnet AI model",
];

const proFeatures = [
  "Everything in Creator plus:",
  "Improve (patterns, timing, suggestions)",
  "Data Analyst",
  "Swipe File",
  "Blueprint Strategy Inference",
  "Advanced Analytics",
];

const teamFeatures = [
  "Everything in Pro plus:",
  "Multiple team seats",
  "Team performance dashboard",
  "Aggregate analytics across members",
  "Centralized billing",
  "Priority support",
  "Dedicated onboarding",
];

// ─── COMPARISON TABLE DATA ────────────────────────────────────────────────────

type ComparisonRow = {
  label: string;
  creator: boolean | string;
  pro: boolean | string;
};

type ComparisonGroup = { heading: string; rows: ComparisonRow[] };

const comparisonGroups: ComparisonGroup[] = [
  {
    heading: "AI & Coaching",
    rows: [
      { label: "AI coaching messages", creator: "250/mo", pro: "Unlimited" },
      { label: "AI model", creator: "Claude Sonnet", pro: "Claude Sonnet" },
      { label: "Coach (brainstorm, rewrite, critique)", creator: true, pro: true },
      { label: "Ideas Generator", creator: true, pro: true },
      { label: "Data Analyst", creator: false, pro: true },
      { label: "Improve (patterns, timing, suggestions)", creator: false, pro: true },
    ],
  },
  {
    heading: "Analytics & Insights",
    rows: [
      { label: "Full analytics & Performance Lab", creator: true, pro: true },
      { label: "Weekly Performance Reviews", creator: true, pro: true },
      { label: "Advanced Analytics", creator: false, pro: true },
      { label: "Swipe File", creator: false, pro: true },
    ],
  },
  {
    heading: "Strategy & Content",
    rows: [
      { label: "Blueprint (create & edit)", creator: true, pro: true },
      { label: "Blueprint Strategy Inference", creator: false, pro: true },
      { label: "Content Calendar & Publishing", creator: true, pro: true },
      { label: "Campaigns", creator: true, pro: true },
    ],
  },
  {
    heading: "Publishing & Growth",
    rows: [
      { label: "LinkedIn auto-publishing", creator: true, pro: true },
      { label: "Public Proof Page", creator: true, pro: true },
    ],
  },
];

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Can I change plans anytime?",
    a: "Yes. Upgrade or downgrade anytime from your Settings. Changes take effect immediately. If you downgrade, you keep access until the end of your current billing period.",
  },
  {
    q: "What happens when I hit my AI limit?",
    a: "You'll see a friendly prompt to upgrade. Your analytics, Knowledge Hub, and all non-AI features continue working normally. AI limits reset on the 1st of each month.",
  },
  {
    q: "Do I need a credit card for the trial?",
    a: "No. Your 14-day trial starts immediately — no card required. You only enter payment info when you decide to subscribe.",
  },
  {
    q: "What's the difference between Creator and Pro?",
    a: "Creator gives you everything you need to write, analyze, and publish great LinkedIn content. Pro adds the intelligence layer: a Data Analyst you can chat with, Improve for pattern-based suggestions, Swipe File for competitive inspiration, and Blueprint Strategy Inference.",
  },
  {
    q: "How is VYRAL different from other LinkedIn tools?",
    a: "Most LinkedIn tools focus on scheduling or generating generic content. VYRAL goes deeper: our AI Coach learns your actual writing voice from your posts, the Data Analyst explains WHY your posts perform the way they do, and the Blueprint helps you build a real content strategy — not just create posts.",
  },
  {
    q: "Is my LinkedIn data secure?",
    a: "Yes. We use OAuth for LinkedIn connection (we never see your password), all data is encrypted at rest and in transit, and we never share or sell your data. See our Privacy Policy and Security page for details.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from Settings > Billing anytime. You keep access until the end of your billing period. No cancellation fees, no questions asked.",
  },
  {
    q: "What's included in the Team plan?",
    a: "Team is built for agencies, ghostwriters, and content teams. It includes multiple seats, a team performance dashboard, aggregate analytics across all members, centralized billing, priority support, and dedicated onboarding. Contact us to get a custom quote.",
  },
];

// ─── SHARED STYLES ────────────────────────────────────────────────────────────

const bodyFont: CSSProperties = {
  fontFamily: "Inter, sans-serif",
};

const cardBase: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: "28px 24px",
};

// ─── COMPARISON CELL ─────────────────────────────────────────────────────────

function ComparisonCell({ value, isPro }: { value: boolean | string; isPro: boolean }) {
  if (typeof value === "string") {
    return (
      <span
        style={{
          ...bodyFont,
          fontSize: 13,
          fontWeight: isPro ? 600 : 400,
          color: isPro ? "#5eead4" : "rgba(255,255,255,0.55)",
        }}
      >
        {value}
      </span>
    );
  }
  if (value === true) {
    return <Check size={16} style={{ color: "#5eead4", flexShrink: 0 }} />;
  }
  return (
    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16 }}>—</span>
  );
}

// ─── MAIN CLIENT COMPONENT ────────────────────────────────────────────────────

export default function PricingClient() {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>("monthly");
  const [showComparison, setShowComparison] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isYearly = billingInterval === "yearly";
  const launchActive = !isYearly; // launch offer only on monthly

  return (
    <div style={{ background: "#080510", color: "#ffffff", minHeight: "100vh" }}>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 700,
          margin: "0 auto",
          paddingTop: 80,
          paddingBottom: 48,
          paddingLeft: 24,
          paddingRight: 24,
          textAlign: "center",
        }}
      >
        {/* Overline */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.45)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 100,
            marginBottom: 20,
            ...bodyFont,
          }}
        >
          Pricing
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 52px)",
            lineHeight: 1.1,
            color: "#ffffff",
            margin: "0 0 16px",
          }}
        >
          Simple pricing that grows with you
        </h1>

        <p
          style={{
            ...bodyFont,
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 36px",
            lineHeight: 1.6,
          }}
        >
          Start with a 14-day free trial. No credit card required.
        </p>

        {/* Billing toggle */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100,
            padding: "4px 6px",
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setBillingInterval("monthly")}
            style={{
              ...bodyFont,
              fontSize: 14,
              fontWeight: 500,
              padding: "7px 18px",
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              background: !isYearly ? "#7c3aed" : "transparent",
              color: !isYearly ? "#ffffff" : "rgba(255,255,255,0.5)",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("yearly")}
            style={{
              ...bodyFont,
              fontSize: 14,
              fontWeight: 500,
              padding: "7px 18px",
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              background: isYearly ? "#7c3aed" : "transparent",
              color: isYearly ? "#ffffff" : "rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Yearly
            <span
              style={{
                background: "rgba(45,212,191,0.15)",
                color: "#2dd4bf",
                fontSize: 11,
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 100,
                letterSpacing: "0.04em",
              }}
            >
              Save 20%
            </span>
          </button>
        </div>

        {/* Launch banner */}
        {launchActive && (
          <div style={{ marginBottom: 8 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 100,
                padding: "8px 20px",
                ...bodyFont,
                fontSize: 13,
                color: "#a78bfa",
              }}
            >
              🚀 Launch offer: 50% off your first 3 months
            </span>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — PRICING CARDS
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 80,
        }}
      >
        {/* Trial banner */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              ...bodyFont,
              fontSize: 14,
              color: "#a78bfa",
            }}
          >
            ✦ Every plan starts with a 14-day free trial — full Pro access, no credit card required.
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            alignItems: "start",
          }}
        >
          {/* ── CREATOR ── */}
          <div>
            {/* Spacer matching Pro badge height */}
            <div style={{ height: 28 }} />
            <div style={cardBase}>
              <p
                style={{
                  ...bodyFont,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  margin: "0 0 12px",
                }}
              >
                CREATOR
              </p>

              {/* Price display */}
              {launchActive ? (
                <div style={{ marginBottom: 4 }}>
                  <span
                    style={{
                      ...bodyFont,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "line-through",
                      marginRight: 8,
                    }}
                  >
                    $49
                  </span>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 40,
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    $24.50
                    <span style={{ ...bodyFont, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/mo</span>
                  </span>
                  <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                    For 3 months, then $49/mo after
                  </p>
                </div>
              ) : isYearly ? (
                <div style={{ marginBottom: 4 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    $39<span style={{ ...bodyFont, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/mo</span>
                  </p>
                  <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                    Billed annually ($468/year)
                  </p>
                </div>
              ) : (
                <div style={{ marginBottom: 4 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    $49<span style={{ ...bodyFont, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/mo</span>
                  </p>
                </div>
              )}

              <p style={{ ...bodyFont, fontSize: 13, color: "#2dd4bf", margin: "0 0 6px" }}>
                14-day free trial
              </p>
              <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 24px" }}>
                Everything you need to grow on LinkedIn
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {creatorFeatures.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Check size={14} style={{ color: "#2dd4bf", marginTop: 3, flexShrink: 0 }} />
                    <span style={{ ...bodyFont, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </div>
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
                  ...bodyFont,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Start free trial
              </a>
            </div>
          </div>

          {/* ── PRO ── */}
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
                  ...bodyFont,
                }}
              >
                Most Popular
              </span>
            </div>
            <div
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.5)",
                borderRadius: 14,
                padding: "28px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <p
                  style={{
                    ...bodyFont,
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#a78bfa",
                    margin: 0,
                  }}
                >
                  PRO
                </p>
                {launchActive && (
                  <span
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      color: "#c4b5fd",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: 100,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      ...bodyFont,
                    }}
                  >
                    Launch Offer
                  </span>
                )}
              </div>

              {/* Price display */}
              {launchActive ? (
                <div style={{ marginBottom: 4 }}>
                  <span
                    style={{
                      ...bodyFont,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "line-through",
                      marginRight: 8,
                    }}
                  >
                    $99
                  </span>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 40,
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    $49.50
                    <span style={{ ...bodyFont, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/mo</span>
                  </span>
                  <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                    For 3 months, then $99/mo after
                  </p>
                </div>
              ) : isYearly ? (
                <div style={{ marginBottom: 4 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    $79<span style={{ ...bodyFont, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/mo</span>
                  </p>
                  <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                    Billed annually ($958/year)
                  </p>
                </div>
              ) : (
                <div style={{ marginBottom: 4 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    $99<span style={{ ...bodyFont, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/mo</span>
                  </p>
                </div>
              )}

              <p style={{ ...bodyFont, fontSize: 13, color: "#2dd4bf", margin: "0 0 6px" }}>
                14-day free trial
              </p>
              <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 24px" }}>
                Content intelligence for serious creators
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {proFeatures.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    {f.endsWith(":") ? (
                      <span style={{ ...bodyFont, fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.38)", width: "100%" }}>
                        {f}
                      </span>
                    ) : (
                      <>
                        <Check size={14} style={{ color: "#a78bfa", marginTop: 3, flexShrink: 0 }} />
                        <span style={{ ...bodyFont, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{f}</span>
                      </>
                    )}
                  </div>
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
                  ...bodyFont,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
                }}
              >
                Start free trial
              </a>
            </div>
          </div>

          {/* ── TEAM ── */}
          <div>
            <div style={{ height: 28 }} />
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(167,139,250,0.15)",
                borderRadius: 14,
                padding: "28px 24px",
              }}
            >
              <p
                style={{
                  ...bodyFont,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  margin: "0 0 12px",
                }}
              >
                TEAM
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 4px",
                }}
              >
                Custom
              </p>
              <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "0 0 6px" }}>
                Pricing based on team size
              </p>
              <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 24px" }}>
                For agencies, ghostwriters & content teams
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {teamFeatures.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    {f.endsWith(":") ? (
                      <span style={{ ...bodyFont, fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.38)", width: "100%" }}>
                        {f}
                      </span>
                    ) : (
                      <>
                        <Check size={14} style={{ color: "#a78bfa", marginTop: 3, flexShrink: 0 }} />
                        <span style={{ ...bodyFont, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{f}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                style={{
                  display: "block",
                  background: "transparent",
                  border: "1px solid rgba(167,139,250,0.3)",
                  color: "#a78bfa",
                  borderRadius: 10,
                  padding: "12px 20px",
                  textAlign: "center",
                  ...bodyFont,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — COMPARISON TABLE
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "48px 24px 80px",
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
            margin: "0 0 24px",
          }}
        >
          Creator vs Pro — what&apos;s different?
        </h2>

        {/* Toggle button */}
        <button
          onClick={() => setShowComparison(!showComparison)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#a78bfa",
            ...bodyFont,
            fontSize: 15,
            fontWeight: 500,
            marginBottom: 32,
            padding: 0,
          }}
        >
          {showComparison ? "Hide comparison" : "Show full comparison →"}
          <ChevronDown
            size={16}
            style={{
              transform: showComparison ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s",
            }}
          />
        </button>

        {showComparison && (
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 120px",
                padding: "12px 20px",
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span style={{ ...bodyFont, fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Feature</span>
              <span style={{ ...bodyFont, fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center" }}>Creator</span>
              <span style={{ ...bodyFont, fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center" }}>Pro</span>
            </div>

            {comparisonGroups.map((group) => (
              <div key={group.heading}>
                {/* Group heading */}
                <div
                  style={{
                    padding: "10px 20px",
                    background: "rgba(124,58,237,0.06)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    style={{
                      ...bodyFont,
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#a78bfa",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.heading}
                  </span>
                </div>

                {/* Rows */}
                {group.rows.map((row, i) => (
                  <div
                    key={row.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 120px 120px",
                      padding: "12px 20px",
                      borderBottom:
                        i < group.rows.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : "1px solid rgba(255,255,255,0.06)",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ ...bodyFont, fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                      {row.label}
                    </span>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ComparisonCell value={row.creator} isPro={false} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ComparisonCell value={row.pro} isPro={true} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Footer note */}
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p style={{ ...bodyFont, fontSize: 13, color: "rgba(255,255,255,0.38)", margin: 0 }}>
                Team plan includes everything in Pro plus team seats, aggregate analytics, and dedicated support.{" "}
                <Link href="/contact" style={{ color: "#a78bfa", textDecoration: "none" }}>
                  Contact us for a custom quote →
                </Link>
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — FAQ ACCORDION
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.15,
            color: "#ffffff",
            margin: "0 0 40px",
            textAlign: "center",
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    ...bodyFont,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#ffffff",
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    flexShrink: 0,
                    transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                  }}
                />
              </button>

              <div
                style={{
                  maxHeight: openFaq === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    ...bodyFont,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.58)",
                    lineHeight: 1.7,
                    margin: 0,
                    padding: "0 20px 20px",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "48px 24px 80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1.2,
            color: "#ffffff",
            margin: "0 0 16px",
          }}
        >
          Not sure which plan? Start your free trial and explore everything.
        </h2>
        <p
          style={{
            ...bodyFont,
            fontSize: 15,
            color: "rgba(255,255,255,0.45)",
            margin: "0 0 32px",
          }}
        >
          14-day trial · Full Pro access · No credit card required
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
            padding: "15px 36px",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 8px 28px rgba(124,58,237,0.32)",
            ...bodyFont,
          }}
        >
          Start free trial
        </a>
        <p style={{ ...bodyFont, fontSize: 14, color: "rgba(255,255,255,0.38)", marginTop: 20 }}>
          Looking for a team plan?{" "}
          <Link href="/contact" style={{ color: "#a78bfa", textDecoration: "none" }}>
            Talk to us →
          </Link>
        </p>
      </section>

    </div>
  );
}
