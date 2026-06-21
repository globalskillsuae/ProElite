export default function Companies() {
  return (
    <section className="companies-section" id="companies">
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(225,6,19,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(225,6,19,0.04) 1px,transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
          <span style={{ fontSize: 11, fontWeight: 700, color: '#E10613', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: "'Poppins',sans-serif" }}>Our Companies</span>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, color: 'white', marginTop: '0.75rem', lineHeight: 1.2 }}>
            Two Specialized <span style={{ color: '#E10613' }}>Companies</span>, One Vision
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem', maxWidth: 550, marginLeft: 'auto', marginRight: 'auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Under the Pro Elite brand, we operate two dedicated legal entities to serve our diverse client base with focused expertise.
          </p>
        </div>

        <div className="companies-grid">
          {/* Company 1 */}
          <div className="reveal reveal-delay-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#E10613,#ff4d57)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.5rem' }}>
              <div style={{ width: 52, height: 52, background: 'rgba(225,6,19,0.15)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Company 01</div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.15rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginTop: 3 }}>Pro Elite Middle<br />General Maintenance</h3>
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>L.L.C – O.P.C</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Our flagship entity handling all building maintenance, HVAC, facility management, and general technical services across the UAE's residential and commercial sectors.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
              {['HVAC & Air Conditioning', 'Buildings Maintenance', 'Facility Management & AMC', 'Plumbing & Electrical Works'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ width: 6, height: 6, background: '#E10613', borderRadius: '50%', flexShrink: 0 }}></span>{item}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, padding: '4px 10px', background: 'rgba(225,6,19,0.15)', border: '1px solid rgba(225,6,19,0.3)', borderRadius: 100, color: '#ff6b75', fontWeight: 600 }}>ISO 9001:2015</span>
              <span style={{ fontSize: 11, padding: '4px 10px', background: 'rgba(5,150,105,0.15)', border: '1px solid rgba(5,150,105,0.3)', borderRadius: 100, color: '#34d399', fontWeight: 600 }}>ISO 14001:2015</span>
              <span style={{ fontSize: 11, padding: '4px 10px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 100, color: '#60a5fa', fontWeight: 600 }}>ISO 45001:2018</span>
            </div>
          </div>

          {/* Company 2 */}
          <div className="reveal reveal-delay-2" style={{ background: 'rgba(225,6,19,0.06)', border: '1px solid rgba(225,6,19,0.2)', borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#E10613,#ff4d57)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.5rem' }}>
              <div style={{ width: 52, height: 52, background: 'rgba(225,6,19,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="1.8">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Company 02</div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.15rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginTop: 3 }}>Pro Elite Technical<br />Services</h3>
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>L.L.C – O.P.C</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Our specialized industrial arm providing oil & gas facility services, offshore maintenance, scaffold installation, and advanced engineering support for demanding industrial environments.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
              {['Offshore & Onshore Oil & Gas', 'Scaffold Installation Works', 'Scaffolding & Formwork Repairing', 'Industrial Engineering Support'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ width: 6, height: 6, background: '#E10613', borderRadius: '50%', flexShrink: 0 }}></span>{item}
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(225,6,19,0.12)', border: '1px solid rgba(225,6,19,0.25)', borderRadius: 10, fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              <strong style={{ color: '#ff6b75', display: 'block', marginBottom: 4 }}>Specialized Industrial Division</strong>
              Equipped for high-complexity projects in oil & gas, petrochemical, and offshore sectors with full HSE compliance.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}