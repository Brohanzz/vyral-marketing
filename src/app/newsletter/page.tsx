import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Newsletter | VYRAL",
  description:
    "Product updates, use cases, and LinkedIn performance data from VYRAL. Once a week, short and concrete.",
  alternates: { canonical: "https://www.getvyral.io/newsletter" },
};

const FONT = "Inter, sans-serif";

export default function NewsletterPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "80px 24px 96px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 6vw, 52px)",
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 20px",
          }}
        >
          The VYRAL Newsletter
        </h1>

        <p
          style={{
            fontFamily: FONT,
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            margin: "0 0 32px",
            maxWidth: 520,
          }}
        >
          Product updates, real use cases, and data insights from LinkedIn
          performance we actually measure. Once a week, short.
        </p>

        <NewsletterForm variant="bare" />

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "36px 0 0",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {[
            "What we shipped and why it matters for your content",
            "How other creators are using VYRAL in practice",
            "Data insights from real LinkedIn performance, not generic advice",
          ].map((line) => (
            <li
              key={line}
              style={{
                fontFamily: FONT,
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
              }}
            >
              {line}
            </li>
          ))}
        </ul>

        <p
          style={{
            fontFamily: FONT,
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            margin: "24px 0 0",
          }}
        >
          No spam. Unsubscribe anytime.
        </p>

        <p
          style={{
            fontFamily: FONT,
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            margin: "48px 0 0",
          }}
        >
          Want the full platform?{" "}
          <a
            href={APP_SIGNUP_URL}
            style={{ color: "#a78bfa", textDecoration: "underline" }}
          >
            Start a free trial
          </a>
        </p>
      </section>
    </main>
  );
}
