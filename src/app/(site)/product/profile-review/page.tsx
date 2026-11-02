import Image from "next/image";
import Link from "next/link";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import { pageMetadata } from "@/lib/metadata";
import { APP_SIGNUP_URL } from "@/lib/urls";

// Kept as its own page (it did not fit a merged feature page). Text kept; only em dashes and emoji removed.
export const metadata = pageMetadata({
  title: "Profile Review: AI LinkedIn Profile Audit | VYRAL",
  description:
    "Upload a screenshot of your LinkedIn profile and get an instant AI audit. Section scores, priority fixes, and headline rewrites tailored to your strategy.",
  path: "/product/profile-review",
});

const SECTIONS = [
  {
    title: "Strategy Alignment",
    text: "See how well your profile positions you for your content goals, not just your job title.",
  },
  {
    title: "About Section",
    text: "Is your About section built for conversion or just a copy of your CV? You'll know.",
  },
  {
    title: "Banner & Photo",
    text: "Visual first impressions scored and compared against what works for LinkedIn creators.",
  },
  {
    title: "Headline",
    text: "Your headline is the most important line on your profile. Get rewrites that actually convert.",
  },
  {
    title: "Featured Section",
    text: "The most underused section on LinkedIn. Find out if you're leaving authority on the table.",
  },
  {
    title: "Overall Consistency",
    text: "Does your profile tell a coherent story? VYRAL checks alignment across every section.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Take a screenshot",
    text: "Screenshot your LinkedIn profile: the full page or just the top section. Upload it directly in VYRAL.",
  },
  {
    num: "02",
    title: "Get your audit",
    text: "VYRAL's AI scores every section, flags the biggest gaps, and explains exactly what to fix and why.",
  },
  {
    num: "03",
    title: "Fix with the Coach",
    text: "Take your priority fixes straight into the AI Coach to rewrite your headline, About section, and more, in your voice.",
  },
];

const TRIAL_NOTE = "14-day free trial · No credit card required";

export default function ProfileReviewPage() {
  return (
    <>
      <PageHero
        label="Profile Review"
        title="Your LinkedIn profile is either working for you or against you"
        sub="Upload a screenshot and get an instant AI audit: section-by-section scores, priority fixes, and headline rewrites tailored to your content strategy."
      >
        <Button href={APP_SIGNUP_URL} size="lg">
          Start free trial
        </Button>
        <span className="text-[14px] text-muted">{TRIAL_NOTE}</span>
      </PageHero>

      <Section variant="tint" className="py-[48px]">
        <div className="mx-auto max-w-[720px]">
          <Image
            src="/profileviewer.png"
            alt="VYRAL Profile Review: AI LinkedIn profile audit"
            width={1238}
            height={1778}
            sizes="(min-width: 860px) 720px, 100vw"
            className="block h-auto w-full rounded-lg shadow-2"
          />
        </div>
      </Section>

      <Section variant="light" labelledBy="reviewed-title" className="py-[72px]">
        <SectionLabel>What gets reviewed</SectionLabel>
        <SectionHeading id="reviewed-title">Every section of your profile, scored and explained</SectionHeading>
        <p className="mt-4 mb-0 max-w-[620px] text-body-l text-muted">
          Not a generic checklist. Every score is contextualised against your content strategy and goals.
        </p>
        <div className="mt-10 grid gap-5 desk:grid-cols-3">
          {SECTIONS.map((s) => (
            <Card key={s.title} as="article" className="p-6">
              <h3 className="m-0 text-[17px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 mb-0 text-[15px] leading-[1.6] text-muted">{s.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="tint" labelledBy="steps-title" className="py-[72px]">
        <SectionLabel>How it works</SectionLabel>
        <SectionHeading id="steps-title">Three steps to a stronger profile</SectionHeading>
        <ol className="m-0 mt-10 grid list-none gap-5 p-0 desk:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.num}>
              <Card className="h-full p-6">
                <span className="font-mono text-[13px] font-medium text-muted tabular-nums">{s.num}</span>
                <h3 className="mt-2 mb-0 text-[17px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 mb-0 text-[15px] leading-[1.6] text-muted">{s.text}</p>
              </Card>
            </li>
          ))}
        </ol>
        <p className="mt-8 mb-0 text-[15px]">
          <Link href="/how-vyral-works" className="font-semibold text-primary-hover hover:text-primary-strong">
            ← Back to product
          </Link>
        </p>
      </Section>

      <ClosingBand title="Find out what your profile is really saying">
        <p className="m-0">{TRIAL_NOTE}</p>
      </ClosingBand>
    </>
  );
}
