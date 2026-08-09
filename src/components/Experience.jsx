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
        <p className="eyebrow">Experience — 03 / 06</p>
        <h2 className="experience-heading">Track record.</h2>
      </div>

      <div className="container experience-grid">
        <div className="experience-timeline">
          {experience.map((role) => (
            <div className="role-card" key={role.index}>
              <div className="role-top">
                <span className="section-index">R.{role.index}</span>
                <span className="role-dates">{role.dates}</span>
              </div>
              <h3 className="role-title">{role.role}</h3>
              <p className="role-org">
                {role.org} — {role.location}
              </p>
              <ul className="role-bullets">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
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
                  {e.location} — {e.dates}
                </p>
              </div>
            ))}
          </div>

          <div className="side-block">
            <span className="side-label">Certifications</span>
            {certifications.map((c) => (
              <a
                className="side-cert"
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                <p className="side-cert-name">{c.name}</p>
                <p className="side-cert-meta">
                  {c.issuer} — {c.date}
                </p>
              </a>
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
