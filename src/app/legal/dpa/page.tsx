export const metadata = {
  title: 'Data Processing Agreement | VYRAL',
  description: 'GDPR-compliant processing terms for business users.',
};

export default function DPA() {
  const h2 = { fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 } as const;
  const p = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 } as const;
  const ul = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 } as const;

  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>Data Processing Agreement</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2025</p>

        <h2 style={h2}>1. Scope</h2>
        <p style={p}>This Data Processing Agreement (&quot;DPA&quot;) applies when VYRAL processes personal data on behalf of a customer (&quot;Controller&quot;) in connection with the provision of the VYRAL service.</p>
        <p style={p}>This DPA is incorporated into and forms part of the Terms of Service between VYRAL and the Customer.</p>

        <h2 style={h2}>2. Definitions</h2>
        <ul style={ul}>
          <li>&quot;Personal Data&quot; means any information relating to an identified or identifiable natural person</li>
          <li>&quot;Processing&quot; means any operation performed on Personal Data</li>
          <li>&quot;Sub-processor&quot; means any processor engaged by VYRAL to process Personal Data</li>
          <li>&quot;GDPR&quot; means the General Data Protection Regulation (EU) 2016/679</li>
        </ul>

        <h2 style={h2}>3. Roles and Responsibilities</h2>
        <p style={p}>The Customer is the Data Controller and determines the purposes and means of processing Personal Data.</p>
        <p style={p}>VYRAL is the Data Processor and processes Personal Data only on behalf of and under the instructions of the Customer.</p>

        <h2 style={h2}>4. Subject Matter and Duration</h2>
        <p style={p}>Processing includes: post analytics, drafts, Blueprint data, performance scoring, AI-powered content suggestions, content workflow tools, and user-initiated content publishing to LinkedIn.</p>
        <p style={p}>Processing will continue for the duration of the service agreement between VYRAL and the Customer.</p>

        <h2 style={h2}>5. Types of Personal Data</h2>
        <ul style={ul}>
          <li>Account information (name, email)</li>
          <li>LinkedIn profile data (public posts, metrics)</li>
          <li>Content created within VYRAL (drafts, ideas, blueprints)</li>
          <li>Content published to LinkedIn via VYRAL (user-initiated)</li>
          <li>Usage data and analytics</li>
          <li>OAuth tokens for LinkedIn API access (encrypted)</li>
        </ul>

        <h2 style={h2}>6. Processor Obligations</h2>
        <p style={p}>VYRAL shall:</p>
        <ul style={ul}>
          <li>Process Personal Data only on documented instructions from the Controller</li>
          <li>Ensure that persons authorized to process Personal Data are bound by confidentiality</li>
          <li>Implement appropriate technical and organizational security measures</li>
          <li>Not engage another processor without prior authorization</li>
          <li>Assist the Controller in responding to data subject requests</li>
          <li>Assist the Controller in ensuring compliance with GDPR obligations</li>
          <li>Delete or return all Personal Data upon termination</li>
          <li>Make available all information necessary to demonstrate compliance</li>
          <li>Allow for and contribute to audits conducted by the Controller</li>
          <li>Only publish content to LinkedIn when explicitly requested by the Controller/User</li>
        </ul>

        <h2 style={h2}>7. Sub-Processors</h2>
        <p style={p}>The Customer authorizes VYRAL to engage the following sub-processors:</p>
        <ul style={ul}>
          <li>Supabase – Database hosting and authentication (EU/US)</li>
          <li>Stripe – Payment processing (US, SCCs in place)</li>
          <li>AI Model Providers – Content generation (data anonymized)</li>
          <li>LinkedIn – Content publishing (when user-initiated)</li>
          <li>Support and monitoring tools – Error tracking and customer support</li>
        </ul>
        <p style={p}>VYRAL will notify the Customer of any intended changes to sub-processors, giving the Customer an opportunity to object.</p>

        <h2 style={h2}>8. Security Measures</h2>
        <p style={p}>VYRAL implements:</p>
        <ul style={ul}>
          <li>Encryption of Personal Data in transit and at rest</li>
          <li>AES-256 encryption for OAuth tokens</li>
          <li>Access controls and authentication</li>
          <li>Regular security assessments</li>
          <li>Incident response procedures</li>
          <li>Employee training on data protection</li>
          <li>Audit logging for all LinkedIn publish actions</li>
        </ul>

        <h2 style={h2}>9. Data Subject Rights</h2>
        <p style={p}>VYRAL will assist the Controller in fulfilling its obligation to respond to requests from data subjects exercising their rights under GDPR, including:</p>
        <ul style={ul}>
          <li>Right of access</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to restriction of processing</li>
          <li>Right to data portability</li>
          <li>Right to object</li>
        </ul>

        <h2 style={h2}>10. Data Breach Notification</h2>
        <p style={p}>VYRAL will notify the Controller without undue delay upon becoming aware of a Personal Data breach. The notification will include:</p>
        <ul style={ul}>
          <li>Description of the nature of the breach</li>
          <li>Categories and approximate number of data subjects affected</li>
          <li>Likely consequences of the breach</li>
          <li>Measures taken or proposed to address the breach</li>
        </ul>

        <h2 style={h2}>11. International Transfers</h2>
        <p style={p}>Where Personal Data is transferred outside the EEA, VYRAL ensures appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission.</p>

        <h2 style={h2}>12. Data Deletion</h2>
        <p style={p}>Upon termination of the service or upon request, VYRAL will delete all Personal Data within 30 days, unless retention is required by applicable law.</p>
        <p style={p}>Backups are automatically purged according to our retention schedule. We retain nothing beyond legal billing requirements.</p>

        <h2 style={h2}>13. Audit Rights</h2>
        <p style={p}>VYRAL will make available to the Controller all information necessary to demonstrate compliance with this DPA and allow for audits, including inspections, conducted by the Controller or an auditor mandated by the Controller.</p>

        <h2 style={h2}>14. Liability</h2>
        <p style={p}>Each party&apos;s liability under this DPA is subject to the limitations set forth in the Terms of Service.</p>

        <h2 style={h2}>15. Contact</h2>
        <p style={p}>For questions about this DPA, contact: <a href="mailto:johan@getvyral.io" style={{ color: '#a78bfa' }}>johan@getvyral.io</a></p>
      </div>
    </div>
  );
}
