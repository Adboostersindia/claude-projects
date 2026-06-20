import './FounderSection.css'

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="container">
        <div className="founder-grid">
          <div className="founder-photo-wrap">
            <img src="/herosection.png" alt="Nitin - Founder, AdBoosters" className="founder-photo" />
          </div>
          <div className="founder-content">
            <div className="founder-badge">About The Founder</div>
            <h2>Why I Created <span className="purple">Launch With Me</span></h2>
            <p>
              I created Launch With Me because I believe every business owner should understand the basics of advertising before spending money on it.
            </p>
            <p>
              Over the years, I've seen business owners waste money on the wrong campaigns, struggle with agencies they weren't happy with, and feel completely dependent on others for growth.
            </p>
            <p>
              This session is my way of helping business owners gain the knowledge and confidence to make better marketing decisions and take control of their growth.
            </p>
            <ul className="founder-highlights">
              <li><span className="check">✓</span> 5+ Years of Paid Ads Experience</li>
              <li><span className="check">✓</span> Managed 500+ Successful Campaigns</li>
              <li><span className="check">✓</span> Google &amp; Meta Ads Expert</li>
              <li><span className="check">✓</span> ROI-Focused Strategies</li>
              <li><span className="check">✓</span> Real Business Results, Not Just Theory</li>
            </ul>
            <div className="founder-name">
              <strong>Nitin</strong>
              <span>Founder, AdBoosters</span>
              <span className="founder-languages">Speaks English, Hindi &amp; Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
