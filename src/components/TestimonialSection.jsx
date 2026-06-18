import './TestimonialSection.css'

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2>What My <span className="purple">Clients Say</span></h2>

        <div className="testimonial-grid">
          <div className="testimonial-text">
            <div className="stars">★★★★★</div>
            <p className="quote">
              "This session completely changed how I run my ads. We went from guessing to having a clear,
              structured campaign live by the end of the call. Within weeks I started seeing better leads
              at a lower cost — exactly what I needed for my business."
            </p>
            <div className="author">
              <div className="author-name">Client Name</div>
              <div className="author-role">Business Owner</div>
            </div>
          </div>

          <div className="testimonial-video">
            <wistia-player media-id="0j6udbmja8" aspect="0.8"></wistia-player>
          </div>
        </div>
      </div>
    </section>
  )
}
