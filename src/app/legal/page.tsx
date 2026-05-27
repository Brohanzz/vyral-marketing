import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — VYRAL",
  description: "Legal documents and policies for VYRAL.",
  alternates: { canonical: "https://www.getvyral.io/legal" },
};

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
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "128px 24px 128px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 44,
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          Legal
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          Everything you need to know about how VYRAL operates.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 48,
          }}
        >
          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                textDecoration: "none",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  color: "#fff",
                  margin: "0 0 4px",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
