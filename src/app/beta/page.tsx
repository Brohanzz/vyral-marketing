'use client'

import { useState } from 'react'

export default function BetaPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [newsletter, setNewsletter] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/beta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          linkedin_url: linkedinUrl,
          newsletter,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '14px 16px',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 15,
    outline: 'none',
  }

  const divider = (
    <div
      style={{
        height: 1,
        background: 'rgba(255,255,255,0.08)',
        margin: '40px 0',
      }}
    />
  )

  const dotAccent = (
    <span
      style={{
        width: 6,
        height: 6,
        background: '#7c3aed',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: 8,
        verticalAlign: 'middle',
      }}
    />
  )

  return (
    <main
      style={{
        background: '#080510',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        color: '#fff',
      }}
    >
      {/* Change 7: vertical accent line via class (responsive) */}
      <div
        className="founding-content"
        style={{
          maxWidth: 640,
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        {/* Change 1 → 2: pull quote replaces logo, above pill */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 22,
            color: '#ffffff',
            lineHeight: 1.6,
            borderLeft: '4px solid #7c3aed',
            paddingLeft: 20,
            margin: '0 0 40px',
          }}
        >
          You&apos;re not just an early user. You&apos;re part of how VYRAL becomes what it&apos;s supposed to be.
        </p>

        {/* Change 3: radial glow wraps pill + headline */}
        <div
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)',
            padding: '48px 0 32px',
          }}
        >
          {/* Overline pill */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(167,139,250,0.9)',
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 100,
                padding: '5px 14px',
              }}
            >
              Founding Circle
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.15,
              color: '#fff',
              margin: 0,
              textAlign: 'center',
            }}
          >
            We&apos;re looking for our Founding Circle
          </h1>
        </div>

        {/* Section 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, margin: 0 }}>
            VYRAL is a LinkedIn content intelligence platform. It connects your post performance data to your content creation — so instead of guessing what&apos;s working, you can actually see it.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, margin: 0 }}>
            Most people who post on LinkedIn consistently hit the same wall: you put in the effort, something lands, something doesn&apos;t, and you have no real way to understand why.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, margin: 0 }}>
            VYRAL closes that gap. It analyses your content performance, learns what works for you specifically, and uses that to help you create more of it — without losing your voice.
          </p>
          {/* Change 5: API safety callout block */}
          <div
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: 10,
              padding: '14px 18px',
              marginTop: 20,
              fontSize: 15,
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.8,
            }}
          >
            It&apos;s built entirely on LinkedIn&apos;s official API. No scraping, no browser extensions. Just clean, reliable data you can actually trust.
          </div>
        </div>

        {divider}

        {/* Section 2 */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, margin: '0 0 32px' }}>
          We&apos;re opening a limited number of spots. This isn&apos;t a typical beta. We&apos;re not looking for people to click around and move on. We want people who are genuinely active on LinkedIn, who care about growing with intention, and who are willing to tell us honestly what&apos;s working and what isn&apos;t.
        </p>

        {/* Change 4: dot accent on section labels */}
        {/* What we're asking for */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.35)',
            margin: '0 0 16px',
          }}
        >
          {dotAccent}
          What we&apos;re asking for
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            'Use the platform regularly during your first month',
            'Come back to us with real feedback — what clicks, what confuses you, what's missing',
            'Join a short call with us toward the end of your first month',
          ].map((item) => (
            <p
              key={item}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 2,
                margin: 0,
              }}
            >
              — {item}
            </p>
          ))}
        </div>

        {/* What you get */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.35)',
            margin: '32px 0 16px',
          }}
        >
          {dotAccent}
          What you get in return
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            '1 month completely free — full access, no strings attached',
            '50% off for the following 6 months',
            'A direct say in what gets built next',
          ].map((item) => (
            <p
              key={item}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 2,
                margin: 0,
              }}
            >
              — {item}
            </p>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8,
            margin: '32px 0 0',
          }}
        >
          You&apos;re not just an early user. You&apos;re part of how VYRAL becomes what it&apos;s supposed to be.
        </p>

        {divider}

        {/* Section 3 */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, margin: '0 0 40px' }}>
          Sound like you? If you&apos;re serious about LinkedIn and want to be part of building something from the ground up — we&apos;d love to have you. Spots are limited. We&apos;re keeping this circle small on purpose.
        </p>

        {/* Change 6: card treatment wraps form + trust line */}
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: 32,
            marginTop: 48,
          }}
        >
          {/* Form or success */}
          {success ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 28,
                  color: '#fff',
                  marginBottom: 12,
                }}
              >
                You&apos;re in the circle.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                You&apos;ll hear from Vicky directly once your spot is confirmed.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* First + Last name */}
              <div
                className="founding-name-grid"
                style={{
                  display: 'grid',
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ ...inputStyle, marginBottom: 12 }}
              />

              {/* LinkedIn URL */}
              <input
                type="url"
                placeholder="https://linkedin.com/in/yourname"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                required
                style={{ ...inputStyle, marginBottom: 20 }}
              />

              {/* Newsletter checkbox */}
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  cursor: 'pointer',
                  marginBottom: 24,
                }}
              >
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  style={{ display: 'none' }}
                />
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    border: newsletter
                      ? '2px solid #7c3aed'
                      : '2px solid rgba(255,255,255,0.25)',
                    background: newsletter ? '#7c3aed' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.15s',
                  }}
                >
                  {newsletter && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Send me LinkedIn growth tips and VYRAL updates
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? 'rgba(124,58,237,0.6)' : '#7c3aed',
                  color: '#fff',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 16,
                  border: 'none',
                  borderRadius: 100,
                  padding: '16px 0',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.15s',
                }}
              >
                {loading ? 'Sending your application...' : 'Sign up for the Founding Circle'}
              </button>

              {/* Error */}
              {error && (
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    color: 'rgba(248,113,113,1)',
                    marginTop: 12,
                    textAlign: 'center',
                  }}
                >
                  {error}
                </p>
              )}
            </form>
          )}

          {/* Trust line */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
              textAlign: 'center',
              marginTop: 28,
              lineHeight: 1.6,
            }}
          >
            Built on LinkedIn&apos;s official API — no extensions, no scraping, no risk to your account.
          </p>
        </div>
      </div>

      <style>{`
        .founding-name-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 520px) {
          .founding-name-grid {
            grid-template-columns: 1fr;
          }
        }
        .founding-content {
          border-left: 2px solid rgba(124,58,237,0.2);
          padding-left: 32px;
        }
        @media (max-width: 640px) {
          .founding-content {
            border-left: none;
            padding-left: 0;
          }
        }
      `}</style>
    </main>
  )
}
