import { cx } from "@/lib/cx";

/**
 * Small dashed tag that says a card on the page shows sample content, such as the
 * hero loop. Unlike PlaceholderPill it is meant to stay on the live site, so it
 * carries no data-placeholder marker.
 */
export default function SampleTag({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cx(
        "inline-flex items-center whitespace-nowrap rounded-pill border border-dashed border-hairline-strong px-2.5 py-[3px] text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
