import { NextRequest, NextResponse } from 'next/server'

// NOTE: NEXT_PUBLIC_SUPABASE_URL is referenced elsewhere in this repo
// (src/lib/supabase.ts) but there is no local .env file, so the literal is kept
// as a fallback. It should be moved to an env var only.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jstjulsdtxkbjdjjrudc.supabase.co'

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, company, message, website } = await req.json()

  if (!firstName || !firstName.trim()) {
    return NextResponse.json({ error: 'First name is required' }, { status: 400 })
  }

  if (!lastName || !lastName.trim()) {
    return NextResponse.json({ error: 'Last name is required' }, { status: 400 })
  }

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  if (!message || !message.trim()) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 })
  }

  try {
    const edgeRes = await fetch(`${SUPABASE_URL}/functions/v1/submit-contact-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
          ? {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
              apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
            }
          : {}),
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        company,
        message,
        website,
      }),
    })

    const body = await edgeRes.json().catch(() => ({ error: 'Invalid response from server' }))

    if (!edgeRes.ok) {
      console.error('submit-contact-form error:', edgeRes.status, body)
    }

    return NextResponse.json(body, { status: edgeRes.status })
  } catch (err) {
    console.error('Contact form network error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
