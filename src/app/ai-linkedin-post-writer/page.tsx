import type { Metadata } from "next";
import Link from "next/link";
import { Brain, FileText, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI LinkedIn Post Writer That Sounds Like You — VYRAL",
  description:
    "Write LinkedIn posts in your own voice with AI that learns from your best-performing content. Not generic AI — personalized coaching.",
  alternates: { canonical: "https://www.getvyral.io/ai-linkedin-post-writer" },
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

const scoreDimensions = [
  { title: "Hook",               body: "Does the opening stop the scroll?" },
  { title: "Clarity",            body: "Is the message clear and easy to follow?" },
  { title: "Pacing",             body: "Does the post flow well and hold attention?" },
  { title: "Tone",               body: "Does it match your voice and brand?" },
  { title: "CTA",                body: "Does it drive the right action?" },
  { title: "Strategy Alignment", body: "Does it serve your content pillars and goals?" },
];

const voiceItems = [
  "Sentence length and paragraph structure",
  "Hook patterns that work for your audience",
  "Emoji and formatting style",
  "Vocabulary and jargon preferences",
  "Tone markers (casual vs. authoritative)",
  "CTA patterns that drive action",
  "Story structure and pacing",
  "Content pillar alignment",
];

const problemCards = [
  {
    title: "Generic voice",
    body: "Every output sounds the same. Polished, professional, and completely devoid of personality. It doesn’t sound like you — and your audience notices.",
  },
  {
    title: "No context",
    body: "AI writers don’t know your strategy, your audience, or what you’re trying to achieve. They generate words, not strategic content.",
  },
  {
    title: "No learning",
    body: "They don’t get better over time. Your 100th prompt produces the same quality as your first. There’s no feedback loop.",
  },
];

const howSteps = [
  {
    n: 1,
    title: "Import your posts",
    body: "Connect your LinkedIn account or upload a CSV. VYRAL analyzes your existing content to understand your natural writing patterns — sentence length, hook style, emoji usage, formatting preferences, and vocabulary.",
  },
  {
    n: 2,
    title: "AI builds your voice profile",
    body: "The Coach creates a detailed voice profile from your top-performing content. It identifies what makes your writing uniquely yours and what patterns correlate with higher engagement.",
  },
  {
    n: 3,
    title: "Write with personalized coaching",
    body: "When you brainstorm ideas, draft posts, or improve existing content, the Coach writes in your voice. It doesn’t generate from a template — it produces content that reads like you wrote it, just sharper and more strategic.",
  },
];

export default function AILinkedInPostWriterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VYRAL — AI LinkedIn Post Writer",
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
            AI LinkedIn Post Writer
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: "#fff", margin: "0 0 20px" }}>
            An AI that writes LinkedIn posts{" "}
            <span style={{ color: "#a78bfa" }}>in YOUR voice.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            Not generic AI templates. A coach that studies your writing patterns, understands your tone, and helps you write content that sounds authentically you — just sharper.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>Sign up for early launch</a>
            <Link href="/ai-coach" style={btnGhost}>Learn about the Coach</Link>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>The problem with AI writing tools</h2>
            <p style={{ ...body, textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
              You&apos;ve tried ChatGPT. Maybe Jasper or Copy.ai. The output reads like it was written by a corporate marketing team — because it was trained on corporate marketing content. Your LinkedIn audience can spot AI-generated content instantly, and engagement drops because the authenticity that made them follow you disappears.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {problemCards.map(({ title, body: b }) => (
                <div key={title} style={card}>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>How VYRAL learns your voice</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 40 }}>
            {howSteps.map(({ n, title, body: b }) => (
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
        </section>

        {/* VOICE MATCHING */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
            <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>Voice matching, not voice replacing</h2>
            <p style={{ ...body, textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
              The Coach doesn&apos;t generate from a template. It studies your actual writing patterns and produces content that reads like you wrote it — just sharper. Here&apos;s what it analyzes:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
              {voiceItems.map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <CheckCircle size={18} color="#2dd4bf" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCORING */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 48px" }}>
          <h2 style={{ ...h2, fontSize: 40, textAlign: "center" }}>Every draft gets scored on 6 dimensions</h2>
          <p style={{ ...body, textAlign: "center", maxWidth: 580, margin: "0 auto 36px" }}>
            Before you publish, the Coach scores your post and explains exactly what to improve. No guessing — just clear, actionable feedback aligned to your strategy.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {scoreDimensions.map(({ title, body: b }) => (
              <div key={title} style={card}>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#a78bfa", margin: "0 0 6px" }}>{title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", padding: "72px 48px", textAlign: "center" }}>
            <Shield size={40} color="#2dd4bf" style={{ margin: "0 auto 20px", display: "block" }} />
            <h2 style={{ ...h2, fontSize: 36 }}>Your data stays yours</h2>
            <p style={{ ...body, margin: "0 0 8px" }}>
              VYRAL connects via LinkedIn&apos;s official API — no browser extensions, no scraping, no risk. Your writing patterns and voice profile are private to your account. We never share or sell your data.{" "}
              <Link href="/linkedin-tool-safe" style={{ color: "#a78bfa", textDecoration: "none" }}>Learn more →</Link>
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ maxWidth: 640, margin: "0 auto", padding: "72px 48px 80px", textAlign: "center" }}>
          <h2 style={{ ...h2, fontSize: 40 }}>Write LinkedIn posts that sound like you</h2>
          <p style={{ ...body, maxWidth: 440, margin: "0 auto 28px" }}>
            Join the first 100 creators using VYRAL&apos;s AI Coach. Full Pro access for 14 days.
          </p>
          <a href="https://app.getvyral.io" target="_blank" rel="noopener noreferrer" style={btnPurple}>Sign up for early launch</a>
        </section>
      </main>
    </>
  );
}
