import { motion } from 'motion/react'
import { strengths } from '../data.js'
import '../styles/strengths.css'

export default function Strengths() {
  return (
    <section id="strengths" className="strengths">
      <div className="container strengths-head">
        <motion.h2
          className="strengths-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Where the value gets added.
        </motion.h2>
      </div>

      <div className="container strengths-grid">
        {strengths.map((s, i) => (
          <motion.div
            className="strength-card"
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ background: 'var(--bg-panel)' }}
          >
            <h3 className="strength-title">{s.title}</h3>
            <p className="strength-description">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
