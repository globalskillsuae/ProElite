const reasons = [
  { title: 'Certified Professionals', desc: 'Our team holds industry certifications and follows UAE regulatory standards.', icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, delay: 1 },
  { title: 'Fast Response Team', desc: 'Rapid deployment ensures minimal downtime for your operations.', icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, delay: 2 },
  { title: '24/7 Support', desc: 'Round-the-clock availability for emergency maintenance situations.', icon: <><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>, delay: 3 },
  { title: 'Quality Assurance', desc: 'Every project undergoes rigorous quality checks before sign-off.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, delay: 4 },
  { title: 'Experienced Engineers', desc: 'Seasoned professionals with decades of combined field experience.', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>, delay: 1 },
  { title: 'Competitive Pricing', desc: 'Premium services at market-competitive rates with no hidden costs.', icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>, delay: 2 },
  { title: 'Safety Compliance', desc: 'Strict adherence to UAE safety regulations and international standards.', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>, delay: 3 },
  { title: 'Reliable Service', desc: 'Consistent delivery with measurable outcomes and client satisfaction.', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, delay: 4 },
]

export default function WhyChooseUs() {
  return (
    <section id="why">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">The Pro Elite <span>Advantage</span></h2>
          <div className="divider center"></div>
          <p className="section-subtitle">We bring expertise, reliability, and engineering excellence to every project we undertake.</p>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className={`why-card reveal reveal-delay-${r.delay}`} key={r.title}>
              <div className="why-icon">
                <svg viewBox="0 0 24 24">{r.icon}</svg>
              </div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}