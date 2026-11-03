import Article from "@/components/site/Article";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "GDPR Compliance | VYRAL",
  description: "How VYRAL meets EU data protection requirements.",
  path: "/legal/gdpr",
});

export default function GDPR() {
  return (
    <Article label="Legal" title="GDPR Compliance" meta="Last updated: December 2025">
      <p>VYRAL is fully committed to GDPR compliance. We have implemented comprehensive measures to ensure the protection of personal data for all our users.</p>

      <h2>Our GDPR Commitments</h2>

      <h3>Data Minimization</h3>
      <p>We only collect data that is necessary for providing our service. We do not collect excessive or unnecessary personal information.</p>

      <h3>Purpose Limitation</h3>
      <p>Personal data is collected for specified, explicit, and legitimate purposes:</p>
      <ul>
        <li>Providing analytics and performance insights</li>
        <li>Enabling AI-powered content coaching</li>
        <li>Enabling user-initiated content publishing to LinkedIn</li>
        <li>Processing payments and managing subscriptions</li>
      </ul>
      <p>We do not process data in ways incompatible with those purposes.</p>

      <h3>Storage Limitation</h3>
      <p>We retain personal data only for as long as necessary. When you delete your account, your data is permanently removed.</p>

      <h3>Security</h3>
      <p>We implement:</p>
      <ul>
        <li>Encryption at rest and in transit (TLS 1.2+)</li>
        <li>Row-level security (RLS) ensuring users only access their own data</li>
        <li>Secure authentication with hashed passwords</li>
        <li>OAuth tokens stored with AES-256 encryption</li>
        <li>Regular security audits and monitoring</li>
        <li>Access controls limiting employee access to personal data</li>
      </ul>

      <h3>Transparency</h3>
      <p>Our Privacy Policy clearly explains what data we collect, how we use it, and your rights.</p>

      <h2>Data Subject Rights</h2>
      <p>We fully support all GDPR rights:</p>
      <ul>
        <li>Right of Access – Request a copy of your data</li>
        <li>Right to Rectification – Correct inaccurate data</li>
        <li>Right to Erasure – Delete your account and all data</li>
        <li>Right to Restrict Processing – Limit how we use your data</li>
        <li>Right to Data Portability – Export your data</li>
        <li>Right to Object – Object to certain processing</li>
        <li>Rights Related to Automated Decision-Making – Human review of AI decisions</li>
      </ul>

      <h2>Consent for LinkedIn Publishing</h2>
      <p>Publishing content to LinkedIn requires your explicit action. We implement a clear consent model:</p>
      <ul>
        <li>You must click &quot;Publish&quot; and confirm before any content is posted</li>
        <li>You can review and edit content before publishing</li>
        <li>Scheduled posts can be cancelled at any time before publishing</li>
        <li>You can revoke publishing permissions by disconnecting LinkedIn</li>
      </ul>

      <h2>Lawful Basis for Processing</h2>
      <p>We process personal data under the following legal bases:</p>
      <ul>
        <li>Contract – Processing necessary to provide our service (Art. 6(1)(b))</li>
        <li>Consent – Where you have given explicit consent, including LinkedIn publishing (Art. 6(1)(a))</li>
        <li>Legitimate Interest – For service improvement and security (Art. 6(1)(f))</li>
        <li>Legal Obligation – Where required by law (Art. 6(1)(c))</li>
      </ul>

      <h2>Data Processing Agreements</h2>
      <p>We maintain Data Processing Agreements (DPAs) with all our sub-processors, ensuring they meet GDPR requirements.</p>

      <h2>International Transfers</h2>
      <p>Where data is transferred outside the EEA, we use Standard Contractual Clauses (SCCs) approved by the European Commission to ensure adequate protection.</p>

      <h2>AI and Data</h2>
      <p>We do not use customer data outside VYRAL. Any data used for analytics or AI is fully anonymized and cannot be traced back to individual users. We do not sell, share, or monetize your personal data in any way.</p>

      <h2>Data Protection Officer</h2>
      <p>For GDPR-related inquiries, you can contact us at: <a href="mailto:privacy@getvyral.io">privacy@getvyral.io</a></p>

      <h2>Supervisory Authority</h2>
      <p>You have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State of your habitual residence, place of work, or place of the alleged infringement.</p>
      <p>For Denmark: Datatilsynet (Danish Data Protection Agency)</p>

      <h2>Summary</h2>
      <ul>
        <li>Full GDPR compliance</li>
        <li>Encryption at rest and in transit</li>
        <li>Row-level security</li>
        <li>Right to deletion at any time</li>
        <li>DPAs with all sub-processors</li>
        <li>No data selling or sharing</li>
        <li>Anonymized AI processing</li>
        <li>Explicit consent for LinkedIn publishing</li>
      </ul>
    </Article>
  );
}
