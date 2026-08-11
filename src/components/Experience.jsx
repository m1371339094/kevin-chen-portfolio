import { motion } from 'motion/react'
import {
  education,
  certifications,
  skills,
  experience,
} from '../data.js'
import '../styles/experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container experience-head">
        <motion.h2
          className="experience-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Track record.
        </motion.h2>
      </div>

      <div className="container experience-grid">
        <div className="experience-timeline">
          {experience.map((role, i) => (
            <motion.div
              className="role-card"
              key={role.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="role-top">
                <span className="role-dates">{role.dates}</span>
              </div>
              <h3 className="role-title">{role.role}</h3>
              <p className="role-org">
                {role.org}, {role.location}
              </p>
              <ul className="role-bullets">
                {role.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <aside className="experience-side">
          <div className="side-block">
            <span className="side-label">Education</span>
            {education.map((e) => (
              <div className="side-item" key={e.org}>
                <p className="side-item-title">{e.role}</p>
                <p className="side-item-sub">{e.org}</p>
                <p className="side-item-meta">
                  {e.location}, {e.dates}
                </p>
              </div>
            ))}
          </div>

          <div className="side-block">
            <span className="side-label">Certifications</span>
            {certifications.map((c) => (
              <motion.a
                className="side-cert"
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ color: 'var(--gold)' }}
              >
                <p className="side-cert-name">{c.name}</p>
                <p className="side-cert-meta">
                  {c.issuer}, {c.date}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="side-block">
            <span className="side-label">Skills</span>
            {Object.entries(skills).map(([k, v]) => (
              <div className="side-item" key={k}>
                <p className="side-item-title">{k}</p>
                <p className="side-item-meta">{v}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
