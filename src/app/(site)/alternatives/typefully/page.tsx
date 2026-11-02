import Article from "@/components/site/Article";
import Button from "@/components/site/Button";
import { pageMetadata } from "@/lib/metadata";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata = pageMetadata({
  title: "Typefully Alternative for LinkedIn: Strategy Beyond the Editor | VYRAL",
  description:
    "Typefully is a great writing tool. VYRAL is a growth system. See what serious LinkedIn creators add when they're ready to go beyond drafts and scheduling.",
  path: "/alternatives/typefully",
});

// Comparison pages keep their text for now; it is rewritten after launch.
const rows: Array<{ feature: string; vyral: boolean; typefully: boolean }> = [
  { feature: "Clean writing UI", vyral: true, typefully: true },
  { feature: "Post scheduling", vyral: true, typefully: true },
  { feature: "Draft management", vyral: true, typefully: true },
  { feature: "LinkedIn analytics", vyral: true, typefully: false },
  { feature: "Performance scoring", vyral: true, typefully: false },
  { feature: "Blueprint strategy system", vyral: true, typefully: false },
  { feature: "AI trained on your data", vyral: true, typefully: false },
  { feature: "Hook & structure analysis", vyral: true, typefully: false },
  { feature: "Content pattern detection", vyral: true, typefully: false },
  { feature: "Built on LinkedIn's official API", vyral: true, typefully: false },
];

const DOES_WELL = [
  "Clean, distraction-free writing UI",
  "Multi-platform post scheduling",
  "Draft management and collaboration",
  "Simple, fast publishing workflow",
  "Thread and formatting support",
];

const DOES_NOT_INCLUDE = [
  "No LinkedIn analytics",
  "No performance scoring",
  "No content strategy layer",
  "No AI trained on your own posts",
  "No hook or structure analysis",
  "No coaching or improvement engine",
];

function Mark({ value }: { value: boolean }) {
  return value ? (
    <>
      <span aria-hidden="true" className="inline-block size-[7px] rounded-full bg-primary" />
      <span className="sr-only">Included</span>
    </>
  ) : (
    <>
      <span aria-hidden="true" className="text-muted">
        &ndash;
      </span>
      <span className="sr-only">Not included</span>
    </>
  );
}

export default function TypefullyPage() {
  return (
    <Article
      title="VYRAL vs Typefully"
      after={
        <div className="rounded-lg bg-surface-soft p-8 text-center shadow-1">
          <h2 className="m-0 font-display text-heading-2 font-medium text-ink">Ready to go beyond the editor?</h2>
          <p className="mt-3 mb-6 text-[16px] text-muted">Writing is the start. Understanding what works is how you grow.</p>
          <Button href={APP_SIGNUP_URL}>Sign up for a trial</Button>
        </div>
      }
    >
      <p>
        Typefully is one of the cleanest writing and scheduling tools available. VYRAL is what you add when you&apos;re
        ready to understand why your content performs, and build a strategy around it.
      </p>
      <p>
        <a href={APP_SIGNUP_URL}>Sign up for a trial</a>
      </p>

      <h2>A writing tool vs a growth system</h2>
      <p>
        <strong>Typefully excels at the writing experience.</strong> Clean editor, multi-platform scheduling, simple
        draft management. For writers who want friction removed from publishing, it&apos;s excellent.
      </p>
      <p>
        <strong>VYRAL is built for what comes after publishing.</strong> Understanding which posts landed and why,
        building a content strategy aligned to your goals, and using that intelligence to make every future post better.
      </p>
      <p>
        They solve different problems. If you&apos;ve outgrown just writing and scheduling, VYRAL is the next step.
      </p>

      <h3>What Typefully does well</h3>
      <ul>
        {DOES_WELL.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>What Typefully doesn&apos;t include</h3>
      <ul>
        {DOES_NOT_INCLUDE.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>What VYRAL adds</h2>
      <p>
        Writing and scheduling gets your content published. VYRAL gets it to perform. Analytics that explain why posts
        work, a Blueprint strategy system that keeps your content aligned to your goals, and an AI coach that improves
        your drafts before they go live, all built on officially authorised LinkedIn data.
      </p>
      <blockquote>
        <p>
          Typefully helps you write and publish.
          <br />
          VYRAL helps you <strong>grow.</strong>
        </p>
      </blockquote>

      <h2>Feature Comparison</h2>
      <div className="vy-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col" className="w-28 text-center">
                VYRAL
              </th>
              <th scope="col" className="w-28 text-center">
                Typefully
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td className="text-center">
                  <Mark value={row.vyral} />
                </td>
                <td className="text-center">
                  <Mark value={row.typefully} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[14px] text-muted">
        VYRAL connects to LinkedIn exclusively through LinkedIn&apos;s official API. This means your data is accessed
        securely, with no browser extension required.
      </p>
    </Article>
  );
}
