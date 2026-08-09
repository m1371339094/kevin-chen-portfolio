import { nav } from '../data.js'
import '../styles/nav.css'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          KC<span className="nav-logo-dot">.</span>
        </a>
        <nav className="nav-links">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn nav-cta">
          Start a Project
        </a>
      </div>
    </header>
  )
}
