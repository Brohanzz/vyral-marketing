import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Analytics Tool for Creators — VYRAL",
  description:
    "Break down your LinkedIn posts with creator-grade analytics. See hook strength, structure, tone, themes, momentum, consistency, timing, and engagement patterns.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-analytics" },
  openGraph: {
    title: "The LinkedIn Analytics Tool Built for Creators",
    description:
      "Finally understand why your posts perform — and how to repeat it.",
  },
};

// ── Shared style constants ────────────────────────────────────────────────────
const sectionPad: React.CSSProperties = { padding: "64px 48px" };
const innerMax: React.CSSProperties = { maxWidth: 1100, margin: "0 auto" };
const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 38,
  color: "#fff",
  letterSpacing: "-0.5px",
  lineHeight: 1.08,
  margin: "0 0 16px",
};
const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 28px",
};
const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 100,
  padding: "4px 14px",
  fontSize: 11,
  letterSpacing: "1.2px",
  color: "rgba(255,255,255,0.4)",
  textTransform: "uppercase",
  marginBottom: 20,
};
const featurePill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 100,
  padding: "8px 16px",
  fontSize: 13,
  color: "rgba(255,255,255,0.7)",
  fontFamily: "Inter, sans-serif",
};
const dotTeal: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#2dd4bf",
  flexShrink: 0,
  marginTop: 6,
};
const gridCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
  borderLeft: "2px solid rgba(124,58,237,0.4)",
};
const darkCard: React.CSSProperties = {
  background: "#13131e",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 28,
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
const purpleItalic: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "italic",
  fontSize: 15,
  color: "#a78bfa",
  margin: "16px 0 0",
};

const tealBullets = [
  "What themes your audience responds to",
  "What structure gets the highest completion rate",
  "What tones create trust",
  "What hooks pull people in",
  "How your content quality changes over time",
];

const timingBullets = [
  "Hour-by-hour performance breakdown",
  "Day-of-week optimization",
  "Based on your actual data",
];

const apiBullets = [
  "Connect your LinkedIn account via official OAuth",
  "Write and publish posts directly from VYRAL",
  "Analytics sync automatically — impressions, reactions, comments, reshares",
  "Follower and connection counts tracked daily",
];

const featurePills = [
  "Hook type and strength",
  "Structure & clarity",
  "Tone & storytelling patterns",
  "Topic & theme mapping",
  "Momentum & consistency",
  "Posting timing & heatmaps",
  "Engagement drivers",
  "Post-to-post comparisons",
];

export default function LinkedInAnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "LinkedIn Analytics Tool",
            description: "Advanced LinkedIn analytics for creators.",
          }),
        }}
      />
      <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
        {/* HERO */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            paddingTop: 72,
            padding: "72px 48px 60px",
            textAlign: "center",
          }}
        >
          <div style={pill}>LINKEDIN ANALYTICS TOOL</div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.12,
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            The LinkedIn analytics tool{" "}
            <span style={{ color: "#a78bfa" }}>built for creators.</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: "0 0 36px",
            }}
          >
            Finally understand why your posts perform — and how to repeat it.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>
              Start free
            </a>
            <Link href="/product" style={btnGhost}>See demo</Link>
          </div>
        </section>

        {/* WHY CREATORS NEED REAL ANALYTICS */}
        <section style={{ ...sectionPad, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...h2Style, fontSize: 40, textAlign: "center" }}>
            Why creators need real analytics
          </h2>
          <p style={{ ...bodyStyle, maxWidth: 560, margin: "0 auto 32px" }}>
            Most tools show likes and impressions. VYRAL shows why something performed.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            {featurePills.map((label) => (
              <span key={label} style={featurePill}>{label}</span>
            ))}
          </div>
          <p style={purpleItalic}>
            Get the insights serious creators need — not vanity metrics.
          </p>
        </section>

        {/* PATTERN RECOGNITION */}
        <section style={{ ...sectionPad, ...innerMax }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div style={pill}>PATTERN RECOGNITION</div>
              <h2 style={h2Style}>See the real patterns behind your growth</h2>
              <p style={bodyStyle}>
                VYRAL analyzes your last 180 days of content and finds:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {tealBullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={dotTeal} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={purpleItalic}>This is what drives predictable growth.</p>
            </div>
            <div style={darkCard}>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  margin: "0 0 12px",
                }}
              >
                Pattern Recognition
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
                Unlike basic analytics that just count metrics, VYRAL identifies
                the underlying patterns in your content that correlate with
                performance.
              </p>
            </div>
          </div>
        </section>

        {/* MOMENTUM CONSISTENCY EXECUTION */}
        <section
          style={{
            ...sectionPad,
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2Style, fontSize: 38, textAlign: "center" }}>
            Momentum, Consistency, Execution
          </h2>
          <p style={{ ...bodyStyle, maxWidth: 520, margin: "0 auto 32px" }}>
            Three proprietary scores that reveal everything.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              textAlign: "left",
            }}
          >
            {[
              {
                title: "Momentum",
                text: "How your recent posts are performing relative to your baseline",
              },
              {
                title: "Consistency",
                text: "Are you posting reliably and improving over time",
              },
              {
                title: "Execution",
                text: "Structure, clarity, storytelling, and tone quality",
              },
            ].map(({ title, text }) => (
              <div key={title} style={gridCard}>
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
                    fontSize: 15,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p style={purpleItalic}>These metrics are proprietary to VYRAL.</p>
        </section>

        {/* TIMING */}
        <section style={{ ...sectionPad, ...innerMax }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div style={darkCard}>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  margin: "0 0 12px",
                }}
              >
                Timing Heatmaps
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  margin: "0 0 20px",
                }}
              >
                See when your audience is most active — by hour, by weekday, by
                pattern.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {timingBullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={dotTeal} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={pill}>TIMING</div>
              <h2 style={h2Style}>
                Best time to post{" "}
                <span style={{ color: "rgba(255,255,255,0.45)" }}>
                  (based on your audience)
                </span>
              </h2>
              <p style={bodyStyle}>Not generic advice. Your actual data.</p>
              <p style={purpleItalic}>
                Know exactly when to post for maximum impact.
              </p>
            </div>
          </div>
        </section>

        {/* OFFICIAL API */}
        <section style={{ ...sectionPad, ...innerMax }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div style={pill}>OFFICIAL LINKEDIN API</div>
              <h2 style={h2Style}>
                Connected to LinkedIn&apos;s{" "}
                <span style={{ color: "#a78bfa" }}>official API.</span>
              </h2>
              <p style={bodyStyle}>
                Unlike tools that scrape data or require manual exports, VYRAL
                connects directly to LinkedIn&apos;s Community Management API for
                real-time, accurate analytics.
              </p>
              <p style={purpleItalic}>
                Post via VYRAL and your analytics are tracked automatically.
              </p>
            </div>
            <div style={darkCard}>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  margin: "0 0 16px",
                }}
              >
                How it works
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {apiBullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={dotTeal} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
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
          Looking for post-level analytics?{" "}
          <Link href="/linkedin-post-analytics" style={{ color: "#a78bfa", textDecoration: "none" }}>
            See LinkedIn Post Analytics →
          </Link>
        </div>

        {/* FINAL CTA */}
        <section
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "72px 48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...h2Style, fontSize: 40, textAlign: "center" }}>
            Start understanding{" "}
            <span style={{ color: "#a78bfa" }}>your performance.</span>
          </h2>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 32,
            }}
          >
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>
              Start free
            </a>
            <Link href="/product" style={btnGhost}>See demo</Link>
          </div>
        </section>
      </main>
    </>
  );
}
