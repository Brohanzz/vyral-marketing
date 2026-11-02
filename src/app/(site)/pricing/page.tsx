import Link from "next/link";
import ClosingBand from "@/components/site/ClosingBand";
import DeltaPill from "@/components/site/DeltaPill";
import FaqAccordion, { type FaqItem } from "@/components/site/FaqAccordion";
import JsonLd from "@/components/site/JsonLd";
import Numerals from "@/components/site/Numerals";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import TierCard from "@/components/site/TierCard";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import {
  COMPARISON,
  CREATOR_AI_RUNS,
  FAIR_USE_LINE,
  PLANS,
  PRICED_PLANS,
  READ_ONLY_RULE,
  TRIAL,
  YEARLY_SAVING_PERCENT,
} from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";

const [creator, pro] = PRICED_PLANS;

const DESCRIPTION = `${creator.name} from $${creator.yearly} a month and ${pro.name} from $${pro.yearly} a month, billed yearly. Every account starts with ${TRIAL.days} days of ${TRIAL.plan}, no credit card.`;

export const metadata = pageMetadata({
  title: "VYRAL pricing: Creator, Pro and Team plans",
  description: DESCRIPTION,
  path: "/pricing",
});

const FAQ: FaqItem[] = [
  {
    question: "How does the free trial work?",
    answer: `Every account starts with ${TRIAL.days} days of ${TRIAL.plan}, including ${TRIAL.aiRuns} AI runs. No credit card. Billing starts the day you subscribe to ${creator.name} or ${pro.name}, and subscribing ends the trial.`,
  },
  { question: "What happens if I stop paying?", answer: READ_ONLY_RULE },
  {
    question: "Can I change plans?",
    answer:
      "Yes. Manage your plan in Settings, under Billing. If you cancel, you keep access until the end of your billing period.",
  },
  {
    question: "What happens when I reach my AI limit?",
    answer: `${creator.name} includes ${CREATOR_AI_RUNS} AI runs a month and ${pro.name} is unlimited. If you reach the limit, analytics and every feature that does not use AI keep working. Limits reset on the 1st of each month.`,
  },
  {
    question: "Can I cancel any time?",
    answer:
      "Yes. Cancel from Settings, then Billing. You keep access until the end of your billing period, and there is no cancellation fee.",
  },
  {
    question: "Is my LinkedIn data secure?",
    answer:
      "You connect through LinkedIn's own login, so we never see your password. Your data is encrypted at rest and in transit, and we never share or sell it.",
  },
  {
    question: "What is in the Team plan?",
    answer:
      "Team is coming soon for agencies, ghostwriters and content teams. It adds multiple team seats, a team performance dashboard, aggregate analytics across members, central billing and dedicated onboarding. Contact us for early access.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "VYRAL pricing",
  url: absoluteUrl("/pricing"),
  description: DESCRIPTION,
};

const toggleLabel =
  "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[9px] px-5 text-[15px] font-semibold text-ink-2";

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-ink"><Numerals text={value} /></span>;
  }
  if (value) {
    return (
      <>
        <span aria-hidden="true" className="inline-block size-[7px] rounded-full bg-primary" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  return (
    <>
      <span aria-hidden="true" className="text-muted">
        &ndash;
      </span>
      <span className="sr-only">Not included</span>
    </>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema(FAQ)} />

      {/* Hero, billing toggle and tiers */}
      <Section variant="light" hold labelledBy="pricing-title" className="pt-[30px] pb-[72px] desk:pt-12">
        <SectionLabel>Pricing</SectionLabel>
        <h1
          id="pricing-title"
          className="m-0 max-w-[820px] text-pretty font-display text-[40px] leading-[1.06] font-semibold tracking-[-0.024em] desk:text-display-l"
        >
          Start with <Numerals text={String(TRIAL.days)} /> days of {TRIAL.plan}
        </h1>
        <p className="mt-5 mb-0 max-w-[600px] text-subhead text-muted">
          <Numerals text={String(TRIAL.aiRuns)} /> AI runs included. No credit card. Pick a plan when the trial ends.
        </p>

        <div className="vy-billing">
          <fieldset className="mt-8 mb-0 inline-flex flex-wrap gap-1 rounded-md border-0 bg-surface-soft p-1 shadow-1">
            <legend className="sr-only">Billing period</legend>
            <input
              type="radio"
              name="billing"
              id="billing-monthly"
              value="monthly"
              defaultChecked
              className="peer/monthly sr-only"
            />
            <label
              htmlFor="billing-monthly"
              className={`${toggleLabel} peer-checked/monthly:bg-surface peer-checked/monthly:text-ink peer-checked/monthly:shadow-1 peer-focus-visible/monthly:outline-2 peer-focus-visible/monthly:outline-offset-2 peer-focus-visible/monthly:outline-focus`}
            >
              Monthly
            </label>
            <input type="radio" name="billing" id="billing-yearly" value="yearly" className="peer/yearly sr-only" />
            <label
              htmlFor="billing-yearly"
              className={`${toggleLabel} peer-checked/yearly:bg-surface peer-checked/yearly:text-ink peer-checked/yearly:shadow-1 peer-focus-visible/yearly:outline-2 peer-focus-visible/yearly:outline-offset-2 peer-focus-visible/yearly:outline-focus`}
            >
              Yearly
              <DeltaPill size="sm">
                Save <Numerals text={`${YEARLY_SAVING_PERCENT}%`} />
              </DeltaPill>
            </label>
          </fieldset>

          <div className="mt-10 grid items-stretch gap-7 desk:grid-cols-3">
            {PLANS.map((plan) => (
              <TierCard key={plan.id} plan={plan} mode="toggle" showTagline />
            ))}
          </div>
        </div>

        <div className="mt-[26px] flex flex-col gap-1.5 text-[14.5px] text-muted">
          <p className="m-0">Billing starts the day you subscribe. Subscribing ends the trial.</p>
          <p className="m-0">{READ_ONLY_RULE}</p>
          <p className="m-0">{FAIR_USE_LINE}</p>
        </div>
      </Section>

      {/* Comparison */}
      <Section variant="tint" labelledBy="compare-title" className="pt-[72px] pb-[84px]">
        <SectionLabel>Compare</SectionLabel>
        <SectionHeading id="compare-title">
          {creator.name} and {pro.name}, side by side
        </SectionHeading>
        <div className="mt-10 max-w-[820px] overflow-x-auto rounded-lg bg-surface shadow-3">
          <table className="w-full border-collapse text-left text-[15px]">
            <caption className="sr-only">
              Features in {creator.name} and {pro.name}
            </caption>
            <thead>
              <tr className="border-b border-hairline">
                <th scope="col" className="px-5 py-4 text-label font-semibold text-muted desk:px-6">
                  Feature
                </th>
                <th scope="col" className="w-24 px-3 py-4 text-center text-label font-semibold text-muted desk:w-32">
                  {creator.name}
                </th>
                <th scope="col" className="w-24 px-3 py-4 text-center text-label font-semibold text-primary-strong desk:w-32">
                  {pro.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.label} className="border-b border-hairline last:border-b-0">
                  <th scope="row" className="px-5 py-3.5 font-normal text-ink-2 desk:px-6">
                    {row.label}
                  </th>
                  <td className="px-3 py-3.5 text-center">
                    <Cell value={row.creator} />
                  </td>
                  <td className="px-3 py-3.5 text-center">
                    <Cell value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="light" labelledBy="faq-title" className="pt-[72px] pb-[84px]">
        <SectionLabel>FAQ</SectionLabel>
        <SectionHeading id="faq-title">Pricing questions</SectionHeading>
        <FaqAccordion items={FAQ} className="mt-10 max-w-[760px]" />
      </Section>

      {/* Closing band */}
      <ClosingBand
        from="soft"
        title={
          <>
            Try {TRIAL.plan} for <Numerals text={String(TRIAL.days)} /> days, then pick a plan
          </>
        }
      >
        <p className="m-0">No credit card.</p>
        <p className="m-0">
          Looking for a team plan?{" "}
          <Link href="/contact" className="font-semibold text-on-dark underline underline-offset-2 hover:text-signal">
            Talk to us
          </Link>
        </p>
      </ClosingBand>
    </>
  );
}
