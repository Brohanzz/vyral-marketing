import Button from "@/components/site/Button";
import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import { Bullets } from "@/components/site/FeaturePage";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { APP_SIGNUP_URL } from "@/lib/urls";

// Kept as its own page (it did not fit a merged feature page). Text kept; only em dashes removed.
export const metadata = pageMetadata({
  title: "Proof Page: Turn Your Content Into a Public Portfolio | VYRAL",
  description:
    "Turn your top-performing content into a polished portfolio you can share with prospects, clients, or collaborators.",
  path: "/product/proof-page",
});

const PROOF = [
  { title: "Best posts", text: "Your top-performing content automatically featured" },
  { title: "Key metrics", text: "Engagement, reach, and growth stats that matter" },
  { title: "Positioning & expertise", text: "Clear positioning and content pillars on display" },
  { title: "Social proof", text: "Testimonials and results (coming soon)" },
];

const USE_CASES = [
  { title: "Ghostwriters & agencies", text: "Share client results and win inbound leads" },
  { title: "Solopreneurs & consultants", text: "Show your thinking + outcomes in one place" },
  { title: "Founders", text: "Give prospects a curated view of your expertise" },
];

const ADVANTAGE = [
  "Curated content = stronger signal",
  "Professional layout = instant authority",
  "Easy to share",
  "Message stays on-brand",
  "Shows consistency and expertise",
];

const video = "block w-full rounded-lg shadow-2";

function CardGrid({ items, cols }: { items: { title: string; text: string }[]; cols: string }) {
  return (
    <div className={`mt-10 grid gap-5 ${cols}`}>
      {items.map((item) => (
        <Card key={item.title} as="article" className="p-6">
          <h3 className="m-0 text-[17px] font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 mb-0 text-[15px] leading-[1.6] text-muted">{item.text}</p>
        </Card>
      ))}
    </div>
  );
}

export default function ProofPagePage() {
  return (
    <>
      <PageHero
        label="Turn content into credibility"
        title="Create a public Proof Page that showcases your best posts"
        sub="Turn your top-performing content into a polished portfolio you can share with prospects, clients, or collaborators."
      >
        <Button href={APP_SIGNUP_URL} size="lg">
          Sign up for a trial
        </Button>
        <Button href="/linkedin-analytics" variant="ghost" size="lg">
          View analytics
        </Button>
      </PageHero>

      <Section variant="tint" labelledBy="proof-title" className="py-[72px]">
        <SectionHeading id="proof-title">Your strongest proof, all in one place</SectionHeading>
        <CardGrid items={PROOF} cols="desk:grid-cols-4" />
        <video autoPlay muted loop playsInline src="/vyral-the-coach.mp4" className={`mt-10 ${video}`} />
      </Section>

      <Section variant="light" labelledBy="trust-title" className="py-[72px]">
        <SectionHeading id="trust-title">Build trust instantly</SectionHeading>
        <CardGrid items={USE_CASES} cols="desk:grid-cols-3" />
      </Section>

      <Section variant="tint" labelledBy="why-title" className="py-[72px]">
        <div className="max-w-[720px]">
          <SectionHeading id="why-title">Why Proof Pages convert better than screenshots or links</SectionHeading>
          <h3 className="mt-8 mb-0 text-[15px] font-semibold text-ink">The advantage</h3>
          <Bullets items={ADVANTAGE} />
        </div>
      </Section>

      <Section variant="light" labelledBy="analytics-title" className="py-[72px]">
        <SectionHeading id="analytics-title">A Proof Page powered by your actual analytics</SectionHeading>
        <p className="mt-4 mb-0 max-w-[620px] text-body-l text-muted">
          Your best posts and metrics are pulled directly from your VYRAL data. No manual curation needed.
        </p>
        <video autoPlay muted loop playsInline src="/vyral-analytics.mp4" className={`mt-10 ${video}`} />
      </Section>

      <ClosingBand from="soft" title="Turn your content into a real portfolio" cta="Sign up for a trial">
        <p className="m-0">Launch your Proof Page in minutes, and share it anywhere.</p>
      </ClosingBand>
    </>
  );
}
