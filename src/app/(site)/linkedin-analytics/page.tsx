import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";
import { PRICED_PLANS, TRIAL } from "@/lib/pricing";

const [creator, pro] = PRICED_PLANS;

// Merged here: /linkedin-post-analytics, /product/analytics, /product/performance-lab.
const content: FeaturePageContent = {
  path: "/linkedin-analytics",
  name: "LinkedIn analytics tool",
  description:
    "See why your LinkedIn posts perform: hooks, formats, timing and themes from your own data. Built on LinkedIn's official API.",
  label: "Analytics",
  h1: "The LinkedIn analytics tool built for creators",
  sub: "See why a post performed, not only how many people saw it. Then do more of what works.",
  sections: [
    {
      label: "Your numbers",
      title: "Every post, with its numbers in one place",
      body: [
        "VYRAL syncs impressions, reactions, comments and reshares from LinkedIn's official API. The home page shows this week next to last week, with the change for each.",
        "Filter by date range, campaign, post type or label.",
      ],
      points: [
        "Engagement rate by format, pillar and time of day",
        "Text, carousels, images, videos and polls side by side",
        "Momentum, and a consistency score from 0 to 100",
      ],
    },
    {
      label: "Patterns",
      title: "Find the hooks, formats and topics that work for you",
      body: [
        "VYRAL looks at your last 180 days of posts. It maps hook types, structure, tone and themes, and shows which ones get more engagement from your audience.",
        `Timing comes from your own data. You see your best days and hours, not general advice. Patterns and timing are part of ${pro.name}.`,
      ],
      points: ["Hook performance", "Content pillar performance", "Best time to post, by hour and weekday"],
    },
    {
      label: "Reports",
      title: "A plain summary of your last 7 or 30 days",
      body: [
        "Performance reports sum up what worked, what changed and what to try next.",
        `On ${pro.name}, the Data Analyst answers questions about your data in plain English. Ask which format worked best this month and get the answer from your own posts.`,
      ],
      link: { label: "Compare plans", href: "/pricing" },
    },
  ],
  faq: [
    {
      question: "Where does the data come from?",
      answer:
        "From LinkedIn's official API. You connect through LinkedIn's own login. VYRAL uses no browser extension and does no scraping.",
    },
    {
      question: "What does VYRAL add to the numbers?",
      answer:
        "The home page compares this week with last week. On Pro, patterns compare your hook types, timing and themes with your own average, so you see which ones work for you.",
    },
    {
      question: "How often do the numbers update?",
      answer:
        "For a post's first 14 days, impressions, reactions and comments sync every 3 hours. Then they sync daily until day 30, and weekly after that. Follower and connection counts update daily.",
    },
    {
      question: "Which plan includes the Data Analyst?",
      answer: `The Data Analyst, patterns and timing are part of ${pro.name}. Full analytics and weekly reviews are on ${creator.name} and ${pro.name}. Every account starts with ${TRIAL.days} days of ${TRIAL.plan}.`,
    },
    {
      question: "Can I see posts from before I joined?",
      answer:
        "When you sign up, VYRAL imports the posts from your last 30 days that have analytics. For older posts, upload LinkedIn's data export. It adds their numbers once, without their text.",
    },
  ],
  closing: "Find out why your last post worked",
};

export const metadata = pageMetadata({
  title: "LinkedIn analytics tool for creators | VYRAL",
  description: content.description,
  path: content.path,
});

export default function LinkedInAnalyticsPage() {
  return <FeaturePage content={content} />;
}
