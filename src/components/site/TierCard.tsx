import type { Plan } from "@/lib/pricing";
import { yearlyTotal } from "@/lib/pricing";
import Button from "./Button";
import Card from "./Card";
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
 */
export default function TierCard({ plan, mode, showTagline }: { plan: Plan; mode: "teaser" | "toggle"; showTagline?: boolean }) {
  const priced = plan.monthly !== null && plan.yearly !== null;

  return (
    <Card highlight={plan.highlighted} className="gap-3 p-7">
      <h3 className="m-0 text-[15px] font-semibold text-ink">{plan.name}</h3>

      {priced && mode === "teaser" && (
        <div>
          <Price amount={plan.monthly!} />
          <p className={sub}>
            or <Numerals text={`$${plan.yearly}`} />
            /mo billed yearly
          </p>
        </div>
      )}

      {priced && mode === "toggle" && (
        <div>
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
        <div>
          <p className="m-0 font-display text-metric font-semibold">Custom</p>
          <p className={sub}>{plan.tagline}</p>
        </div>
      )}

      {showTagline && priced && <p className="m-0 text-[15px] text-ink-2">{plan.tagline}</p>}

      <ul className="mt-1.5 mb-0 flex list-none flex-col gap-[9px] p-0 text-[15.5px] leading-[1.45] text-ink-2">
        {plan.features.map((f) => (
          <li key={f} className="grid grid-cols-[18px_minmax(0,1fr)] gap-2">
            <span aria-hidden="true" className="mt-[7px] ml-1 size-[7px] rounded-full bg-primary" />
            <span>
              <Numerals text={f} />
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={plan.cta.href}
        variant={plan.highlighted ? "primary" : "ghost"}
        className="mt-auto self-start"
      >
        {plan.cta.label}
      </Button>
    </Card>
  );
}
