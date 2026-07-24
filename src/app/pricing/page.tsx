import type { Metadata } from "next";
import PricingClient from "./PricingClient";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Simple Pricing That Grows With You | VYRAL",
  description:
    "Creator and Pro plans for LinkedIn creators. Start with 14 days free, every feature unlocked, no credit card required.",
  alternates: { canonical: "https://www.getvyral.io/pricing" },
  openGraph: {
    title: "VYRAL Pricing: Start Your Free Trial",
    description:
      "Your first 14 days are free with every feature unlocked. Pick the plan that fits your content goals.",
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
    "Simple pricing for LinkedIn creators. Creator and Pro plans, with 14 days free and every feature unlocked when you sign up.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the free trial work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you sign up you get 14 days with every feature unlocked, including everything on Pro, plus 50 AI generations. No credit card required. When you are ready, pick Creator or Pro and billing starts immediately. Subscribing ends the trial, so if you subscribe on day 3 you do not keep the remaining 11 days. If you do nothing, you move to the free plan: your analytics, post history and Knowledge Hub stay available, and AI features pause until you subscribe.",
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
        text: "VYRAL uses Gemini for fast tasks and Claude for coaching and deep analysis across all paid plans.",
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
