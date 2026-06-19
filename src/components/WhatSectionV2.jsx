import './WhatSectionV2.css'

const scratch = [
  'Choose the right platform',
  'Understand campaign objectives',
  'Define your audience',
  'Set up your account correctly',
  'Learn how ads actually work',
]

const existing = [
  'Audit existing setup',
  "Find what's not working",
  'Improve targeting',
  'Improve lead quality',
  'Create a growth plan',
]

export default function WhatSectionV2() {
  return (
    <section className="what-v2-section">
      <div className="container">
        <h2>What Happens During <span className="purple">The Session</span></h2>
        <div className="what-v2-grid">
          <div className="what-v2-card">
            <div className="what-v2-tag">If You're Starting From Scratch</div>
            <ul>
              {scratch.map((item) => (
                <li key={item}><span className="what-check">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="what-v2-card what-v2-card--right">
            <div className="what-v2-tag">If You Already Have Campaigns Running</div>
            <ul>
              {existing.map((item) => (
                <li key={item}><span className="what-check">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
