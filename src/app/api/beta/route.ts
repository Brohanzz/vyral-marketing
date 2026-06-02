import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

export async function POST(req: NextRequest) {
  const { first_name, last_name, email, linkedin_url, newsletter } = await req.json()

  if (!first_name || !last_name || !email || !linkedin_url) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  // Insert into Supabase beta_signups
  const { error: dbError } = await supabase
    .from('beta_signups')
    .insert({ first_name, last_name, email, linkedin_url, newsletter, source: 'founding-circle' })

  if (dbError) {
    if (dbError.code === '23505') {
      return NextResponse.json({ success: true, message: "You've already applied." }, { status: 200 })
    }
    console.error('Supabase error:', dbError)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }

  // Founder notification email via Resend
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'VYRAL <noreply@getvyral.io>',
        to: ['viktorija@getvyral.io', 'johan@getvyral.io'],
        subject: `New Founding Circle application — ${first_name} ${last_name}`,
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #080510; color: #ffffff;">
            <h2 style="color: #a78bfa; margin-bottom: 24px;">New Founding Circle Application</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5); width: 140px;">First name</td><td style="padding: 8px 0;">${first_name}</td></tr>
              <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5);">Last name</td><td style="padding: 8px 0;">${last_name}</td></tr>
              <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5);">Email</td><td style="padding: 8px 0;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5);">LinkedIn</td><td style="padding: 8px 0;"><a href="${linkedin_url}" style="color: #a78bfa;">${linkedin_url}</a></td></tr>
              <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5);">Newsletter</td><td style="padding: 8px 0;">${newsletter ? 'Yes' : 'No'}</td></tr>
            </table>
            <p style="margin-top: 32px; color: rgba(255,255,255,0.4); font-size: 13px;">View all applications in the VYRAL admin panel.</p>
          </div>
        `
      })
    })
  } catch (e) {
    console.error('Resend error:', e)
  }

  // Send to Loops
  try {
    await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        firstName: first_name,
        lastName: last_name,
        userGroup: newsletter ? 'founding-circle,newsletter' : 'founding-circle',
        source: 'beta-page',
      })
    })
  } catch (e) {
    console.error('Loops error:', e)
  }

  return NextResponse.json({ success: true })
}
