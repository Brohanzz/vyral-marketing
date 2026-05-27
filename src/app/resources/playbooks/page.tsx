import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Playbooks — Proven Content Frameworks | VYRAL",
  description:
    "Step-by-step LinkedIn content playbooks for creators, ghostwriters, and agencies. Proven frameworks built into VYRAL.",
  alternates: { canonical: "https://www.getvyral.io/resources/playbooks" },
};

const playbooks = [
  {
    title: "The First 30 Days",
    body: "Build your foundation: voice, pillars, Blueprint, and first 10 posts. The exact sequence new creators follow to get traction fast.",
  },
  {
    title: "The Engagement Engine",
    body: "Identify your top-performing formats, double down on what works, and cut what doesn't. Data-driven consistency.",
  },
  {
    title: "The Ghostwriter System",
    body: "Onboard clients, extract voice, manage multiple Blueprints, and deliver weekly without burning out.",
  },
  {
    title: "The Authority Builder",
    body: "Establish topical depth in one pillar, build credibility with data-backed posts, and become the go-to voice in your niche.",
  },
  {
    title: "The Relaunch",
    body: "Coming back after a break? Reset your strategy, audit past performance, and build a 4-week re-entry plan.",
  },
  {
    title: "The Agency Scale",
    body: "Standardise client onboarding, content review, and reporting across a team. Built for operations, not just individuals.",
  },
];

export default function PlaybooksPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* Hero */}
      <section
        style={{
          paddingTop: 128,
          paddingBottom: 80,
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
          padding: "128px 24px 80px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(124,58,237,0.9)",
            marginBottom: 20,
          }}
        >
          Resources
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 24px",
          }}
        >
          LinkedIn playbooks that actually work
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 36px",
          }}
        >
          VYRAL&apos;s built-in playbooks give you step-by-step frameworks for every
          content challenge — from launching your first campaign to scaling a
          ghostwriting practice.
        </p>
        <a
          href="https://www.getvyral.io/beta"
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            borderRadius: 999,
            padding: "14px 32px",
          }}
        >
          Start for free
        </a>
      </section>

      {/* Playbooks grid */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 36,
            color: "#fff",
            textAlign: "center",
            margin: "0 0 48px",
          }}
        >
          Frameworks for every stage
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {playbooks.map((p) => (
            <div
              key={p.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#fff",
                  margin: "0 0 12px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 40,
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          Playbooks live inside VYRAL
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            margin: "0 0 32px",
          }}
        >
          Every playbook is integrated with your Blueprint, Analytics, and AI
          Coach — not a PDF you read once and forget.
        </p>
        <a
          href="https://www.getvyral.io/beta"
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            borderRadius: 999,
            padding: "14px 32px",
          }}
        >
          Start for free
        </a>
      </section>
    </main>
  );
}
