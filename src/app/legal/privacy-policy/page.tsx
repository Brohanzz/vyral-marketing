export const metadata = {
  title: 'Privacy Policy | VYRAL',
  description: 'How VYRAL protects and processes your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2025</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 24 }}>How VYRAL protects and processes your personal data.</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>1. Who We Are</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>VYRAL (&quot;we&quot;, &quot;us&quot;) is the data controller responsible for your personal data. We operate fully under GDPR and EU privacy regulations.</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>2. Data We Collect</h2>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>2.1 Account Data</h3>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Name and email</li>
          <li>Password (hashed)</li>
          <li>Billing information</li>
          <li>Settings and preferences</li>
        </ul>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>2.2 LinkedIn Data</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>When you connect your LinkedIn account, we access your data through LinkedIn&apos;s official API with your explicit consent. We request the following OAuth scopes:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li><strong style={{ color: '#fff' }}>openid</strong> – OpenID Connect authentication</li>
          <li><strong style={{ color: '#fff' }}>profile</strong> – Basic profile information (name, LinkedIn ID)</li>
          <li><strong style={{ color: '#fff' }}>email</strong> – Email address for account linking</li>
          <li><strong style={{ color: '#fff' }}>r_member_postAnalytics</strong> – Read-only access to analytics for posts you authored</li>
          <li><strong style={{ color: '#fff' }}>w_member_social</strong> – Publish posts to LinkedIn (user-initiated only)</li>
        </ul>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>LinkedIn Data Fields We Store</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>For each LinkedIn post you import or connect, we store:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Post URN (unique identifier)</li>
          <li>Impressions count</li>
          <li>Reactions/likes count</li>
          <li>Comments count</li>
          <li>Reshares/reposts count</li>
          <li>Post type (text, image, video, document, article, poll)</li>
          <li>Media type (if applicable)</li>
          <li>Post content text</li>
          <li>Publication timestamp</li>
        </ul>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 8, borderLeft: '2px solid rgba(124,58,237,0.4)', paddingLeft: 16 }}>We only access analytics for posts you have authored. We only publish posts when you explicitly initiate and confirm the action. We never automatically post, comment, like, or perform any actions without your direct approval. We never access your private messages, contacts, or notifications. We never access your LinkedIn password. All access requires your explicit OAuth consent.</p>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>2.3 LinkedIn Publishing</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>When you choose to publish content to LinkedIn through VYRAL:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Publishing is always user-initiated — you must click &quot;Publish&quot; and confirm</li>
          <li>You can review and edit content before publishing</li>
          <li>We can publish text posts, and optionally images or articles (with your approval)</li>
          <li>Scheduled posts require your prior approval and can be cancelled at any time</li>
          <li>We store a record of published posts for your analytics and reference</li>
          <li>We never publish content without your explicit action</li>
        </ul>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>LinkedIn OAuth Consent Flow</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>When you connect LinkedIn, you&apos;ll be redirected to LinkedIn&apos;s official authorization page where you can review and approve the specific permissions we&apos;re requesting. You can revoke this access at any time through your LinkedIn settings or by disconnecting within VYRAL.</p>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>LinkedIn Data Retention &amp; Deletion</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>When you connect your LinkedIn account, we store your post analytics data as described above and the OAuth tokens needed to refresh this data and enable publishing.</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 8 }}>Retention periods:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>LinkedIn post analytics data: retained for up to 12 months, then anonymized or deleted</li>
          <li>OAuth tokens: retained until you disconnect LinkedIn or delete your account</li>
          <li>Publish logs: retained for up to 12 months for your reference</li>
        </ul>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>When you delete your LinkedIn data or disconnect your LinkedIn account, we permanently remove the associated tokens, imported posts, publish logs, and analytics from our systems within 24 hours.</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>To delete LinkedIn data: Go to Settings → LinkedIn Integration → Delete LinkedIn Data. This action is immediate and irreversible.</p>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>2.4 Content You Create</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 8 }}>We store:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Drafts, ideas, posts, calendar entries</li>
          <li>Your Blueprint</li>
          <li>Campaigns and notes</li>
          <li>AI prompts you submit</li>
        </ul>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginTop: 32, marginBottom: 12 }}>2.5 Usage Data</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>We collect device, diagnostics, crash logs, and anonymized usage data to improve performance.</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>3. How We Use Your Data</h2>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Provide analytics, insights, and scoring</li>
          <li>Train your personalized AI model</li>
          <li>Improve drafts and ideas</li>
          <li>Enable Blueprint features</li>
          <li>Publish content to LinkedIn when you initiate and confirm</li>
          <li>Process payments</li>
        </ul>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 8 }}>We do not sell your data, ever. We do not use your data outside of VYRAL. Any data used for analytics or AI training is fully anonymized and cannot be linked to you.</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>4. Legal Basis (GDPR)</h2>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Contractual necessity (Art. 6(1)(b))</li>
          <li>Legitimate interest (Art. 6(1)(f))</li>
          <li>Consent for LinkedIn integration, publishing, and cookies (Art. 6(1)(a))</li>
        </ul>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>5. Data Sharing</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 8 }}>We only share data with GDPR-compliant processors:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Supabase (database + auth)</li>
          <li>Stripe (billing)</li>
          <li>AI model providers (OpenAI, Anthropic, etc.)</li>
          <li>LinkedIn (only when you publish content)</li>
          <li>Support and error monitoring tools</li>
        </ul>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>All processing is governed by DPAs and Standard Contractual Clauses (SCCs).</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>6. Your Rights</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 8 }}>You have the right to:</p>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Access your data</li>
          <li>Correct your data</li>
          <li>Export your data</li>
          <li>Object to processing</li>
          <li>Restrict processing</li>
          <li>Withdraw consent</li>
          <li>Delete your entire VYRAL account and all data at any time</li>
        </ul>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>Data deletion is immediate and irreversible. We store nothing after deletion.</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>7. Data Retention</h2>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Account data: while active</li>
          <li>Drafts/posts: until you delete them</li>
          <li>LinkedIn analytics data: up to 12 months, then anonymized or deleted</li>
          <li>LinkedIn publish logs: up to 12 months</li>
          <li>General analytics data: anonymized after 24 months</li>
          <li>Billing data: 5–10 years (legal requirement)</li>
          <li>LinkedIn data: until you delete it via Settings → LinkedIn Integration, or when you delete your account</li>
        </ul>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>8. Security</h2>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li>Encryption in transit &amp; at rest</li>
          <li>Role-based access control (RLS)</li>
          <li>Zero-trust architecture</li>
          <li>Strict logging and monitoring</li>
          <li>OAuth tokens stored encrypted (AES-256)</li>
          <li>All publish actions require authenticated session</li>
        </ul>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>9. Cookies</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>See our <a href="/legal/cookies" style={{ color: '#a78bfa' }}>Cookie Policy</a> for details.</p>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 }}>10. Contact Us</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 4 }}>VYRAL</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 4 }}>Copenhagen, Denmark</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 4 }}>CVR: 45239411</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>Email: <a href="mailto:johan@getvyral.io" style={{ color: '#a78bfa' }}>johan@getvyral.io</a></p>
      </div>
    </div>
  );
}
