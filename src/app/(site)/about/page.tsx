import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import { Bullets } from "@/components/site/FeaturePage";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import { pageMetadata } from "@/lib/metadata";

// Text kept from the previous About page; only em dashes and emoji were removed.
export const metadata = pageMetadata({
  title: "About VYRAL: LinkedIn Growth Platform for Creators",
  description:
    "VYRAL connects strategy, content, and outcomes in one platform. Built on LinkedIn's official API. No scraping, no automation.",
  path: "/about",
});

const bulletPoints = [
  "VYRAL uses LinkedIn's official APIs (Community Management API and Share on LinkedIn) for all data access and publishing.",
  "We never use browser extensions, scraping, automation scripts, or any unofficial methods to access LinkedIn.",
  "Your LinkedIn account is connected via OAuth: we never see or store your LinkedIn password.",
  "VYRAL is built on LinkedIn's official API.",
  "Your data is encrypted at rest and in transit. We never share or sell your data.",
];

const VALUES = [
  {
    title: "Clarity over complexity",
    text: "Your LinkedIn growth should be simple to understand and easy to act on. No dashboards full of meaningless numbers.",
  },
  {
    title: "Outcomes over vanity",
    text: "Likes are nice, but leads and opportunities pay the bills. We help you track what actually matters.",
  },
];

const TRUST = [
  { title: "Official API", desc: "LinkedIn Community Management API integration" },
  { title: "No scraping", desc: "Only official, approved API endpoints" },
  { title: "No fake engagement", desc: "No bots, no automation, no workarounds" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About VYRAL"
        title={
          <>
            We&apos;re building the <span className="text-primary-strong">LinkedIn growth platform</span> creators actually
            need
          </>
        }
        sub="No vanity metrics. No generic AI. Just clear insights and content that converts."
      />

      <Section variant="tint" labelledBy="mission-title" className="py-[72px]">
        <div className="grid gap-6 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] desk:gap-16">
          <SectionHeading id="mission-title">Our mission</SectionHeading>
          <p className="m-0 text-body-l text-muted">
            Most LinkedIn tools show you metrics without meaning. They tell you what happened, not why it happened or what
            to do next. We built VYRAL to be different: a platform that connects strategy, content, and outcomes in one
            place. So you can finally grow on LinkedIn with confidence, not guesswork.
          </p>
        </div>
      </Section>

      <Section variant="light" labelledBy="values-title" className="py-[72px]">
        <SectionLabel>Values</SectionLabel>
        <SectionHeading id="values-title">What we believe</SectionHeading>
        <div className="mt-10 grid gap-6 desk:grid-cols-2">
          {VALUES.map((v) => (
            <Card key={v.title} as="article" className="p-6">
              <h3 className="m-0 font-display text-heading-3 font-medium">{v.title}</h3>
              <p className="mt-3 mb-0 text-[15.5px] leading-[1.65] text-ink-2">{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="dark" from="soft" to="base" labelledBy="trust-title" className="py-[112px]">
        <div className="grid gap-10 desk:grid-cols-2 desk:gap-16">
          <div>
            <SectionLabel>Compliance &amp; trust</SectionLabel>
            <SectionHeading id="trust-title">Built on LinkedIn&apos;s official API</SectionHeading>
            <p className="mt-4 mb-0 text-body-l text-on-dark-muted">
              VYRAL uses LinkedIn&apos;s official Community Management API, the same infrastructure trusted by
              LinkedIn&apos;s own ecosystem. We never scrape, never automate engagement, and never compromise your
              account.
            </p>
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {TRUST.map((t) => (
              <li key={t.title}>
                <Card variant="dark" className="grid grid-cols-[22px_minmax(0,1fr)] gap-3.5 p-5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-[22px] items-center justify-center rounded-full bg-band-surface-soft ring-1 ring-band-hairline ring-inset"
                  >
                    <span className="size-2 rounded-full bg-signal" />
                  </span>
                  <div>
                    <b className="block text-[16px] font-semibold text-on-dark">{t.title}</b>
                    <span className="text-[15px] text-on-dark-muted">{t.desc}</span>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="light" labelledBy="technical-title" className="py-[72px]">
        <div className="max-w-[760px]">
          <SectionLabel>Technical transparency</SectionLabel>
          <SectionHeading id="technical-title">How VYRAL works with LinkedIn</SectionHeading>
          <Bullets items={bulletPoints} />
        </div>
      </Section>

      <ClosingBand from="soft" title="Start building your content engine" cta="Start building your content engine">
        <p className="m-0">14-day free Pro trial · No credit card required</p>
      </ClosingBand>
    </>
  );
}
