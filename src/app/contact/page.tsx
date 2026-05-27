import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact VYRAL — Get in Touch",
  description:
    "Have questions about VYRAL? Want to learn more about how we can help your LinkedIn growth? We'd love to hear from you.",
  alternates: { canonical: "https://www.getvyral.io/contact" },
};

export default function ContactPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 48px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 48,
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 0 16px",
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Have questions about VYRAL? Want to learn more about how we can help
            your LinkedIn growth? We&apos;d love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
