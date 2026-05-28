import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Building,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Proof Page — Turn Your Content Into a Public Portfolio — VYRAL",
  description:
    "Turn your top-performing content into a polished portfolio you can share with prospects, clients, or collaborators.",
  alternates: {
    canonical: "https://www.getvyral.io/product/proof-page",
  },
  openGraph: {
    title: "VYRAL Proof Page — Turn Content Into Credibility",
    description:
      "Create a public Proof Page that showcases your best posts and metrics.",
  },
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
};

const overlinePill: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(124,58,237,0.15)",
  border: "1px solid rgba(124,58,237,0.3)",
  borderRadius: 100,
  padding: "6px 16px",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  color: "#a78bfa",
  marginBottom: 24,
};

const h1Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 52,
  lineHeight: 1.15,
  color: "#fff",
  margin: "0 0 20px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: 36,
  lineHeight: 1.2,
  color: "#fff",
  margin: "0 0 16px",
};

const body: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  fontSize: 17,
  margin: "0 0 32px",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#7c3aed",
  color: "#fff",
  borderRadius: 8,
  padding: "14px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

const btnGhost: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  padding: "14px 28px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
};

export default function ProofPagePage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 48px 60px",
          textAlign: "center",
        }}
      >
        <div style={overlinePill}>TURN CONTENT INTO CREDIBILITY</div>
        <h1 style={h1Style}>
          Create a public Proof Page that showcases your best posts
        </h1>
        <p style={body}>
          Turn your top-performing content into a polished portfolio you can
          share with prospects, clients, or collaborators.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/waitlist"
            style={btnPrimary}
          >
            Join the waitlist
          </a>
          <Link href="/product/analytics" style={btnGhost}>
            View analytics
          </Link>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>Your strongest proof — all in one place</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {[
            {
              Icon: TrendingUp,
              title: "Best posts",
              text: "Your top-performing content automatically featured",
            },
            {
              Icon: Award,
              title: "Key metrics",
              text: "Engagement, reach, and growth stats that matter",
            },
            {
              Icon: Users,
              title: "Positioning & expertise",
              text: "Clear positioning and content pillars on display",
            },
            {
              Icon: CheckCircle2,
              title: "Social proof",
              text: "Testimonials and results (coming soon)",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} style={card}>
              <Icon size={28} color="#7c3aed" style={{ marginBottom: 14 }} />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  fontSize: 15,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/vyral-the-coach.mp4"
          style={{
            width: "100%",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            display: "block",
          }}
        />
      </section>

      {/* USE CASES */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>Build trust instantly</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              Icon: Building,
              title: "Ghostwriters & agencies",
              text: "Share client results and win inbound leads",
            },
            {
              Icon: Users,
              title: "Solopreneurs & consultants",
              text: "Show your thinking + outcomes in one place",
            },
            {
              Icon: TrendingUp,
              title: "Founders",
              text: "Give prospects a curated view of your expertise",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} style={card}>
              <Icon size={28} color="#7c3aed" style={{ marginBottom: 14 }} />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  fontSize: 15,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PROOF PAGES CONVERT */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={h2Style}>
          Why Proof Pages convert better than screenshots or links
        </h2>
        <div style={card}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <Share2 size={24} color="#7c3aed" />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
              }}
            >
              The advantage
            </span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Curated content = stronger signal",
              "Professional layout = instant authority",
              "Easy to share",
              "Message stays on-brand",
              "Shows consistency and expertise",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <CheckCircle2
                  size={16}
                  color="#2dd4bf"
                  style={{ flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* POWERED BY ANALYTICS */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>A Proof Page powered by your actual analytics</h2>
        <p style={{ ...body, maxWidth: 560, margin: "0 auto 32px" }}>
          Your best posts and metrics are pulled directly from your VYRAL data —
          no manual curation needed.
        </p>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/vyral-analytics.mp4"
          style={{
            width: "100%",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            display: "block",
          }}
        />
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "64px 48px 80px",
          textAlign: "center",
        }}
      >
        <h2 style={h2Style}>Turn your content into a real portfolio</h2>
        <p style={body}>
          Launch your Proof Page in minutes — and share it anywhere.
        </p>
        <a
          href="/waitlist"
          style={btnPrimary}
        >
          Join the waitlist
        </a>
      </section>
    </main>
  );
}
