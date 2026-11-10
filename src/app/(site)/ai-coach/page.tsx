import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";
import { CREATOR_AI_RUNS, FAIR_USE_LINE, PRICED_PLANS, TRIAL } from "@/lib/pricing";

const [creator, pro] = PRICED_PLANS;

// Merged here: /linkedin-coaching, /ai-linkedin-post-writer.
const content: FeaturePageContent = {
  heroScreen: "coach-draft-score",
  path: "/ai-coach",
  name: "AI Coach for LinkedIn",
  description:
    "An AI Coach that learns from your own LinkedIn posts, writes in your voice and scores every draft before you publish.",
  label: "AI Coach",
  h1: "An AI Coach that learns from your posts and your numbers",
  sub: "It writes LinkedIn posts in your voice, using your top posts as examples, and draws on your own numbers when it advises you.",
  sections: [
    {
      label: "Your voice",
      title: "It learns how you write",
      body: [
        "In Strategy, you pick your tone words and write the rules the Coach should always and never follow.",
        "When it drafts, it uses up to five of your own posts as voice examples. Pin the ones you want, or let it pick your top posts.",
      ],
      points: [
        "Tone words, such as friendly or conversational",
        "Always and never rules, in your own words",
        "Sentence length, layout and openings, measured from your voice examples",
      ],
      screen: "coach-voice-rules",
    },
    {
      label: "Drafts",
      title: "Every draft gets a score before you publish",
      body: ["The Coach scores each post on six points and tells you what to fix. You see the reason, not just a number."],
      points: ["Opening line", "Clarity", "Flow", "Tone", "Call to action", "Fits your strategy"],
      screen: "coach-score-panel",
    },
    {
      label: "Ideas",
      title: "Ideas from your own numbers, not a blank page",
      body: [
        `On ${pro.name}, Patterns suggests what to try next, based on how your hooks, formats and themes perform. Each suggestion has a Draft in Coach button that opens it in the Coach.`,
        "You can also ask the Coach for ideas. It suggests a few topics, starting from your top posts, your strategy and your numbers.",
      ],
      link: { label: "How your strategy guides the Coach", href: "/linkedin-content-strategy" },
      screen: "coach-ideas-try-next",
    },
  ],
  faq: [
    {
      question: "What does the Coach learn from?",
      answer: "Your Blueprint, your posting history, your analytics and your tone. The more you post, the more it has to learn from.",
    },
    {
      question: "Does the Coach write in my voice?",
      answer:
        "Yes. It follows your tone words and your always and never rules, and uses up to five of your posts as voice examples. Drafts start from those, and you edit them before anything is published.",
    },
    {
      question: "Does the Coach publish for me?",
      answer:
        "No. You review every draft. A post is only published when you click Publish or schedule it.",
    },
    {
      question: "How many AI runs do I get?",
      answer: `${creator.name} includes ${CREATOR_AI_RUNS} AI runs a month and ${pro.name} is unlimited. ${FAIR_USE_LINE} Every account starts with ${TRIAL.days} days of ${TRIAL.plan}, including ${TRIAL.aiRuns} AI runs.`,
    },
    {
      question: "Can the Coach make carousels?",
      answer: `Yes, on ${pro.name}. It turns your best posts into designed LinkedIn carousels, built from your own performance data.`,
    },
  ],
  closing: "Write your next post with your numbers behind it",
};

export const metadata = pageMetadata({
  title: "AI Coach for LinkedIn creators | VYRAL",
  description: content.description,
  path: content.path,
});

export default function AiCoachPage() {
  return <FeaturePage content={content} />;
}
