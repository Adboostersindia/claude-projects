import './CTASection.css'
import LeadForm from './LeadForm'

export default function CTASection() {
  return (
    <section className="cta-section" id="book">
      <div className="container">
        <div className="cta-grid">

          <div className="cta-left">
            <h3>Ready To <span className="purple">Launch Your Ads?</span></h3>
            <p>Let's build and launch high-converting campaigns designed to generate more leads, customers, and revenue for your business.</p>
            <div className="cta-checks">
              <span><span className="check">✓</span> Secure Your Spot</span>
              <span><span className="check">✓</span> Limited Availability</span>
              <span><span className="check">✓</span> 1:1 Strategy &amp; Launch Session</span>
            </div>
            <div className="cta-price-block">
              <div className="cta-price">₹10,000</div>
              <div className="cta-price-sub">1:1 Private Session (2 Hours)</div>
              <div className="cta-price-note">One-time investment. No monthly commitment.</div>
            </div>
          </div>

          <div className="form-wrap">
            <p className="form-heading">Ready to launch your ads? Complete the application below. I'll reach out shortly.</p>
            <LeadForm />
            <div className="form-trust">
              <span><span className="check">✓</span> Sessions available in English, Hindi &amp; Tamil</span>
              <span><span className="check">✓</span> I'll personally review every application</span>
              <span><span className="check">✓</span> No spam. No sales pressure.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
