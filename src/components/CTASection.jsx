import { useEffect } from 'react'
import './CTASection.css'

export default function CTASection() {
  useEffect(() => {
    const d = document
    const w = 'https://tally.so/widgets/embed.js'
    const v = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds()
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
          e.src = e.dataset.tallySrc
        })
      }
    }
    if (typeof window.Tally !== 'undefined') {
      v()
    } else if (d.querySelector(`script[src="${w}"]`) == null) {
      const s = d.createElement('script')
      s.src = w
      s.onload = v
      s.onerror = v
      d.body.appendChild(s)
    }
  }, [])

  return (
    <section className="cta-section" id="book">
      <div className="container">
        <div className="cta-grid">
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
            <a href="#" className="btn-primary" data-tally-open="pbvGz8" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Book Your Ad Launch Session &nbsp;→</a>
          </div>
        </div>

        <div className="form-wrap">
          <iframe
            data-tally-src="https://tally.so/embed/pbvGz8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="337"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Launch With Me Ad"
          />
        </div>
      </div>
    </section>
  )
}
