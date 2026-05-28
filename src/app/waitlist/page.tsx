'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [waitlist, setWaitlist] = useState(true)
  const [newsletter, setNewsletter] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, waitlist, newsletter }),
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

  return (
    <main
      style={{
        background: '#080510',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '8vh 24px 60px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ marginBottom: 48, display: 'block' }}>
        <Image
          src="/vyral-logo-new.png"
          alt="VYRAL"
          width={120}
          height={40}
          style={{ height: 40, width: 'auto' }}
          priority
        />
      </Link>

      <div style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>
        {/* Overline pill */}
        <p
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
            marginBottom: 24,
          }}
        >
          Early Access
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.1,
            color: '#fff',
            margin: '0 auto 20px',
          }}
        >
          Be first in. Shape what VYRAL becomes.
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 18,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.65,
            maxWidth: 480,
            margin: '0 auto 40px',
          }}
        >
          Join the launch waitlist for early access to VYRAL — the LinkedIn
          growth platform built on official APIs, not shortcuts.
        </p>

        {/* Form or success state */}
        {success ? (
          <div style={{ padding: '32px 0' }}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 24,
                color: '#fff',
                marginBottom: 12,
              }}
            >
              You&apos;re on the list.
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              We&apos;ll be in touch before launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            {/* Email input */}
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 10,
                padding: '14px 16px',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                outline: 'none',
                marginBottom: 16,
              }}
            />

            {/* Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={waitlist}
                  onChange={(e) => setWaitlist(e.target.checked)}
                  style={{ display: 'none' }}
                />
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    border: waitlist ? '2px solid #7c3aed' : '2px solid rgba(255,255,255,0.25)',
                    background: waitlist ? '#7c3aed' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.15s',
                  }}
                >
                  {waitlist && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  Reserve my spot on the launch waitlist
                </span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
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
                    border: newsletter ? '2px solid #7c3aed' : '2px solid rgba(255,255,255,0.25)',
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
                      <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  Send me LinkedIn growth tips and VYRAL updates
                </span>
              </label>
            </div>

            {/* Submit button */}
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
                padding: '14px 0',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s',
              }}
            >
              {loading ? 'Joining...' : 'Join the waitlist'}
            </button>

            {/* Error */}
            {error && (
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  color: '#f87171',
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
            marginTop: 32,
            lineHeight: 1.6,
          }}
        >
          Built on LinkedIn&apos;s official API — no extensions, no scraping, no risk to your account.
        </p>
      </div>
    </main>
  )
}
