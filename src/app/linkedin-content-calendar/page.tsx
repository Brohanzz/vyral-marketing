import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Target,
  Brain,
  Shield,
  Send,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Content Calendar — Plan, Schedule & Auto-Publish | VYRAL",
  description:
    "Plan your LinkedIn content week, schedule posts, and auto-publish directly from VYRAL. AI-powered suggestions based on your strategy.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-content-calendar" },
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

const calendarFeatures = [
  {
    Icon: Target,
    title: "Connected to your Blueprint",
    body: "Your calendar knows your content pillars, target audience, and posting cadence. It highlights gaps — if you haven't posted about your primary pillar this week, you'll see it.",
  },
  {
    Icon: Brain,
    title: "AI-powered suggestions",
    body: "The Coach can suggest content ideas that fill strategic gaps. Not random prompts — ideas aligned to your positioning, audience, and what's been performing well.",
  },
  {
    Icon: Clock,
    title: "Optimal timing",
    body: "Based on your actual analytics data, VYRAL suggests the best days and times for your specific audience. Not generic 'Tuesday at 9am' advice — your data, your audience.",
  },
  {
    Icon: Send,
    title: "Direct LinkedIn publishing",
    body: "Schedule a post and VYRAL publishes it directly to LinkedIn via the official API. No copy-pasting, no browser extension, no manual publishing reminders.",
  },
  {
    Icon: BarChart3,
    title: "Post-publish tracking",
    body: "After your post goes live, the calendar shows real-time performance data. See how each scheduled post is doing without leaving the calendar view.",
  },
];

const publishChecks = [
  "Schedule posts with exact time control",
  "Auto-publish while you sleep",
  "Support for text, images, and documents",
  "Publish as yourself or your company page",
];

export default function LinkedInContentCalendarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VYRAL — LinkedIn Content Calendar",
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
            LinkedIn Content Calendar
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
            A LinkedIn content calendar{" "}
            <span style={{ color: "#a78bfa" }}>that&apos;s actually strategic.</span>
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
            Don&apos;t just schedule posts — plan content that fills gaps in your
            strategy, reaches your audience at the right time, and publishes
            automatically.
          </p>
          <a
            href="https://www.getvyral.io/beta"
            target="_blank"
            rel="noopener noreferrer"
            style={btnPurple}
          >
            Sign up for early launch
          </a>
        </section>

        {/* PROBLEM */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              padding: "72px 48px",
              textAlign: "center",
            }}
          >
            <h2 style={{ ...h2, fontSize: 40 }}>
              Scheduling without strategy is just automated noise
            </h2>
            <p style={{ ...body, maxWidth: 580, margin: "0 auto 16px" }}>
              Most content calendars help you post consistently — and that&apos;s
              important. But consistency without strategy means you&apos;re just
              filling time slots with random content. You post three times a
              week, but all three posts cover the same topic. Or you publish at
              times that feel right, but your data says your audience is most
              active at different hours.
            </p>
            <p style={{ ...body, maxWidth: 580, margin: "0 auto 0" }}>
              A strategic content calendar doesn&apos;t just answer &ldquo;when should I
              post?&rdquo; — it answers &ldquo;what should I post, to whom, and why does
              this specific topic matter right now?&rdquo;
            </p>
          </div>
        </section>

        {/* HOW IT'S DIFFERENT */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center", marginBottom: 40 }}>
            How VYRAL&apos;s calendar is different
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {calendarFeatures.map(({ Icon, title, body: b }) => (
              <div key={title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(124,58,237,0.15)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color="#7c3aed" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 18,
                      color: "#fff",
                      margin: "0 0 8px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 15,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLISHING */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              padding: "72px 48px",
              textAlign: "center",
            }}
          >
            <Shield
              size={44}
              color="#2dd4bf"
              style={{ margin: "0 auto 20px", display: "block" }}
            />
            <h2 style={{ ...h2, fontSize: 36 }}>
              Publish directly via LinkedIn&apos;s official API
            </h2>
            <p style={{ ...body, maxWidth: 500, margin: "0 auto 32px" }}>
              VYRAL uses LinkedIn&apos;s Share on LinkedIn API to publish your posts.
              This is the same API that LinkedIn provides to approved partners.
              No browser extensions, no workarounds, no risk to your account.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 10,
                maxWidth: 480,
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              {publishChecks.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", gap: 8, alignItems: "flex-start" }}
                >
                  <CheckCircle
                    size={16}
                    color="#2dd4bf"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "72px 48px 80px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2, fontSize: 40 }}>Plan smarter, publish easier</h2>
          <p style={{ ...body, maxWidth: 420, margin: "0 auto 28px" }}>
            Join the first 100 creators using VYRAL. Full Pro access for 14
            days. No credit card required.
          </p>
          <a
            href="https://www.getvyral.io/beta"
            target="_blank"
            rel="noopener noreferrer"
            style={btnPurple}
          >
            Sign up for early launch
          </a>
        </section>
      </main>
    </>
  );
}
