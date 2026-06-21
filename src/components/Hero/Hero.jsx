export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            UAE Certified Maintenance Company
          </div>
          <h1 className="hero-title">
            Excellence In<br />Maintenance &<br /><span>Technical Services</span>
          </h1>
          <p className="hero-subtitle">
            Professional HVAC maintenance, facility management, building maintenance, industrial support services, and engineering solutions across the UAE.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.93v1.99z"/>
              </svg>
              Request A Quote
            </a>
            <a href="#services" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Our Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num hero-stat-num-sm hero-stat-license">2016</div>
              <div className="hero-stat-label">EST.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num hero-stat-num-sm hero-stat-license">CN-2155087</div>
              <div className="hero-stat-label">Licence No.</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-float-badge hero-float-badge-1">
            <div className="float-icon red">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E10613" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <div className="float-text-main">24/7 Support</div>
              <div className="float-text-sub">Always Available</div>
            </div>
          </div>

          <div className="hero-card-main">
            <div className="hero-card-label">Our Core Services</div>
            <div className="hero-service-list">
              {[
                { label: 'HVAC & Air Conditioning', icon: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>, icon2: <polyline points="9 22 9 12 15 12 15 22"/> },
                { label: 'Building Maintenance', icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></> },
                { label: 'Industrial Services', icon: <><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></> },
                { label: 'Facility Management', icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></> },
              ].map((item) => (
                <div className="hero-service-item" key={item.label}>
                  <div className="hero-service-icon">
                    <svg viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <span className="hero-service-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-float-badge hero-float-badge-2">
            <div className="float-icon green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div>
              <div className="float-text-main">ISO Certified</div>
              <div className="float-text-sub">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}