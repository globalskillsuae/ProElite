import { useEffect, useState } from 'react'
import logo from '../../assets/logo/main-logo.png'

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
              <img src={logo} alt="Pro Elite logo" />
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