export const metadata = {
  title: 'Security Statement | VYRAL',
  description: 'How we protect your data.',
};

export default function Security() {
  const h2 = { fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 } as const;
  const h3 = { fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 } as const;
  const p = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 } as const;
  const ul = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 } as const;

  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>Security Statement</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2025</p>
        <p style={p}>At VYRAL, security is a top priority. We implement industry-standard security measures to protect your data at every level.</p>

        <h2 style={h2}>1. Infrastructure Security</h2>
        <p style={p}>We use Supabase with enterprise-grade security, built on top of AWS infrastructure.</p>
        <ul style={ul}>
          <li>SOC 2 Type II compliant infrastructure</li>
          <li>Regular security audits and penetration testing</li>
          <li>24/7 infrastructure monitoring</li>
          <li>Automatic security patches and updates</li>
          <li>DDoS protection</li>
        </ul>

        <h2 style={h2}>2. Data Encryption</h2>
        <h3 style={h3}>In Transit</h3>
        <ul style={ul}>
          <li>TLS 1.2+ encryption for all connections</li>
          <li>HTTPS enforced across all endpoints</li>
          <li>Secure WebSocket connections</li>
        </ul>
        <h3 style={h3}>At Rest</h3>
        <ul style={ul}>
          <li>AES-256 encryption for stored data</li>
          <li>Encrypted database backups</li>
          <li>Secure key management</li>
        </ul>

        <h2 style={h2}>3. Access Control</h2>
        <ul style={ul}>
          <li>Row-Level Security (RLS) – Database policies ensure users can only access their own data</li>
          <li>Principle of Least Privilege – Employees only have access to data necessary for their role</li>
          <li>Role-Based Access Control – Granular permissions for different user types</li>
          <li>Audit Logging – All access is logged and monitored</li>
        </ul>

        <h2 style={h2}>4. Authentication Security</h2>
        <ul style={ul}>
          <li>Secure password hashing (bcrypt)</li>
          <li>Session token management</li>
          <li>Rate limiting on authentication endpoints</li>
          <li>Protection against brute-force attacks</li>
          <li>Secure password reset flows</li>
        </ul>

        <h2 style={h2}>5. AI Safety</h2>
        <p style={p}>Data used for AI features is always anonymized before processing.</p>
        <ul style={ul}>
          <li>No personally identifiable information sent to AI providers</li>
          <li>AI prompts are sanitized to remove sensitive data</li>
          <li>AI model providers are bound by data processing agreements</li>
          <li>AI responses are not used to train third-party models</li>
        </ul>

        <h2 style={h2}>6. LinkedIn Integration Security</h2>
        <p style={p}>We implement comprehensive security measures for LinkedIn integration:</p>
        <h3 style={h3}>OAuth Token Security</h3>
        <ul style={ul}>
          <li>OAuth tokens are encrypted using AES-256 before storage</li>
          <li>Tokens are stored in isolated, access-controlled database tables</li>
          <li>Token refresh is handled server-side only</li>
          <li>Tokens are immediately deleted when you disconnect LinkedIn</li>
        </ul>
        <h3 style={h3}>Publishing Security</h3>
        <ul style={ul}>
          <li>All publish requests require authenticated user session</li>
          <li>Every publish action is logged for audit purposes</li>
          <li>Rate limiting prevents abuse and spam</li>
          <li>Content validation before publishing</li>
          <li>Users must explicitly confirm before content is published</li>
        </ul>

        <h2 style={h2}>7. Application Security</h2>
        <ul style={ul}>
          <li>Regular code reviews</li>
          <li>Dependency vulnerability scanning</li>
          <li>Input validation and sanitization</li>
          <li>Protection against common vulnerabilities (XSS, CSRF, SQL injection)</li>
          <li>Content Security Policy headers</li>
        </ul>

        <h2 style={h2}>8. Payment Security</h2>
        <p style={p}>All payment processing is handled by Stripe, a PCI-DSS Level 1 certified payment processor.</p>
        <ul style={ul}>
          <li>VYRAL never stores credit card numbers</li>
          <li>All payment data is encrypted</li>
          <li>Stripe handles all sensitive payment information</li>
        </ul>

        <h2 style={h2}>9. Incident Response</h2>
        <p style={p}>We maintain comprehensive incident response procedures:</p>
        <ul style={ul}>
          <li>24/7 monitoring and alerting</li>
          <li>Defined incident response team and procedures</li>
          <li>Notification of affected users within 72 hours of confirmed breach</li>
          <li>Post-incident analysis and remediation</li>
          <li>Regular incident response drills</li>
        </ul>
        <h3 style={h3}>LinkedIn-Specific Incident Response</h3>
        <p style={p}>In the event of a security incident involving LinkedIn API data or member data:</p>
        <ul style={ul}>
          <li>We will notify LinkedIn at security@linkedin.com within 24 hours of discovering a breach</li>
          <li>We will cooperate fully with LinkedIn&apos;s security team</li>
          <li>Affected member data will be identified and secured immediately</li>
          <li>We will follow LinkedIn&apos;s incident response guidelines as specified in their API Terms</li>
        </ul>

        <h2 style={h2}>10. Business Continuity</h2>
        <ul style={ul}>
          <li>Regular automated backups</li>
          <li>Point-in-time recovery capability</li>
          <li>Disaster recovery procedures</li>
          <li>Multi-region data redundancy</li>
        </ul>

        <h2 style={h2}>11. Responsible Disclosure</h2>
        <p style={p}>We welcome responsible disclosure of security vulnerabilities. If you discover a security issue, please contact us at <a href="mailto:hello@getvyral.io" style={{ color: '#a78bfa' }}>hello@getvyral.io</a></p>
        <p style={p}>We commit to:</p>
        <ul style={ul}>
          <li>Acknowledging receipt within 24 hours</li>
          <li>Providing regular updates on remediation progress</li>
          <li>Not pursuing legal action against good-faith security researchers</li>
        </ul>

        <h2 style={h2}>Contact</h2>
        <p style={p}>For security-related inquiries: <a href="mailto:hello@getvyral.io" style={{ color: '#a78bfa' }}>hello@getvyral.io</a></p>
      </div>
    </div>
  );
}
