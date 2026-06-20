import { useState } from 'react'
import './TestimonialSection.css'

const written = [
  {
    headline: 'I Spent ₹45,000 On Courses Before Joining This Session',
    quote: "I had already spent over ₹45,000 on three different courses before joining Nitin's Launch With Me session. Honestly, it was the best decision I made. He helped me identify problems in my setup, shared new strategies, and gave me clarity on lead quality and ad performance. It wasn't theory — it was practical, hands-on guidance for my business. Today, I manage my own ads with confidence, and Nitin continues to support my marketing and website needs.",
    name: 'Amore by Neha Kochar',
    role: 'Jewelry Designer',
    photo: '/Neha.png',
  },
  {
    headline: 'I Launched My First Meta Ads Campaign In One Session',
    quote: "I wanted to generate leads but didn't want to spend heavily on a marketing agency. So I joined Nitin's 'Launch With Me' session. In just one session, I successfully launched my first Meta Ads campaign and felt confident managing my ads on my own. Nitin guided me step-by-step — from setting up the ad account to campaign strategy and launching the campaign. I implemented everything myself while he coached me throughout the process. The hands-on approach made learning easy and practical. If you're a small business owner looking to generate leads while keeping marketing costs under control, I highly recommend the Launch With Me session.",
    name: 'Prateek',
    role: 'Saffroponic Founder',
    photo: '/Prateek.png',
  },
  {
    headline: 'He Took The Time To Understand My Business First',
    quote: "I've been working with Nitin for quite some time now, and what I appreciate most is that he takes the time to understand the business before suggesting any marketing strategy. Whenever I need advice or want to discuss a new idea, I know I can reach out and get honest feedback. That's one of the main reasons we've continued working together. I'd definitely recommend Nitin to any business owner looking for a marketing partner who genuinely cares about their growth.",
    name: 'Chirag',
    role: "Archie's Interior Mall and Luxe Hardwares",
    photo: '/Chirag.png',
  },
]

export default function TestimonialSection() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + written.length) % written.length)
  const next = () => setIdx((i) => (i + 1) % written.length)

  const t = written[idx]

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2>What My <span className="purple">Clients Say</span></h2>
        <div className="testimonial-grid">
          <div className="testimonial-text">
            <div className="stars">★★★★★</div>
            <h3 className="testimonial-headline">{t.headline}</h3>
            <p className="quote">"{t.quote}"</p>
            <div className="author">
              <img className="author-avatar" src={t.photo} alt={t.name} />
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
            <div className="carousel-nav">
              <button className="nav-btn" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
              <span className="nav-dots">
                {written.map((_, i) => (
                  <button
                    key={i}
                    className={`nav-dot${i === idx ? ' active' : ''}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </span>
              <button className="nav-btn" onClick={next} aria-label="Next testimonial">&#8594;</button>
            </div>
          </div>

          <div className="testimonial-video">
            <div className="video-wrap">
              <wistia-player media-id="0j6udbmja8" aspect="0.8"></wistia-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
