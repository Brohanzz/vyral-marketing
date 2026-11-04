import Image from "next/image";
import type { Testimonial } from "@/lib/testimonials";
import Card from "./Card";
import DeltaPill from "./DeltaPill";

/** A quote split on blank lines, one paragraph each. */
export function Paragraphs({ quote, className }: { quote: string; className: string }) {
  return quote.split("\n\n").map((para, i) => (
    <p key={i} className={`${className}${i > 0 ? " mt-4" : ""}`}>
      {para}
    </p>
  ));
}

export function Result({ t }: { t: Testimonial }) {
  if (!t.result) return null;
  return (
    <DeltaPill direction={t.result.direction} className="mt-[18px] self-start">
      {t.result.text}
    </DeltaPill>
  );
}

export function Person({ t, size }: { t: Testimonial; size: number }) {
  return (
    <div className="flex items-center gap-3.5">
      <Image
        src={`/testimonials/${t.photo}`}
        alt={t.name}
        width={size}
        height={size}
        sizes={`${size}px`}
        className="flex-none rounded-full"
      />
      <div>
        <b className="block text-[16px] font-semibold text-ink">{t.name}</b>
        <span className="block text-[14px] text-muted">{t.role}</span>
        <a
          href={t.linkedin}
          target="_blank"
          rel="noopener"
          className="mt-0.5 inline-flex min-h-11 items-center text-[14px] font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong"
        >
          {t.name} on LinkedIn
        </a>
      </div>
    </div>
  );
}

/** One quote card: quote at the top, the person pinned to the bottom, so cards in a row line up. */
export default function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <Card as="figure" className={`m-0 p-[26px] ${className ?? ""}`}>
      <blockquote className="m-0">
        <Paragraphs
          quote={t.quote}
          className="m-0 font-display text-[21px] leading-[1.32] font-medium tracking-[-0.01em]"
        />
      </blockquote>
      <Result t={t} />
      <figcaption className="mt-auto pt-6">
        <Person t={t} size={48} />
      </figcaption>
    </Card>
  );
}
