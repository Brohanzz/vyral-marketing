import Image from "next/image";
import { cx } from "@/lib/cx";

// Real screens from the app, in public/screens/. Full screens are 2400 px wide, so they are
// never shown larger than their own width. `m` is where the image is cropped to on mobile
// (below 860px), where it sits full width under the text at 4:3.
//
// Close-ups (`natural`) have their own width `w` and keep their own shape everywhere: no
// crop on desktop or mobile, and never wider than the file itself.

type Screen = { h: number; alt: string; m?: string; w?: number; natural?: boolean };

const SCREENS = {
  "content-calendar": {
    h: 1207,
    m: "40% 0%",
    alt: "VYRAL content calendar for October with published posts and best posting slots",
  },
  "insights-overview": {
    h: 1294,
    m: "40% 0%",
    alt: "VYRAL Insights showing impressions, engagement rate, comments and followers for the last 30 days",
  },
  "insights-patterns": {
    h: 1200,
    m: "40% 0%",
    alt: "VYRAL Patterns showing which hooks and post types perform best",
  },
  "insights-explore": {
    h: 1200,
    m: "40% 0%",
    alt: "VYRAL Explore comparing impressions and comments over time",
  },
  "insights-explore-analyst": {
    h: 1216,
    m: "100% 0%",
    alt: "VYRAL Analyst answering questions next to the Explore chart",
  },
  "posts-list": {
    h: 1208,
    m: "60% 0%",
    alt: "VYRAL post list with status, pillar, format, impressions, engagement rate and comments",
  },
  "coach-draft-score": {
    h: 1310,
    m: "100% 0%",
    alt: "VYRAL Coach giving feedback on a LinkedIn draft, with a draft score of 84",
  },
  "strategy-blueprint": {
    h: 1213,
    m: "100% 0%",
    alt: "VYRAL Strategy with positioning, audience, voice rules and content pillars, plan against actual",
  },
  "strategy-campaigns": {
    h: 1210,
    m: "50% 0%",
    alt: "VYRAL campaigns planned from a strategy, with a button to draft the next post in Coach",
  },
  "profile-review": {
    h: 1216,
    m: "50% 0%",
    alt: "VYRAL profile review with a score and the first three things to fix",
  },
  "settings-linkedin": {
    h: 1198,
    m: "70% 0%",
    alt: "VYRAL settings showing LinkedIn publishing and analytics connected",
  },
  "coach-voice-rules": {
    w: 990,
    h: 576,
    natural: true,
    alt: "VYRAL voice settings with tone words and the rules the Coach always follows",
  },
  "coach-score-panel": {
    w: 748,
    h: 914,
    natural: true,
    alt: "VYRAL draft score of 84 with scores for opening line, clarity, flow, tone, call to action and fit with your strategy",
  },
  "coach-ideas-try-next": {
    w: 1610,
    h: 494,
    natural: true,
    alt: "VYRAL suggestions for what to post next, each with a button to draft it in the Coach",
  },
  "coach-write-publish": {
    w: 1980,
    h: 1120,
    natural: true,
    alt: "VYRAL Coach chat next to a draft, with the Publish button",
  },
} satisfies Record<string, Screen>;

export type ScreenName = keyof typeof SCREENS;

const W = 2400;

/**
 * An app screenshot in a card frame: the card radius, the soft shadow and a 1px hairline, so a
 * light screen reads on light and dark bands.
 */
export default function AppScreen({
  name,
  sizes = "(min-width: 860px) 560px, 100vw",
  priority,
  ratio,
  position,
  onDark,
  className,
}: {
  name: ScreenName;
  /** Width the image is shown at, for next/image. */
  sizes?: string;
  /** Hero images only: skip lazy loading. */
  priority?: boolean;
  /** Desktop width / height. Defaults to the screenshot's own, so nothing is cropped. */
  ratio?: number;
  /** Desktop object-position, when `ratio` crops. */
  position?: string;
  /** Sits on a dark card or band. */
  onDark?: boolean;
  className?: string;
}) {
  const s: Screen = SCREENS[name];
  const w = s.w ?? W;
  const desktop = ratio ?? w / s.h;
  return (
    <div
      style={s.natural ? { maxWidth: w } : undefined}
      className={cx(
        "overflow-hidden rounded-lg border",
        s.natural && "mx-auto w-full",
        onDark ? "border-band-hairline-strong shadow-band-2" : "border-hairline-strong shadow-2",
        className,
      )}
    >
      <Image
        src={`/screens/${name}.png`}
        alt={s.alt}
        width={w}
        height={s.h}
        sizes={sizes}
        priority={priority}
        style={
          s.natural
            ? undefined
            : ({
                "--vy-ar": desktop,
                "--vy-pos-m": s.m,
                "--vy-pos-d": position ?? "50% 0%",
              } as React.CSSProperties)
        }
        className={
          s.natural
            ? "block h-auto w-full"
            : "block aspect-[4/3] w-full object-cover object-[var(--vy-pos-m)] desk:aspect-[var(--vy-ar)] desk:object-[var(--vy-pos-d)]"
        }
      />
    </div>
  );
}
