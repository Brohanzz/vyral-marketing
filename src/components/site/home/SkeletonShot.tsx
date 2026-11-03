import DeltaPill from "../DeltaPill";

// Dark skeleton screens for the Inside VYRAL band. Decorative and hidden from
// assistive tech, so the sample numbers are not read out as facts.
// Class strings are written out in full so Tailwind can see them.

type Variant = "home" | "insights" | "coach";

const SIDE_WIDTHS = ["w-full", "w-[76%]", "w-[88%]", "w-[64%]"];
const SIDE_ACTIVE: Record<Variant, number> = { home: 0, insights: 1, coach: 2 };

type Bar = [height: string, tone?: "gold" | "coral"];

const HOME_BARS: Bar[] = [
  ["h-[30%]"], ["h-[44%]"], ["h-[36%]"], ["h-[58%]"], ["h-[50%]"], ["h-[42%]"],
  ["h-[66%]"], ["h-[54%]"], ["h-[72%]", "gold"], ["h-[60%]"], ["h-full", "coral"],
];
const INSIGHT_BARS: Bar[] = [
  ["h-[24%]"], ["h-[38%]"], ["h-[30%]"], ["h-[52%]"], ["h-[44%]"], ["h-[36%]"],
  ["h-[60%]"], ["h-[48%]"], ["h-[56%]"], ["h-[70%]", "gold"], ["h-[58%]"], ["h-full", "coral"],
];
const BAR_TONE = { gold: "bg-signal", coral: "bg-band-primary" };

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] bg-surface/6 px-2.5 py-2">
      <small className="block text-[10.5px] text-on-dark-muted">{label}</small>
      <b className="mt-[3px] block font-mono text-[16px] font-medium text-on-dark tabular-nums">{value}</b>
    </div>
  );
}

function Bars({ bars, height }: { bars: Bar[]; height: string }) {
  return (
    <div className={`flex items-end gap-1 ${height}`}>
      {bars.map(([h, tone], i) => (
        <i key={i} className={`flex-1 rounded-[3px] ${h} ${tone ? BAR_TONE[tone] : "bg-band-hairline"}`} />
      ))}
    </div>
  );
}

export default function SkeletonShot({ variant }: { variant: Variant }) {
  return (
    <div aria-hidden="true" className="vy-shot flex flex-col gap-2.5 rounded-[14px] p-3">
      <div className="flex items-center gap-1.5">
        <i className="size-2 rounded-full bg-band-hairline" />
        <i className="size-2 rounded-full bg-band-hairline" />
        <i className="size-2 rounded-full bg-band-hairline" />
      </div>
      <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-2.5">
        <div className="flex flex-col gap-[9px] pt-1">
          {SIDE_WIDTHS.map((w, i) => (
            <i
              key={w}
              className={`block h-[7px] rounded-[5px] ${w} ${
                i === SIDE_ACTIVE[variant] ? "bg-on-dark-muted/40" : "bg-band-hairline"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          {variant === "home" && (
            <>
              <span className="font-display text-[16px] leading-[1.15] font-semibold text-on-dark">
                This week vs last week
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <Tile label="Impressions" value="148,320" />
                <Tile label="Followers" value="+318" />
              </div>
              <Bars bars={HOME_BARS} height="h-[70px]" />
            </>
          )}
          {variant === "insights" && (
            <>
              <div className="grid grid-cols-2 gap-2.5">
                <Tile label="Engagement" value="4.8%" />
                <Tile label="Best slot" value="Tue 09:00" />
              </div>
              <Bars bars={INSIGHT_BARS} height="h-24" />
            </>
          )}
          {variant === "coach" && (
            <>
              <DeltaPill size="sm" className="self-start">
                Uses your top posts
              </DeltaPill>
              <div className="flex flex-col gap-2 rounded-[10px] bg-surface/6 p-3">
                <span className="block h-[7px] w-[92%] rounded-[5px] bg-band-hairline-strong" />
                <span className="block h-[7px] w-[84%] rounded-[5px] bg-band-hairline-strong" />
                <span className="block h-[7px] w-[90%] rounded-[5px] bg-band-hairline-strong" />
                <span className="block h-[7px] w-[48%] rounded-[5px] bg-band-hairline-strong" />
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <Tile label="Drafts ready" value="3" />
                <Tile label="Voice" value="Matched" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
