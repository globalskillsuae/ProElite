import { services } from '../../data/services'

const icons = {
  hvac: <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>,
  building: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  tool: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>,
  industrial: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  scaffold: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
  facility: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
}

const delays = [1, 2, 3, 1, 2, 3]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Our <span>Professional Services</span></h2>
          <div className="divider center"></div>
          <p className="section-subtitle">Comprehensive maintenance and technical services delivered by certified professionals across the UAE.</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className={`service-card reveal reveal-delay-${delays[i]}`} key={service.id}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24">{icons[service.icon]}</svg>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
