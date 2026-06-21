import { useState } from 'react'

const contactInfo = [
  {
    label: 'Phone', value: '+971 555 652 236', href: 'tel:+971555652236',
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v1.99z"/>
  },
  {
    label: 'Email', value: 'proelite.uae@gmail.com', href: 'mailto:proelite.uae@gmail.com',
    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>
  },
  {
    label: 'Address', value: 'Musaffah, Abu Dhabi, UAE',
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>
  },
  {
    label: 'WhatsApp', value: '+971 555 652 236', valueStyle: { color: 'var(--red)' }, href: 'https://wa.me/971555652236',
    icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" fill="white"/>
  },
]

export default function Contact() {
  const [btnState, setBtnState] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and phone number.')
      return
    }

    setBtnState('sending')

    const text =
      `Hello Pro Elite, I'd like to request a service.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || '-'}\n` +
      `*Service Needed:* ${formData.service || '-'}\n` +
      `*Message:* ${formData.message || '-'}`

    setTimeout(() => {
      setBtnState('sent')
      window.open(`https://wa.me/971555652236?text=${encodeURIComponent(text)}`, '_blank')

      setTimeout(() => {
        setBtnState('idle')
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Contact <span>Pro Elite</span></h2>
          <div className="divider center"></div>
          <p className="section-subtitle">Ready to discuss your maintenance needs? Our team is available 24/7 to assist you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            {contactInfo.map((c) => (
              <a
                className="contact-card"
                key={c.label}
                href={c.href || '#'}
                target={c.href && c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href && c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24">{c.icon}</svg>
                </div>
                <div>
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-value" style={c.valueStyle}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-form-wrap reveal reveal-delay-2">
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--black)' }}>Send Us A Message</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>We'll respond within 24 hours on business days.</p>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Your name" value={formData.name} onChange={handleChange('name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+971 XX XXX XXXX" value={formData.phone} onChange={handleChange('phone')} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={handleChange('email')} />
            </div>
            <div className="form-group">
              <label className="form-label">Service Needed</label>
              <select className="form-input" value={formData.service} onChange={handleChange('service')}>
                <option value="" disabled>Select a service</option>
                <option>HVAC & Air Conditioning</option>
                <option>Building Maintenance</option>
                <option>Technical Services</option>
                <option>Industrial Services</option>
                <option>Scaffolding Services</option>
                <option>Facility Management / AMC</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input form-textarea" placeholder="Describe your requirements..." value={formData.message} onChange={handleChange('message')}></textarea>
            </div>
            <button
              className="btn-submit"
              onClick={handleSubmit}
              disabled={btnState !== 'idle'}
              style={btnState === 'sent' ? { background: '#10B981' } : {}}
            >
              {btnState === 'idle' && 'Send Message →'}
              {btnState === 'sending' && 'Sending...'}
              {btnState === 'sent' && '✓ Redirecting to WhatsApp...'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}