import Link from "next/link";
import AppScreen from "@/components/site/AppScreen";
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
    title: "Profile photo",
    text: "Is your photo professional and approachable, and does it fit the rest of your profile?",
  },
  {
    title: "Banner",
    text: "Does your banner say what you do and who you help?",
  },
  {
    title: "Headline",
    text: "Your headline is the most important line on your profile. Get rewrites that actually convert.",
  },
  {
    title: "About",
    text: "Is your About section built for conversion or just a copy of your CV? You'll know.",
  },
  {
    title: "Featured",
    text: "The most underused section on LinkedIn. Find out if you're leaving authority on the table.",
  },
  {
    title: "Experience",
    text: "Do your roles show results for your audience, not only your duties?",
  },
  {
    title: "Consistency",
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
    text: "Every section that scores under 7 of 10 has a Fix with Coach button. It opens the Coach with that fix, to rewrite your headline, About section and more.",
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
        aside={<AppScreen name="profile-review" priority />}
      >
        <Button href={APP_SIGNUP_URL} size="lg">
          Start free trial
        </Button>
        <span className="text-[14px] text-muted">{TRIAL_NOTE}</span>
      </PageHero>

      <Section variant="tint" labelledBy="reviewed-title" className="py-[72px]">
        <SectionLabel>What gets reviewed</SectionLabel>
        <SectionHeading id="reviewed-title">Every section of your profile, scored and explained</SectionHeading>
        <p className="mt-4 mb-0 max-w-[620px] text-body-l text-muted">
          Not a generic checklist. You get a score out of 100, a score out of 10 for each of seven sections and the three fixes to make first. A separate Fits your strategy score compares your profile with your Blueprint.
        </p>
        <div className="mt-10 grid gap-5 desk:grid-cols-3 desk:gap-y-0">
          {SECTIONS.map((s) => (
            <Card key={s.title} as="article" className="p-6 desk:row-span-2 desk:grid desk:grid-rows-subgrid desk:gap-y-0">
              <h3 className="m-0 text-[17px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 mb-0 text-[15px] leading-[1.6] text-muted">{s.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="light" labelledBy="steps-title" className="py-[72px]">
        <SectionLabel>How it works</SectionLabel>
        <SectionHeading id="steps-title">Three steps to a stronger profile</SectionHeading>
        <ol className="m-0 mt-10 grid list-none gap-5 p-0 desk:grid-cols-3 desk:gap-y-0">
          {STEPS.map((s) => (
            <Card key={s.num} as="li" className="p-6 desk:row-span-3 desk:grid desk:grid-rows-subgrid desk:gap-y-0">
              <span className="font-mono text-[13px] font-medium text-muted tabular-nums">{s.num}</span>
              <h3 className="mt-2 mb-0 text-[17px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 mb-0 text-[15px] leading-[1.6] text-muted">{s.text}</p>
            </Card>
          ))}
        </ol>
        <p className="mt-8 mb-0 text-[15px]">
          <Link href="/how-vyral-works" className="font-semibold text-primary-hover hover:text-primary-strong">
            ← Back to product
          </Link>
        </p>
      </Section>

      <ClosingBand from="soft" title="Find out what your profile is really saying">
        <p className="m-0">{TRIAL_NOTE}</p>
      </ClosingBand>
    </>
  );
}
