import { motion } from 'motion/react'
import { profile } from '../data.js'
import '../styles/contact.css'

export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Let&apos;s build
          <br />
          something.
        </motion.h2>

        <motion.a
          href={`mailto:${profile.email}`}
          className="contact-email"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          whileHover={{ borderColor: 'var(--gold)' }}
        >
          {profile.email}
        </motion.a>

        <motion.div
          className="contact-actions"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <motion.a
            href={`mailto:${profile.email}`}
            className="btn btn-primary"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96, y: 1 }}
          >
            Get in Touch
          </motion.a>
          <div className="contact-socials-row">
            {profile.socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ color: 'var(--text)' }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container contact-footer">
        <span>© {year} {profile.name.toUpperCase()} - DESIGNED & BUILT WITH CARE</span>
      </div>
    </section>
  )
}
