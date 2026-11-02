import Button from "@/components/site/Button";
import Card from "@/components/site/Card";
import ClosingBand from "@/components/site/ClosingBand";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { APP_SIGNUP_URL } from "@/lib/urls";

// Kept as its own page (it did not fit a merged feature page). Text kept; only em dashes removed.
export const metadata = pageMetadata({
  title: "LinkedIn Playbooks: Proven Content Frameworks | VYRAL",
  description:
    "Step-by-step LinkedIn content playbooks for creators, ghostwriters, and agencies. Proven frameworks built into VYRAL.",
  path: "/resources/playbooks",
});

const PLAYBOOKS = [
  {
    title: "The First 30 Days",
    text: "Build your foundation: voice, pillars, Blueprint, and first 10 posts. The exact sequence new creators follow to get traction fast.",
  },
  {
    title: "The Engagement Engine",
    text: "Identify your top-performing formats, double down on what works, and cut what doesn't. Data-driven consistency.",
  },
  {
    title: "The Ghostwriter System",
    text: "Onboard clients, extract voice, manage multiple Blueprints, and deliver weekly without burning out.",
  },
  {
    title: "The Authority Builder",
    text: "Establish topical depth in one pillar, build credibility with data-backed posts, and become the go-to voice in your niche.",
  },
  {
    title: "The Relaunch",
    text: "Coming back after a break? Reset your strategy, audit past performance, and build a 4-week re-entry plan.",
  },
  {
    title: "The Agency Scale",
    text: "Standardise client onboarding, content review, and reporting across a team. Built for operations, not just individuals.",
  },
];

export default function PlaybooksPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="LinkedIn playbooks that actually work"
        sub="VYRAL's built-in playbooks give you step-by-step frameworks for every content challenge, from launching your first campaign to scaling a ghostwriting practice."
      >
        <Button href={APP_SIGNUP_URL} size="lg">
          Start for free
        </Button>
      </PageHero>

      <Section variant="tint" labelledBy="stages-title" className="py-[72px]">
        <SectionHeading id="stages-title">Frameworks for every stage</SectionHeading>
        <div className="mt-10 grid gap-5 desk:grid-cols-3">
          {PLAYBOOKS.map((p) => (
            <Card key={p.title} as="article" className="p-6">
              <h3 className="m-0 font-display text-heading-3 font-medium text-ink">{p.title}</h3>
              <p className="mt-3 mb-0 text-[15px] leading-[1.6] text-muted">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <ClosingBand title="Playbooks live inside VYRAL" cta="Start for free">
        <p className="m-0">
          Every playbook is integrated with your Blueprint, Analytics, and AI Coach, not a PDF you read once and forget.
        </p>
      </ClosingBand>
    </>
  );
}
