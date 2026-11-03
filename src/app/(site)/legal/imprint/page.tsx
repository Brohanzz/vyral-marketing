import Article from "@/components/site/Article";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Imprint | VYRAL",
  description: "Company information for VYRAL.",
  path: "/legal/imprint",
});

export default function Imprint() {
  return (
    <Article label="Legal" title="Imprint" meta="Last updated: December 2024">
      <h2>Company Information</h2>
      <p>Company: VYRAL</p>
      <p>Business Type: Sole Proprietorship (Enkeltmandsvirksomhed)</p>
      <p>CVR: 45239411</p>
      <p>Address: Krusågade 35, 5. tv, 1719 København V, Denmark</p>
      <p>Email: <a href="mailto:hello@getvyral.io">hello@getvyral.io</a></p>
      <p>Website: <a href="https://www.getvyral.io">www.getvyral.io</a></p>

      <h2>Management</h2>
      <p>Owner: Johan Christopher Mortensen</p>

      <h2>EU Representative</h2>
      <p>As VYRAL is established within the European Union, no separate EU representative is required under GDPR Article 27.</p>

      <h2>Regulatory Information</h2>
      <p>VYRAL is a sole proprietorship registered in Denmark, operating in compliance with Danish and European Union regulations.</p>

      <h2>Dispute Resolution</h2>
      <p>We are not obligated to participate in dispute resolution proceedings before a consumer arbitration board, but we are willing to engage in direct communication to resolve any issues.</p>

      <h2>Contact</h2>
      <p>For any inquiries, please contact us at: <a href="mailto:hello@getvyral.io">hello@getvyral.io</a></p>
    </Article>
  );
}
