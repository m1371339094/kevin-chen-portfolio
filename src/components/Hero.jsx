import { motion } from 'motion/react'
import { profile } from '../data.js'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={import.meta.env.BASE_URL + 'hero-reel.mp4'} type="video/mp4" />
      </video>
      <div className="hero-vignette" />

      <div className="hero-content container">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {profile.roles.join(' / ')}
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          KEVIN<br />CHEN
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          Brand systems and visual identities, extended with AI-driven
          design tooling, built for teams who want craft that scales.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
        >
          <motion.a
            href="#work"
            className="btn btn-primary"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96, y: 1 }}
          >
            View Selected Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn"
            whileHover={{ scale: 0.98, borderColor: 'var(--gold)', color: 'var(--gold)' }}
            whileTap={{ scale: 0.96, y: 1 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
