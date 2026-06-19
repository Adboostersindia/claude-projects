import './FounderSection.css'

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="container">
        <div className="founder-grid">
          <div className="founder-photo-wrap">
            <div className="founder-photo-placeholder">
              <span>Add your photo here</span>
            </div>
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
            <div className="founder-name">
              <strong>Nitin</strong>
              <span>Founder, AdBoosters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
