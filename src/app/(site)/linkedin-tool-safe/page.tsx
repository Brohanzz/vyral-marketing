import Link from "next/link";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import FaqAccordion, { type FaqItem } from "@/components/site/FaqAccordion";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import { BRAND_LINE } from "@/lib/brand";
import { pageMetadata } from "@/lib/metadata";
import { TRIAL_LINE } from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata = pageMetadata({
  title: "LinkedIn tool safety: official API, no extensions | VYRAL",
  description:
    "How VYRAL connects to LinkedIn: official APIs only, no browser extension, no scraping and no automated likes, comments or connection requests.",
  path: "/linkedin-tool-safe",
});

// The ban answer is kept word for word.
const FAQ: FaqItem[] = [
  {
    question: "Is VYRAL safe to use with LinkedIn?",
    answer:
      "VYRAL uses only LinkedIn's official APIs: the Community Management API and Share on LinkedIn. It uses no browser extension, does no scraping and runs no automation. You connect through LinkedIn's own login and can remove access any time in your LinkedIn settings.",
  },
  {
    question: "Can LinkedIn ban my account for using VYRAL?",
    answer:
      "VYRAL only uses LinkedIn's official API and never automates likes, comments or connection requests. That keeps your use of VYRAL within LinkedIn's rules. You can remove VYRAL's access any time in your LinkedIn settings.",
  },
  {
    question: "Does VYRAL use a browser extension?",
    answer:
      "No. VYRAL is a web app that connects to LinkedIn through OAuth. There is nothing to install in your browser. All data access goes through LinkedIn's official APIs, from our servers.",
  },
];

const CONNECTIONS = [
  {
    title: "LinkedIn's own login",
    body: "You connect with OAuth, the sign-in method many apps use. VYRAL never sees or stores your LinkedIn password. You can remove access any time in your LinkedIn settings.",
  },
  {
    title: "Community Management API, for analytics",
    body: "VYRAL reads the numbers on your posts through LinkedIn's Community Management API: impressions, likes, comments and reposts.",
  },
  {
    title: "Share on LinkedIn, for publishing",
    body: "When you publish through VYRAL, the post goes out through LinkedIn's Share on LinkedIn API. It appears as if you typed it into LinkedIn yourself.",
  },
];

const NEVER = [
  "No browser extension",
  "No scraping of LinkedIn data",
  "No automated likes, comments or connection requests",
  "No messaging bots or inbox automation",
  "No automated profile visits",
  "No storing your password",
  "No selling your data",
];

const DOES = [
  "Reads your post analytics, with your permission",
  "Publishes a post when you click Publish or schedule it",
  "Helps you write with the AI Coach",
  "Learns your writing patterns to match your voice",
  "Encrypts your data at rest and in transit",
  "Lets you remove access any time",
];

const textLink = "font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong";

function List({ items, mark }: { items: string[]; mark: "no" | "yes" }) {
  return (
    <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0 text-[15.5px] leading-[1.5] text-on-dark-muted">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3">
          <span
            aria-hidden="true"
            className="mt-px flex size-[22px] items-center justify-center rounded-full bg-band-surface-soft ring-1 ring-band-hairline ring-inset"
          >
            <span className={mark === "yes" ? "size-2 rounded-full bg-signal" : "h-0.5 w-2 rounded-full bg-band-primary"} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LinkedInToolSafePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ)} />

      <PageHero
        label="Official API"
        title={BRAND_LINE.replace(/\.$/, "")}
        sub="VYRAL reads your post numbers and publishes when you ask. It never scrapes, never adds anything to your browser, and never likes or comments for you."
      >
        <Button href={APP_SIGNUP_URL} size="lg">
          Start free trial
        </Button>
        <span className="text-[14px] text-muted">{TRIAL_LINE}</span>
      </PageHero>

      <Section variant="tint" labelledBy="connect-title" className="py-[72px]">
        <SectionLabel>How it connects</SectionLabel>
        <SectionHeading id="connect-title">How VYRAL connects to LinkedIn</SectionHeading>
        <div className="mt-10 grid gap-6 desk:grid-cols-3">
          {CONNECTIONS.map((c) => (
            <Card key={c.title} as="article" className="p-6">
              <h3 className="m-0 font-display text-heading-3 font-medium">{c.title}</h3>
              <p className="mt-3 mb-0 text-[16px] leading-[1.6] text-ink-2">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="dark" from="base" to="base" labelledBy="does-title" className="py-[112px]">
        <SectionLabel>In plain words</SectionLabel>
        <SectionHeading id="does-title">What VYRAL does, and what it never does</SectionHeading>
        <div className="mt-10 grid gap-6 desk:grid-cols-2">
          <Card variant="dark" className="p-6">
            <h3 className="m-0 text-[17px] font-semibold text-on-dark">VYRAL never</h3>
            <List items={NEVER} mark="no" />
          </Card>
          <Card variant="dark" className="p-6">
            <h3 className="m-0 text-[17px] font-semibold text-on-dark">VYRAL does</h3>
            <List items={DOES} mark="yes" />
          </Card>
        </div>
      </Section>

      <Section variant="light" labelledBy="rules-title" className="py-[72px]">
        <div className="max-w-[720px]">
          <SectionLabel>LinkedIn&apos;s rules</SectionLabel>
          <SectionHeading id="rules-title">Why the official API matters</SectionHeading>
          <p className="mt-4 mb-0 text-body-l text-muted">
            LinkedIn&apos;s User Agreement does not allow scraping, or software that likes, comments or connects for you.
            VYRAL was built from the start to work within those rules, using only the APIs LinkedIn provides.
          </p>
          <p className="mt-4 mb-0 text-body-l text-muted">
            Your data is encrypted at rest and in transit. We never share or sell it. Read the{" "}
            <Link href="/legal/privacy-policy" className={textLink}>
              privacy policy
            </Link>{" "}
            and the{" "}
            <Link href="/legal/security" className={textLink}>
              security statement
            </Link>{" "}
            for details.
          </p>
        </div>
      </Section>

      <Section variant="tint" labelledBy="faq-title" className="pt-[72px] pb-[84px]">
        <SectionLabel>FAQ</SectionLabel>
        <SectionHeading id="faq-title">Questions about LinkedIn safety</SectionHeading>
        <FaqAccordion items={FAQ} className="mt-10 max-w-[760px]" />
      </Section>

      <ClosingBand title="Try VYRAL on your own posts">
        <p className="m-0">{TRIAL_LINE}</p>
      </ClosingBand>
    </>
  );
}
