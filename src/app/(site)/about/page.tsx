import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import { Bullets } from "@/components/site/FeaturePage";
import PageHero from "@/components/site/PageHero";
import PlaceholderPill from "@/components/site/PlaceholderPill";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import { BRAND_LINE } from "@/lib/brand";
import { pageMetadata } from "@/lib/metadata";
import { TRIAL_LINE } from "@/lib/pricing";

export const metadata = pageMetadata({
  title: "About VYRAL: LinkedIn analytics and AI writing coach",
  description:
    "VYRAL reads the numbers on your own LinkedIn posts, shows what worked and drafts the next post from it. Built on LinkedIn's official API.",
  path: "/about",
});

const bulletPoints = [
  "VYRAL uses the Community Management API and Share on LinkedIn for data access and publishing.",
  "It uses no browser extension, no scraping and no automation scripts.",
  "You connect through LinkedIn's own login. VYRAL never sees or stores your LinkedIn password.",
  "Your data is encrypted at rest and in transit. We never share or sell it.",
  "You can remove VYRAL's access any time in your LinkedIn settings.",
];

const VALUES = [
  {
    title: "Clarity over complexity",
    text: "Your LinkedIn growth should be simple to understand and easy to act on. We show what changed from one week to the next.",
  },
  {
    title: "Outcomes over vanity",
    text: "Likes are nice, but leads and opportunities pay the bills. We help you track what matters.",
  },
];

const TRUST = [
  { title: "Official API", desc: "Community Management API and Share on LinkedIn" },
  { title: "No scraping", desc: "VYRAL does not scrape LinkedIn" },
  { title: "No automated engagement", desc: "No automated likes, comments or connection requests" },
];

const column = "mx-auto max-w-[720px]";

export default function AboutPage() {
  return (
    <>
      <PageHero
        narrow
        label="About VYRAL"
        title="VYRAL helps you see what works on LinkedIn"
        sub="It reads the numbers on your own posts, shows what worked and drafts the next post from it."
      />

      <Section variant="tint" labelledBy="mission-title" className="py-[72px]">
        <div className={column}>
          <SectionHeading id="mission-title">Our mission</SectionHeading>
          <p className="mt-4 mb-0 text-body-l text-muted">
            Most LinkedIn tools show you numbers without the reason. They tell you what happened, not why it happened or
            what to do next. We built VYRAL to connect your strategy, your posts and your results in one place. You see
            what worked, why it worked and what to write next.
          </p>
        </div>
      </Section>

      <Section variant="light" labelledBy="values-title" className="py-[72px]">
        <div className={column}>
          <SectionLabel>Values</SectionLabel>
          <SectionHeading id="values-title">What we believe</SectionHeading>
          <div className="mt-8 grid gap-5 desk:grid-cols-2">
            {VALUES.map((v) => (
              <Card key={v.title} as="article" className="p-6">
                <h3 className="m-0 font-display text-heading-3 font-medium">{v.title}</h3>
                <p className="mt-3 mb-0 text-[15.5px] leading-[1.65] text-ink-2">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="dark" from="base" to="base" labelledBy="trust-title" className="py-[112px]">
        <div className={`${column} grid gap-10`}>
          <div>
            <SectionLabel>Official API</SectionLabel>
            <SectionHeading id="trust-title">{BRAND_LINE.replace(/\.$/, "")}</SectionHeading>
            <p className="mt-4 mb-0 text-body-l text-on-dark-muted">
              VYRAL reads your post numbers and publishes when you ask. It never scrapes, never adds anything to your
              browser, and never likes or comments for you.
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
        <div className={column}>
          <SectionLabel>Technical transparency</SectionLabel>
          <SectionHeading id="technical-title">How VYRAL works with LinkedIn</SectionHeading>
          <Bullets items={bulletPoints} />
        </div>
      </Section>

      <Section variant="tint" id="founder" labelledBy="founder-title" className="scroll-mt-24 py-[72px]">
        <div className={column}>
          <SectionLabel>Founder</SectionLabel>
          <SectionHeading id="founder-title">From the founder</SectionHeading>
          <div className="mt-6">
            <PlaceholderPill>Placeholder, founder story and photo</PlaceholderPill>
          </div>
        </div>
      </Section>

      <ClosingBand from="soft" title="Start with the numbers on your own posts">
        <p className="m-0">{TRIAL_LINE}</p>
      </ClosingBand>
    </>
  );
}
