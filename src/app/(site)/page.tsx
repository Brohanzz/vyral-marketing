import Link from "next/link";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import DeltaPill from "@/components/site/DeltaPill";
import { type FaqItem } from "@/components/site/FaqAccordion";
import FaqSection from "@/components/site/FaqSection";
import JsonLd from "@/components/site/JsonLd";
import PlaceholderPill from "@/components/site/PlaceholderPill";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import TierCard from "@/components/site/TierCard";
import HeroLoop from "@/components/site/home/HeroLoop";
import SkeletonShot from "@/components/site/home/SkeletonShot";
import { BRAND_LINE } from "@/lib/brand";
import { SITE_URL, pageMetadata } from "@/lib/metadata";
import { FAIR_USE_LINE, PLANS, PRICED_PLANS, READ_ONLY_RULE, TRIAL, TRIAL_LINE } from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata = pageMetadata({
  title: "VYRAL: LinkedIn analytics and AI writing coach",
  description:
    "VYRAL reads the numbers on your LinkedIn posts and drafts the next one from what worked. Built on LinkedIn's official API. 14 days of Pro free.",
  path: "/",
});

const WHAT_IS_VYRAL =
  "VYRAL is a LinkedIn content intelligence platform built on LinkedIn's official API. It reads the numbers on your own posts, shows what worked, and drafts your next post from it.";

const FAQ: FaqItem[] = [
  { question: "What is VYRAL?", answer: WHAT_IS_VYRAL },
  {
    question: "Is VYRAL safe for my LinkedIn account?",
    answer:
      "VYRAL only uses LinkedIn's official API. It never scrapes, never adds anything to your browser, and never automates likes, comments or connection requests. You can remove access any time in your LinkedIn settings.",
  },
  {
    question: "How does the free trial work?",
    answer: `Every account starts with ${TRIAL.days} days of ${TRIAL.plan}, no credit card. After the trial, choose ${PRICED_PLANS.map((p) => p.name).join(" or ")}.`,
  },
  { question: "What happens if I stop paying?", answer: READ_ONLY_RULE },
  {
    question: "Who is VYRAL for?",
    answer:
      "Founders, creators, ghostwriters and teams who post on LinkedIn and want to know what actually works for them.",
  },
  {
    question: "Do I have to post through VYRAL?",
    answer:
      "No. Posts you publish through VYRAL keep their text and update their numbers on their own. Posts you publish on LinkedIn directly are imported once when you sign up, from the last 30 days, with their numbers but not their text. After that, add them by uploading LinkedIn's analytics export.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VYRAL",
  url: SITE_URL,
  description: BRAND_LINE,
  sameAs: ["https://linkedin.com/company/vyral", "https://twitter.com/getvyral"],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "VYRAL",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: WHAT_IS_VYRAL,
  offers: PRICED_PLANS.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: String(plan.monthly),
    priceCurrency: "USD",
    description: plan.features.some((f) => f.startsWith("Unlimited"))
      ? `${plan.features.join(", ")}. ${FAIR_USE_LINE}`
      : plan.features.join(", "),
  })),
};

const INSIDE = [
  {
    step: "01",
    title: "This week next to last week",
    body: "Open VYRAL and see this week's posts and impressions next to last week's, with the change for each.",
    shot: "home" as const,
    label: "Home",
    link: { label: "See how it works", href: "/how-vyral-works" },
  },
  {
    step: "02",
    title: "See which posts earned it",
    body: "Impressions, reactions and comments for each of your posts. On Pro, patterns show which hook types, timing and themes beat your own average.",
    shot: "insights" as const,
    label: "Insights",
    link: { label: "See the analytics", href: "/linkedin-analytics" },
  },
  {
    step: "03",
    title: "A draft written from your own posts",
    body: "The Coach uses your top posts, your tone and your patterns as examples, so a draft sounds like you.",
    shot: "coach" as const,
    label: "Coach",
    link: { label: "Meet the AI Coach", href: "/ai-coach" },
  },
];

const mono = "font-mono font-medium tabular-nums";

const QUOTES = [
  {
    quote: "I stopped guessing what to post. The numbers tell me, and the draft is already waiting.",
    delta: (
      <>
        Reach up <span className={mono}>38%</span> in <span className={mono}>6</span> weeks
      </>
    ),
    direction: "up" as const,
    name: "Anders Holm",
    role: "Founder, Holm Studio",
  },
  {
    quote: "The draft already knows what worked last week. I edit it instead of starting from a blank page.",
    delta: (
      <>
        Time per post from <span className={mono}>40</span> to <span className={mono}>12</span> min
      </>
    ),
    direction: "down" as const,
    name: "Priya Nair",
    role: "Head of growth, Larkfield",
  },
  {
    quote: "Two of my last three inbound leads mentioned a post. Now I can see which one did it.",
    delta: (
      <>
        Inbound replies <span className={mono}>2.4x</span>
      </>
    ),
    direction: "up" as const,
    name: "Jonas Weber",
    role: "Sales lead, Nordwerk",
  },
];

const API_POINTS = [
  { title: "Your account stays yours", body: "Remove VYRAL's access any time from your LinkedIn settings." },
  { title: "Real numbers", body: "Impressions and engagement come from LinkedIn, not from a guess." },
  { title: "No automation", body: "No auto likes, no auto comments, no connection requests sent for you." },
];

const avatar = "flex-none rounded-full bg-[radial-gradient(circle_at_34%_30%,var(--vy-surface),var(--vy-chart-bar))]";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={appSchema} />
      <JsonLd data={faqSchema(FAQ)} />

      {/* Hero */}
      <Section variant="light" hold labelledBy="hero-title" className="pt-[30px] pb-[72px]">
        <p className="m-0 inline-flex items-center gap-2.5 rounded-pill bg-surface/92 px-4 py-[9px] text-[14px] font-medium text-ink-2 shadow-1">
          <span aria-hidden="true" className="block size-2 rounded-full bg-primary" />
          {BRAND_LINE}
        </p>
        <h1
          id="hero-title"
          className="mt-[26px] mb-0 max-w-[900px] text-pretty font-display text-[42px] leading-[1.04] font-semibold tracking-[-0.028em] desk:text-display-xl"
        >
          Your last post already told you what to write next
        </h1>
        <p className="mt-[22px] mb-0 max-w-[560px] text-subhead text-muted">
          VYRAL reads the numbers on your own posts and drafts the next one from what worked.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={APP_SIGNUP_URL} size="lg">
            Start free trial
          </Button>
          <Button href="#inside" variant="ghost" size="lg">
            See how it works
          </Button>
          <span className="text-[14px] text-muted">{TRIAL_LINE}</span>
        </div>
        <div className="vy-hero-panel mt-[52px] rounded-xl p-5 desk:p-8">
          <HeroLoop />
        </div>
      </Section>

      {/* Inside VYRAL */}
      <Section variant="dark" from="soft" to="base" id="inside" labelledBy="inside-title" className="pt-[112px] pb-[120px]">
        <SectionLabel>Inside VYRAL</SectionLabel>
        <SectionHeading id="inside-title">What happened, why it happened, and what to write next</SectionHeading>
        <div className="mt-[52px] grid gap-8 desk:grid-cols-3">
          {INSIDE.map((item) => (
            <Card key={item.step} variant="dark" as="article" className="gap-3.5 p-[22px]">
              <span className="font-mono text-[13px] font-medium text-on-dark-muted tabular-nums">{item.step}</span>
              <h3 className="m-0 text-pretty font-display text-heading-3 font-medium">{item.title}</h3>
              <p className="m-0 text-[15.5px] leading-[1.55] text-on-dark-muted">{item.body}</p>
              <SkeletonShot variant={item.shot} label={item.label} />
              <div className="flex flex-wrap justify-between gap-2.5 text-caption text-on-dark-muted">
                <span>{item.label}</span>
                <PlaceholderPill>Placeholder screenshot</PlaceholderPill>
              </div>
              <Link
                href={item.link.href}
                className="mt-auto inline-flex min-h-11 items-center self-start text-[15px] font-semibold text-band-primary underline underline-offset-2 hover:text-band-primary-hover"
              >
                {item.link.label}
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Proof */}
      <Section variant="light" labelledBy="proof-title" className="pt-[78px] pb-[84px]">
        <SectionLabel>What people say</SectionLabel>
        <SectionHeading id="proof-title">People who stopped guessing</SectionHeading>
        <div className="mt-12 grid gap-7 desk:grid-cols-3">
          {QUOTES.map((q) => (
            <Card key={q.name} as="figure" className="m-0 p-[26px]">
              <blockquote className="m-0">
                <p className="m-0 font-display text-[21px] leading-[1.32] font-medium tracking-[-0.01em]">{q.quote}</p>
              </blockquote>
              <DeltaPill direction={q.direction} className="mt-[18px] self-start">
                {q.delta}
              </DeltaPill>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                <span aria-hidden="true" className={`size-12 ${avatar}`} />
                <span>
                  <b className="block text-[15px] font-semibold">{q.name}</b>
                  <span className="text-[13.5px] text-muted">{q.role}</span>
                </span>
              </figcaption>
              <div className="mt-3.5">
                <PlaceholderPill>Placeholder quote, name and photo</PlaceholderPill>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <Section variant="tint" labelledBy="founder-title" className="py-9">
        <div className="flex flex-col gap-5 rounded-lg bg-surface/70 p-5 shadow-1 desk:flex-row desk:items-center desk:gap-6 desk:px-7">
          <span className="flex flex-none" aria-hidden="true">
            <span className={`size-14 ${avatar}`} />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="founder-title" className="m-0 text-[14px] font-semibold text-primary-strong">
              From the founder
            </h2>
            <p className="mt-1 mb-0 text-[17px] leading-normal text-ink">
              Meet Viktorija, the founder of VYRAL, and why she built it.{" "}
              <Link
                href="/about#founder"
                className="font-semibold whitespace-nowrap text-primary-hover underline underline-offset-2 hover:text-primary-strong"
              >
                Read her story
              </Link>
            </p>
          </div>
          <PlaceholderPill className="self-start desk:self-center">Placeholder, founder photo</PlaceholderPill>
        </div>
      </Section>

      {/* Official API */}
      <Section variant="dark" from="base" to="base" id="api" labelledBy="api-title" className="py-[112px]">
        <SectionLabel>Official API</SectionLabel>
        <SectionHeading id="api-title">{BRAND_LINE.replace(/\.$/, "")}</SectionHeading>
        <div className="mt-10 grid items-start gap-8 desk:grid-cols-2 desk:gap-16">
          <div>
            <p className="m-0 text-body-l text-on-dark-muted">
              You connect through LinkedIn&apos;s own login. VYRAL reads your post numbers and publishes when you ask. It
              never scrapes, never adds anything to your browser, and never likes or comments for you.
            </p>
            <div className="mt-7">
              <Button href="/how-vyral-works">Read how access works</Button>
            </div>
          </div>
          <ul className="m-0 flex list-none flex-col gap-[22px] p-0">
            {API_POINTS.map((pt) => (
              <li key={pt.title} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-[22px] items-center justify-center rounded-full bg-band-surface-soft ring-1 ring-band-hairline ring-inset"
                >
                  <span className="size-2 rounded-full bg-signal" />
                </span>
                <div>
                  <b className="mb-1 block text-[16px] font-semibold text-on-dark">{pt.title}</b>
                  <span className="text-[15.5px] leading-[1.55] text-on-dark-muted">{pt.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section variant="light" id="pricing" labelledBy="pricing-title" className="pt-[78px] pb-[84px]">
        <SectionLabel>Pricing</SectionLabel>
        <div className="grid items-end gap-3.5 desk:grid-cols-2 desk:gap-16">
          <SectionHeading id="pricing-title">
            Start with {TRIAL.days} days of {TRIAL.plan}
          </SectionHeading>
          <p className="m-0 text-body-l text-muted">No credit card. Pick a plan when the trial ends.</p>
        </div>
        <div className="mt-11 grid items-stretch gap-7 desk:grid-cols-3">
          {PLANS.map((plan) => (
            <TierCard key={plan.id} plan={plan} mode="teaser" />
          ))}
        </div>
        <p className="mt-[26px] mb-0 text-[14.5px] text-muted">
          {FAIR_USE_LINE} If your trial ends and you stop, your history stays readable.{" "}
          <Link href="/pricing" className="font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong">
            Compare every plan
          </Link>
        </p>
      </Section>

      {/* FAQ */}
      <FaqSection items={FAQ} heading="Common questions" variant="tint" />

      {/* Closing band */}
      <ClosingBand title={<>Your next post is already in last week&apos;s numbers</>}>
        <p className="m-0">{TRIAL_LINE}</p>
      </ClosingBand>
    </>
  );
}
