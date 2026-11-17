// LinkedIn reach checker: benchmark figures and the pure calculation.
// Shared by the server page (sources list) and the client calculator.

/** Published platform-wide figures. Update here when a newer study comes out. */
export const BENCHMARK = {
  range: "roughly 47 to 50%",
  sources: [
    {
      name: "Richard van der Blom, Algorithm InSights Report 2025 (about 1.8 million posts)",
      figure: "Views down about 47%, engagement down about 39%",
      period: "2025, year on year",
      // The report's own page could not be reached; this article summarises it.
      url: "https://www.socialpilot.co/?p=694640",
      checkedOn: "2026-11-17",
    },
    {
      name: "A second analysis of the same report",
      figure: "Overall views down 50%",
      period: "2025, year on year",
      url: "https://thestateofbrand.com/news/linkedin-killing-video-reach",
      checkedOn: "2026-11-17",
    },
  ],
} as const;

export const MIN_POSTS = 3;
export const MAX_POSTS = 30;

export type Gap = "12" | "6" | "3";

export const VERDICTS = {
  better: "Better than the platform trend",
  less: "Down, but less than the platform trend",
  inLine: "In line with the platform trend",
  more: "Down more than the platform trend",
} as const;

/** Bands use the whole-number percentage shown to the visitor, so the label always matches it. */
export function verdictFor(percent: number): string {
  if (percent > -20) return VERDICTS.better;
  if (percent > -40) return VERDICTS.less;
  if (percent >= -57) return VERDICTS.inLine;
  return VERDICTS.more;
}

export const SHORT_GAP_NOTE =
  "Published figures compare a full year, so a shorter gap would normally show a smaller drop. Use posts from about 12 months ago for a fair comparison.";

export const CAVEAT =
  "This is a rough check, not a diagnosis. Impressions are estimates, and studies measure different groups of accounts. The labels above are our own simple bands, not a LinkedIn rule.";

/**
 * Splits pasted impressions into numbers. Lists are split on line breaks,
 * semicolons and commas followed by a space. A comma with no space only
 * separates numbers when everything is on one line (1000,1200,900); on
 * separate lines, or between other separators, it is a thousands separator
 * (1,200). Spaces, apostrophes and dot thousands separators (1.200) are ignored.
 */
export function parseImpressions(raw: string): { values: number[]; bad: string[] } {
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const pieces: string[] = [];
  for (const line of lines) {
    if (/;|,\s/.test(line)) pieces.push(...line.split(/\s*;\s*|,\s+/));
    else if (lines.length === 1) pieces.push(...line.split(","));
    else pieces.push(line);
  }
  const values: number[] = [];
  const bad: string[] = [];
  for (const piece of pieces.map((p) => p.trim()).filter(Boolean)) {
    let s = piece.replace(/[\s'’_,]/g, "");
    if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
    if (/^\d+(\.\d+)?$/.test(s)) values.push(Number(s));
    else bad.push(piece);
  }
  return { values, bad };
}

export function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/** Whole-number percentage change from earlier to recent, never -0. */
export function percentChange(earlier: number, recent: number): number {
  const p = Math.round(((recent - earlier) / earlier) * 100);
  return p === 0 ? 0 : p;
}
