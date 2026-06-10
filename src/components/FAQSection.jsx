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
  {
    q: 'What happens during the 2-hour session?',
    a: 'We\'ll work together live to set up your campaigns, targeting, tracking, and launch strategy. By the end of the session, you\'ll have a clear action plan and, in most cases, campaigns ready to launch.'
  },
  {
    q: 'Do I need any prior experience with Google or Meta Ads?',
    a: 'No. Whether you\'re a complete beginner or have run ads before, I\'ll guide you through the process step-by-step.'
  },
  {
    q: 'Will you help me set up conversion tracking?',
    a: 'Yes. We\'ll review your tracking setup and ensure you\'re measuring the actions that matter most for your business.'
  },
  {
    q: 'What if I already have campaigns running?',
    a: 'That\'s perfectly fine. We can review your existing campaigns, identify opportunities for improvement, and optimize them together.'
  },
  {
    q: 'Will my campaigns be ready to launch after the session?',
    a: 'In most cases, yes. As long as you have the necessary assets (website, creatives, offers, etc.), we\'ll build everything needed for launch during the session.'
  },
  {
    q: 'What industries do you work with?',
    a: 'I\'ve worked with businesses across multiple industries, including local services, healthcare, e-commerce, education, and lead generation businesses.'
  },
  {
    q: 'Will I get a recording of the session?',
    a: 'Yes, you\'ll receive a recording so you can revisit the strategies and implementation steps anytime.'
  },
  {
    q: 'What happens after the session?',
    a: 'You\'ll leave with a clear roadmap and action plan. If you need ongoing support, we can discuss additional options after the session.'
  },
  {
    q: 'Is this done-for-you or done-with-you?',
    a: 'This is a done-with-you session. We build everything together live so you understand exactly how your campaigns work and can manage them confidently.'
  },
  {
    q: 'Do I need ad creatives before the session?',
    a: 'Not necessarily. If you already have creatives, we\'ll review them. If not, I\'ll guide you on what types of creatives and messaging are most likely to perform well.'
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
