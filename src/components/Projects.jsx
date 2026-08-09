import { projects } from '../data.js'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container projects-head">
        <p className="eyebrow">Selected Work — 04 / 06</p>
        <h2 className="projects-heading">
          Systems and applications, built end to end.
        </h2>
      </div>

      <div className="container projects-list">
        {projects.map((p) => (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={p.index}
          >
            <div className={`project-media tone-${p.tone}`}>
              {/* Swap for real project imagery: <img src="..." alt={p.title} /> */}
              <span className="project-media-index">{p.index}</span>
            </div>
            <div className="project-info">
              <div className="project-info-top">
                <span className="section-index">P.{p.index}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-description">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="project-repo-link">View on GitHub ↗</span>
            </div>
            <span className="project-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
