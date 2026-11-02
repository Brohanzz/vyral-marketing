import Link from "next/link";
import ClosingBand from "@/components/site/ClosingBand";
import { Bullets } from "@/components/site/FeaturePage";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import SectionLabel from "@/components/site/SectionLabel";
import { BRAND_LINE } from "@/lib/brand";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { TRIAL_LINE } from "@/lib/pricing";

// One section per former /solutions/* page. Each slug is the anchor the old URL now redirects to.
const AUDIENCES = [
  {
    slug: "creators",
    label: "Creators",
    title: "For creators",
    body: "VYRAL shows why each of your posts performed, compared with your own average. The Coach then drafts the next post in your voice. A content calendar keeps you posting on a steady rhythm.",
    uses: ["Content calendar", "Performance insights", "Momentum tracking", "Best time to post"],
    link: { label: "See the analytics", href: "/linkedin-analytics" },
  },
  {
    slug: "ghostwriters",
    label: "Ghostwriters",
    title: "For ghostwriters",
    body: "The Coach builds a voice profile from your client's posts and suggests hooks in their style. Analytics show which themes, hooks and tones land, so you can explain every choice. Multiple client workspaces are coming soon.",
    uses: ["Voice profile from the client's posts", "Draft scoring", "Theme and hook analysis"],
    link: { label: "Meet the AI Coach", href: "/ai-coach" },
  },
  {
    slug: "agencies",
    label: "Agencies",
    title: "For agencies",
    body: "Each client needs a clear strategy, a steady tone and reports that show what worked. VYRAL keeps the strategy in a Blueprint and sums up results for the last 7 or 30 days. Client workspaces and the Team plan are coming soon.",
    uses: ["A Blueprint for the strategy", "Campaign tracking", "Performance reports"],
    link: { label: "See how Blueprint works", href: "/linkedin-content-strategy" },
  },
];

const DESCRIPTION = `How creators, ghostwriters and agencies use VYRAL to plan, write and measure LinkedIn posts. ${BRAND_LINE}`;

export const metadata = pageMetadata({
  title: "VYRAL for creators, ghostwriters and agencies",
  description: DESCRIPTION,
  path: "/solutions",
});

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "VYRAL use cases",
  url: absoluteUrl("/solutions"),
  description: DESCRIPTION,
};

const textLink = "font-semibold text-primary-hover underline underline-offset-2 hover:text-primary-strong";

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={webPage} />
      <PageHero
        label="Use cases"
        title="VYRAL for creators, ghostwriters and agencies"
        sub="Same product, different jobs. Find the part that fits how you work."
      >
        <nav aria-label="Use cases" className="flex flex-wrap gap-3">
          {AUDIENCES.map((a) => (
            <a
              key={a.slug}
              href={`#${a.slug}`}
              className="inline-flex min-h-11 items-center rounded-pill bg-surface/92 px-4 text-[15px] font-semibold text-ink shadow-1 hover:text-primary-strong"
            >
              {a.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {AUDIENCES.map((a, i) => (
        <Section
          key={a.slug}
          id={a.slug}
          variant={i % 2 === 0 ? "tint" : "light"}
          labelledBy={`${a.slug}-title`}
          className="scroll-mt-4 py-[64px]"
        >
          <div className="grid gap-8 desk:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] desk:gap-16">
            <div>
              <SectionLabel>{a.label}</SectionLabel>
              <SectionHeading id={`${a.slug}-title`}>{a.title}</SectionHeading>
              <p className="mt-4 mb-0 max-w-[620px] text-body-l text-muted">{a.body}</p>
              <p className="mt-6 mb-0 text-[15.5px]">
                <Link href={a.link.href} className={textLink}>
                  {a.link.label}
                </Link>
              </p>
            </div>
            <div className="rounded-lg bg-surface p-6 shadow-3">
              <h3 className="m-0 text-[15px] font-semibold text-ink">What you use</h3>
              <Bullets items={a.uses} />
            </div>
          </div>
        </Section>
      ))}

      <ClosingBand title="Try VYRAL on your own posts">
        <p className="m-0">{TRIAL_LINE}</p>
        <p className="m-0">
          Running LinkedIn for a team?{" "}
          <Link href="/contact" className="font-semibold text-on-dark underline underline-offset-2 hover:text-signal">
            Talk to us
          </Link>
        </p>
      </ClosingBand>
    </>
  );
}
