import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Brain,
  BarChart3,
  Target,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Growth Tool for Creators & Founders — VYRAL",
  description:
    "Grow your LinkedIn presence with AI coaching, deep analytics, and a content strategy that adapts to your results. Start free.",
  alternates: { canonical: "https://www.getvyral.io/linkedin-growth-tool" },
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

const features = [
  { Icon: Brain,      title: "AI Coach",            body: "Write posts in your voice with an AI that studies your best-performing content." },
  { Icon: BarChart3,  title: "Deep Analytics",      body: "Go beyond impressions — see why posts perform with contextual insights." },
  { Icon: Target,     title: "Strategy Blueprint",  body: "Define your positioning, audience, pillars, and tone in a single system." },
  { Icon: TrendingUp, title: "Performance Lab",     body: "Score every post on 6 dimensions and track improvement over time." },
  { Icon: Users,      title: "Audience Intelligence", body: "Understand who engages, what resonates, and where to double down." },
  { Icon: Sparkles,   title: "Content Calendar",    body: "Plan strategically, schedule posts, and auto-publish via LinkedIn's official API." },
  { Icon: Rocket,     title: "Knowledge Hub",       body: "Learn the frameworks top creators use — then implement them with AI guidance." },
  { Icon: Shield,     title: "100% API-Based",      body: "No browser extensions, no scraping, no risk to your LinkedIn account." },
];

const problemCards = [
  {
    title: "Post and pray",
    body: "Scheduling tools help you post consistently — but consistency without strategy is just noise. You're publishing into the void without knowing what works or why.",
  },
  {
    title: "No voice matching",
    body: "Generic AI writers produce corporate-sounding content that doesn't sound like you. Your audience can tell. Engagement drops because authenticity disappears.",
  },
  {
    title: "Numbers without meaning",
    body: "You see impressions go up or down, but you don't know why. Without contextual analysis, you can't repeat your wins or fix your weak spots.",
  },
];

const solutionRows = [
  {
    Icon: Target,
    title: "Strategy that guides everything",
    body: "Your Blueprint defines your positioning, audience, content pillars, and tone. Every feature in VYRAL — from the AI Coach to the analytics — reads your Blueprint and adapts accordingly.",
    linkHref: "/linkedin-content-strategy",
    linkLabel: "Learn about Blueprint →",
  },
  {
    Icon: Brain,
    title: "AI that sounds like you",
    body: "The AI Coach doesn't generate from templates. It studies your actual writing patterns — sentence length, hook style, emoji usage, formatting — and produces content that reads like you wrote it, just sharper.",
    linkHref: "/ai-linkedin-post-writer",
    linkLabel: "Learn about the AI Coach →",
  },
  {
    Icon: BarChart3,
    title: "Analytics that explain WHY",
    body: "VYRAL's analytics don't just show you charts. They explain why your carousel outperformed your text post, why Tuesday mornings work better for you, and what hook patterns drive the most engagement.",
    linkHref: "/linkedin-analytics",
    linkLabel: "Learn about Analytics →",
  },
];

export default function LinkedInGrowthToolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VYRAL — LinkedIn Growth Tool",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: 0 },
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
            LinkedIn Growth Tool
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: "#fff", margin: "0 0 20px" }}>
            The LinkedIn growth tool that{" "}
            <span style={{ color: "#a78bfa" }}>actually grows with you.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            Most LinkedIn tools help you post. VYRAL helps you think, write, analyze, and improve — so every post moves you closer to your goals.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>Sign up for early launch</a>
            <Link href="/product" style={btnGhost}>See how it works</Link>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>Why generic LinkedIn tools fail</h2>
            <p style={{ ...body, textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
              You&apos;ve tried scheduling tools. Maybe a Chrome extension. Perhaps even an AI writing tool. But your growth still feels random. Here&apos;s why:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {problemCards.map(({ title, body: b }) => (
                <div key={title} style={card}>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>A growth engine, not just a tool</h2>
          <p style={{ ...body, textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            VYRAL combines three things that other tools treat as separate products: strategy, content creation, and analytics — all connected and all personalized to you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {solutionRows.map(({ Icon, title, body: b, linkHref, linkLabel }) => (
              <div key={title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{
                  width: 48, height: 48, background: "rgba(124,58,237,0.15)",
                  borderRadius: 12, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={24} color="#7c3aed" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: "0 0 10px" }}>{b}</p>
                  <Link href={linkHref} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#a78bfa", textDecoration: "none" }}>{linkLabel}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES GRID */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center", marginBottom: 36 }}>Everything you need to grow on LinkedIn</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {features.map(({ Icon, title, body: b }) => (
                <div key={title} style={{ ...card, textAlign: "center" }}>
                  <div style={{
                    width: 48, height: 48, background: "rgba(124,58,237,0.1)",
                    borderRadius: 12, display: "flex", alignItems: "center",
                    justifyContent: "center", margin: "0 auto",
                  }}>
                    <Icon size={22} color="#7c3aed" />
                  </div>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#fff", margin: "12px 0 6px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
          <h2 style={{ ...h2, fontSize: 40 }}>More than a scheduling tool</h2>
          <p style={body}>
            Unlike scheduling tools, VYRAL doesn&apos;t just help you post — it helps you understand what works and why. Unlike AI writers, it doesn&apos;t give you generic content — it learns your voice. Unlike analytics dashboards, it doesn&apos;t just show numbers — it explains patterns and recommends actions.
          </p>
          <p style={{ ...body, margin: 0 }}>
            VYRAL is the only LinkedIn tool that connects your strategy, your content, and your data into a single system that gets smarter with every post you publish.
          </p>
        </section>

        {/* TRUST */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
            <Shield size={44} color="#2dd4bf" style={{ margin: "0 auto 20px", display: "block" }} />
            <h2 style={{ ...h2, fontSize: 38 }}>Built on LinkedIn&apos;s official API</h2>
            <p style={body}>
              No browser extensions. No scraping. No automation scripts. VYRAL uses LinkedIn&apos;s official Community Management API and Share on LinkedIn API for all data access and publishing.
            </p>
            <p style={{ ...body, margin: 0 }}>
              Your LinkedIn account will never be flagged, restricted, or banned because of VYRAL.{" "}
              <Link href="/linkedin-tool-safe" style={{ color: "#a78bfa", textDecoration: "none" }}>
                Learn more about our security approach →
              </Link>
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px 80px", textAlign: "center" }}>
          <h2 style={{ ...h2, fontSize: 40 }}>Ready to grow strategically?</h2>
          <p style={{ ...body, maxWidth: 480, margin: "0 auto 28px" }}>
            Join the first 100 LinkedIn creators using VYRAL. Full Pro access for 14 days. No credit card required.
          </p>
          <a href="https://www.getvyral.io/beta" target="_blank" rel="noopener noreferrer" style={btnPurple}>Sign up for early launch</a>
        </section>
      </main>
    </>
  );
}
