import { motion } from 'motion/react'
import { profile } from '../data.js'
import '../styles/profile.css'

export default function Profile() {
  return (
    <section id="profile" className="profile">
      <div className="container profile-grid">
        <motion.div
          className="profile-media"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="profile-image">
            <img src={import.meta.env.BASE_URL + 'me.jpg'} alt="Kevin Chen" />
          </div>
        </motion.div>

        <motion.div
          className="profile-content"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="profile-head">
            <h2 className="profile-heading">
              Design fluent in both craft and computation.
            </h2>
          </div>

          {profile.bio.map((p, i) => (
            <p className="profile-bio" key={i}>
              {p}
            </p>
          ))}

          <div className="profile-contact">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a className="contact-value" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <a className="contact-value" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">{profile.location}</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Status</span>
              <span className="contact-value">{profile.availability}</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Elsewhere</span>
              <span className="contact-value contact-socials">
                {profile.socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ color: 'var(--gold)' }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
