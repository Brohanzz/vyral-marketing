import { cx } from "@/lib/cx";

// Placeholder logo: the coral single-stroke V and the wordmark. This is the only
// place the logo lives, so swapping in the real one touches this file alone.
export default function Logo({ size = "nav", className }: { size?: "nav" | "footer"; className?: string }) {
  const mark = size === "nav" ? 22 : 20;
  return (
    <span className={cx("inline-flex items-center gap-2.5 text-ink on-dark:text-on-dark", className)}>
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className="text-primary on-dark:text-band-primary"
      >
        <path
          d="M2 3 L11 19 L20 3"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cx(
          "font-display font-semibold tracking-[-0.01em]",
          size === "nav" ? "text-[22px]" : "text-[20px]",
        )}
      >
        VYRAL
      </span>
    </span>
  );
}
