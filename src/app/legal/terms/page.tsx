export const metadata = {
  title: 'Terms of Service | VYRAL',
  description: 'Your agreement with VYRAL.',
};

export default function Terms() {
  const h2 = { fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 } as const;
  const p = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 } as const;
  const ul = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 } as const;

  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2025</p>

        <h2 style={h2}>1. Agreement to Terms</h2>
        <p style={p}>By accessing and using VYRAL (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>

        <h2 style={h2}>2. Description of Service</h2>
        <p style={p}>VYRAL provides a LinkedIn content management platform that includes strategy planning, AI-powered content creation, scheduling, analytics, performance insights, and the ability to publish content directly to LinkedIn.</p>

        <h2 style={h2}>3. User Accounts</h2>
        <p style={p}>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>

        <h2 style={h2}>4. Acceptable Use</h2>
        <p style={p}>You agree not to use the Service to:</p>
        <ul style={ul}>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit harmful or malicious content</li>
          <li>Attempt to gain unauthorized access to the Service</li>
          <li>Use the Service for any automated or bulk operations without permission</li>
          <li>Scrape or extract data from the Service</li>
          <li>Impersonate others or misrepresent your affiliation</li>
          <li>Publish content to LinkedIn that violates LinkedIn&apos;s terms or community guidelines</li>
        </ul>

        <h2 style={h2}>5. Content Ownership</h2>
        <p style={p}>You retain all rights to the content you create using VYRAL. We do not claim ownership of your drafts, posts, ideas, or any other content you produce.</p>
        <p style={p}>By using our AI features, you grant us a limited license to process your content solely for the purpose of providing the Service.</p>

        <h2 style={h2}>6. Subscription and Billing</h2>
        <p style={p}>Paid subscriptions are billed in advance on a monthly or yearly basis. You can cancel your subscription at any time from your account settings.</p>
        <ul style={ul}>
          <li>Subscriptions auto-renew unless cancelled</li>
          <li>Refunds are handled on a case-by-case basis</li>
          <li>Price changes will be communicated 30 days in advance</li>
          <li>Downgrading may result in loss of access to premium features</li>
        </ul>

        <h2 style={h2}>7. Free Trials</h2>
        <p style={p}>Free trials provide full access to paid features for a limited time. When your trial ends, you will be automatically downgraded to the free plan unless you subscribe.</p>

        <h2 style={h2}>8. AI Features</h2>
        <p style={p}>Our AI-powered features are provided &quot;as is&quot;. While we strive for accuracy:</p>
        <ul style={ul}>
          <li>AI suggestions are recommendations, not guarantees</li>
          <li>You are responsible for reviewing and approving all AI-generated content</li>
          <li>AI features may be updated or modified at any time</li>
        </ul>

        <h2 style={h2}>9. Intellectual Property</h2>
        <p style={p}>The Service and its original content, features, and functionality are owned by VYRAL and are protected by international copyright, trademark, and other intellectual property laws.</p>

        <h2 style={h2}>10. Limitation of Liability</h2>
        <p style={p}>VYRAL shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.</p>
        <p style={p}>Our total liability shall not exceed the amount you paid to us in the 12 months preceding the claim.</p>

        <h2 style={h2}>11. Indemnification</h2>
        <p style={p}>You agree to indemnify and hold harmless VYRAL and its officers, directors, employees, and agents from any claims arising out of your use of the Service or violation of these Terms.</p>

        <h2 style={h2}>12. Termination</h2>
        <p style={p}>We reserve the right to terminate or suspend your account at any time for violations of these Terms, without prior notice or liability.</p>
        <p style={p}>You may terminate your account at any time. Upon termination, your right to use the Service will immediately cease.</p>

        <h2 style={h2}>13. LinkedIn Integration</h2>
        <p style={p}>By connecting your LinkedIn account to VYRAL, you acknowledge and agree to the following:</p>
        <ul style={ul}>
          <li>We access your LinkedIn data through LinkedIn&apos;s official API with your explicit OAuth consent</li>
          <li>We access read-only analytics data for posts you have authored</li>
          <li>We can publish content to LinkedIn on your behalf only when you explicitly initiate and confirm the action</li>
          <li>You are solely responsible for the content you choose to publish through VYRAL</li>
          <li>Scheduled posts require your prior approval and can be cancelled at any time before publishing</li>
          <li>We never automatically post, comment, like, or perform any actions without your direct approval</li>
          <li>We store your post analytics data (impressions, reactions, comments, reshares, post type, media type) to provide our analytics services</li>
          <li>You can disconnect your LinkedIn account and delete all associated data at any time via Settings</li>
          <li>Your use of LinkedIn data through VYRAL is also subject to LinkedIn&apos;s User Agreement and Privacy Policy</li>
          <li>We comply with LinkedIn&apos;s API Terms of Use and Marketing API Terms. If LinkedIn requires us to delete your data, we will do so promptly and notify you when possible.</li>
        </ul>

        <h2 style={h2}>14. Content Publishing Responsibility</h2>
        <p style={p}>When you publish content to LinkedIn through VYRAL:</p>
        <ul style={ul}>
          <li>You are solely responsible for the content you publish</li>
          <li>You must ensure your content complies with LinkedIn&apos;s terms and community guidelines</li>
          <li>VYRAL is not responsible for any consequences of content you choose to publish</li>
          <li>You should review all content before publishing, especially AI-generated content</li>
        </ul>

        <h2 style={h2}>15. Changes to Terms</h2>
        <p style={p}>We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Continued use after changes constitutes acceptance.</p>

        <h2 style={h2}>16. Governing Law</h2>
        <p style={p}>These Terms shall be governed by and construed in accordance with the laws of Denmark, without regard to its conflict of law provisions.</p>

        <h2 style={h2}>17. Dispute Resolution</h2>
        <p style={p}>Any disputes arising from these Terms shall be resolved through binding arbitration in Copenhagen, Denmark, except where prohibited by law.</p>

        <h2 style={h2}>18. Contact</h2>
        <p style={p}>For questions about these Terms, please contact us at <a href="mailto:hello@getvyral.io" style={{ color: '#a78bfa' }}>hello@getvyral.io</a></p>
      </div>
    </div>
  );
}
