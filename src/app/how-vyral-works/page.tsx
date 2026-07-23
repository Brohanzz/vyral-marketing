import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  Shield,
  Lock,
  Send,
  BarChart3,
  Download,
  CheckCircle2,
  Unplug,
  Trash2,
  ShieldCheck,
  FileText,
  Zap,
  Eye,
} from "lucide-react";
import { APP_SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "How VYRAL Works — Your Data, Your Safety, Your Growth",
  description:
    "Understand how VYRAL connects to LinkedIn, tracks your content, and keeps your account safe. Full transparency on data flow, permissions, and compliance.",
  alternates: { canonical: "https://www.getvyral.io/how-vyral-works" },
};

// ── Shared styles ─────────────────────────────────────────────────────────────
const h2base: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",
  margin: "0 0 16px",
};
const bodyBase: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: "0 0 16px",
};
const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 24,
};

// ── Data ──────────────────────────────────────────────────────────────────────
const pipelineSteps = [
  { Icon: Unplug,    title: "Connect LinkedIn",          body: "Secure OAuth — we never see your password" },
  { Icon: Download,  title: "Import your history",       body: "Profile scan + optional Excel upload" },
  { Icon: Send,      title: "Write & publish via VYRAL", body: "AI Coach helps you draft; you hit Publish" },
  { Icon: BarChart3, title: "Metrics sync automatically",body: "Impressions, reactions, comments — every few hours" },
  { Icon: Zap,       title: "AI analyzes patterns",      body: "Hook types, tone, timing, themes — all mapped" },
  { Icon: Eye,       title: "You get actionable insights",body: "Performance Lab, recommendations, and scoring" },
];

const safetyPoints = [
  "Uses LinkedIn's official Community Management API",
  "No scraping, no browser automation, no bots",
  "We never auto-like, auto-comment, or auto-connect",
  "Publishing is always user-initiated — you click Publish",
  "Scheduled posts can be cancelled anytime before they go live",
  "OAuth tokens stored with strict access controls",
  "You can disconnect LinkedIn at any time",
  "Full compliance with LinkedIn's API Terms of Use",
];

const dataControls = [
  { Icon: Lock,       title: "Encrypted",          body: "All data encrypted in transit (TLS) and at rest." },
  { Icon: Trash2,     title: "Delete anytime",      body: "Delete your account and all associated data at any time from Settings." },
  { Icon: Unplug,     title: "Disconnect instantly",body: "Disconnecting LinkedIn stops all syncing immediately. No lingering access." },
  { Icon: ShieldCheck,title: "No data selling",     body: "We never sell, share, or monetize your data. Period." },
];

export default function HowVyralWorksPage() {
  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 48px 48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(45,212,191,0.08)",
            border: "1px solid rgba(45,212,191,0.3)",
            borderRadius: 100,
            padding: "4px 14px",
            fontSize: 11,
            letterSpacing: "1.2px",
            color: "#2dd4bf",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          TRANSPARENCY. SAFETY. CONTROL.
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 1.08,
            color: "#fff",
            margin: "0 0 20px",
          }}
        >
          How VYRAL works — and why it&apos;s safe
        </h1>
        <p style={{ ...bodyBase, fontSize: 18, margin: 0 }}>
          We believe you deserve to know exactly how your data flows, why we ask
          for each permission, and how we protect your LinkedIn account.
        </p>
      </section>

      {/* DATA PIPELINE */}
      <section
        style={{ maxWidth: 640, margin: "0 auto", padding: "64px 48px", textAlign: "center" }}
      >
        <h2 style={{ ...h2base, fontSize: 40 }}>How your data flows</h2>
        <p style={{ ...bodyBase, maxWidth: 480, margin: "0 auto 36px" }}>
          From connecting LinkedIn to getting insights — here&apos;s every step.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {pipelineSteps.map(({ Icon, title, body }, i) => (
            <div key={title}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#a78bfa" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#fff",
                      margin: "0 0 2px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.45)",
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
              {i < pipelineSteps.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "6px 0",
                  }}
                >
                  <ArrowDown size={16} color="rgba(124,58,237,0.3)" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CONNECT */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={{ ...h2base, fontSize: 40, textAlign: "center" }}>
          Why we ask you to connect LinkedIn
        </h2>
        <p style={{ ...bodyBase, textAlign: "center", maxWidth: 520, margin: "0 auto 36px" }}>
          VYRAL uses two separate OAuth connections — each with a specific purpose.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              Icon: Send,
              title: "Publishing connection",
              bullets: [
                "Publish posts directly to LinkedIn from VYRAL",
                "Schedule posts for later",
                "Auto-sync new posts you publish through VYRAL",
              ],
            },
            {
              Icon: BarChart3,
              title: "Analytics connection",
              bullets: [
                "Track impressions, reactions, comments per post",
                "Monitor follower growth and profile views",
                "Power Performance Lab patterns and scoring",
              ],
            },
          ].map(({ Icon, title, bullets }) => (
            <div key={title} style={card}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(124,58,237,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <Icon size={28} color="#7c3aed" />
              </div>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                  margin: "0 0 14px",
                }}
              >
                {title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                    <CheckCircle2 size={15} color="#2dd4bf" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            textAlign: "center",
            marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          Why two? LinkedIn requires separate permission scopes for content publishing and analytics data. This is a LinkedIn requirement, not ours.
        </p>
      </section>

      {/* IMPORT HISTORY */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={{ ...h2base, fontSize: 40, textAlign: "center" }}>
          Why we ask you to import your history
        </h2>
        <p style={{ ...bodyBase, textAlign: "center", maxWidth: 560, margin: "0 auto 36px" }}>
          LinkedIn&apos;s API only gives us access to posts from the moment you connect. To give you useful insights from day one, we need your history.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <div style={card}>
            <FileText size={32} color="#7c3aed" style={{ marginBottom: 14 }} />
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 10px" }}>
              Profile scan
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>
              We scan your public LinkedIn profile to import your most recent posts with text and engagement metrics. This gives the AI enough context to start learning your voice and patterns.
            </p>
          </div>
          <div style={card}>
            <Download size={32} color="#2dd4bf" style={{ marginBottom: 14 }} />
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 10px" }}>
              Excel upload (optional)
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>
              LinkedIn lets you request a data export that includes impressions — the only way to get historical impression data. Uploading this file fills the gaps and gives you richer analytics from the start.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: 12,
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#fff", fontWeight: 700 }}>
            More data = better AI.
          </span>{" "}
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)" }}>
            The more history we have, the smarter your recommendations, scoring, and coaching become.
          </span>
        </div>
      </section>

      {/* WHY POSTING VIA VYRAL */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={{ ...h2base, fontSize: 40, textAlign: "center" }}>
          Why posting via VYRAL matters
        </h2>
        <p style={{ ...bodyBase, textAlign: "center", maxWidth: 480, margin: "0 auto 36px" }}>
          The difference between automatic tracking and manual data entry.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {/* Post via VYRAL */}
          <div
            style={{
              background: "rgba(45,212,191,0.04)",
              border: "1px solid rgba(45,212,191,0.15)",
              borderRadius: 14,
              padding: 28,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#2dd4bf",
                marginBottom: 10,
              }}
            >
              Post via VYRAL ✓
            </div>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#fff",
                margin: "0 0 14px",
              }}
            >
              Set it and forget it
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Metrics sync automatically every few hours",
                "Impressions, reactions, comments tracked",
                "Post appears in analytics immediately",
                "AI learns from it automatically",
                "No manual work required",
              ].map((b) => (
                <li key={b} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                    • {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Post directly on LinkedIn */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: 28,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 10,
              }}
            >
              Post directly on LinkedIn
            </div>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "rgba(255,255,255,0.45)",
                margin: "0 0 14px",
              }}
            >
              Manual tracking
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "You need to import it manually",
                "Impression data requires Excel upload",
                "Post won't appear in analytics until imported",
                "AI can't learn from it until then",
                "Extra work every time",
              ].map((b) => (
                <li key={b} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                    • {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ACCOUNT SAFETY */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={{ ...h2base, fontSize: 40, textAlign: "center" }}>
          How we keep your account safe
        </h2>
        <p style={{ ...bodyBase, textAlign: "center", maxWidth: 480, margin: "0 auto 36px" }}>
          Your LinkedIn profile is your reputation. We treat it with the respect it deserves.
        </p>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <Shield size={36} color="#2dd4bf" />
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>
              LinkedIn-safe. Always.
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 12,
            }}
          >
            {safetyPoints.map((point) => (
              <div key={point} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <CheckCircle2 size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA CONTROL */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <h2 style={{ ...h2base, fontSize: 40, textAlign: "center" }}>
          Your data, your control
        </h2>
        <p style={{ ...bodyBase, textAlign: "center", maxWidth: 480, margin: "0 auto 36px" }}>
          We only store what&apos;s needed for analytics and publishing. Nothing more.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {dataControls.map(({ Icon, title, body }) => (
            <div key={title} style={card}>
              <Icon size={28} color="#2dd4bf" />
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                  margin: "12px 0 6px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
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
        <h2 style={{ ...h2base, fontSize: 40 }}>Ready to grow with confidence?</h2>
        <p style={{ ...bodyBase, maxWidth: 400, margin: "0 auto 28px" }}>
          Join creators who trust VYRAL with their LinkedIn growth.
        </p>
        <a
          href={APP_SIGNUP_URL}
          style={{
            display: "inline-block",
            background: "#7c3aed",
            color: "#fff",
            borderRadius: 100,
            padding: "15px 32px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          Sign up for a trial
        </a>
      </section>
    </main>
  );
}
