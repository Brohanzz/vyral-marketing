"use client";

import { useId, useState } from "react";
import { cx } from "@/lib/cx";

export type FaqItem = { question: string; answer: string };

// Answers stay in the server-rendered HTML (hidden, not removed), so the
// visible text always matches the FAQPage structured data.
export default function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={cx("divide-y divide-hairline rounded-lg bg-surface shadow-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left text-[17px] font-semibold text-ink hover:text-primary-hover desk:px-6"
              >
                <span>{item.question}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={cx(
                    "flex-none text-primary transition-transform motion-reduce:transition-none",
                    isOpen && "rotate-180",
                  )}
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 desk:px-6"
            >
              <p className="m-0 max-w-[640px] text-[16px] leading-[1.6] text-ink-2">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
