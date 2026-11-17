"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/site/Button";
import {
  BENCHMARK,
  CAVEAT,
  MAX_POSTS,
  MIN_POSTS,
  SHORT_GAP_NOTE,
  median,
  parseImpressions,
  percentChange,
  verdictFor,
  type Gap,
} from "./reach";

// Runs entirely in the browser: nothing typed here is sent, stored or tracked.

const input =
  "w-full rounded-md border bg-surface px-3.5 py-2.5 text-[15px] leading-[1.5] text-ink placeholder:text-muted";
const inputBorder = (hasError: boolean) => (hasError ? " border-primary-strong" : " border-hairline-strong");
const label = "mb-1.5 block text-[14px] font-medium text-ink-2";
const hint = "mt-1 mb-0 text-[13px] text-muted";
const errorText = "mt-1 mb-0 text-[13px] text-primary-strong";

const GAPS: { value: Gap; label: string }[] = [
  { value: "12", label: "12 months" },
  { value: "6", label: "6 months" },
  { value: "3", label: "3 months" },
];

type Group = "earlier" | "recent";
const GROUP_NAME: Record<Group, string> = { earlier: "Earlier posts", recent: "Recent posts" };

type Result = { earlier: number; recent: number; percent: number; gap: Gap };

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

function check(group: Group, raw: string): { values?: number[]; error?: string } {
  const { values, bad } = parseImpressions(raw);
  const name = GROUP_NAME[group];
  if (bad.length) return { error: `"${bad[0]}" in ${name} is not a number. Use digits only, like 1200.` };
  if (values.length < MIN_POSTS)
    return { error: `Add at least ${MIN_POSTS} numbers to ${name}. You have ${values.length}.` };
  if (values.length > MAX_POSTS)
    return { error: `Use at most ${MAX_POSTS} numbers in ${name}. You have ${values.length}.` };
  return { values };
}

export default function ReachChecker() {
  const [earlier, setEarlier] = useState("");
  const [recent, setRecent] = useState("");
  const [gap, setGap] = useState<Gap>("12");
  const [errors, setErrors] = useState<Partial<Record<Group, string>>>({});
  const [result, setResult] = useState<Result | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const a = check("earlier", earlier);
    const b = check("recent", recent);
    const errs: Partial<Record<Group, string>> = {};
    if (a.error) errs.earlier = a.error;
    if (b.error) errs.recent = b.error;
    if (a.values && median(a.values) === 0)
      errs.earlier = "The middle value of Earlier posts is 0, so there is nothing to compare against.";
    setErrors(errs);
    if (Object.keys(errs).length || !a.values || !b.values) {
      setResult(null);
      return;
    }
    const m1 = median(a.values);
    const m2 = median(b.values);
    setResult({ earlier: m1, recent: m2, percent: percentChange(m1, m2), gap });
  }

  const field = (group: Group, value: string, set: (v: string) => void, placeholder: string) => {
    const id = `reach-${group}`;
    const err = errors[group];
    return (
      <div>
        <label htmlFor={id} className={label}>
          {GROUP_NAME[group]}
        </label>
        <textarea
          id={id}
          rows={5}
          inputMode="numeric"
          value={value}
          onChange={(e) => set(e.target.value)}
          placeholder={placeholder}
          aria-invalid={!!err}
          aria-describedby={`${id}-hint${err ? ` ${id}-error` : ""}`}
          className={input + inputBorder(!!err)}
        />
        <p id={`${id}-hint`} className={hint}>
          Impressions, one number per line or separated by commas. {MIN_POSTS} to {MAX_POSTS} posts.
        </p>
        {err && (
          <p id={`${id}-error`} className={errorText}>
            {err}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="my-10 rounded-lg bg-surface p-6 shadow-3 desk:p-8">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="grid gap-5 desk:grid-cols-2">
          {field("earlier", earlier, setEarlier, "1200\n950\n1430")}
          {field("recent", recent, setRecent, "640\n720\n510")}
        </div>
        <div>
          <label htmlFor="reach-gap" className={label}>
            How long ago were the earlier posts?
          </label>
          <select
            id="reach-gap"
            value={gap}
            onChange={(e) => setGap(e.target.value as Gap)}
            className={input + inputBorder(false) + " min-h-12 desk:max-w-[240px]"}
          >
            {GAPS.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button type="submit">Check my reach</Button>
        </div>
      </form>

      <div aria-live="polite" className="mt-6">
        {result && (
          <div className="rounded-md bg-surface-soft p-5">
            <p className="m-0 text-[14px] text-muted">
              Typical earlier post: {fmt(result.earlier)} impressions. Typical recent post: {fmt(result.recent)}{" "}
              impressions.
            </p>
            <p className="mt-2 mb-0 font-display text-heading-3 font-medium text-ink">
              Change: {result.percent > 0 ? "+" : ""}
              {result.percent}%
            </p>
            {result.gap === "12" ? (
              <>
                <p className="mt-1 mb-0 text-[17px] font-semibold text-ink">{verdictFor(result.percent)}</p>
                <p className="mt-1 mb-0 text-[14px] text-muted">
                  Platform trend: views down {BENCHMARK.range} year on year.
                </p>
              </>
            ) : (
              <p className="mt-2 mb-0 text-[15px] text-ink-2">{SHORT_GAP_NOTE}</p>
            )}
            <p className="mt-4 mb-0 text-[13px] text-muted">{CAVEAT}</p>
          </div>
        )}
      </div>
    </div>
  );
}
