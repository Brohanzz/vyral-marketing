import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";
import { PRICED_PLANS, TRIAL } from "@/lib/pricing";

const [creator, pro] = PRICED_PLANS;

// Merged here: /linkedin-content-calendar, /linkedin-personal-branding, /linkedin-growth-tool, /product/blueprint-ai.
const content: FeaturePageContent = {
  path: "/linkedin-content-strategy",
  name: "LinkedIn content strategy Blueprint",
  description:
    "Set your positioning, audience, content pillars and tone once in a Blueprint. VYRAL uses it to plan your calendar, guide your drafts and read your analytics.",
  label: "Strategy",
  h1: "Your LinkedIn content strategy, in one Blueprint",
  sub: "Write down who you are, who you help and what you talk about. VYRAL uses it in every draft, plan and report.",
  sections: [
    {
      label: "Blueprint",
      title: "Set your strategy once",
      body: [
        "Your Blueprint holds your positioning, your audience, your content pillars and your tone. It also holds the rules the Coach must follow.",
        "You do not start from scratch. VYRAL suggests a Blueprint from the posts you import. Review it, change it, or skip it and set it up later.",
      ],
      points: [
        "Positioning and audience",
        "Offers, and the outcomes your content should lead to",
        "Content pillars and recurring angles",
        "Stories and proof the Coach can use",
        "Your voice, and what you would never say",
      ],
      shot: "Blueprint",
    },
    {
      label: "Calendar",
      title: "Plan the week around your pillars",
      body: [
        "The content calendar knows your pillars and your posting rhythm. If you have not posted about a main pillar this week, you see the gap.",
        "Pick a time and VYRAL publishes to LinkedIn through the official API. Suggested times come from your own analytics, and you can cancel a scheduled post any time before it goes live.",
      ],
      points: ["Text, image and document posts", "Campaigns with goals you can track"],
      shot: "Content calendar",
    },
    {
      label: "Alignment",
      title: "See when your posts drift from the plan",
      body: [
        "VYRAL tracks how well your posts match your pillars and nudges you when you drift. As your data shows what works, it suggests changes to your Blueprint.",
        `On ${pro.name}, the Strategy Builder walks you through seven steps to build a strategy from the start.`,
      ],
      shot: "Pillar alignment",
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
