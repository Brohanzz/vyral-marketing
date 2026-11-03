import Card from "../Card";
import DeltaPill from "../DeltaPill";
import LoopViewport from "../LoopViewport";
import SampleTag from "../SampleTag";

// Class strings are written out in full so Tailwind can see them.
const SPARK = [
  "h-[34%]", "h-[46%]", "h-[28%]", "h-[52%]", "h-[41%]", "h-[60%]",
  "h-[38%]", "h-[55%]", "h-[47%]", "h-[68%] bg-signal", "h-[58%]", "h-full w-3 bg-primary",
];

const cardLabel = "mt-0 mb-3.5 text-label font-semibold text-muted";
const foot = "mt-auto flex flex-wrap items-center gap-3 pt-3.5 text-caption text-muted";
const mono = "font-mono font-medium tabular-nums";

/** The three-card loop: you posted, what came back, what Coach writes next. CSS animation only. */
export default function HeroLoop() {
  return (
    <LoopViewport className="vy-loop">
      <div className="vy-loop-cards">
        <Card variant="float" className="vy-c1 min-h-[272px] p-[22px]">
          <p className={cardLabel}>You posted</p>
          <div className="mb-3 flex items-center gap-2.5" aria-hidden="true">
            <span className="size-9 flex-none rounded-full bg-[radial-gradient(circle_at_34%_30%,var(--vy-surface),var(--vy-chart-bar))]" />
            <span>
              <span className="block h-[9px] w-[104px] rounded-[5px] bg-chart-bar" />
              <span className="mt-1.5 block h-[7px] w-16 rounded-[5px] bg-hairline" />
            </span>
          </div>
          <p className="vy-typed m-0 text-[17px] leading-normal">
            We stopped writing hooks and started reading the numbers.
          </p>
          <div className={foot}>
            <span className={mono}>09:12</span>
            <span>Tuesday</span>
            <SampleTag>Sample post</SampleTag>
          </div>
          <i className="vy-wire vy-w1" aria-hidden="true" />
        </Card>

        <Card variant="float" className="vy-c2 min-h-[272px] p-[22px]">
          <p className={cardLabel}>What came back</p>
          <div className="flex items-end gap-2.5">
            <span className="font-mono text-[42px] leading-none font-medium tracking-[-0.03em] tabular-nums">12,481</span>
            <span className="pb-[5px] text-[14px] text-muted">impressions</span>
          </div>
          <DeltaPill direction="up" className="vy-pop mt-3.5 self-start">
            <span className={mono}>38%</span> above last week
          </DeltaPill>
          <div className="mt-4 flex h-[46px] items-end gap-1" aria-hidden="true">
            {SPARK.map((cls, i) => (
              <i key={i} className={`vy-spark-bar block w-2.5 rounded-[3px] bg-chart-bar ${cls}`} />
            ))}
          </div>
          <div className={foot}>
            <SampleTag>Sample data</SampleTag>
          </div>
          <i className="vy-wire vy-w2" aria-hidden="true" />
        </Card>

        <Card variant="float" className="vy-c3 min-h-[272px] p-[22px]">
          <p className={cardLabel}>What Coach writes next</p>
          <div className="flex flex-col gap-2.5">
            <p className="vy-l1 m-0 text-[16px] leading-normal">Same opening move, second act.</p>
            <p className="vy-l2 m-0 text-[16px] leading-normal">
              Your <span className={mono}>09:00</span> Tuesday slot out-reaches every other by a third.
            </p>
          </div>
          <span className="mt-4 inline-flex items-center gap-2 self-start rounded-md bg-surface-soft px-3.5 py-2.5 text-[14px] font-semibold text-primary-hover">
            Open in Coach
          </span>
          <div className={foot}>
            <SampleTag>Sample draft</SampleTag>
          </div>
        </Card>
      </div>
      <div className="vy-ret">
        <span className="text-[13px] font-medium text-muted">Next post, with the data behind it</span>
      </div>
    </LoopViewport>
  );
}
