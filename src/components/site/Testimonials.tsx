import Image from "next/image";
import type { Testimonial } from "@/lib/testimonials";
import Card from "./Card";
import DeltaPill from "./DeltaPill";

// One component, three layouts by count: one featured card, two cards, or a three-column grid.

function Person({ t, size }: { t: Testimonial; size: number }) {
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

function Result({ t }: { t: Testimonial }) {
  if (!t.result) return null;
  return (
    <DeltaPill direction={t.result.direction} className="mt-[18px] self-start">
      {t.result.text}
    </DeltaPill>
  );
}

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
            <p className="m-0 text-pretty font-display text-[22px] leading-[1.4] font-medium tracking-[-0.01em] desk:text-[26px]">
              {t.quote}
            </p>
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

  const cols = items.length === 2 ? "desk:grid-cols-2" : "desk:grid-cols-3";
  return (
    <div className={`grid gap-7 ${cols}`}>
      {items.map((t) => (
        <Card key={t.name} as="figure" className="m-0 p-[26px]">
          <blockquote className="m-0">
            <p className="m-0 font-display text-[21px] leading-[1.32] font-medium tracking-[-0.01em]">{t.quote}</p>
          </blockquote>
          <Result t={t} />
          <figcaption className="mt-auto pt-6">
            <Person t={t} size={48} />
          </figcaption>
        </Card>
      ))}
    </div>
  );
}
