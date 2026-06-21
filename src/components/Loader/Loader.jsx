import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('loader')?.classList.add('hidden')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader">
      <div style={{ width: 80, height: 80, marginBottom: '1.5rem' }}>
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="12" height="50" x="10" y="15" fill="#E10613" rx="2"/>
          <rect width="12" height="65" x="34" y="0" fill="white" rx="2"/>
          <rect width="12" height="55" x="58" y="10" fill="#E10613" rx="2"/>
          <rect width="60" height="3" x="10" y="72" fill="#E10613" rx="1.5"/>
        </svg>
      </div>
      <div className="loader-bar"><div className="loader-fill"></div></div>
      <p className="loader-text">Pro Elite UAE</p>
    </div>
  )
}
