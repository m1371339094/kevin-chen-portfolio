import { profile } from '../data.js'
import '../styles/profile.css'

export default function Profile() {
  return (
    <section id="profile" className="profile">
      <div className="container profile-grid">
        <div className="profile-media">
          <div className="profile-image">
            {/* Swap for a real photo: <img src="/portrait.jpg" alt="Kevin Chen" /> */}
            <div className="profile-image-placeholder">
              <span>KC</span>
            </div>
            <span className="corner corner-tl" />
            <span className="corner corner-br" />
          </div>
          <p className="profile-caption">PORTRAIT — NYC / 2026</p>
        </div>

        <div className="profile-content">
          <div className="profile-head">
            <p className="eyebrow">Profile — 02 / 06</p>
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
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container profile-stats">
        {profile.stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
