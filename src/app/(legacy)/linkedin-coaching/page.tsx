import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  BookOpen,
  BarChart3,
  Sparkles,
  Target,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "LinkedIn Coaching Alternative — AI-Powered Personal Coaching | VYRAL",
  description:
    "Replace $2,500 LinkedIn coaching programs with AI that knows your voice, tracks your progress, and coaches you every day.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-coaching" },
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

const problemCards = [
  {
    title: "Expensive",
    body: "Most LinkedIn coaching programs cost $2,500–$5,000 for a few weeks. That's a significant investment for advice that's often generic and not personalized to your niche.",
  },
  {
    title: "Infrequent",
    body: "You meet your coach once a week for 30-60 minutes. But you need help when you're writing a post at 10 PM or analyzing why this week's content underperformed.",
  },
  {
    title: "Generic frameworks",
    body: "Coaches teach the same frameworks to every client. But what works for a SaaS founder doesn't work for a career coach. Your strategy needs to match your specific positioning and audience.",
  },
];

const coachFeatures = [
  {
    Icon: Sparkles,
    title: "Brainstorming",
    body: "Generate content ideas aligned to your pillars, audience, and what's been performing well. Not random prompts — strategic ideas based on your data.",
  },
  {
    Icon: Brain,
    title: "Draft review & improvement",
    body: "Paste a draft and get specific feedback on hook strength, clarity, pacing, tone alignment, and CTA effectiveness. Every suggestion is tailored to your voice.",
  },
  {
    Icon: Target,
    title: "Strategic advice",
    body: "Ask the Coach about your content strategy, audience positioning, or growth tactics. It responds based on your Blueprint, your analytics, and proven frameworks.",
  },
  {
    Icon: BarChart3,
    title: "Performance analysis",
    body: "The Coach can analyze your recent performance, identify trends, and suggest adjustments to your content mix, posting schedule, or topic focus.",
  },
  {
    Icon: BookOpen,
    title: "Framework implementation",
    body: "Learn proven content frameworks from the Knowledge Hub and get guided help implementing them in your specific context.",
  },
];

const neverList = [
  "$2,500–$5,000 one-time",
  "4–8 weeks of sessions",
  "30–60 min/week access",
  "Generic frameworks for all clients",
  "No ongoing data analysis",
  "Ends when the program ends",
];

const vyralList = [
  "$49/mo continuous coaching",
  "Available 24/7 unlimited sessions",
  "Personalized to your voice & data",
  "Learns from your analytics",
  "Integrated with your strategy",
  "Gets better with every post",
];

export default function LinkedInCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "LinkedIn Coaching Alternative — AI-Powered Personal Coaching | VYRAL",
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
            LinkedIn Coaching
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
            LinkedIn coaching that&apos;s{" "}
            <span style={{ color: "#a78bfa" }}>
              always available and always personal.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Human coaches cost $2,500+, meet once a week, and give generic
            frameworks. VYRAL&apos;s AI Coach is available 24/7, trained on YOUR
            data, and costs a fraction of a course.
          </p>
          <a
            href={APP_SIGNUP_URL}
            style={btnPurple}
          >
            Sign up for a trial
          </a>
        </section>

        {/* PROBLEM */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>
              The problem with traditional LinkedIn coaching
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
                marginTop: 32,
              }}
            >
              {problemCards.map(({ title, body: b }) => (
                <div key={title} style={card}>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#fff",
                      margin: "0 0 10px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 15,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
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

        {/* WHAT YOU GET */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center", marginBottom: 40 }}>
            What you get with VYRAL&apos;s AI Coach
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {coachFeatures.map(({ Icon, title, body: b }) => (
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

        {/* KNOWLEDGE HUB */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              padding: "72px 48px",
              textAlign: "center",
            }}
          >
            <BookOpen
              size={44}
              color="#2dd4bf"
              style={{ margin: "0 auto 20px", display: "block" }}
            />
            <h2 style={{ ...h2, fontSize: 36 }}>
              Learn the same frameworks the coaches teach
            </h2>
            <p style={{ ...body, maxWidth: 500, margin: "0 auto 20px" }}>
              VYRAL&apos;s Knowledge Hub contains the content frameworks, hook
              formulas, growth strategies, and engagement tactics that top
              LinkedIn coaches charge thousands to teach. Learn them for free,
              then implement them with AI help.
            </p>
            <Link
              href="/resources/playbooks"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                color: "#a78bfa",
                textDecoration: "none",
              }}
            >
              Explore the Knowledge Hub →
            </Link>
          </div>
        </section>

        {/* COMPARISON */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center", marginBottom: 36 }}>
            The math is simple
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {/* Traditional coaching */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <DollarSign size={28} color="rgba(255,255,255,0.25)" />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                  margin: "12px 0 0",
                }}
              >
                Traditional coaching
              </h3>
              <ul
                style={{
                  margin: "16px 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {neverList.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* VYRAL */}
            <div
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <Sparkles size={28} color="#7c3aed" />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                  margin: "12px 0 0",
                }}
              >
                VYRAL AI Coach
              </h3>
              <ul
                style={{
                  margin: "16px 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {vyralList.map((item) => (
                  <li
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
                        fontSize: 14,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CROSS-LINK */}
        <div
          style={{
            textAlign: "center",
            paddingBottom: 48,
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Ready to try AI-powered coaching?{" "}
          <Link href="/ai-coach" style={{ color: "#a78bfa", textDecoration: "none" }}>
            See the AI Coach →
          </Link>
        </div>

        {/* FINAL CTA */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              padding: "72px 48px 80px",
              textAlign: "center",
            }}
          >
            <h2 style={{ ...h2, fontSize: 40 }}>Start coaching today</h2>
            <p style={{ ...body, maxWidth: 420, margin: "0 auto 28px" }}>
              Join the first 100 creators using VYRAL. Full Pro access for 14
              days. No credit card required.
            </p>
            <a
              href={APP_SIGNUP_URL}
              style={btnPurple}
            >
              Sign up for a trial
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
