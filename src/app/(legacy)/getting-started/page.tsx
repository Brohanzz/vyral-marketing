import type { Metadata } from "next";
import Link from "next/link";
import {
  Link2,
  ShieldCheck,
  Download,
  Brain,
  BarChart3,
  MessageSquare,
  Check,
  Clock,
  Send,
  CalendarClock,
} from "lucide-react";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Get Started in 5 Minutes — VYRAL",
  description:
    "From signup to your first AI-coached LinkedIn post. Here's exactly what happens when you join VYRAL.",
  alternates: { canonical: "https://www.getvyral.io/getting-started" },
};

// ── Data ──────────────────────────────────────────────────────────────────────
const steps = [
  {
    title: "Connect your LinkedIn account",
    body: "Securely connect via LinkedIn OAuth — we never see your password. This lets VYRAL sync your posts, track analytics, and publish on your behalf (if you choose to).",
    Icons: [Link2, ShieldCheck],
    time: "~30 seconds",
  },
  {
    title: "Import your post history",
    body: "VYRAL automatically pulls your recent LinkedIn posts — text, engagement metrics, and post types. You can also upload a LinkedIn analytics CSV for historical impression data.",
    Icons: [Download],
    time: "~2 minutes",
  },
  {
    title: "Get your AI-generated strategy",
    body: "Based on your posts, VYRAL suggests your content pillars, audience, tone, and positioning. Review and adjust — or skip and set it up later.",
    Icons: [Brain],
    time: "~1 minute to review",
  },
  {
    title: "Explore your dashboard",
    body: "See your engagement trends, top-performing posts, and content patterns at a glance. Your analytics are ready immediately.",
    Icons: [BarChart3],
    time: null,
  },
  {
    title: "Write your first post with the Coach",
    body: "Open the AI Coach and start a conversation. Brainstorm ideas, get feedback on a draft, or have the Coach write a post in your voice. The Coach learns from your actual writing — the more you use it, the better it gets.",
    Icons: [MessageSquare],
    time: null,
  },
];

const trialFeatures = [
  "Unlimited AI coaching runs",
  "Full analytics + Performance Lab",
  "Strategy Builder (7-step guided)",
  "Data Analyst — chat with your data",
  "Content calendar + scheduling",
  "LinkedIn auto-publishing",
  "Creator Intelligence",
  "Campaigns & Playbooks",
];

const publishBenefits = [
  {
    Icon: BarChart3,
    text: "Posts published through VYRAL are automatically tracked with full analytics",
  },
  {
    Icon: CalendarClock,
    text: "Schedule posts for optimal timing based on your audience data",
  },
  {
    Icon: Send,
    text: "Draft → Coach → Schedule → Publish — all in one flow",
  },
  {
    Icon: Link2,
    text: "Posts published directly on LinkedIn can still be synced, but you'll need to upload analytics separately for impression data",
  },
];

export default function GettingStartedPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 48px 48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "8px 16px",
            fontSize: 12,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 28,
          }}
        >
          <Clock size={13} />
          5 minutes from signup to insights
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
          Get started in{" "}
          <span style={{ color: "#a78bfa" }}>5 minutes</span>
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
          From signup to your first AI-coached post — here&apos;s exactly what happens.
        </p>
      </section>

      {/* STEPS */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "48px" }}>
        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 22,
              top: 0,
              bottom: 0,
              width: 1,
              background: "rgba(124,58,237,0.3)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                {/* Number circle */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "#7c3aed",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#fff",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: "20px 24px",
                  }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 16,
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      {step.Icons.map((Icon, j) => (
                        <div
                          key={j}
                          style={{
                            width: 32,
                            height: 32,
                            background: "rgba(124,58,237,0.12)",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={16} color="#a78bfa" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>

                  {step.time && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 10,
                        fontSize: 12,
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      <Clock size={12} />
                      {step.time}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIAL FEATURES */}
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
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
              marginBottom: 16,
            }}
          >
            14-DAY PRO TRIAL
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            Your trial includes everything
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 32px",
            }}
          >
            No credit card required. Downgrade to Free anytime.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
              textAlign: "left",
            }}
          >
            {trialFeatures.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Check size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLISH BENEFITS */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "48px" }}>
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 28,
            color: "#fff",
            margin: "0 0 12px",
          }}
        >
          Why publish through VYRAL
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.45)",
            margin: "0 0 24px",
          }}
        >
          Get the most out of your LinkedIn content with integrated publishing.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {publishBenefits.map(({ Icon, text }, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 16,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "rgba(45,212,191,0.1)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={15} color="#2dd4bf" />
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.65,
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
          padding: "64px 48px 80px",
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
            margin: "0 0 14px",
          }}
        >
          Ready to start?
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
            padding: "15px 36px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Sign up for a trial
        </a>
      </section>
    </main>
  );
}
