import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — LinkedIn Strategy & Content Intelligence | VYRAL",
  description:
    "LinkedIn content strategy, algorithm insights, and creator growth tips from the VYRAL team.",
  alternates: { canonical: "https://www.getvyral.io/blog" },
};

export default function BlogPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 160,
          textAlign: "center",
          padding: "160px 24px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(124,58,237,0.9)",
            marginBottom: 20,
          }}
        >
          Blog
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 20px",
          }}
        >
          Insights coming soon
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 40px",
          }}
        >
          We&apos;re writing guides on LinkedIn strategy, algorithm changes, and how
          to build content that compounds. Subscribe to be first.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: 400,
            margin: "0 auto",
            gap: 12,
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              padding: "12px 20px",
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "#fff",
              outline: "none",
            }}
          />
          <button
            type="button"
            style={{
              background: "#7c3aed",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              border: "none",
              borderRadius: 999,
              padding: "12px 24px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Notify me
          </button>
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            marginTop: 16,
          }}
        >
          No spam. We post when we have something worth saying.
        </p>
      </section>
    </main>
  );
}
