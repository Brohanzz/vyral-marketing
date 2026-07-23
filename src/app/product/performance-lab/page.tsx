import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Target,
  Clock,
  Lightbulb,
  Zap,
} from "lucide-react";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Performance Lab — Understand Why Your Posts Perform — VYRAL",
  description:
    "The Performance Lab analyzes your hooks, structure, tone, topics, and posting patterns to give you clear, repeatable insights.",
  alternates: {
    canonical: "https://www.getvyral.io/product/performance-lab",
  },
  openGraph: {
    title: "VYRAL Performance Lab — Repeatable Insights From Your Best Posts",
    description:
      "Understand why your posts perform — and how to repeat it.",
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

export default function PerformanceLabPage() {
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
        <div style={overlinePill}>INSIGHTS THAT IMPROVE YOUR CONTENT</div>
        <h1 style={h1Style}>
          Understand why your posts perform — and how to repeat it
        </h1>
        <p style={body}>
          The Performance Lab analyzes your hooks, structure, tone, topics, and
          posting patterns to give you clear, repeatable insights.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={APP_SIGNUP_URL}
            style={btnPrimary}
          >
            Sign up for a trial
          </a>
          <Link href="/product/analytics" style={btnGhost}>
            See analytics
          </Link>
        </div>
      </section>

      {/* PATTERN DETECTION */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>See the real patterns behind your best posts</h2>
        <p style={{ ...body, maxWidth: 600, margin: "0 auto 32px" }}>
          Performance Lab breaks down your post structure, hooks, tone, and
          storytelling patterns — highlighting what consistently drives
          engagement.
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

      {/* HOOKS & FORMATS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>
          Find out which hooks and formats actually work for you
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "Hook analysis",
              text: "Which openings get more impressions and saves",
            },
            {
              title: "Story structure",
              text: "What leads to higher read-through",
            },
            {
              title: "Format performance",
              text: "Lists vs stories vs insights vs contrarian takes",
            },
          ].map(({ title, text }) => (
            <div key={title} style={card}>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                  margin: "0 0 10px",
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

      {/* TOPIC INSIGHTS */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>
          Understand which topics resonate most with your audience
        </h2>
        <p style={{ ...body, maxWidth: 560, margin: "0 auto 32px" }}>
          VYRAL identifies recurring themes across your best-performing posts so
          you know which ideas to double down on.
        </p>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/vyral-data-analyst.mp4"
          style={{
            width: "100%",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            display: "block",
          }}
        />
      </section>

      {/* TIMING */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>Discover when you perform best</h2>
        <p style={{ ...body, maxWidth: 560, margin: "0 auto 32px" }}>
          The Lab correlates timing, frequency, and rhythm with outcomes —
          helping you publish when your audience is most active.
        </p>
        <div style={card}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
            }}
          >
            {[
              { emoji: "🕐", label: "Morning posts", value: "+34% engagement" },
              { emoji: "📅", label: "Tuesday–Thursday", value: "Highest reach" },
              { emoji: "🔄", label: "Consistent rhythm", value: "2x follower growth" },
            ].map(({ emoji, label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{emoji}</div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>Insights you can act on immediately</h2>
        <div style={card}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <Lightbulb size={24} color="#7c3aed" />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
              }}
            >
              What you&apos;ll get
            </span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Recommendations tied to your Blueprint",
              "Suggestions based on successful patterns",
              '"Do more of this" and "avoid this" style insights',
              "Next-post recommendations",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <Zap size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: 3 }} />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INTEGRATION */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>
          Performance Lab works together with Blueprint &amp; Analytics
        </h2>
        <p style={body}>
          A closed loop: your data → insights → strategy → AI → better posts.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              Icon: MessageSquare,
              title: "Pattern detection",
              text: "Identify what consistently drives engagement across your posts",
            },
            {
              Icon: Target,
              title: "Structure analysis",
              text: "Understand which hooks, formats, and storytelling patterns work best",
            },
            {
              Icon: Clock,
              title: "Timing optimization",
              text: "Discover when your audience is most active and engaged",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} style={card}>
              <Icon size={28} color="#7c3aed" style={{ marginBottom: 14 }} />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
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
        <h2 style={h2Style}>Improve your content every single week</h2>
        <p style={body}>
          Stop guessing. Start improving with real, personalized insights.
        </p>
        <div style={{ marginBottom: 20 }}>
          <a
            href={APP_SIGNUP_URL}
            style={btnPrimary}
          >
            Sign up for a trial
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
          See how it works →
        </Link>
      </section>
    </main>
  );
}
