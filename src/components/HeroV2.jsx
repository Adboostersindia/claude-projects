import './Hero.css'
import './HeroV2.css'
import { useFormModal } from './FormModal'

export default function HeroV2() {
  const openForm = useFormModal()
  return (
    <section className="hero hero-v2">
      <div className="hero-inner">

        <div className="hero-left">
          <div className="badge">✦ 1:1 DONE-WITH-YOU SESSION</div>
          <p className="hero-eyebrow">
            Never Run Google or Meta Ads Before? Or Feeling Stuck With Your Current Campaigns?
          </p>
          <h1>Launch Your First <span className="purple">Google &amp; Meta Ads</span> Campaign With A Clear Strategy For Growth</h1>
          <p className="hero-sub">
            Get personalized 1:1 guidance to avoid costly mistakes, understand what works for your business, and launch with a clear plan.
          </p>
          <p className="hero-note">I personally conduct every session and only take 4–6 sessions per month.</p>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={openForm}>Book Your Ad Launch Session &nbsp;→</button>

          <div className="trust-badges">
            <span><span className="check">✓</span> Limited Slots</span>
            <span><span className="check">✓</span> 1:1 Expert Guidance</span>
            <span><span className="check">✓</span> Actionable Strategies</span>
            <span><span className="check">✓</span> 100% Practical</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/herosection.png" alt="Launch Ads With Me" className="hero-img" />
            <div className="price-card mobile-price">
              <div className="price-label">SPECIAL PRICE</div>
              <div className="price-amount">₹10,000</div>
              <div className="price-detail">1:1 Private Session</div>
              <div className="price-detail">2 Hours</div>
              <div className="price-note">One-time investment. No monthly commitment.</div>
            </div>
          </div>
          <div className="desktop-cards">
            <div className="price-card">
              <div className="price-label">SPECIAL PRICE</div>
              <div className="price-amount">₹10,000</div>
              <div className="price-detail">1:1 Private Session</div>
              <div className="price-detail">2 Hours</div>
              <div className="price-note">One-time investment. No monthly commitment.</div>
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
