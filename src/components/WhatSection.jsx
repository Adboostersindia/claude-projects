import './WhatSection.css'

const items = [
  { icon: '/sicon1.png', title: 'Account Setup', desc: 'Proper account structure for long-term success.' },
  { icon: '/sicon2.png', title: 'Audience Targeting', desc: 'Find & target your ideal customers with precision.' },
  { icon: '/sicon3.png', title: 'Campaign Structure', desc: 'Build high-converting campaigns the right way.' },
  { icon: '/sicon4.png', title: 'Ad Creation Guide', desc: 'Craft ad concepts that attract, engage & convert.' },
  { icon: '/sicon5.png', title: 'Launch Roadmap', desc: 'Step-by-step plan to launch, test & scale profitably.' },
  { icon: '/sicon6.png', title: 'Creative Strategy', desc: 'Learn what ad creatives actually convert and how to structure winning image, video, and copy angles.' },
]

export default function WhatSection() {
  return (
    <section className="what-section">
      <div className="container">
        <h2>What We'll Do In Your <span className="purple">Ad Launch Session</span></h2>
        <div className="cards-grid">
          {items.map((item) => (
            <div className="card" key={item.title}>
              <div className="card-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
