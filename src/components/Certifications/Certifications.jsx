const certs = [
  {
    iso: 'ISO 9001', year: ':2015', title: 'Quality Management System',
    desc: 'Certified for maintaining the highest standards of quality in service delivery, processes, and customer satisfaction.',
    no: 'VSQC-64261010', issued: '03-03-2026', valid: '02-03-2029',
    color: 'linear-gradient(135deg,#E10613,#c0020e)',
  },
  {
    iso: 'ISO 14001', year: ':2015', title: 'Environmental Management System',
    desc: 'Committed to environmentally responsible operations, waste management, and sustainable maintenance practices.',
    no: 'VSQC-64261011', issued: '03-03-2026', valid: '02-03-2029',
    color: 'linear-gradient(135deg,#059669,#047857)',
  },
  {
    iso: 'ISO 45001', year: ':2018', title: 'Occupational Health & Safety',
    desc: 'Full compliance with international health and safety standards, protecting our workforce and clients on every project.',
    no: 'VSQC-64261012', issued: '03-03-2026', valid: '02-03-2029',
    color: 'linear-gradient(135deg,#2563EB,#1d4ed8)',
  },
]

export default function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">Verified Credentials</span>
          <h2 className="section-title">Our ISO <span>Certifications</span></h2>
          <div className="divider center"></div>
          <p className="section-subtitle">Independently assessed and certified by Veritas System Quality Certificates LLC, accredited by the United Accreditation Foundation (UAF), USA.</p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div className={`cert-card reveal reveal-delay-${i + 1}`} key={cert.iso}>
              <div style={{ background: cert.color, padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px,transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.6rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{cert.iso}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4, fontWeight: 600 }}>{cert.year}</div>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1rem', fontWeight: 800, color: 'var(--black)', marginBottom: '0.5rem' }}>{cert.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1rem' }}>{cert.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '1rem', background: 'var(--gray)', borderRadius: 10, fontSize: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Certificate No.</span><strong style={{ color: 'var(--black)' }}>{cert.no}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Issued</span><strong style={{ color: 'var(--black)' }}>{cert.issued}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Valid Until</span><strong style={{ color: '#059669' }}>{cert.valid}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: '2rem', padding: '1.5rem 2rem', background: 'white', borderRadius: 14, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, background: 'rgba(225,6,19,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, color: 'var(--black)' }}>Issued by Veritas System Quality Certificates LLC</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Accredited by United Accreditation Foundation (UAF), Virginia Beach, USA</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Verify at <strong style={{ color: 'var(--red)' }}>www.veritasassurance.com</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}