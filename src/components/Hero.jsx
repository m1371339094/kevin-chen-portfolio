import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import '../styles/hero.css'

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(e) {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section id="hero" className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>
      <div className="hero-vignette" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="hero-frame" aria-hidden="true">
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />
      </div>

      <div className="hero-meta hero-meta-tl">
        <span>{profile.location.toUpperCase()}</span>
        <span>/ EST. 2026</span>
      </div>
      <div className="hero-meta hero-meta-tr">
        X: {String(coords.x).padStart(4, '0')} &nbsp; Y:{' '}
        {String(coords.y).padStart(4, '0')}
      </div>

      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow">
          {profile.roles.join('  —  ')}
        </p>
        <h1 className="hero-title">
          KEVIN<br />CHEN
        </h1>
        <p className="hero-sub">
          Brand systems and visual identities, extended with AI-driven
          design tooling — built for teams who want craft that scales.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View Selected Work
          </a>
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-meta hero-meta-bl">
        <span className="hero-scroll-cue">
          <span className="hero-scroll-line" />
          SCROLL
        </span>
      </div>
      <div className="hero-meta hero-meta-br">01 / 06</div>
    </section>
  )
}
