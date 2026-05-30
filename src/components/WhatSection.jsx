import './WhatSection.css'

const items = [
  { icon: '⚙️', title: 'Account Setup', desc: 'Proper account structure for long-term success.' },
  { icon: '👥', title: 'Audience Targeting', desc: 'Find & target your ideal customers with precision.' },
  { icon: '🏗️', title: 'Campaign Structure', desc: 'Build high-converting campaigns the right way.' },
  { icon: '✏️', title: 'Ad Creation Guide', desc: 'Craft ad concepts that attract, engage & convert.' },
  { icon: '🚀', title: 'Launch Roadmap', desc: 'Step-by-step plan to launch, test & scale profitably.' },
]

export default function WhatSection() {
  return (
    <section className="what-section">
      <div className="container">
        <h2>What We'll Do In Your <span className="purple">Ad Launch Session</span></h2>
        <div className="cards-grid">
          {items.map((item) => (
            <div className="card" key={item.title}>
              <div className="card-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
