import { cx } from "@/lib/cx";
import Section from "./Section";
import SectionLabel from "./SectionLabel";

/** Top of every inner page: label, H1, one-line sub and optional actions. */
export default function PageHero({
  label,
  title,
  sub,
  children,
  narrow,
  before,
  aside,
}: {
  /** Right-hand column from 860px (an illustration or a facts card). Stacks below the text on mobile. */
  aside?: React.ReactNode;
  /** Above the label, for a back link. */
  before?: React.ReactNode;
  label?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** Buttons or a meta line under the sub. */
  children?: React.ReactNode;
  /** Article pages: keep the hero on the 720px reading column. */
  narrow?: boolean;
}) {
  return (
    <Section variant="light" hold labelledBy="page-title" className="pt-[30px] pb-[60px] desk:pt-12">
      <div
        className={cx(
          narrow && "mx-auto max-w-[720px]",
          !!aside && "grid items-center gap-10 desk:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] desk:gap-16",
        )}
      >
        <div>
        {before && <div className="mb-6 text-[14px]">{before}</div>}
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1
          id="page-title"
          className="m-0 max-w-[860px] text-pretty font-display text-[38px] leading-[1.06] font-semibold tracking-[-0.024em] desk:text-display-l"
        >
          {title}
        </h1>
        {sub && <p className="mt-5 mb-0 max-w-[640px] text-subhead text-muted">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
        </div>
        {aside}
      </div>
    </Section>
  );
}
