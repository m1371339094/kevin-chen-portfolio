import { profile } from '../data.js'
import '../styles/contact.css'

export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <section id="contact" className="contact">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container contact-inner">
        <p className="eyebrow">Contact — 06 / 06</p>
        <h2 className="contact-heading">
          Let's build
          <br />
          something.
        </h2>

        <a href={`mailto:${profile.email}`} className="contact-email">
          {profile.email}
        </a>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Say Hello
          </a>
          <div className="contact-socials-row">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container contact-footer">
        <span>© {year} {profile.name.toUpperCase()} — DESIGNED & BUILT WITH CARE</span>
        <span>{profile.location.toUpperCase()}</span>
      </div>
    </section>
  )
}
