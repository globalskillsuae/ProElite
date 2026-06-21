import { useEffect } from 'react'
import Home from './pages/Home'

export default function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // Animated counters
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count || el.textContent)
      const duration = 2000
      const start = performance.now()
      const update = (time) => {
        const elapsed = time - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(eased * target)
        const span = el.querySelector('span')
        if (span) span.textContent = current
        else el.textContent = current
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-count], .counter-num').forEach((el) =>
      counterObserver.observe(el)
    )

    return () => {
      observer.disconnect()
      counterObserver.disconnect()
    }
  }, [])

  return <Home />
}
