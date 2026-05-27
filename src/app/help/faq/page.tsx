import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | VYRAL",
  description:
    "Answers to the most common questions about VYRAL — setup, billing, LinkedIn safety, and how the AI works.",
  alternates: { canonical: "https://www.getvyral.io/help/faq" },
};

interface QA {
  q: string;
  a: string;
}

interface Section {
  heading: string;
  items: QA[];
}

const sections: Section[] = [
  {
    heading: "Getting started",
    items: [
      {
        q: "How do I connect my LinkedIn account?",
        a: "Go to Settings → LinkedIn Connection and click Connect. You'll be taken through LinkedIn's standard OAuth flow — this is the same process used by apps like Notion and Slack. VYRAL never sees your LinkedIn password.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Every new account starts with a 14-day Pro trial — no credit card required. You get full access to all Pro features during the trial.",
      },
      {
        q: "What happens after my trial ends?",
        a: "You'll be moved to the Creator plan ($49/mo) unless you upgrade to Pro or cancel. Your data and LinkedIn connection stay intact.",
      },
    ],
  },
  {
    heading: "LinkedIn safety",
    items: [
      {
        q: "Is VYRAL safe to use with LinkedIn?",
        a: "Yes. VYRAL is built exclusively on LinkedIn's official APIs — the same APIs used by enterprise tools and LinkedIn's own partners. We don't use browser extensions, scraping, or automation outside of what LinkedIn explicitly permits. Your account is never at risk.",
      },
      {
        q: "Why are other LinkedIn tools getting banned?",
        a: "Tools that use browser extensions, scraping, or unofficial automation violate LinkedIn's Terms of Service. Several tools — including Kleo, Shield's Chrome extension, and others — have been banned or removed for this reason. VYRAL uses only LinkedIn's official API, which is fully permitted.",
      },
      {
        q: "Does VYRAL post on my behalf?",
        a: "Only when you explicitly schedule or trigger a publish. VYRAL never posts automatically without your permission.",
      },
    ],
  },
  {
    heading: "Plans & billing",
    items: [
      {
        q: "What's the difference between Creator and Pro?",
        a: "Creator ($49/mo) covers analytics, Blueprint, AI Coach, Calendar, and publishing. Pro ($99/mo) adds the Data Analyst, Creator Intelligence, Strategy Builder, unlimited AI, and access to Claude Sonnet 4.",
      },
      {
        q: "Can I change my plan anytime?",
        a: "Yes. Upgrade or downgrade from Settings → Billing at any time. Changes take effect immediately.",
      },
      {
        q: "How do I cancel?",
        a: "From Settings → Billing → Manage subscription. You keep access until the end of your billing period.",
      },
    ],
  },
  {
    heading: "AI & data",
    items: [
      {
        q: "How does the AI Coach learn my voice?",
        a: "When you connect LinkedIn, VYRAL imports your post history and analyses your writing patterns — sentence length, vocabulary, structure, and tone. The AI Coach uses this as context for every generation. The more posts you have, the better it performs.",
      },
      {
        q: "Is my data shared or sold?",
        a: "No. Your data is used only to power your VYRAL account. We never share, sell, or use your content to train public AI models.",
      },
      {
        q: "What AI models does VYRAL use?",
        a: "Creator plan uses Gemini Flash. Pro plan uses Gemini Flash plus Claude Sonnet 4 for higher-complexity tasks like the Data Analyst and deep coaching sessions.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "128px 24px 48px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.1,
            color: "#fff",
            margin: 0,
          }}
        >
          Frequently asked questions
        </h1>
      </section>

      {/* FAQ sections */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "32px 24px 80px",
        }}
      >
        {sections.map((section) => (
          <div key={section.heading} style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: 24,
                color: "#fff",
                margin: "0 0 24px",
              }}
            >
              {section.heading}
            </h2>
            {section.items.map((item) => (
              <div key={item.q} style={{ marginBottom: 32 }}>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#fff",
                    margin: "0 0 8px",
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                    margin: 0,
                    paddingLeft: 16,
                    borderLeft: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* Back link */}
        <div style={{ paddingTop: 32 }}>
          <Link
            href="/help"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "#a78bfa",
              textDecoration: "none",
            }}
          >
            ← Back to Help Centre
          </Link>
        </div>
      </div>
    </main>
  );
}
