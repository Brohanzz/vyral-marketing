import { Bullets } from "@/components/site/FeaturePage";
import Section from "@/components/site/Section";
import NewsletterSignup from "@/components/site/NewsletterSignup";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata = pageMetadata({
  title: "Newsletter | VYRAL",
  description:
    "Product updates, use cases, and LinkedIn performance data from VYRAL. Once a week, short and concrete.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        narrow
        label="Newsletter"
        title="The VYRAL Newsletter"
        sub="Product updates, real use cases, and data insights from LinkedIn performance we actually measure. Once a week, short."
      />
      <Section variant="tint" className="pt-4 pb-[84px]">
        <div className="mx-auto max-w-[720px]">
          <div data-tone="dark" className="rounded-lg bg-band-dark p-6 desk:p-8">
            <NewsletterSignup />
          </div>
          <Bullets
            items={[
              "What we shipped and why it matters for your content",
              "How other creators are using VYRAL in practice",
              "Data insights from real LinkedIn performance, not generic advice",
            ]}
          />
          <p className="mt-6 mb-0 text-[14px] text-muted">No spam. Unsubscribe anytime.</p>
          <p className="mt-3 mb-0 text-[15px] text-ink-2">
            Want the full platform?{" "}
            <a href={APP_SIGNUP_URL} className="font-semibold text-primary-hover underline underline-offset-2">
              Start a free trial
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
