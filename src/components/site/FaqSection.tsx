import Link from "next/link";
import FaqAccordion, { type FaqItem } from "./FaqAccordion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

/** FAQ band: label, heading and a contact line on the left from 860px, the accordion on the right. */
export default function FaqSection({
  items,
  heading,
  variant = "light",
}: {
  items: FaqItem[];
  heading: string;
  variant?: "light" | "tint";
}) {
  return (
    <Section variant={variant} labelledBy="faq-title" className="pt-[72px] pb-[84px]">
      <div className="grid gap-10 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] desk:gap-16">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading id="faq-title">{heading}</SectionHeading>
          <p className="mt-4 mb-0 text-[16px] text-muted">
            Can&apos;t find your answer?{" "}
            <Link href="/contact" className="font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong">
              Contact us
            </Link>
            .
          </p>
        </div>
        <FaqAccordion items={items} />
      </div>
    </Section>
  );
}
