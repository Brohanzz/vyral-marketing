import { cx } from "@/lib/cx";

const ARROWS = { up: "▲", down: "▼" };

export default function DeltaPill({
  direction,
  size = "md",
  className,
  children,
}: {
  direction?: "up" | "down";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-pill bg-signal-soft font-semibold text-signal-ink on-dark:bg-band-signal-soft on-dark:text-band-signal-ink",
        size === "md" ? "px-3 py-1.5 text-[13px]" : "px-2.5 py-1 text-[11.5px]",
        className,
      )}
    >
      {direction && <span aria-hidden="true">{ARROWS[direction]}</span>}
      <span>{children}</span>
    </span>
  );
}
