import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";

// Merged here: /how-it-works, /product, /why-vyral, /getting-started (redirects in next.config.ts).
const content: FeaturePageContent = {
  path: "/how-vyral-works",
  name: "How VYRAL works",
  description:
    "How VYRAL connects to LinkedIn, publishes when you ask and syncs the numbers on your posts. Built on LinkedIn's official API.",
  label: "Product",
  h1: "How VYRAL works",
  sub: "You connect LinkedIn, write with the Coach and publish. VYRAL syncs the numbers and shows you what worked.",
  sections: [
    {
      label: "Connect",
      title: "Connect through LinkedIn's own login",
      body: [
        "You sign in with LinkedIn, so VYRAL never sees your password. LinkedIn uses separate permissions for publishing and for analytics, so you connect twice.",
        "You can disconnect LinkedIn any time. Syncing stops right away.",
      ],
      points: [
        "Publishing: post now or schedule for later",
        "Analytics: impressions, reactions and comments for each post",
        "Follower and connection counts, tracked daily",
      ],
      shot: "LinkedIn connections",
      link: { label: "Read how access works", href: "/linkedin-tool-safe" },
    },
    {
      label: "Write and publish",
      title: "Write with the Coach, then publish from VYRAL",
      body: [
        "The Coach helps you draft. You click Publish, or pick a time. You can cancel a scheduled post any time before it goes live.",
        "Posts you publish through VYRAL are tracked from the start. There is nothing extra to do.",
      ],
      shot: "Coach and scheduler",
      link: { label: "Meet the AI Coach", href: "/ai-coach" },
    },
    {
      label: "Measure",
      title: "Your numbers sync every few hours",
      body: [
        "Impressions, reactions and comments sync every few hours. VYRAL maps hook types, tone, timing and themes, then shows which ones work for you.",
        "LinkedIn's API only shares posts from the day you connect. To add your history, upload the data export LinkedIn gives you.",
      ],
      shot: "Analytics overview",
      link: { label: "See the analytics", href: "/linkedin-analytics" },
    },
  ],
  faq: [
    {
      question: "Why does VYRAL ask me to connect LinkedIn twice?",
      answer:
        "LinkedIn uses separate permissions for publishing and for analytics data. That is LinkedIn's requirement. One connection publishes the posts you choose. The other reads the numbers on your posts.",
    },
    {
      question: "Do I have to publish through VYRAL?",
      answer:
        "No. Posts you publish through VYRAL are tracked automatically. Posts you publish on LinkedIn directly can still be synced, but you need to upload LinkedIn's analytics export to get their impressions.",
    },
    {
      question: "How do I get my older posts into VYRAL?",
      answer:
        "LinkedIn's API only shares posts from the day you connect. You can request a data export from LinkedIn and upload it to VYRAL. It adds your past impressions.",
    },
    {
      question: "How often do my numbers update?",
      answer:
        "Impressions, reactions and comments sync every few hours. Follower and connection counts update daily.",
    },
    {
      question: "Can I delete my data?",
      answer:
        "Yes. Disconnect LinkedIn and syncing stops right away. You can delete your account and all its data from Settings.",
    },
  ],
  closing: "Start with the numbers on your own posts",
};

export const metadata = pageMetadata({
  title: "How VYRAL works: connect, write, publish and measure",
  description: content.description,
  path: content.path,
});

export default function HowVyralWorksPage() {
  return <FeaturePage content={content} />;
}
