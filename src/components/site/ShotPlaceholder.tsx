import PlaceholderPill from "./PlaceholderPill";

// Class strings are written out in full so Tailwind can see them.
const BARS = ["h-[36%]", "h-[52%]", "h-[44%]", "h-[64%]", "h-[48%]", "h-[72%]", "h-[58%]", "h-full"];

/**
 * A light skeleton screenshot with a placeholder pill, for feature pages until
 * real product screenshots exist. Exposed to assistive tech as one image.
 */
export default function ShotPlaceholder({ label }: { label: string }) {
  return (
    <div className="vy-hero-panel relative rounded-xl p-4 desk:p-6">
      <div role="img" aria-label={`Placeholder screenshot of ${label}`} className="flex flex-col gap-3 rounded-lg bg-surface p-4 shadow-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <i className="size-2 rounded-full bg-hairline-strong" />
          <i className="size-2 rounded-full bg-hairline-strong" />
          <i className="size-2 rounded-full bg-hairline-strong" />
        </div>
        <span className="block h-[9px] w-[46%] rounded-[5px] bg-chart-bar" />
        <div className="grid grid-cols-2 gap-2.5">
          <span className="block h-12 rounded-[10px] bg-surface-soft" />
          <span className="block h-12 rounded-[10px] bg-surface-soft" />
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {BARS.map((h, i) => (
            <i key={i} className={`flex-1 rounded-[3px] ${h} ${i === BARS.length - 1 ? "bg-primary" : "bg-chart-bar"}`} />
          ))}
        </div>
        <span className="block h-[7px] w-[80%] rounded-[5px] bg-hairline" />
        <span className="block h-[7px] w-[62%] rounded-[5px] bg-hairline" />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-caption text-muted">
        <span>{label}</span>
        <PlaceholderPill>Placeholder screenshot</PlaceholderPill>
      </div>
    </div>
  );
}
