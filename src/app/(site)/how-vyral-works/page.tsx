import FeaturePage, { type FeaturePageContent } from "@/components/site/FeaturePage";
import { pageMetadata } from "@/lib/metadata";

// Merged here: /how-it-works, /product, /why-vyral, /getting-started (redirects in next.config.ts).
const content: FeaturePageContent = {
  heroScreen: "content-calendar",
  compare: {
    label: "Why publish through VYRAL",
    title: "Publish through VYRAL and your numbers keep themselves up to date",
    body: [
      "When you publish through VYRAL, it saves your post text and LinkedIn's ID for the post. That is what lets it refresh your numbers without any upload.",
      "Posts you publish on LinkedIn directly get less of that.",
    ],
    columns: [
      {
        title: "Published through VYRAL",
        items: [
          "Post text saved, so the Coach and your analytics can read it",
          "Numbers sync on their own: every 3 hours for the first 14 days, daily until day 30, then weekly",
          "Impressions, reactions, comments, reshares and saves",
        ],
      },
      {
        title: "Published on LinkedIn directly",
        items: [
          "Posts from the last 30 days with analytics are imported once, when you sign up. You get their numbers, not their text. They then sync like any other post",
          "Newer posts are not picked up automatically",
          "To add them, upload LinkedIn's analytics export. It adds their numbers once, with no text and no automatic updates",
        ],
      },
    ],
  },
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
      link: { label: "Read how access works", href: "/linkedin-tool-safe" },
      screen: "settings-linkedin",
    },
    {
      label: "Write and publish",
      title: "Write with the Coach, then publish from VYRAL",
      body: [
        "The Coach helps you draft. You click Publish, or pick a time. You can cancel a scheduled post any time before it goes live.",
        "Posts you publish through VYRAL keep their text and update their numbers on their own. There is nothing extra to do.",
      ],
      link: { label: "Meet the AI Coach", href: "/ai-coach" },
    },
    {
      label: "Measure",
      title: "Your numbers sync on their own",
      body: [
        "Impressions, reactions and comments sync every 3 hours for a post's first 14 days, then daily until day 30, then weekly. VYRAL maps hook types, tone, timing and themes, then shows which ones work for you.",
        "When you sign up, VYRAL imports the posts from your last 30 days that have analytics. To add older posts, upload the data export LinkedIn gives you.",
      ],
      link: { label: "See the analytics", href: "/linkedin-analytics" },
      screen: "insights-explore",
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
        "No. Posts you publish through VYRAL keep their text and update their numbers on their own. Posts you publish on LinkedIn directly are imported once when you sign up, from the last 30 days, with their numbers but not their text. After that, add them by uploading LinkedIn's analytics export.",
    },
    {
      question: "How do I get my older posts into VYRAL?",
      answer:
        "When you sign up, VYRAL imports the posts from your last 30 days that have analytics. For anything older, request a data export from LinkedIn and upload it to VYRAL. It adds the numbers for those posts once, without their text.",
    },
    {
      question: "How often do my numbers update?",
      answer:
        "For a post's first 14 days, impressions, reactions and comments sync every 3 hours. Then they sync daily until day 30, and weekly after that. Follower and connection counts update daily.",
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
