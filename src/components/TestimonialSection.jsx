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
              "I wanted to generate leads but didn't want to spend heavily on a marketing agency. So I joined Nitin's 'Launch With Me' session. In just one session, I successfully launched my first Meta Ads campaign and felt confident managing my ads on my own. Nitin guided me step-by-step — from setting up the ad account to campaign strategy and launching the campaign. I implemented everything myself while he coached me throughout the process. The hands-on approach made learning easy and practical. If you're a small business owner looking to generate leads while keeping marketing costs under control, I highly recommend the Launch With Me session."
            </p>
            <div className="author">
              <div className="author-name">Prateek</div>
              <div className="author-role">Small Business Owner</div>
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
