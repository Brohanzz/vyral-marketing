import { APP_SIGNUP_URL } from "@/lib/urls";

// Single source of truth for plans, prices, the trial and the read-only rule.
// The homepage and /pricing both render from this file. Every plan is paid; the trial is the only free access.

export const TRIAL = {
  days: 14,
  plan: "Pro",
  aiRuns: 50,
} as const;

export const TRIAL_LINE = `${TRIAL.days} days of ${TRIAL.plan}. No credit card.`;

export const READ_ONLY_RULE =
  "Your account keeps read-only access to your existing history. Nothing new syncs and paid features are unavailable.";

export const YEARLY_SAVING_PERCENT = 20;

export const CREATOR_AI_RUNS = 250;

export type Plan = {
  id: "creator" | "pro" | "team";
  name: string;
  /** USD per month. null for custom pricing. */
  monthly: number | null;
  /** USD per month when billed yearly. */
  yearly: number | null;
  tagline: string;
  features: string[];
  highlighted: boolean;
  cta: { label: string; href: string };
};

export const PLANS: Plan[] = [
  {
    id: "creator",
    name: "Creator",
    monthly: 49,
    yearly: 39,
    tagline: "Everything you need to grow on LinkedIn",
    features: [
      "Full AI Coach and ideas",
      "Blueprint and campaigns",
      "Content calendar and publishing",
      "Full analytics and weekly reviews",
      `${CREATOR_AI_RUNS} AI runs a month`,
    ],
    highlighted: false,
    cta: { label: "Start free trial", href: APP_SIGNUP_URL },
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 99,
    yearly: 79,
    tagline: "Content intelligence for serious creators",
    features: [
      "Everything in Creator",
      "Patterns, timing and suggestions",
      "Data Analyst",
      "Swipe file",
      "Unlimited AI runs",
    ],
    highlighted: true,
    cta: { label: "Start free trial", href: APP_SIGNUP_URL },
  },
  {
    id: "team",
    name: "Team",
    monthly: null,
    yearly: null,
    tagline: "For teams and agencies. In development.",
    features: [
      "Everything in Pro",
      "Multiple team seats",
      "Team performance dashboard",
      "Dedicated onboarding",
    ],
    highlighted: false,
    cta: { label: "Contact us", href: "/contact" },
  },
];

export const PRICED_PLANS = PLANS.filter(
  (p): p is Plan & { monthly: number; yearly: number } => p.monthly !== null && p.yearly !== null,
);

export function yearlyTotal(plan: { yearly: number }) {
  return plan.yearly * 12;
}

/** Creator versus Pro, built from the facts on the previous pricing page. */
export const COMPARISON: { label: string; creator: boolean | string; pro: boolean | string }[] = [
  { label: "AI runs a month", creator: String(CREATOR_AI_RUNS), pro: "Unlimited" },
  { label: "AI Coach and ideas", creator: true, pro: true },
  { label: "Blueprint and campaigns", creator: true, pro: true },
  { label: "Content calendar and LinkedIn publishing", creator: true, pro: true },
  { label: "Full analytics and weekly reviews", creator: true, pro: true },
  { label: "Public proof page", creator: true, pro: true },
  { label: "Patterns, timing and suggestions", creator: false, pro: true },
  { label: "Data Analyst", creator: false, pro: true },
  { label: "Swipe file", creator: false, pro: true },
  { label: "Carousel generation and editor", creator: false, pro: true },
  { label: "Blueprint strategy inference", creator: false, pro: true },
];
