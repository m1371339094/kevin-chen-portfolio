import { motion } from 'motion/react'
import { projects } from '../data.js'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container projects-head">
        <motion.h2
          className="projects-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Systems and applications, built end to end.
        </motion.h2>
      </div>

      <div className="container projects-list">
        {projects.map((p, i) => (
          <motion.a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className={`project-card tone-${p.tone}`}
            key={p.index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ borderColor: 'rgba(255,255,255,0.18)' }}
          >
            <div className="project-media">
              <div className="project-media-inner" />
            </div>
            <div className="project-info">
              <div className="project-info-top">
                <span className="project-year">{p.year}</span>
              </div>
              <motion.h3
                className="project-title"
                whileHover={{ color: 'var(--gold)' }}
              >
                {p.title}
              </motion.h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-description">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <motion.span
                className="project-repo-link"
                whileHover={{ color: 'var(--gold)' }}
              >
                View on GitHub
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
