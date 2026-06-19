import '../index.css'
import './ThankYou.css'

export default function ThankYou() {
  return (
    <div className="ty-page">
      <div className="ty-card">
        <div className="ty-icon">✓</div>
        <h1>Thank You!</h1>
        <p className="ty-sub">Your application has been received.</p>
        <p className="ty-body">
          I'll review your details and reach out to you shortly to confirm your session.
          Keep an eye on your inbox (and WhatsApp).
        </p>
        <div className="ty-steps">
          <div className="ty-step">
            <span className="step-num">1</span>
            <span>I'll review your application</span>
          </div>
          <div className="ty-step">
            <span className="step-num">2</span>
            <span>You'll receive a confirmation with session details</span>
          </div>
          <div className="ty-step">
            <span className="step-num">3</span>
            <span>We launch your ads together in a live 1:1 session</span>
          </div>
        </div>
        <a href="/" className="ty-btn">← Back to Homepage</a>
      </div>

      <div className="ty-testimonials">
        <h2>Hear From <span className="purple">Our Clients</span></h2>
        <div className="ty-videos">
          <div className="ty-video-wrap">
            <wistia-player media-id="0j6udbmja8" aspect="0.8"></wistia-player>
          </div>
          <div className="ty-video-wrap">
            <wistia-player media-id="1jkqb6hgz7" aspect="0.8"></wistia-player>
          </div>
        </div>
      </div>
    </div>
  )
}
