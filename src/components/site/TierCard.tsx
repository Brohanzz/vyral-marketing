import type { Plan } from "@/lib/pricing";
import { yearlyTotal } from "@/lib/pricing";
import Button from "./Button";
import Card from "./Card";
import { DotMarker } from "./Marker";
import Numerals from "./Numerals";

function Price({ amount }: { amount: number }) {
  return (
    <p className="m-0">
      <span className="font-mono text-metric font-medium tabular-nums">${amount}</span>
      <span className="text-[15px] text-muted">/mo</span>
    </p>
  );
}

const sub = "m-0 text-[14px] text-muted";

/**
 * One pricing tier. "teaser" shows the monthly price with the yearly price as a
 * note; "toggle" renders both and lets the /pricing billing switch pick one.
 *
 * From 860px the card spans the grid's rows (name, price, optional tagline,
 * features, button) so the same row starts at the same height in every card.
 * The parent grid needs `desk:gap-y-0`.
 */
export default function TierCard({ plan, mode, showTagline }: { plan: Plan; mode: "teaser" | "toggle"; showTagline?: boolean }) {
  const priced = plan.monthly !== null && plan.yearly !== null;
  const span = showTagline ? "desk:row-span-5" : "desk:row-span-4";

  return (
    <Card highlight={plan.highlighted} className={`gap-3 p-7 desk:grid desk:grid-rows-subgrid desk:gap-y-0 ${span}`}>
      <h3 className="m-0 text-[15px] font-semibold text-ink">{plan.name}</h3>

      {priced && mode === "teaser" && (
        <div className="desk:mt-3">
          <Price amount={plan.monthly!} />
          <p className={sub}>
            or <Numerals text={`$${plan.yearly}`} />
            /mo billed yearly
          </p>
        </div>
      )}

      {priced && mode === "toggle" && (
        <div className="desk:mt-3">
          <div data-billing="monthly">
            <Price amount={plan.monthly!} />
            <p className={sub}>
              or <Numerals text={`$${plan.yearly}`} />
              /mo billed yearly
            </p>
          </div>
          <div data-billing="yearly">
            <Price amount={plan.yearly!} />
            <p className={sub}>
              <Numerals text={`$${yearlyTotal({ yearly: plan.yearly! })}`} /> billed yearly
            </p>
          </div>
        </div>
      )}

      {!priced && (
        <div className="desk:mt-3">
          <p className="m-0 font-display text-metric font-semibold">Talk to us</p>
          <p className={sub}>{plan.tagline}</p>
        </div>
      )}

      {showTagline && (priced ? <p className="m-0 text-[15px] text-ink-2 desk:mt-3">{plan.tagline}</p> : <div />)}

      <ul className="mt-1.5 mb-0 flex list-none flex-col gap-[9px] p-0 text-[15.5px] leading-[1.45] text-ink-2 desk:mt-[18px]">
        {plan.features.map((f) => (
          <li key={f} className="grid grid-cols-[18px_minmax(0,1fr)] gap-2">
            <DotMarker lineHeight={22.475} />
            <span>
              <Numerals text={f} />
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={plan.cta.href}
        variant={plan.highlighted ? "primary" : "ghost"}
        className="mt-auto self-start desk:mt-3"
      >
        {plan.cta.label}
      </Button>
    </Card>
  );
}
