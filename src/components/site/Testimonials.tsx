import Image from "next/image";
import type { Testimonial } from "@/lib/testimonials";
import Card from "./Card";
import TestimonialCard, { Paragraphs, Result } from "./TestimonialCard";
import TestimonialSlider from "./TestimonialSlider";

// The data file alone decides the layout: one featured card, two static cards,
// or, from three, a slider.

export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  if (items.length === 1) {
    const t = items[0];
    return (
      <Card as="figure" className="m-0 gap-6 p-7 desk:flex-row desk:items-center desk:gap-12 desk:p-12">
        <Image
          src={`/testimonials/${t.photo}`}
          alt={t.name}
          width={160}
          height={160}
          sizes="160px"
          className="size-28 flex-none rounded-full desk:size-40"
        />
        <div className="flex flex-col">
          <blockquote className="m-0">
            <Paragraphs
              quote={t.quote}
              className="m-0 text-pretty font-display text-[22px] leading-[1.4] font-medium tracking-[-0.01em] desk:text-[26px]"
            />
          </blockquote>
          <Result t={t} />
          <figcaption className="mt-6">
            <b className="block text-[17px] font-semibold text-ink">{t.name}</b>
            <span className="block text-[15px] text-muted">{t.role}</span>
            <a
              href={t.linkedin}
              target="_blank"
              rel="noopener"
              className="mt-1 inline-flex min-h-11 items-center text-[15px] font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong"
            >
              {t.name} on LinkedIn
            </a>
          </figcaption>
        </div>
      </Card>
    );
  }

  if (items.length === 2) {
    return (
      <div className="grid gap-7 desk:grid-cols-2">
        {items.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    );
  }

  return <TestimonialSlider items={items} />;
}
