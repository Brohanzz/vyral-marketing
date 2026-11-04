import SampleTag from "../SampleTag";

// A light Blueprint sketch for the Strategy band: content pillars as labelled
// bars, the plan next to what was posted. Decorative and hidden from assistive
// tech, so the sample figures are not read out as facts.
// Class strings are written out in full so Tailwind can see them.

const PILLARS: { name: string; plan: string; posted: string }[] = [
  { name: "Customer stories", plan: "w-[40%]", posted: "w-[44%]" },
  { name: "Lessons learned", plan: "w-[30%]", posted: "w-[16%]" },
  { name: "Industry views", plan: "w-[20%]", posted: "w-[18%]" },
  { name: "Behind the scenes", plan: "w-[10%]", posted: "w-[22%]" },
];

function Legend({ swatch, children }: { swatch: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12.5px] text-muted">
      <i className={`block h-2 w-5 rounded-[3px] ${swatch}`} />
      {children}
    </span>
  );
}

export default function BlueprintIllustration() {
  return (
    <div aria-hidden="true" className="vy-hero-panel relative flex h-full flex-col rounded-xl p-4 desk:p-6">
      <div className="flex flex-1 flex-col gap-4 rounded-lg bg-surface p-5 shadow-2 desk:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <i className="size-2 rounded-full bg-hairline-strong" />
            <i className="size-2 rounded-full bg-hairline-strong" />
            <i className="size-2 rounded-full bg-hairline-strong" />
          </div>
          <SampleTag>Sample data</SampleTag>
        </div>
        <p className="m-0 text-[14px] font-semibold text-ink">Content pillars, plan and posted</p>
        <div className="flex flex-1 flex-col justify-around gap-4">
          {PILLARS.map((p) => (
            <div key={p.name} className="flex flex-col gap-1.5">
              <span className="text-[13.5px] text-ink-2">{p.name}</span>
              <span className="block h-3 w-full rounded-[5px] bg-surface-soft">
                <i className={`block h-full rounded-[5px] bg-chart-bar ${p.plan}`} />
              </span>
              <span className="block h-3 w-full rounded-[5px] bg-surface-soft">
                <i className={`block h-full rounded-[5px] bg-primary ${p.posted}`} />
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-hairline pt-3.5">
          <Legend swatch="bg-chart-bar">Plan</Legend>
          <Legend swatch="bg-primary">Posted</Legend>
        </div>
      </div>
    </div>
  );
}
