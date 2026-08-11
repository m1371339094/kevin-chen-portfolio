import { motion } from 'motion/react'
import { nav } from '../data.js'
import '../styles/nav.css'

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          KC<span className="nav-logo-dot">.</span>
        </a>
        <nav className="nav-links">
          {nav.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#ececea' }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <motion.a
          href="#contact"
          className="btn nav-cta"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.96, y: 1 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.header>
  )
}
