import { useState } from 'react'
import './FAQSection.css'

const faqs = [
  {
    q: 'Why Should I Pay ₹10,000 When There Are Free YouTube Videos And Courses?',
    a: 'You absolutely can learn from YouTube and courses—I did too. The challenge is that most content is generic, while your business is unique. This session is about applying the right strategy to your business, avoiding costly mistakes, and getting answers to your specific questions in real time. Many of my clients had already spent money on courses before joining. What they needed wasn\'t more information—they needed clarity and direction.'
  },
  {
    q: 'Who This Is NOT For',
    a: 'If you\'re looking for a free webinar, a quick fix, or someone to magically grow your business overnight, this session isn\'t for you. It\'s designed for business owners who are ready to invest in learning, take action, and make informed marketing decisions that drive long-term growth.'
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
    q: 'What if I already have campaigns running?',
    a: 'That\'s perfectly fine. We can review your existing campaigns, identify opportunities for improvement, and optimize them together.'
  },
  {
    q: 'Is this done-for-you or done-with-you?',
    a: 'This is a done-with-you session. We build everything together live so you understand exactly how your campaigns work and can manage them confidently.'
  },
  {
    q: 'Will we launch the campaign during the session?',
    a: 'Yes. If your assets are ready, we\'ll build and launch the campaign together during the session.'
  },
  {
    q: 'Will my campaigns be ready to launch after the session?',
    a: 'In most cases, yes. As long as you have the necessary assets (website, creatives, offers, etc.), we\'ll build everything needed for launch during the session.'
  },
  {
    q: 'Do I need a website?',
    a: 'A website is recommended, but we\'ll discuss alternatives if needed — such as landing pages or lead forms.'
  },
  {
    q: 'Do I need ad creatives before the session?',
    a: 'Not necessarily. If you already have creatives, we\'ll review them. If not, I\'ll guide you on what types of creatives and messaging are most likely to perform well.'
  },
  {
    q: 'Will you help me set up conversion tracking?',
    a: 'Yes. We\'ll review your tracking setup and ensure you\'re measuring the actions that matter most for your business.'
  },
  {
    q: 'What budget should I have?',
    a: 'Most businesses should be prepared to spend at least ₹15,000 – ₹50,000/month on advertising to see meaningful results.'
  },
  {
    q: 'Can you help with Google Ads and Meta Ads?',
    a: 'Yes. The session can focus on either platform, or both, based on your business goals.'
  },
  {
    q: 'What industries do you work with?',
    a: 'I\'ve worked with businesses across multiple industries, including local services, healthcare, e-commerce, education, and lead generation businesses.'
  },
  {
    q: 'Do you manage ads after the session?',
    a: 'Additional support and ongoing management can be discussed based on your needs.'
  },
  {
    q: 'What happens after the session?',
    a: 'You\'ll leave with a clear roadmap and action plan. If you need ongoing support, we can discuss additional options after the session.'
  },
  {
    q: 'What languages can we communicate in?',
    a: 'English, Hindi & Tamil. Feel free to communicate in whichever language you\'re most comfortable with during the session.'
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
