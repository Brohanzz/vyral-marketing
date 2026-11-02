import Link from "next/link";
import Card from "@/components/site/Card";
import Section from "@/components/site/Section";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Legal: VYRAL",
  description: "Legal documents and policies for VYRAL.",
  path: "/legal",
});

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/legal/privacy-policy",
    subtitle: "How we collect, use, and protect your data.",
  },
  {
    label: "Terms of Service",
    href: "/legal/terms",
    subtitle: "The rules and conditions of using VYRAL.",
  },
  {
    label: "Cookie Policy",
    href: "/legal/cookies",
    subtitle: "What cookies we use and why.",
  },
  {
    label: "GDPR Policy",
    href: "/legal/gdpr",
    subtitle: "Your rights under European data protection law.",
  },
  {
    label: "Data Processing Agreement",
    href: "/legal/dpa",
    subtitle: "For business customers and enterprise use.",
  },
  {
    label: "Security",
    href: "/legal/security",
    subtitle: "How we keep your account and data secure.",
  },
  {
    label: "Imprint",
    href: "/legal/imprint",
    subtitle: "Company information and legal registration.",
  },
];

export default function LegalPage() {
  return (
    <>
      <PageHero narrow label="Legal" title="Legal" sub="Everything you need to know about how VYRAL operates." />
      <Section variant="tint" className="pt-4 pb-[84px]">
        <ul className="mx-auto m-0 flex max-w-[720px] list-none flex-col gap-5 p-0">
          {legalLinks.map((item) => (
            <li key={item.href}>
              <Card className="group h-full gap-1.5 p-6">
                <Link
                  href={item.href}
                  className="text-[17px] font-semibold text-ink after:absolute after:inset-0 after:rounded-lg group-hover:text-primary-strong"
                >
                  {item.label}
                </Link>
                <p className="m-0 text-[15px] text-muted">{item.subtitle}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
