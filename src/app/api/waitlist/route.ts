import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { email, waitlist, newsletter } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { error: dbError } = await supabase
    .from('waitlist_signups')
    .upsert({ email, waitlist, newsletter }, { onConflict: 'email' })

  if (dbError) {
    console.error('Supabase error:', dbError)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }

  const loopsRes = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      userGroup: waitlist && newsletter ? 'waitlist,newsletter' : waitlist ? 'waitlist' : 'newsletter',
      source: 'marketing-site',
    }),
  })

  if (!loopsRes.ok) {
    console.error('Loops error:', await loopsRes.text())
    // Don't fail — Supabase save succeeded
  }

  return NextResponse.json({ success: true })
}
