import { cx } from "@/lib/cx";

// Marks invented content. data-placeholder lets a pre-launch check find any that remain.
export default function PlaceholderPill({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      data-placeholder="true"
      className={cx(
        "inline-flex items-center whitespace-nowrap rounded-pill border border-dashed border-hairline-strong px-2.5 py-[3px] text-xs font-medium text-muted on-dark:border-band-hairline-strong on-dark:text-on-dark-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
