/**
 * List markers, centred on the first line of their item. The offset is worked out
 * from the first line's line height (pass the same value the text uses), so it holds
 * whether the item runs to one line or several.
 */

const RING = 22;
const DOT = 7;

/** A 22px ring with a centre mark, in a 22px grid column. "yes" is a gold dot, "no" a short coral bar. */
export function RingMarker({ lineHeight, kind = "yes" }: { lineHeight: number; kind?: "yes" | "no" }) {
  return (
    <span
      aria-hidden="true"
      style={{ marginTop: (lineHeight - RING) / 2 }}
      className="flex size-[22px] items-center justify-center rounded-full bg-band-surface-soft ring-1 ring-band-hairline ring-inset"
    >
      <span className={kind === "yes" ? "size-2 rounded-full bg-signal" : "h-0.5 w-2 rounded-full bg-band-primary"} />
    </span>
  );
}

/** A 7px coral dot, in an 18px grid column. */
export function DotMarker({ lineHeight }: { lineHeight: number }) {
  return (
    <span
      aria-hidden="true"
      style={{ marginTop: (lineHeight - DOT) / 2 }}
      className="ml-1 size-[7px] rounded-full bg-primary"
    />
  );
}
