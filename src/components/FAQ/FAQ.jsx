import { useState } from 'react'

const faqs = [
  { q: 'How often should HVAC systems be serviced?', a: 'We recommend servicing HVAC systems at least every 3–6 months in the UAE climate. Our AMC packages include scheduled maintenance to ensure optimal performance and prevent costly breakdowns.' },
  { q: 'What is included in an AMC contract?', a: 'Our Annual Maintenance Contracts cover scheduled preventive maintenance visits, priority emergency response, spare parts (as agreed), detailed service reports, and a dedicated account manager.' },
  { q: 'Do you serve clients outside Dubai?', a: 'Yes. We operate across the UAE including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and beyond. Our team is mobile and equipped for regional deployments.' },
  { q: 'Are your technicians certified?', a: 'All our technicians are certified professionals with UAE trade licenses and relevant technical certifications. We follow strict hiring, training, and quality standards for every team member.' },
  { q: 'How quickly can you respond to emergencies?', a: 'We offer 24/7 emergency response. For priority AMC clients, we aim to respond within 2–4 hours. Our dispatch team is always on call to mobilize the right technicians quickly.' },
  { q: 'Do you handle industrial and oil & gas facilities?', a: 'Yes. Our ProElite Technical Services division specializes in industrial maintenance, scaffolding, and oil & gas facility support. We comply with all relevant safety and industry standards for these environments.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <div className="divider center"></div>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div className={`faq-item reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}${openIndex === i ? ' open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.q}
                <div className="faq-arrow">
                  <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}