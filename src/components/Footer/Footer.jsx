export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* About column */}
        <div className="footer-about">
          <div className="nav-logo">
            <div className="nav-logo-mark">
              <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="28" x="4" y="8" fill="#E10613" rx="1.5"/>
                <rect width="8" height="36" x="18" y="0" fill="white" rx="1.5"/>
                <rect width="8" height="31" x="32" y="5" fill="#E10613" rx="1.5"/>
                <rect width="36" height="2.5" x="4" y="39" fill="#E10613" rx="1.25"/>
              </svg>
            </div>
            <div className="nav-logo-text">
              <span className="brand-main" style={{ color: 'white' }}>PRO ELITE</span>
              <span className="brand-sub" style={{ color: 'rgba(255,255,255,0.4)' }}>Middle General Maintenance</span>
            </div>
          </div>
          <p>
            UAE-based maintenance and engineering group operating under two entities:{' '}
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Pro Elite Middle General Maintenance LLC – OPC</strong> and{' '}
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Pro Elite Technical Services LLC – OPC</strong>.
            Triple ISO certified. Office: Musaffah, Abu Dhabi.
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {[
              { label: 'ISO 9001', color: 'rgba(225,6,19,0.2)', border: 'rgba(225,6,19,0.3)', text: '#ff6b75' },
              { label: 'ISO 14001', color: 'rgba(5,150,105,0.2)', border: 'rgba(5,150,105,0.3)', text: '#34d399' },
              { label: 'ISO 45001', color: 'rgba(37,99,235,0.2)', border: 'rgba(37,99,235,0.3)', text: '#60a5fa' },
            ].map(b => (
              <span key={b.label} style={{ fontSize: 10, padding: '4px 8px', background: b.color, border: `1px solid ${b.border}`, borderRadius: 100, color: b.text, fontWeight: 700 }}>{b.label}</span>
            ))}
          </div>
         {/* <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
          */}
        </div>

        {/* Services column */}
        <div>
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            {['HVAC & Air Conditioning', 'Building Maintenance', 'Technical Services', 'Industrial Services', 'Scaffolding Services', 'Facility Management'].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Quick links column */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#technical">Technical Division</a></li>
            <li><a href="#process">Work Process</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="footer-col-title">Contact Info</h4>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="footer-contact-text">Musaffah, Abu Dhabi, UAE</div>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63"/></svg>
            </div>
            <a href="tel:+971555652236" style={{ textDecoration: 'none' }}><div className="footer-contact-text">+971 555 652 236</div></a>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <a href="mailto:proelite.uae@gmail.com" style={{ textDecoration: 'none' }}><div className="footer-contact-text">proelite.uae@gmail.com</div></a>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon" style={{ background: 'rgba(37,211,102,0.15)' }}>
              <svg viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <a href="https://wa.me/971555652236" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><div className="footer-contact-text">+971 555 652 236</div></a>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(225,6,19,0.12)', border: '1px solid rgba(225,6,19,0.2)', borderRadius: 10 }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Emergency Hotline</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--red)', fontFamily: "'Poppins',sans-serif" }}>24/7 Available</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Pro Elite Middle General Maintenance LLC – OPC & Pro Elite Technical Services LLC – OPC. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Licence No.: CN-2155087 ,</a>
          <a href="#">Abu Dhabi, UAE</a>
        </div>
      </div>
    </footer>
  )
}