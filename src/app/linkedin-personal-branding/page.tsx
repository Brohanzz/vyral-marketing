import type { Metadata } from "next";
import Link from "next/link";
import { Target, Brain, BarChart3, BookOpen, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Personal Branding Tool — Build Your Authority | VYRAL",
  description:
    "Build a powerful LinkedIn personal brand with AI strategy coaching, content analytics, and a personalized growth plan.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-personal-branding" },
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

const whyCards = [
  {
    Icon: Users,
    title: "Attract, don't chase",
    body: "A strong personal brand turns your LinkedIn profile into a lead generation machine. Prospects come to you because they already trust your expertise.",
  },
  {
    Icon: TrendingUp,
    title: "Compound growth",
    body: "Every post builds on the last. Your audience grows, your authority deepens, and your content gets better. Personal branding is the ultimate compounding investment.",
  },
  {
    Icon: Target,
    title: "Stand out",
    body: "In a sea of generic LinkedIn content, a clear personal brand makes you memorable. People don't remember posts — they remember voices.",
  },
];

const vyralSteps = [
  {
    n: 1,
    title: "Define your brand with the Strategy Builder",
    body: "Answer guided questions about your positioning, audience, expertise, tone, and goals. VYRAL generates a comprehensive Blueprint — your brand's operating system.",
  },
  {
    n: 2,
    title: "Create content aligned to your brand",
    body: "The AI Coach helps you brainstorm, draft, and refine posts that reinforce your positioning. Every piece of content is checked against your Blueprint for strategic alignment.",
  },
  {
    n: 3,
    title: "Measure brand impact, not just vanity metrics",
    body: "See which content pillars resonate most, which topics drive profile visits and leads, and how your authority is growing over time. Analytics tied to your brand strategy.",
  },
  {
    n: 4,
    title: "Iterate and evolve",
    body: "Your Blueprint isn't static. As your data reveals what works, VYRAL suggests refinements to your strategy. Your brand evolves with real evidence, not guesswork.",
  },
];

export default function LinkedInPersonalBrandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "LinkedIn Personal Branding Tool — VYRAL",
          }),
        }}
      />
      <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
        {/* HERO */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px 48px", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(45,212,191,0.08)", border: "1px solid rgba(45,212,191,0.3)",
            borderRadius: 100, padding: "4px 14px", fontSize: 11,
            letterSpacing: "1.2px", color: "#2dd4bf", textTransform: "uppercase", marginBottom: 20,
          }}>
            LinkedIn Personal Branding
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: "#fff", margin: "0 0 20px" }}>
            Build a LinkedIn personal brand that{" "}
            <span style={{ color: "#a78bfa" }}>drives real business results.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            Your personal brand on LinkedIn is your most valuable business asset. VYRAL gives you the strategy, AI coaching, and analytics to build it systematically — not randomly.
          </p>
          <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>
            Sign up for early launch
          </a>
        </section>

        {/* WHY IT MATTERS */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>Why LinkedIn personal branding matters</h2>
            <p style={{ ...body, textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
              LinkedIn has over 1 billion members, but less than 1% create content regularly. The creators who show up consistently with a clear positioning and authentic voice attract opportunities that others have to chase — inbound leads, speaking invitations, partnerships, and career-defining connections.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {whyCards.map(({ Icon, title, body: b }) => (
                <div key={title} style={card}>
                  <div style={{
                    width: 40, height: 40, background: "rgba(124,58,237,0.1)",
                    borderRadius: 10, display: "flex", alignItems: "center",
                    justifyContent: "center", marginBottom: 14,
                  }}>
                    <Icon size={20} color="#7c3aed" />
                  </div>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40 }}>Posting without a strategy is just noise</h2>
          <p style={body}>
            Most creators know they should post on LinkedIn, but they don&apos;t have a system. They post when inspiration strikes, cover random topics, and wonder why growth is slow. Courses promise frameworks, but they&apos;re expensive ($2,500+), generic, and end after a few weeks. LinkedIn tools help you schedule and analyze, but they don&apos;t help you think strategically about your brand.
          </p>
          <p style={{ ...body, margin: 0 }}>
            Building a personal brand requires three things most tools ignore: a clear positioning strategy, content that consistently reinforces that positioning, and analytics that tell you whether your brand message is landing.
          </p>
        </section>

        {/* VYRAL APPROACH */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>VYRAL&apos;s approach to personal branding</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 40 }}>
              {vyralSteps.map(({ n, title, body: b }) => (
                <div key={n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 44, height: 44, background: "#7c3aed",
                    borderRadius: "50%", display: "flex", alignItems: "center",
                    justifyContent: "center", fontWeight: 700, fontSize: 14,
                    color: "#fff", flexShrink: 0,
                  }}>
                    {n}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KNOWLEDGE HUB */}
        <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
          <BookOpen size={44} color="#2dd4bf" style={{ margin: "0 auto 20px", display: "block" }} />
          <h2 style={{ ...h2, fontSize: 36 }}>Learn the frameworks top creators use</h2>
          <p style={{ ...body, margin: 0 }}>
            VYRAL&apos;s Knowledge Hub teaches you the content frameworks, hook patterns, and growth strategies that the top 1% of LinkedIn creators use — then helps you implement them with AI guidance. No expensive course required.{" "}
            <Link href="/resources/playbooks" style={{ color: "#a78bfa", textDecoration: "none" }}>
              Explore the Playbooks →
            </Link>
          </p>
        </section>

        {/* FINAL CTA */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px 80px", textAlign: "center" }}>
            <h2 style={{ ...h2, fontSize: 40 }}>Start building your personal brand today</h2>
            <p style={{ ...body, maxWidth: 440, margin: "0 auto 28px" }}>
              Join the first 100 creators using VYRAL. Full Pro access for 14 days. No credit card required.
            </p>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>Sign up for early launch</a>
          </div>
        </section>
      </main>
    </>
  );
}
