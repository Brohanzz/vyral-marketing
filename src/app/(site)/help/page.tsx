import Link from "next/link";
import Card from "@/components/site/Card";
import Section from "@/components/site/Section";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Help Centre: VYRAL Support & Guides",
  description:
    "Find answers, guides, and setup instructions for VYRAL. Everything you need to get the most out of your account.",
  path: "/help",
});

const categories = [
  {
    title: "Getting started",
    body: "Connect LinkedIn, set up your Blueprint, and publish your first post.",
    href: "/how-vyral-works",
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

const textLink = "font-semibold text-primary-hover hover:text-primary-strong";

export default function HelpPage() {
  return (
    <>
      <PageHero narrow label="Help" title="How can we help?" />
      <Section variant="tint" className="pt-4 pb-[84px]">
        <div className="mx-auto max-w-[720px]">
        <ul className="m-0 flex list-none flex-col gap-5 p-0">
          {categories.map((c) => (
            <li key={c.title}>
              <Card as="article" className="h-full gap-3 p-6">
                <h2 className="m-0 font-display text-heading-3 font-medium text-ink">{c.title}</h2>
                <p className="m-0 text-[15.5px] leading-[1.6] text-muted">{c.body}</p>
                <Link href={c.href} className={`mt-auto inline-flex min-h-11 items-center ${textLink}`}>
                  {c.linkLabel}
                </Link>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-6 desk:grid-cols-2">
          <div>
            <p className="m-0 text-[17px] text-ink">Can&apos;t find what you&apos;re looking for?</p>
            <Link href="/help/faq" className={`inline-flex min-h-11 items-center ${textLink}`}>
              Browse all FAQs →
            </Link>
          </div>
          <div>
            <p className="m-0 text-[17px] text-ink">Still need help?</p>
            <Link href="/contact" className={`inline-flex min-h-11 items-center ${textLink}`}>
              Contact us →
            </Link>
          </div>
        </div>
        </div>
      </Section>
    </>
  );
}
