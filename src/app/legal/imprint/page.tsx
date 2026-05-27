export const metadata = {
  title: 'Imprint | VYRAL',
  description: 'Company information for VYRAL.',
};

export default function Imprint() {
  const h2 = { fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 24, color: '#fff', marginTop: 48, marginBottom: 16 } as const;
  const p = { fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 8 } as const;

  return (
    <div style={{ background: '#080510', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '128px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 44, color: '#fff', marginBottom: 8 }}>Imprint</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 64 }}>Last updated: December 2024</p>

        <h2 style={h2}>Company Information</h2>
        <p style={p}>Company: VYRAL</p>
        <p style={p}>Business Type: Sole Proprietorship (Enkeltmandsvirksomhed)</p>
        <p style={p}>CVR: 45239411</p>
        <p style={p}>Address: Krusågade 35, 5. tv, 1719 København V, Denmark</p>
        <p style={p}>Email: <a href="mailto:johan@getvyral.io" style={{ color: '#a78bfa' }}>johan@getvyral.io</a></p>
        <p style={p}>Website: <a href="https://www.getvyral.io" style={{ color: '#a78bfa' }}>www.getvyral.io</a></p>

        <h2 style={h2}>Management</h2>
        <p style={p}>Owner: Johan Christopher Mortensen</p>

        <h2 style={h2}>EU Representative</h2>
        <p style={p}>As VYRAL is established within the European Union, no separate EU representative is required under GDPR Article 27.</p>

        <h2 style={h2}>Regulatory Information</h2>
        <p style={p}>VYRAL is a sole proprietorship registered in Denmark, operating in compliance with Danish and European Union regulations.</p>

        <h2 style={h2}>Dispute Resolution</h2>
        <p style={p}>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" style={{ color: '#a78bfa' }} target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
        <p style={p}>We are not obligated to participate in dispute resolution proceedings before a consumer arbitration board, but we are willing to engage in direct communication to resolve any issues.</p>

        <h2 style={h2}>Contact</h2>
        <p style={p}>For any inquiries, please contact us at: <a href="mailto:johan@getvyral.io" style={{ color: '#a78bfa' }}>johan@getvyral.io</a></p>
      </div>
    </div>
  );
}
