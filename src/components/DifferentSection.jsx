import './DifferentSection.css'

export default function DifferentSection() {
  return (
    <section className="different-section">
      <div className="container">
        <h2>What Makes This <span className="purple">Different?</span></h2>

        <div className="different-grid">
          <div className="diff-box typical">
            <h3>Typical Courses &amp; Consultants</h3>
            <ul>
              <li><span className="x">✕</span> Generic advice</li>
              <li><span className="x">✕</span> Hours of videos to watch</li>
              <li><span className="x">✕</span> No implementation support</li>
              <li><span className="x">✕</span> You figure it out alone</li>
              <li><span className="x">✕</span> Pay and hope for results</li>
            </ul>
          </div>

          <div className="vs-badge">VS</div>

          <div className="diff-box mine">
            <h3>Launch Ads With Me</h3>
            <ul>
              <li><span className="check">✓</span> Build campaigns together, live</li>
              <li><span className="check">✓</span> Real-time feedback &amp; guidance</li>
              <li><span className="check">✓</span> Ask questions as we go</li>
              <li><span className="check">✓</span> Leave with a campaign ready to launch</li>
              <li><span className="check">✓</span> Hands-on, done-with-you session</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
