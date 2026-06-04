import { useState } from 'react'
import './FAQSection.css'

const faqs = [
  {
    q: 'Will we launch the campaign during the session?',
    a: 'Yes. If your assets are ready, we\'ll build and launch the campaign together during the session.'
  },
  {
    q: 'Do I need a website?',
    a: 'A website is recommended, but we\'ll discuss alternatives if needed — such as landing pages or lead forms.'
  },
  {
    q: 'Do you manage ads after the session?',
    a: 'Additional support and ongoing management can be discussed based on your needs.'
  },
  {
    q: 'Can you help with Google Ads and Meta Ads?',
    a: 'Yes. The session can focus on either platform, or both, based on your business goals.'
  },
  {
    q: 'How long is the session?',
    a: 'Typically 2 hours. We use every minute to set up, strategise, and launch your campaign.'
  },
  {
    q: 'What budget should I have?',
    a: 'Most businesses should be prepared to spend at least ₹15,000 – ₹50,000/month on advertising to see meaningful results.'
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked <span className="purple">Questions</span></h2>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-q">
                <span>{faq.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && <div className="faq-a">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
