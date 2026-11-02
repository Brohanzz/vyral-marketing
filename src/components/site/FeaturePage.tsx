import Link from "next/link";
import { cx } from "@/lib/cx";
import Card from "./Card";
import { absoluteUrl } from "@/lib/metadata";
import { TRIAL_LINE } from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";
import { APP_SIGNUP_URL } from "@/lib/urls";
import Button from "./Button";
import ClosingBand from "./ClosingBand";
import { type FaqItem } from "./FaqAccordion";
import FaqSection from "./FaqSection";
import JsonLd from "./JsonLd";
import PageHero from "./PageHero";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import ShotPlaceholder from "./ShotPlaceholder";

export type FeatureSection = {
  label: string;
  title: string;
  body: string[];
  points?: string[];
  /** Which screen the placeholder screenshot stands in for. */
  shot: string;
  link?: { label: string; href: string };
};

export type CompareBlock = {
  label: string;
  title: string;
  body: string[];
  columns: { title: string; items: string[] }[];
};

export type FeaturePageContent = {
  /** Optional comparison band right after the hero. */
  compare?: CompareBlock;
  path: string;
  /** Short page name for the WebPage schema. */
  name: string;
  description: string;
  label: string;
  /** What the hero illustration stands in for. */
  heroShot?: string;
  h1: string;
  sub: string;
  sections: FeatureSection[];
  faq: FaqItem[];
  closing: string;
};

const textLink = "font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong";

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 mb-0 flex list-none flex-col gap-[9px] p-0 text-[16px] leading-[1.5] text-ink-2">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[18px_minmax(0,1fr)] gap-2">
          <span aria-hidden="true" className="mt-[8px] ml-1 size-[7px] rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Product, Analytics, Coach and Strategy: hero, three alternating sections, FAQ, closing band. */
export default function FeaturePage({ content }: { content: FeaturePageContent }) {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.name,
    url: absoluteUrl(content.path),
    description: content.description,
  };

  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={faqSchema(content.faq)} />

      <PageHero
        label={content.label}
        title={content.h1}
        sub={content.sub}
        aside={<ShotPlaceholder label={content.heroShot ?? content.name} />}
      >
        <Button href={APP_SIGNUP_URL} size="lg">
          Start free trial
        </Button>
        <span className="text-[14px] text-muted">{TRIAL_LINE}</span>
      </PageHero>

      {content.compare && (
        <Section variant="tint" labelledBy="compare-title" className="py-[72px]">
          <div className="grid gap-10 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] desk:gap-16">
            <div>
              <SectionLabel>{content.compare.label}</SectionLabel>
              <SectionHeading id="compare-title">{content.compare.title}</SectionHeading>
              {content.compare.body.map((p) => (
                <p key={p} className="mt-4 mb-0 text-body-l text-muted">
                  {p}
                </p>
              ))}
            </div>
            <div className="grid gap-5 desk:grid-cols-2">
              {content.compare.columns.map((col) => (
                <Card key={col.title} as="article" className="p-6">
                  <h3 className="m-0 text-[17px] font-semibold text-ink">{col.title}</h3>
                  <Bullets items={col.items} />
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      {content.sections.map((s, i) => {
        const id = `section-${i + 1}`;
        const flip = i % 2 === 1;
        // The hero ends on the soft colour, so the first band starts from it; bands then alternate.
        const offset = content.compare ? 1 : 0;
        return (
          <Section key={s.title} variant={(i + offset) % 2 === 1 ? "light" : "tint"} labelledBy={id} className="py-[72px]">
            <div className="grid items-center gap-10 desk:grid-cols-2 desk:gap-16">
              <div className={cx(flip && "desk:order-2")}>
                <SectionLabel>{s.label}</SectionLabel>
                <SectionHeading id={id}>{s.title}</SectionHeading>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 mb-0 text-body-l text-muted">
                    {p}
                  </p>
                ))}
                {s.points && <Bullets items={s.points} />}
                {s.link && (
                  <p className="mt-6 mb-0 text-[15.5px]">
                    <Link href={s.link.href} className={textLink}>
                      {s.link.label}
                    </Link>
                  </p>
                )}
              </div>
              <ShotPlaceholder label={s.shot} />
            </div>
          </Section>
        );
      })}

      <FaqSection items={content.faq} heading="Common questions" />

      <ClosingBand from="soft" title={content.closing}>
        <p className="m-0">{TRIAL_LINE}</p>
      </ClosingBand>
    </>
  );
}
