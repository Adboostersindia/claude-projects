import { useEffect } from 'react'
import './BookingForm.css'

export default function BookingForm() {
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
    <section className="booking-section" id="book">
      <div className="container">
        <h2>Tell Me A Bit About Your Business, <span className="purple">Goals, or Any Questions You Have</span></h2>
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
