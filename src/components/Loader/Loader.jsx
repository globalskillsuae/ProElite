import { useEffect } from 'react'
import logo from '../../assets/logo/main-logo.png'

export default function Loader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('loader')?.classList.add('hidden')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader">
      <div className="loader-logo-badge">
        <img src={logo} alt="Pro Elite logo" />
      </div>
      <div className="loader-bar"><div className="loader-fill"></div></div>
      <p className="loader-text">Pro Elite UAE</p>
    </div>
  )
}