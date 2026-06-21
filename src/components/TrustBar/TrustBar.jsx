const certs = [
  { label: 'ISO 9001:2015', sub: 'Quality Management', color: '#E10613' },
  { label: 'ISO 14001:2015', sub: 'Environmental Management', color: '#059669' },
  { label: 'ISO 45001:2018', sub: 'Health & Safety', color: '#2563EB' },
]

export default function TrustBar() {
  return (
    <div id="trust-bar" className="trust-bar">
      <div className="trust-inner">
        <div className="trust-label">
          <div style={{ width: 10, height: 10, background: '#E10613', borderRadius: '50%', flexShrink: 0 }}></div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: "'Poppins',sans-serif" }}>
            Certified & Trusted
          </span>
        </div>

        <div className="trust-content">
          <div className="trust-certs">
            {certs.map((cert) => (
              <div className="trust-cert-item" key={cert.label}>
                <div style={{ width: 36, height: 36, background: cert.color, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#0A0A0A', fontFamily: "'Poppins',sans-serif", lineHeight: 1 }}>{cert.label}</div>
                  <div style={{ fontSize: 10, color: '#6B7280', lineHeight: 1, marginTop: 2 }}>{cert.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="trust-divider"></div>

          <div className="trust-meta">
            <div className="trust-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>
                Cert. Valid Until <strong style={{ color: '#0A0A0A' }}>Mar 2029</strong>
              </span>
            </div>
            <div className="trust-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>
                Office: <strong style={{ color: '#0A0A0A' }}>Musaffah, Abu Dhabi, UAE</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}