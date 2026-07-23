import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, BarChart3, Target, Zap, Calendar } from "lucide-react";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Analytics That Tell You What to Do Next — VYRAL",
  description:
    "No vanity metrics. See what's working, what's not, and exactly what actions will move the needle. Connect performance to strategy, not just numbers.",
  alternates: {
    canonical: "https://www.getvyral.io/product/analytics",
  },
  openGraph: {
    title: "VYRAL Analytics — Insights That Drive Action",
    description:
      "Beyond charts — contextual analytics that explain why posts work and what to do next.",
  },
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
};

const overlinePill: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(124,58,237,0.15)",
  border: "1px solid rgba(124,58,237,0.3)",
  borderRadius: 100,
  padding: "6px 16px",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  color: "#a78bfa",
  marginBottom: 24,
};

const h1Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 52,
  lineHeight: 1.15,
  color: "#fff",
  margin: "0 0 20px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 36,
  lineHeight: 1.2,
  color: "#fff",
  margin: "0 0 16px",
};

const body: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  fontSize: 17,
  margin: "0 0 32px",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  borderRadius: 8,
  padding: "14px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

const btnGhost: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  padding: "14px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

const bullet: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  fontSize: 15,
};

export default function AnalyticsPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 48px 60px",
          textAlign: "center",
        }}
      >
        <div style={overlinePill}>ANALYTICS &amp; INSIGHTS</div>
        <h1 style={h1Style}>Analytics that finally tell you what to do next</h1>
        <p style={body}>
          No vanity metrics. See what&apos;s working, what&apos;s not, and exactly what
          actions will move the needle. Connect performance to strategy, not
          just numbers.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={APP_SIGNUP_URL}
            style={btnPrimary}
          >
            Start free trial
          </a>
          <Link href="/how-it-works" style={btnGhost}>
            See how it works
          </Link>
        </div>
      </section>

      {/* KPI OVERVIEW */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>See all your key metrics at a glance</h2>
        <p style={body}>
          Views, engagement, followers, posts, consistency, momentum —
          everything in one place. Filter by date range, campaign, post type,
          or label to drill down into what matters.
        </p>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/vyral-analytics.mp4"
          style={{
            width: "100%",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            display: "block",
          }}
        />
      </section>

      {/* EXECUTION & CONSISTENCY */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>Execution rate &amp; consistency score</h2>
        <p style={body}>
          Track how often you hit your posting plan and maintain momentum
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {/* Left card */}
          <div style={card}>
            <TrendingUp size={32} color="#7c3aed" style={{ marginBottom: 16 }} />
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#fff",
                margin: "0 0 10px",
              }}
            >
              Execution Rate
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                fontSize: 15,
                margin: "0 0 16px",
              }}
            >
              How often you hit your plan versus target. See your planned posts
              vs. actual published posts.
            </p>
            <ul style={{ margin: 0, padding: "0 0 0 20px" }}>
              {[
                "Track planned vs. actual posting",
                "Weekly and monthly execution views",
                "Identify gaps in your schedule",
              ].map((item) => (
                <li key={item} style={bullet}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right card */}
          <div style={card}>
            <BarChart3 size={32} color="#7c3aed" style={{ marginBottom: 16 }} />
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#fff",
                margin: "0 0 10px",
              }}
            >
              Consistency Score
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                fontSize: 15,
                margin: "0 0 16px",
              }}
            >
              A 0–100 score based on your posting frequency, regularity, and
              recent activity.
            </p>
            <ul style={{ margin: 0, padding: "0 0 0 20px" }}>
              {[
                "Frequency: How often you post",
                "Regularity: How consistent your rhythm is",
                "Recency: When you last published",
                "Execution: How well you hit your goals",
              ].map((item) => (
                <li key={item} style={bullet}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MOMENTUM */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>Momentum tracking &amp; top posts</h2>
        <p style={body}>See what changed when your content took off</p>
        <div style={card}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 24,
              textAlign: "center",
            }}
          >
            {[
              { value: "+23%", label: "Impressions" },
              { value: "+15%", label: "Engagement" },
              { value: "8 days", label: "Current streak" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: "#2dd4bf",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    marginTop: 6,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI PERFORMANCE REPORTS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>AI Performance Reports</h2>
        <p style={body}>
          VYRAL summarizes your last 7 or 30 days into a clear narrative
        </p>
        <div style={card}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <Zap size={24} color="#7c3aed" />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
              }}
            >
              What AI tells you
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                label: "What worked",
                text: "Which posts, themes, and formats drove the most engagement and reach",
              },
              {
                label: "What changed",
                text: "How your metrics shifted compared to previous periods",
              },
              {
                label: "What to try next",
                text: "Specific recommendations based on your performance patterns and strategy",
              },
            ].map((item) => (
              <div key={item.label}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#a78bfa",
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    fontSize: 15,
                    margin: "4px 0 0",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANCED METRICS GRID */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>Advanced metrics that matter</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              Icon: TrendingUp,
              title: "Momentum Score",
              text: "Track your posting consistency and growth velocity week over week",
            },
            {
              Icon: Calendar,
              title: "Execution Rate",
              text: "See how well you're executing your content plan versus your goals",
            },
            {
              Icon: Target,
              title: "Strategy Alignment",
              text: "Measure content performance against your blueprint pillars",
            },
            {
              Icon: Zap,
              title: "Performance Reports",
              text: "AI-generated summaries of what's working and what to try next",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} style={card}>
              <Icon size={28} color="#7c3aed" style={{ marginBottom: 14 }} />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  fontSize: 15,
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
        <h2 style={h2Style}>Use analytics that actually help you grow</h2>
        <p style={body}>Not just numbers — insights that tell you what to do next</p>
        <div style={{ marginBottom: 20 }}>
          <a
            href={APP_SIGNUP_URL}
            style={btnPrimary}
          >
            Start free trial
          </a>
        </div>
        <Link
          href="/how-it-works"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#a78bfa",
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          See how VYRAL works →
        </Link>
      </section>
    </main>
  );
}
