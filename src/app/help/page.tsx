import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Centre — VYRAL Support & Guides",
  description:
    "Find answers, guides, and setup instructions for VYRAL. Everything you need to get the most out of your account.",
  alternates: { canonical: "https://www.getvyral.io/help" },
};

const categories = [
  {
    title: "Getting started",
    body: "Connect LinkedIn, set up your Blueprint, and publish your first post.",
    href: "/getting-started",
    linkLabel: "View guide →",
  },
  {
    title: "Your Blueprint",
    body: "Build and edit your content strategy, pillars, and tone of voice.",
    href: "/help/faq",
    linkLabel: "View guide →",
  },
  {
    title: "Analytics & Performance Lab",
    body: "Understand your metrics, run reports, and identify what's working.",
    href: "/help/faq",
    linkLabel: "View guide →",
  },
  {
    title: "AI Coach & Ideas",
    body: "How to get the best results from brainstorm, rewrite, and critique modes.",
    href: "/help/faq",
    linkLabel: "View guide →",
  },
  {
    title: "Publishing & Calendar",
    body: "Scheduling, auto-publishing, and managing your content queue.",
    href: "/help/faq",
    linkLabel: "View guide →",
  },
  {
    title: "Account & Billing",
    body: "Plan changes, trial details, billing questions, and cancellation.",
    href: "/help/faq",
    linkLabel: "View guide →",
  },
];

export default function HelpPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* Hero */}
      <section
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "128px 24px 64px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 32px",
          }}
        >
          How can we help?
        </h1>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "16px 24px",
            maxWidth: 480,
            margin: "0 auto",
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.4)",
            textAlign: "left",
          }}
        >
          Search for answers...
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {categories.map((c) => (
            <div
              key={c.title}
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
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  margin: "0 0 16px",
                }}
              >
                {c.body}
              </p>
              <Link
                href={c.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "#a78bfa",
                  textDecoration: "none",
                }}
              >
                {c.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Link */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 12,
          }}
        >
          Can&apos;t find what you&apos;re looking for?
        </p>
        <Link
          href="/help/faq"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "#a78bfa",
            textDecoration: "none",
          }}
        >
          Browse all FAQs →
        </Link>
      </section>

      {/* Contact nudge */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 12,
          }}
        >
          Still need help?
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "#a78bfa",
            textDecoration: "none",
          }}
        >
          Contact us →
        </Link>
      </section>
    </main>
  );
}
