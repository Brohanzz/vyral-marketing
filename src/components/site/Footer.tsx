import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieConsent";
import { BRAND_LINE } from "@/lib/brand";
import Container from "./Container";
import Logo from "./Logo";
import NewsletterSignup from "./NewsletterSignup";

type FooterLink = { label: string; href: string };

// The "vs" pages carry most of the site's search impressions, so every live
// comparison page stays linked from every page.
const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-vyral-works" },
      { label: "Analytics", href: "/linkedin-analytics" },
      { label: "AI Coach", href: "/ai-coach" },
      { label: "Strategy", href: "/linkedin-content-strategy" },
      { label: "Use cases", href: "/solutions" },
      { label: "Official API", href: "/linkedin-tool-safe" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help center", href: "/help" },
      { label: "FAQ", href: "/help/faq" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Taplio", href: "/alternatives/taplio" },
      { label: "vs Shield", href: "/alternatives/shield" },
      { label: "vs Typefully", href: "/alternatives/typefully" },
      { label: "vs Kleo", href: "/alternatives/kleo" },
      { label: "vs AuthoredUp", href: "/alternatives/authoredup" },
      { label: "vs MagicPost", href: "/alternatives/magicpost" },
      { label: "vs Postiv", href: "/alternatives/postiv" },
      { label: "vs Scripe", href: "/alternatives/scripe" },
      { label: "vs Supergrow", href: "/alternatives/supergrow" },
      { label: "vs Stanley", href: "/alternatives/stanley" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy-policy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "DPA", href: "/legal/dpa" },
      { label: "GDPR", href: "/legal/gdpr" },
      { label: "Security", href: "/legal/security" },
      { label: "Imprint", href: "/legal/imprint" },
    ],
  },
];

const link =
  "inline-flex min-h-11 items-center rounded-md text-left text-[14.5px] text-on-dark-muted hover:text-on-dark desk:min-h-8";

export default function Footer() {
  return (
    <footer data-tone="dark" className="border-t border-band-hairline bg-band-dark text-on-dark-muted">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 desk:grid-cols-[minmax(0,1.3fr)_repeat(5,minmax(0,1fr))]">
          <div className="col-span-2 desk:col-span-1">
            <Logo size="footer" />
            <p className="mt-3.5 mb-0 max-w-[260px] text-[14.5px] leading-normal">{BRAND_LINE}</p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-labelledby={`footer-${col.title}`}>
              <h2 id={`footer-${col.title}`} className="m-0 mb-2 text-[14.5px] font-semibold text-on-dark">
                {col.title}
              </h2>
              <ul className="m-0 flex list-none flex-col p-0">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={link}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                {col.title === "Legal" && (
                  <li>
                    <CookieSettingsLink className={link} />
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 grid gap-5 border-t border-band-hairline pt-8 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] desk:items-center desk:gap-12">
          <div>
            <h2 className="m-0 text-[15px] font-semibold text-on-dark">Newsletter</h2>
            <p className="mt-1.5 mb-0 text-[14.5px] leading-normal">
              Practical LinkedIn growth tactics and product updates, once a week.
            </p>
          </div>
          <NewsletterSignup />
        </div>

        <p className="mt-10 mb-0 text-caption">
          &copy; <span className="font-mono tabular-nums">2026</span> VYRAL
        </p>
      </Container>
    </footer>
  );
}
