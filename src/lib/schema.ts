import type { FaqItem } from "@/components/site/FaqAccordion";
import { SITE_URL } from "@/lib/metadata";

// Structured data builders. Every string passed in must also be visible on the page.

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    ...(image ? { image: image.startsWith("http") ? image : `${SITE_URL}${image}` } : {}),
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    author: { "@type": "Organization", name: author },
    publisher: { "@type": "Organization", name: "VYRAL", url: SITE_URL },
  };
}
