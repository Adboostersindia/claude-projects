import './WhyPaySection.css'
import { useFormModal } from './FormModal'

export default function WhyPaySection() {
  const openForm = useFormModal()
  return (
    <section className="why-pay-section">
      <div className="container">
        <h2>Why Business Owners Pay <span className="purple">₹10,000</span> For This Session</h2>
        <p className="why-pay-lead">Because learning through trial and error is often far more expensive.</p>
        <p className="why-pay-body">
          In this session, you'll gain the clarity and confidence to make better advertising decisions, avoid costly mistakes, and understand exactly what's needed to launch and grow successfully — whether you're managing ads yourself or working with an agency.
        </p>
        <button className="btn-primary" onClick={openForm}>Book Your Ad Launch Session &nbsp;→</button>
      </div>
    </section>
  )
}
