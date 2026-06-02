export const metadata = {
  title: 'Cookie Policy | VYRAL',
  description: 'How VYRAL uses cookies and tracking technologies.',
};

export default function Cookies() {
  const h2 = { fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 } as const;
  const p = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 } as const;
  const ul = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 } as const;

  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>Cookie Policy</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2025</p>

        <h2 style={h2}>1. What Cookies We Use</h2>
        <p style={p}>VYRAL uses:</p>
        <ul style={ul}>
          <li>Essential cookies – login, session management, security</li>
          <li>Analytics cookies – usage patterns, errors, performance monitoring</li>
          <li>Preference cookies – language, theme, and settings</li>
        </ul>

        <h2 style={h2}>2. Essential Cookies</h2>
        <p style={p}>These cookies are necessary for the Service to function. They include:</p>
        <ul style={ul}>
          <li>Authentication tokens</li>
          <li>Session identifiers</li>
          <li>Security cookies (CSRF protection)</li>
        </ul>
        <p style={p}>Essential cookies cannot be disabled as they are required for basic functionality.</p>

        <h2 style={h2}>3. Analytics Cookies</h2>
        <p style={p}>We use analytics to understand how users interact with VYRAL. This helps us:</p>
        <ul style={ul}>
          <li>Identify and fix bugs</li>
          <li>Improve user experience</li>
          <li>Measure feature adoption</li>
        </ul>
        <p style={p}>Analytics data is anonymized and cannot be used to identify individual users.</p>

        <h2 style={h2}>4. Consent</h2>
        <p style={p}>We only load non-essential cookies after you give consent. You may withdraw consent at any time through your browser settings or by contacting us.</p>

        <h2 style={h2}>5. No Advertising Cookies</h2>
        <p style={p}>We do NOT use:</p>
        <ul style={ul}>
          <li>Ad networks</li>
          <li>Tracking pixels for advertising</li>
          <li>Behavioral advertising</li>
          <li>Third-party marketing cookies</li>
          <li>Cross-site tracking</li>
        </ul>

        <h2 style={h2}>6. Third-Party Cookies</h2>
        <p style={p}>Some third-party services we use may set their own cookies:</p>
        <ul style={ul}>
          <li>Stripe – for secure payment processing</li>
          <li>Supabase – for authentication</li>
        </ul>
        <p style={p}>These cookies are subject to the respective third parties&apos; privacy policies.</p>

        <h2 style={h2}>7. Managing Cookies</h2>
        <p style={p}>You can reject or delete cookies at any time in your browser settings. Note that disabling essential cookies may prevent you from using certain features.</p>
        <p style={p}>Common browser cookie settings:</p>
        <ul style={ul}>
          <li>Chrome: Settings → Privacy and security → Cookies</li>
          <li>Firefox: Settings → Privacy &amp; Security → Cookies</li>
          <li>Safari: Preferences → Privacy → Cookies</li>
          <li>Edge: Settings → Cookies and site permissions</li>
        </ul>

        <h2 style={h2}>8. Cookie Retention</h2>
        <ul style={ul}>
          <li>Session cookies: Deleted when you close your browser</li>
          <li>Persistent cookies: Up to 1 year, or until you delete them</li>
        </ul>

        <h2 style={h2}>9. Updates to This Policy</h2>
        <p style={p}>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

        <h2 style={h2}>10. Contact Us</h2>
        <p style={p}>If you have questions about our use of cookies, contact us at <a href="mailto:hello@getvyral.io" style={{ color: '#a78bfa' }}>hello@getvyral.io</a></p>
      </div>
    </div>
  );
}
