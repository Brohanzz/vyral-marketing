import Article from "@/components/site/Article";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Cookie Policy | VYRAL",
  description: "How VYRAL uses cookies and tracking technologies.",
  path: "/legal/cookies",
});

export default function Cookies() {
  return (
    <Article label="Legal" title="Cookie Policy" meta="Last updated: November 2026">
      <h2>1. What Cookies We Use</h2>
      <p>VYRAL uses:</p>
      <ul>
        <li>Essential cookies – login, session management, security</li>
        <li>Analytics cookies (Google Analytics): which pages are visited and how people find the site. Only set after you click Accept analytics.</li>
      </ul>

      <h2>2. Analytics Cookies</h2>
      <p>We use analytics to understand how users interact with VYRAL. This helps us:</p>
      <ul>
        <li>Identify and fix bugs</li>
        <li>Improve user experience</li>
        <li>Measure feature adoption</li>
      </ul>
      <p>Google Analytics receives your IP address and a cookie identifier. See Google&apos;s privacy policy for how Google handles this data.</p>

      <h2>3. Consent</h2>
      <p>We only load non-essential cookies after you give consent. You can change your choice at any time with the Cookie settings link at the bottom of every page.</p>
      <p>Your cookie choice is saved in your browser&apos;s local storage so we don&apos;t ask again.</p>

      <h2>4. No Advertising Cookies</h2>
      <p>We do NOT use:</p>
      <ul>
        <li>Ad networks</li>
        <li>Tracking pixels for advertising</li>
        <li>Behavioral advertising</li>
        <li>Third-party marketing cookies</li>
        <li>Cross-site tracking</li>
      </ul>

      <h2>5. Third-Party Cookies</h2>
      <p>Some third-party services we use may set their own cookies:</p>
      <ul>
        <li>Stripe – for secure payment processing</li>
        <li>Supabase – for authentication</li>
        <li>Google (Google Analytics) – for website analytics</li>
      </ul>
      <p>These cookies are subject to the respective third parties&apos; privacy policies.</p>

      <h2>6. Managing Cookies</h2>
      <p>You can reject or delete cookies at any time in your browser settings. Note that disabling essential cookies may prevent you from using certain features.</p>
      <p>Common browser cookie settings:</p>
      <ul>
        <li>Chrome: Settings → Privacy and security → Cookies</li>
        <li>Firefox: Settings → Privacy &amp; Security → Cookies</li>
        <li>Safari: Preferences → Privacy → Cookies</li>
        <li>Edge: Settings → Cookies and site permissions</li>
      </ul>

      <h2>7. Cookie Retention</h2>
      <ul>
        <li>Session cookies: Deleted when you close your browser</li>
        <li>Persistent cookies: Up to 1 year, or until you delete them</li>
      </ul>

      <h2>8. Updates to This Policy</h2>
      <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

      <h2>9. Contact Us</h2>
      <p>If you have questions about our use of cookies, contact us at <a href="mailto:hello@getvyral.io">hello@getvyral.io</a></p>
    </Article>
  );
}
