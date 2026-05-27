import type { Metadata } from "next";
import PricingClient from "./PricingClient";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Simple Pricing That Grows With You — VYRAL",
  description:
    "Start with a 14-day free trial. No credit card required. Creator, Pro, and Team plans for LinkedIn creators.",
  alternates: { canonical: "https://www.getvyral.io/pricing" },
  openGraph: {
    title: "VYRAL Pricing — Start Your Free Trial",
    description:
      "Every plan starts with a 14-day free trial. Pick the plan that fits your content goals.",
    url: "https://www.getvyral.io/pricing",
    images: [
      {
        url: "https://www.getvyral.io/og-default.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── JSON-LD SCHEMAS ─────────────────────────────────────────────────────────

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "VYRAL Pricing",
  description:
    "Simple pricing for LinkedIn creators. Creator, Pro, and Team plans — every plan starts with a 14-day free trial.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens after my free trial ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You're automatically moved to the free plan. You keep access to basic analytics, the Knowledge Hub, and 10 AI coaching messages per month. No charge, no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cancel from Settings > Billing. You keep access until the end of your billing period. No cancellation fees.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models does VYRAL use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VYRAL uses Gemini Flash for fast tasks and Claude Sonnet for coaching and deep analysis across all paid plans.",
      },
    },
  ],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingClient />
    </>
  );
}
