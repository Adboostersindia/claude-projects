import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="hero-left">
          <div className="badge">✦ 1:1 DONE-WITH-YOU SESSION</div>
          <h1>Launch Your<br /><span className="purple">Ads With Me</span></h1>
          <p className="hero-sub">
            A 1:1 private session to launch high-converting Google &amp; Meta Ads that bring <span className="purple">real results.</span>
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><img src="/icon1.png" alt="Strategic Setup" /></div>
              <strong>Strategic Setup</strong>
              <p>We build the right foundation.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><img src="/icon2.png" alt="Laser Targeting" /></div>
              <strong>Laser Targeting</strong>
              <p>Reach the right people who are ready to buy.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><img src="/icon3.png" alt="Better Results" /></div>
              <strong>Better Results</strong>
              <p>More leads, lower cost &amp; higher ROI.</p>
            </div>
          </div>

          <a href="#book" className="btn-primary">Book Your Ad Launch Session &nbsp;→</a>

          <div className="trust-badges">
            <span><span className="check">✓</span> Limited Slots</span>
            <span><span className="check">✓</span> 1:1 Expert Guidance</span>
            <span><span className="check">✓</span> Actionable Strategies</span>
            <span><span className="check">✓</span> 100% Practical</span>
          </div>
        </div>

        <div className="hero-right">
          {/* Image with mobile price card overlay */}
          <div className="hero-img-wrap">
            <img src="/herosection.png" alt="Launch Ads With Me" className="hero-img" />
            <div className="price-card mobile-price">
              <div className="price-label">SPECIAL PRICE</div>
              <div className="price-amount">₹10,000</div>
              <div className="price-detail">1:1 Private Session</div>
              <div className="price-detail">2 Hours</div>
            </div>
          </div>
          {/* Desktop cards column */}
          <div className="desktop-cards">
            <div className="price-card">
              <div className="price-label">SPECIAL PRICE</div>
              <div className="price-amount">₹10,000</div>
              <div className="price-detail">1:1 Private Session</div>
              <div className="price-detail">2 Hours</div>
            </div>
            <div className="who-card">
              <h3>👥 Who Is This For?</h3>
              <ul>
                <li><span className="check">✓</span> Business Owners &amp; Entrepreneurs</li>
                <li><span className="check">✓</span> Local Businesses &amp; Service Providers</li>
                <li><span className="check">✓</span> Freelancers &amp; Marketing Professionals</li>
                <li><span className="check">✓</span> Agencies &amp; Marketing Teams</li>
              </ul>
            </div>
          </div>
          {/* Mobile who card */}
          <div className="who-card mobile-who">
            <h3>👥 Who Is This For?</h3>
            <ul>
              <li><span className="check">✓</span> Business Owners &amp; Entrepreneurs</li>
              <li><span className="check">✓</span> Local Businesses &amp; Service Providers</li>
              <li><span className="check">✓</span> Freelancers &amp; Marketing Professionals</li>
              <li><span className="check">✓</span> Agencies &amp; Marketing Teams</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
