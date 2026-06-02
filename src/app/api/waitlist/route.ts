import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { first_name, last_name, email, waitlist, newsletter } = await req.json()

  if (!first_name || !first_name.trim()) {
    return NextResponse.json({ error: 'First name is required' }, { status: 400 })
  }

  if (!last_name || !last_name.trim()) {
    return NextResponse.json({ error: 'Last name is required' }, { status: 400 })
  }

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { error: dbError } = await supabase
    .from('waitlist_signups')
    .insert({ email, first_name, last_name, waitlist, newsletter })

  if (dbError) {
    if (dbError.code === '23505') {
      return NextResponse.json({ success: true, message: "You're already on the list!" }, { status: 200 })
    }
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
      firstName: first_name,
      lastName: last_name,
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
