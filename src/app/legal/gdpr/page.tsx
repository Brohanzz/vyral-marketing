export const metadata = {
  title: 'GDPR Compliance | VYRAL',
  description: 'How VYRAL meets EU data protection requirements.',
};

export default function GDPR() {
  const h2 = { fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 } as const;
  const h3 = { fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 } as const;
  const p = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 } as const;
  const ul = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 } as const;

  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>GDPR Compliance</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2025</p>
        <p style={p}>VYRAL is fully committed to GDPR compliance. We have implemented comprehensive measures to ensure the protection of personal data for all our users.</p>

        <h2 style={h2}>Our GDPR Commitments</h2>

        <h3 style={h3}>Data Minimization</h3>
        <p style={p}>We only collect data that is necessary for providing our service. We do not collect excessive or unnecessary personal information.</p>

        <h3 style={h3}>Purpose Limitation</h3>
        <p style={p}>Personal data is collected for specified, explicit, and legitimate purposes:</p>
        <ul style={ul}>
          <li>Providing analytics and performance insights</li>
          <li>Enabling AI-powered content coaching</li>
          <li>Enabling user-initiated content publishing to LinkedIn</li>
          <li>Processing payments and managing subscriptions</li>
        </ul>
        <p style={p}>We do not process data in ways incompatible with those purposes.</p>

        <h3 style={h3}>Storage Limitation</h3>
        <p style={p}>We retain personal data only for as long as necessary. When you delete your account, your data is permanently removed.</p>

        <h3 style={h3}>Security</h3>
        <p style={p}>We implement:</p>
        <ul style={ul}>
          <li>Encryption at rest and in transit (TLS 1.2+)</li>
          <li>Row-level security (RLS) ensuring users only access their own data</li>
          <li>Secure authentication with hashed passwords</li>
          <li>OAuth tokens stored with AES-256 encryption</li>
          <li>Regular security audits and monitoring</li>
          <li>Access controls limiting employee access to personal data</li>
        </ul>

        <h3 style={h3}>Transparency</h3>
        <p style={p}>Our Privacy Policy clearly explains what data we collect, how we use it, and your rights.</p>

        <h2 style={h2}>Data Subject Rights</h2>
        <p style={p}>We fully support all GDPR rights:</p>
        <ul style={ul}>
          <li>Right of Access – Request a copy of your data</li>
          <li>Right to Rectification – Correct inaccurate data</li>
          <li>Right to Erasure – Delete your account and all data</li>
          <li>Right to Restrict Processing – Limit how we use your data</li>
          <li>Right to Data Portability – Export your data</li>
          <li>Right to Object – Object to certain processing</li>
          <li>Rights Related to Automated Decision-Making – Human review of AI decisions</li>
        </ul>

        <h2 style={h2}>Consent for LinkedIn Publishing</h2>
        <p style={p}>Publishing content to LinkedIn requires your explicit action. We implement a clear consent model:</p>
        <ul style={ul}>
          <li>You must click &quot;Publish&quot; and confirm before any content is posted</li>
          <li>You can review and edit content before publishing</li>
          <li>Scheduled posts can be cancelled at any time before publishing</li>
          <li>You can revoke publishing permissions by disconnecting LinkedIn</li>
        </ul>

        <h2 style={h2}>Lawful Basis for Processing</h2>
        <p style={p}>We process personal data under the following legal bases:</p>
        <ul style={ul}>
          <li>Contract – Processing necessary to provide our service (Art. 6(1)(b))</li>
          <li>Consent – Where you have given explicit consent, including LinkedIn publishing (Art. 6(1)(a))</li>
          <li>Legitimate Interest – For service improvement and security (Art. 6(1)(f))</li>
          <li>Legal Obligation – Where required by law (Art. 6(1)(c))</li>
        </ul>

        <h2 style={h2}>Data Processing Agreements</h2>
        <p style={p}>We maintain Data Processing Agreements (DPAs) with all our sub-processors, ensuring they meet GDPR requirements.</p>

        <h2 style={h2}>International Transfers</h2>
        <p style={p}>Where data is transferred outside the EEA, we use Standard Contractual Clauses (SCCs) approved by the European Commission to ensure adequate protection.</p>

        <h2 style={h2}>AI and Data</h2>
        <p style={p}>We do not use customer data outside VYRAL. Any data used for analytics or AI is fully anonymized and cannot be traced back to individual users. We do not sell, share, or monetize your personal data in any way.</p>

        <h2 style={h2}>Data Protection Officer</h2>
        <p style={p}>For GDPR-related inquiries, you can contact us at: <a href="mailto:privacy@getvyral.io" style={{ color: '#a78bfa' }}>privacy@getvyral.io</a></p>

        <h2 style={h2}>Supervisory Authority</h2>
        <p style={p}>You have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State of your habitual residence, place of work, or place of the alleged infringement.</p>
        <p style={p}>For Denmark: Datatilsynet (Danish Data Protection Agency)</p>

        <h2 style={h2}>Summary</h2>
        <ul style={ul}>
          <li>✓ Full GDPR compliance</li>
          <li>✓ Encryption at rest and in transit</li>
          <li>✓ Row-level security</li>
          <li>✓ Right to deletion at any time</li>
          <li>✓ DPAs with all sub-processors</li>
          <li>✓ No data selling or sharing</li>
          <li>✓ Anonymized AI processing</li>
          <li>✓ Explicit consent for LinkedIn publishing</li>
        </ul>
      </div>
    </div>
  );
}
