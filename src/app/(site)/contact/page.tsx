import Section from "@/components/site/Section";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = pageMetadata({
  title: "Contact VYRAL: Get in Touch",
  description:
    "Have questions about VYRAL? Want to learn more about how we can help your LinkedIn growth? We'd love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        narrow
        label="Contact"
        title="Get in Touch"
        sub="Have questions about VYRAL? Want to learn more about how we can help your LinkedIn growth? We'd love to hear from you."
      />
      <Section variant="tint" className="pt-4 pb-[84px]">
        <div className="mx-auto max-w-[720px]">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
