import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";
import { PRICED_PLANS, TRIAL } from "@/lib/pricing";

const [creator, pro] = PRICED_PLANS;

// Merged here: /linkedin-content-calendar, /linkedin-personal-branding, /linkedin-growth-tool, /product/blueprint-ai.
const content: FeaturePageContent = {
  heroScreen: "strategy-blueprint",
  heroCrop: { ratio: 1.7, position: "90% 0%" },
  path: "/linkedin-content-strategy",
  name: "LinkedIn content strategy Blueprint",
  description:
    "Set your positioning, audience, content pillars and tone once in a Blueprint. VYRAL uses it to plan your calendar, guide your drafts and read your analytics.",
  label: "Strategy",
  h1: "Your LinkedIn content strategy, in one Blueprint",
  sub: "Write down who you are, who you help and what you talk about. VYRAL uses it in every draft, plan and report.",
  connect: {
    label: "How it connects",
    title: "One plan behind every draft, date and number",
    points: [
      {
        title: "Drafts",
        body: "The Coach reads your positioning, audience, pillars, tone and rules before it writes a draft.",
      },
      {
        title: "Dates",
        body: "The calendar plans your week around your pillars and favours the ones you have posted about least in the last 30 days.",
      },
      {
        title: "Numbers",
        body: "Analytics shows your posts by pillar, and on Pro how each pillar performs. A monthly report shows where your posts drift from the plan.",
      },
    ],
  },
  sections: [
    {
      label: "Blueprint",
      title: "Set your strategy once",
      body: [
        "Your Blueprint holds your positioning, your audience, your content pillars and your tone. It also holds the rules the Coach must follow.",
        "You do not start from scratch. VYRAL suggests a Blueprint from the posts you import. Review it, change it, or skip it and set it up later.",
      ],
      points: [
        "Positioning, goals and audience",
        "What you sell, how people buy and your revenue goal",
        "Content pillars, each with a description",
        "Your voice: tone words, what to do, what you would never say, and whether the Coach may use personal stories",
        "A posting plan: posts per week, formats and calls to action",
      ],
    },
    {
      label: "Calendar",
      title: "Plan the week around your pillars",
      body: [
        "The content calendar knows your pillars and your posting rhythm, and plans around the pillars you have posted about least lately. Analytics shows which pillars are thin.",
        "Pick a time and VYRAL publishes to LinkedIn through the official API. Suggested times come from your own analytics, and you can cancel a scheduled post any time before it goes live.",
      ],
      points: ["Text, image and document posts", "Campaigns generated from your strategy, with posts, impressions and engagement rate for each"],
      screen: "strategy-campaigns",
    },
    {
      label: "Alignment",
      title: "See when your posts drift from the plan",
      body: [
        "Once a month, VYRAL compares your recent posts with your Blueprint and shows where you drift from your pillars, what is holding steady and what to watch. You can also ask VYRAL to review your Blueprint and suggest improvements.",
        `On ${pro.name}, the Strategy Builder walks you through seven steps to build a strategy from the start.`,
      ],
      link: { label: "See the analytics behind it", href: "/linkedin-analytics" },
    },
  ],
  faq: [
    {
      question: "What is a Blueprint?",
      answer:
        "Your content strategy in one place: positioning, audience, content pillars, tone and the rules the Coach must follow. The Coach, the calendar and your analytics all read it.",
    },
    {
      question: "Do I have to write my Blueprint from scratch?",
      answer:
        "No. VYRAL suggests one from the posts you import. You can review and change it, or skip it and set it up later.",
    },
    {
      question: "Can VYRAL publish my scheduled posts?",
      answer:
        "Yes. Scheduled posts are published to LinkedIn through LinkedIn's official API. You can cancel a scheduled post any time before it goes live.",
    },
    {
      question: "Which plan includes the Strategy Builder?",
      answer: `The Strategy Builder is part of ${pro.name}. Blueprint, campaigns and the content calendar are on ${creator.name} and ${pro.name}. Every account starts with ${TRIAL.days} days of ${TRIAL.plan}.`,
    },
  ],
  closing: "Turn your strategy into next week's posts",
};

export const metadata = pageMetadata({
  title: "LinkedIn content strategy Blueprint | VYRAL",
  description: content.description,
  path: content.path,
});

export default function LinkedInContentStrategyPage() {
  return <FeaturePage content={content} />;
}
