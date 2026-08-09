import { strengths } from '../data.js'
import '../styles/strengths.css'

export default function Strengths() {
  return (
    <section id="strengths" className="strengths">
      <div className="container strengths-head">
        <p className="eyebrow">Capabilities — 05 / 06</p>
        <h2 className="strengths-heading">Where the value gets added.</h2>
      </div>

      <div className="container strengths-grid">
        {strengths.map((s, i) => (
          <div className="strength-card" key={s.title}>
            <span className="strength-index">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="strength-title">{s.title}</h3>
            <p className="strength-description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
