const counters = [
  { count: 100, label: 'Completed Projects', suffix: '+' },
  { count: 100, label: 'Satisfied Clients', suffix: '+' },
  { count: 2016, label: 'EST.' },
  { count: 10, label: 'Years Experience', suffix: '+' },
]

import aboutVideo from '../../assets/about.mov'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <div style={{ position: 'relative' }}>
              <div className="about-img-wrap">
                <video
                  className="about-video"
                  src={aboutVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="about-badge-float tl">
                <div className="about-badge-num">10+</div>
                <div className="about-badge-label">Years in UAE</div>
              </div>
              <div className="about-badge-float br">
                <div className="about-badge-num">UAE</div>
                <div className="about-badge-label">Licensed & Certified</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <span className="section-eyebrow">About Pro Elite</span>
            <h2 className="section-title">Trusted Maintenance<br />Partner Across <span>The UAE</span></h2>
            <div className="divider"></div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              PRO ELITE MIDDLE GENERAL MAINTENANCE L.L.C – O.P.C is a trusted UAE maintenance and technical services company specializing in HVAC systems, building maintenance, facility support, industrial services, and engineering solutions. Registered at Office No. 16, Plot No. 190, M-37, Musaffah, Abu Dhabi.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Our mission is to deliver reliable, efficient, and high-quality services that ensure operational excellence for residential, commercial, and industrial clients. We hold triple ISO certification — 9001, 14001, and 45001 — a commitment to quality, environment, and safety that few maintenance companies in the UAE can match.
            </p>
            <div className="about-counters">
              {counters.map((c) => (
                <div className="counter-card" key={c.label}>
                  <div className="counter-num" data-count={c.count}><span>0</span>{c.suffix || ''}</div>
                  <div className="counter-label">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}