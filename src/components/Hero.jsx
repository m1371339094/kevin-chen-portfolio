import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'
import '../styles/hero.css'

// Generative "schematic" background used in place of a literal video file.
// Swap the <canvas> below for a real <video autoPlay loop muted playsInline>
// element (see the commented block) once you have footage to use.
function useSchematicField(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let w, h
    let nodes = []

    const NODE_COUNT = 46

    function resize() {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }

    function init() {
      resize()
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, w, h)
      const maxDist = 200 * window.devicePixelRatio

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < maxDist) {
            ctx.strokeStyle = `rgba(201, 162, 75, ${0.09 * (1 - d / maxDist)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = 'rgba(236, 236, 234, 0.35)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4 * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    init()
    step()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}

export default function Hero() {
  const canvasRef = useRef(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  useSchematicField(canvasRef)

  useEffect(() => {
    function handleMove(e) {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      {/*
        Real footage swap-in:
        <video className="hero-video" autoPlay loop muted playsInline poster="/hero-poster.jpg">
          <source src="/hero-reel.mp4" type="video/mp4" />
        </video>
      */}
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
