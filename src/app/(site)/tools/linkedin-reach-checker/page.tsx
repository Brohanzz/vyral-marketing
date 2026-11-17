import Link from "next/link";
import Article, { FaqList, formatDate } from "@/components/site/Article";
import JsonLd from "@/components/site/JsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { faqSchema, lastUpdated, webApplicationSchema } from "@/lib/schema";
import ReachChecker from "./ReachChecker";
import { BENCHMARK } from "./reach";

// Everything except the calculator is server-rendered, so all text is in the first HTML.

const page = {
  path: "/tools/linkedin-reach-checker",
  title: "LinkedIn Reach Checker: Is It You or LinkedIn? | VYRAL",
  name: "LinkedIn reach checker",
  description:
    "Free tool: compare your recent LinkedIn post impressions with older posts and see how your drop compares with the platform-wide decline.",
  date: "2026-11-17",
  /** Last content change: shown as "Last updated" and used as dateModified. */
  updated: "2026-11-17",
};

const faq = [
  {
    question: "How much has LinkedIn reach dropped?",
    answer:
      "Richard van der Blom's Algorithm InSights Report 2025, covering about 1.8 million posts, found views down about 47 percent. A second analysis of the same report puts overall views down 50 percent. Figures differ between studies because they measure different accounts.",
  },
  {
    question: "Which impressions number should I use?",
    answer:
      "The impressions figure shown in LinkedIn's analytics for each post. Use the same kind of number for both the older and the recent posts.",
  },
  {
    question: "Why does the tool use the median and not the average?",
    answer:
      "One viral post can pull an average far up. The median is the middle value, so it shows what a typical post gets.",
  },
  {
    question: "How many posts do I need?",
    answer: "At least three in each group. Around ten in each gives a more reliable picture.",
  },
  {
    question: "Does the tool store my numbers?",
    answer: "No. The calculation happens in your browser and nothing is sent or saved.",
  },
  {
    question: "Is the drop worse for company pages?",
    answer:
      "Some analyses report company page reach down 60 to 66 percent between 2024 and 2026, a bigger fall than for personal profiles.",
  },
];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function LinkedInReachCheckerPage() {
  const updated = lastUpdated(page);
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: page.name,
          description: page.description,
          url: absoluteUrl(page.path),
          dateModified: updated,
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <Article
        label="Free tool"
        title="Is your LinkedIn reach down because of you, or because of LinkedIn?"
        meta={<>Last updated {formatDate(updated)} · VYRAL</>}
      >
        <p>
          Most LinkedIn creators saw their reach fall in 2025. Published studies put the platform-wide drop in views
          at roughly 47 to 50 percent year on year. Enter your impressions for older and recent posts below to see
          whether your drop is bigger, smaller or in line with that.
        </p>

        <ReachChecker />

        <h2>How the check works</h2>
        <p>
          Paste the impressions from LinkedIn&apos;s post analytics for a handful of posts from about a year ago, then
          for your most recent posts. The tool takes the middle value of each group, called the median, so one
          unusually big post does not skew the result. It then works out the percentage change and sets it beside the
          roughly 47 to 50 percent decline reported across LinkedIn. Nothing you enter leaves your browser. If your
          numbers are close to the platform figure, the drop is mostly LinkedIn. If they are far worse, the cause is
          more likely something in how you post.
        </p>

        <h2>If your drop is bigger than the platform trend</h2>
        <p>Check these first:</p>
        <ul>
          <li>Posting frequency: did you post noticeably less, or in bursts with long gaps?</li>
          <li>Format: did you move away from the format that used to work for you?</li>
          <li>Topic: did your posts drift away from the subject your audience follows you for?</li>
          <li>Links: posts with external links in the body often reach fewer people than posts without.</li>
          <li>Audience: did you follow or connect with a very different group of people?</li>
        </ul>

        <h2>What this tool cannot tell you</h2>
        <p>
          It cannot tell you why a single post flopped, and it does not use LinkedIn&apos;s private data. Impressions
          are estimates, and different studies measure different groups of accounts, so treat the result as a rough
          guide. For a post-by-post view of what is working for you, see{" "}
          <Link href="/linkedin-analytics">LinkedIn analytics</Link> and{" "}
          <Link href="/blog/linkedin-algorithm-2026">how the LinkedIn algorithm works in 2026</Link>.
        </p>

        <h2>Track this automatically</h2>
        <p>
          VYRAL reads the numbers on your own LinkedIn posts and compares this week with last week, so you do not have
          to paste anything. Every account starts with 14 days of Pro, with no credit card.{" "}
          <Link href="/pricing">See pricing</Link>.
        </p>

        <FaqList items={faq} />

        <h2>Sources</h2>
        <ul>
          {BENCHMARK.sources.map((s) => (
            <li key={s.url}>
              {s.name}: {s.figure} ({s.period}).{" "}
              <a href={s.url} target="_blank" rel="noopener">
                Read the source
              </a>
              . Checked {formatDate(s.checkedOn)}.
            </li>
          ))}
        </ul>
      </Article>
    </>
  );
}
