import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section" id="book">
      <div className="container cta-grid">
        <div className="cta-left">
          <div>
            <h3>Ready To <span className="purple">Launch Your Ads?</span></h3>
            <p>Let's build &amp; launch high-converting ads that bring you more leads, customers and revenue.</p>
            <div className="cta-checks">
              <span><span className="check">✓</span> Secure Booking</span>
              <span><span className="check">✓</span> Limited Slots</span>
              <span><span className="check">✓</span> 100% Value Packed Session</span>
            </div>
          </div>
        </div>
        <div className="cta-right">
          <div className="cta-price">₹10,000</div>
          <div className="cta-price-sub">1:1 Private Session (2 Hours)</div>
          <a href="#" className="btn-primary">Book Your Ad Launch Session &nbsp;→</a>
        </div>
      </div>
    </section>
  )
}
