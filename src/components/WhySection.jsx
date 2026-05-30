import './WhySection.css'

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <div className="why-box">
          <h3>Why Work With Me?</h3>
          <ul>
            <li><span className="check">✓</span> 5+ Years of Paid Ads Experience</li>
            <li><span className="check">✓</span> Managed 100+ Successful Campaigns</li>
            <li><span className="check">✓</span> Google &amp; Meta Ads Expert</li>
            <li><span className="check">✓</span> ROI-Focused Strategies</li>
            <li><span className="check">✓</span> Real Business Results, Not Just Theory</li>
          </ul>
        </div>
        <div className="center-cta">
          <div className="target-icon">🎯</div>
          <h3>Launch Today.<br /><span className="purple">Grow Tomorrow.</span></h3>
        </div>
        <div className="walk-box">
          <h3>What You'll Walk Away With</h3>
          <ul>
            <li><span className="check">✓</span> A Professional Ad Campaign Setup</li>
            <li><span className="check">✓</span> Clear Targeting &amp; Offer Strategy</li>
            <li><span className="check">✓</span> High-Converting Ad Structure</li>
            <li><span className="check">✓</span> Tracking &amp; Measurement Setup</li>
            <li><span className="check">✓</span> A Plan To Get Leads &amp; Sales Consistently</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
