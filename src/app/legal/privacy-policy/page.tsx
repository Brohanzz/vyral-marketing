import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VYRAL",
  description:
    "VYRAL's privacy policy — how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://www.getvyral.io/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 64,
          }}
        >
          Last updated: June 2025
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 24,
            color: "#fff",
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          What we collect
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          LinkedIn profile data (name, profile URL, post history) via OAuth;
          email address; usage data (features used, session data); payment data
          handled by Stripe (we never store card details).
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 24,
            color: "#fff",
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          How we use your data
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          To power your VYRAL account, personalise AI outputs, send product and
          billing emails, improve the product. We do not sell or share your data
          with third parties for advertising.
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 24,
            color: "#fff",
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          Data retention
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          Your data is retained while your account is active. You can request
          deletion at any time by emailing{" "}
          <a
            href="mailto:privacy@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            privacy@getvyral.io
          </a>
          .
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 24,
            color: "#fff",
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          Third-party services
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          We use Supabase (database and auth), Stripe (payments), Vercel
          (hosting), and Google/Anthropic AI APIs (AI generation). Each operates
          under their own data policies.
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 24,
            color: "#fff",
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          Your rights
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          Access, rectify, or delete your data. Withdraw consent at any time.
          Contact{" "}
          <a
            href="mailto:privacy@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            privacy@getvyral.io
          </a>
          .
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 24,
            color: "#fff",
            marginTop: 48,
            marginBottom: 16,
          }}
        >
          Contact
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          <a
            href="mailto:privacy@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            privacy@getvyral.io
          </a>
        </p>
      </div>
    </main>
  );
}
