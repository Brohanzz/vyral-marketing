import Link from "next/link";

// ─── SHARED STYLES ────────────────────────────────────────────────────────────

const colHeading: React.CSSProperties = {
  color: "rgba(255,255,255,0.22)",
  fontSize: 10,
  letterSpacing: "1.2px",
  fontWeight: 600,
  textTransform: "uppercase",
  fontFamily: "Inter, sans-serif",
  marginBottom: 16,
  display: "block",
};

const footerLink: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(255,255,255,0.38)",
  fontFamily: "Inter, sans-serif",
  display: "block",
  marginBottom: 10,
  textDecoration: "none",
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <>
      {/* Hover styles for links */}
      <style>{`
        .footer-link:hover { color: rgba(255,255,255,0.65) !important; }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.4) !important; }
      `}</style>

      <footer
        style={{
          background: "#080510",
          color: "#ffffff",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "64px 48px 40px",
          }}
        >
          {/* ── TOP ROW: 5 NAV COLUMNS ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 32,
            }}
          >
            {/* Product */}
            <div>
              <span style={colHeading}>Product</span>
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Analytics", href: "/linkedin-analytics" },
                { label: "AI Coach", href: "/ai-coach" },
                { label: "Blueprint", href: "/linkedin-content-strategy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={footerLink}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div>
              <span style={colHeading}>Resources</span>
              {[
                { label: "Help Center", href: "/help" },
                { label: "FAQ", href: "/help/faq" },
                { label: "How VYRAL Works", href: "/how-vyral-works" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={footerLink}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* LinkedIn Tools */}
            <div>
              <span style={colHeading}>LinkedIn Tools</span>
              {[
                { label: "LinkedIn Coaching", href: "/linkedin-coaching" },
                { label: "LinkedIn Post Analytics", href: "/linkedin-post-analytics" },
                { label: "AI Post Writer", href: "/ai-linkedin-post-writer" },
                { label: "Personal Branding", href: "/linkedin-personal-branding" },
                { label: "Content Calendar", href: "/linkedin-content-calendar" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={footerLink}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Alternatives */}
            <div>
              <span style={colHeading}>Alternatives</span>
              {[
                { label: "vs Taplio", href: "/alternatives/taplio" },
                { label: "vs Shield", href: "/alternatives/shield" },
                { label: "vs Typefully", href: "/alternatives/typefully" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={footerLink}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div>
              <span style={colHeading}>Legal</span>
              {[
                { label: "Privacy Policy", href: "/legal/privacy-policy" },
                { label: "Terms of Service", href: "/legal/terms" },
                { label: "Cookie Policy", href: "/legal/cookies" },
                { label: "DPA", href: "/legal/dpa" },
                { label: "GDPR", href: "/legal/gdpr" },
                { label: "Security", href: "/legal/security" },
                { label: "Imprint", href: "/legal/imprint" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={footerLink}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── API SAFETY NOTE ── */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 20,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.22)",
                fontFamily: "Inter, sans-serif",
                margin: 0,
              }}
            >
              Built on LinkedIn&apos;s official API — no extensions, no
              scraping, no risk to your account.
            </p>
          </div>

          {/* ── BOTTOM ROW: Logo + tagline left / Copyright + links right ── */}
          <div
            style={{
              marginTop: 24,
              paddingTop: 20,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            {/* Left: logo + tagline */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vyral-logo-new.png"
                alt="VYRAL"
                style={{ height: 36, width: "auto", display: "block", marginBottom: 10 }}
              />
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "Inter, sans-serif",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Build a content engine that grows your LinkedIn with clarity.
              </p>
            </div>

            {/* Right: bottom links + copyright */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", gap: 24 }}>
                {[
                  { label: "Terms", href: "/legal/terms" },
                  { label: "Privacy", href: "/legal/privacy-policy" },
                  { label: "About", href: "/about" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.18)",
                      fontFamily: "Inter, sans-serif",
                      textDecoration: "none",
                    }}
                    className="footer-bottom-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.18)",
                  fontFamily: "Inter, sans-serif",
                  margin: 0,
                }}
              >
                © 2026 VYRAL. Built for LinkedIn creators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
