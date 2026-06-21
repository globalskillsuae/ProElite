import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = `${scrolled ? 'scrolled' : 'on-dark'}`

  return (
    <>
      <nav id="navbar" className={navClass}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-mark">
              <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="28" x="4" y="8" fill="#E10613" rx="1.5"/>
                <rect width="8" height="36" x="18" y="0" fill={scrolled ? '#0A0A0A' : 'white'} rx="1.5"/>
                <rect width="8" height="31" x="32" y="5" fill="#E10613" rx="1.5"/>
                <rect width="36" height="2.5" x="4" y="39" fill="#E10613" rx="1.25"/>
              </svg>
            </div>
            <div className="nav-logo-text">
              <span className="brand-main">PRO ELITE</span>
              <span className="brand-sub">Middle General Maintenance</span>
            </div>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#technical">Technical</a>
            <a href="#industries">Industries</a>
            <a href="#contact" className="nav-cta">Get A Quote</a>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#technical" onClick={() => setMenuOpen(false)}>Technical</a>
        <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
        <a href="#contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Get A Quote</a>
      </div>
    </>
  )
}