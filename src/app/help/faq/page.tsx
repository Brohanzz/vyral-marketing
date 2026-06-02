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
        a: "Go to Settings → LinkedIn Connection and click Connect. You'll go through LinkedIn's standard OAuth flow — the same process used by apps like Notion and Slack. VYRAL never sees your LinkedIn password.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Every new account starts with a 14-day Pro trial — no credit card required. You get full access to all Pro features during the trial.",
      },
      {
        q: "What happens after my trial ends?",
        a: "You'll move to the Free plan, which gives you read-only access to your analytics and post library. You can upgrade to Creator or Pro from Settings → Billing at any time. Your data and LinkedIn connection stay intact.",
      },
    ],
  },
  {
    heading: "LinkedIn safety",
    items: [
      {
        q: "Is VYRAL safe to use with LinkedIn?",
        a: "Yes. VYRAL is built exclusively on LinkedIn's official Community Management API — the same infrastructure used by LinkedIn's enterprise partners. We don't use browser extensions, scraping, or any automation outside what LinkedIn explicitly permits. Your account is never at risk.",
      },
      {
        q: "Why do some LinkedIn tools get restricted or shut down?",
        a: "Tools that use browser extensions, scraping, or unofficial automation violate LinkedIn's Terms of Service. LinkedIn actively detects these methods and restricts or removes tools that use them. VYRAL operates entirely through LinkedIn's official API, which means your account is fully protected.",
      },
      {
        q: "Does VYRAL post on my behalf automatically?",
        a: "Only when you explicitly schedule or trigger a publish. VYRAL never posts without your direct action.",
      },
      {
        q: "Can VYRAL comment on posts or auto-engage on my behalf?",
        a: "No — and deliberately so. Auto-commenting and inauthentic engagement violate LinkedIn's Terms of Service. VYRAL is built to grow your presence through better content and strategy, not shortcuts that put your account at risk.",
      },
    ],
  },
  {
    heading: "What VYRAL can and can't do",
    items: [
      {
        q: "Why can't I tag or mention people in posts?",
        a: "Tagging people in posts requires access to a restricted part of LinkedIn's API that is not available to most third-party tools. Tools that do offer tagging typically route the post through a Chrome extension using your LinkedIn session cookies — not through the official API. This works until it doesn't: LinkedIn actively detects and restricts cookie-based automation, and it puts your account at risk. VYRAL doesn't offer tagging via workarounds. If you need to tag someone, draft your post in VYRAL and publish natively on LinkedIn where you can add mentions directly.",
      },
      {
        q: "Why do I need to post through VYRAL to see my analytics?",
        a: "LinkedIn's official API only provides performance data — impressions, clicks, engagement — for posts published through an approved application. Posts published directly on LinkedIn are not accessible to third-party tools through official means. Tools that show analytics for posts you didn't publish through them are either using screen scraping, browser extensions reading your LinkedIn session, or unofficial data access — all of which violate LinkedIn's Terms of Service and carry a real risk of account restriction. Posting through VYRAL is what connects your content to your data cleanly and safely.",
      },
      {
        q: "Why can't I see an inspiration library of other people's posts?",
        a: "Accessing other users' content at scale requires scraping or unofficial data access, both of which violate LinkedIn's Terms of Service. VYRAL only works with data you own — your posts, your analytics, your audience. This is a deliberate choice to keep your account safe and stay within LinkedIn's rules.",
      },
      {
        q: "Can VYRAL access my follower demographics?",
        a: "For company pages, yes — LinkedIn provides full demographic breakdowns via the API. For personal profiles, LinkedIn does not expose follower demographics through the official API. This is a LinkedIn platform limitation, not a VYRAL one. You can export your demographic data directly from LinkedIn and we're exploring ways to use that export inside VYRAL.",
      },
      {
        q: "What's the video size limit?",
        a: "VYRAL supports video uploads up to 5GB, in line with LinkedIn's official API specification. Videos must be in MP4 format and between 3 seconds and 30 minutes long.",
      },
    ],
  },
  {
    heading: "Plans & billing",
    items: [
      {
        q: "What's the difference between Creator and Pro?",
        a: "Creator ($49/mo) covers analytics, Blueprint, AI Coach, Calendar, and publishing. Pro ($99/mo) adds the Data Analyst, advanced content intelligence, and access to Claude for higher-complexity coaching and analysis.",
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
        q: "What AI does VYRAL use?",
        a: "VYRAL uses Gemini for fast tasks and Claude for higher-complexity work like the Data Analyst and deep coaching sessions.",
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
