const techServices = [
  'Oil & Gas Facility Support', 'Offshore Maintenance',
  'Scaffold Installation', 'Formwork Repair',
  'Industrial Technical Services', 'Engineering Assistance',
]

const stats = [
  { num: '100+', label: 'Industrial Projects', accent: true },
  { num: '10+', label: 'Years Industrial Exp.', accent: false },
  { num: '24/7', label: 'Emergency Response', accent: false },
  { num: 'UAE', label: 'Fully Licensed', accent: true },
]

export default function Technical() {
  return (
    <section id="technical">
      <div className="tech-bg"></div>
      <div className="tech-inner">
        <div className="reveal">
          <p className="tech-eyebrow">Specialized Division</p>
          <h2 className="tech-title">ProElite <span>Technical Services</span></h2>
          <div className="divider"></div>
          <p className="tech-desc">
            Specialized industrial and technical solutions for oil & gas facilities, offshore projects, industrial maintenance, scaffolding works, and engineering support services across the region.
          </p>
          <div className="tech-services">
            {techServices.map((s) => (
              <div className="tech-service" key={s}>
                <span className="tech-service-dot"></span>{s}
              </div>
            ))}
          </div>
        </div>

        <div className="tech-visual reveal reveal-delay-2">
          <div className="tech-cards-grid">
            {stats.map((s) => (
              <div className={`tech-stat-card${s.accent ? ' accent' : ''}`} key={s.label}>
                <div className="tech-stat-num">{s.num}</div>
                <div className="tech-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(225,6,19,0.1)', border: '1px solid rgba(225,6,19,0.2)', borderRadius: 14, color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--red)', display: 'block', marginBottom: 6, fontFamily: "'Poppins',sans-serif" }}>Annual Maintenance Contracts (AMC)</strong>
            Protect your assets with our comprehensive AMC packages. Scheduled preventive maintenance, priority emergency response, and dedicated account management for commercial and industrial clients.
          </div>
        </div>
      </div>
    </section>
  )
}