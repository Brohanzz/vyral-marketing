import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";
import { CREATOR_AI_RUNS, FAIR_USE_LINE, PRICED_PLANS, TRIAL } from "@/lib/pricing";

const [creator, pro] = PRICED_PLANS;

// Merged here: /linkedin-coaching, /ai-linkedin-post-writer.
const content: FeaturePageContent = {
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
        "Connect LinkedIn or upload a CSV of your posts. The Coach studies your top posts and builds a voice profile from them.",
        "When it drafts, it writes like you. When it suggests a change, it keeps your tone.",
      ],
      points: [
        "Sentence length and paragraph structure",
        "Hook patterns that work for your audience",
        "Vocabulary, formatting and tone",
      ],
      shot: "Voice profile",
    },
    {
      label: "Drafts",
      title: "Every draft gets a score before you publish",
      body: ["The Coach scores each post on six points and tells you what to fix. You see the reason, not just a number."],
      points: ["Hook", "Clarity", "Pacing", "Tone", "Call to action", "Fit with your strategy"],
      shot: "Draft scoring",
    },
    {
      label: "Ideas",
      title: "Ideas from your best posts, not a blank page",
      body: [
        "Ask for ideas and the Coach starts from your Blueprint and your analytics. It suggests topics that fit your pillars and have worked before.",
        "You can also paste a draft and ask for a review. It checks the hook, clarity, pacing, tone and call to action, in your voice.",
      ],
      shot: "Coach ideas",
      link: { label: "How your Blueprint guides the Coach", href: "/linkedin-content-strategy" },
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
        "Yes. It builds a voice profile from your top posts: sentence length, hooks, formatting, vocabulary and tone. Drafts start from that profile, and you edit them before anything is published.",
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
