const industries = [
  { name: 'Residential', desc: 'Villas & Apartments', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>, delay: 1 },
  { name: 'Commercial', desc: 'Offices & Malls', icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>, delay: 2 },
  { name: 'Hospitality', desc: 'Hotels & Resorts', icon: <><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></>, delay: 3 },
  { name: 'Industrial', desc: 'Factories & Plants', icon: <><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M8 3v18"/></>, delay: 4 },
  { name: 'Oil & Gas', desc: 'Offshore & Onshore', icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>, delay: 1 },
  { name: 'Warehouses', desc: 'Logistics & Storage', icon: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>, delay: 2 },
  { name: 'Retail', desc: 'Shops & Showrooms', icon: <><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></>, delay: 3 },
  { name: 'Government', desc: 'Public Facilities', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, delay: 4 },
]

export default function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">Who We Serve</span>
          <h2 className="section-title">Industries <span>We Serve</span></h2>
          <div className="divider center"></div>
        </div>
        <div className="industries-grid">
          {industries.map((ind) => (
            <div className={`industry-card reveal reveal-delay-${ind.delay}`} key={ind.name}>
              <div className="industry-icon">
                <svg viewBox="0 0 24 24">{ind.icon}</svg>
              </div>
              <div>
                <div className="industry-name">{ind.name}</div>
                <div className="industry-desc">{ind.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}