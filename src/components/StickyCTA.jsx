import './StickyCTA.css'
import { useFormModal } from './FormModal'

export default function StickyCTA() {
  const openForm = useFormModal()
  return (
    <div className="sticky-cta">
      <button className="btn-primary" onClick={openForm}>
        Book Your Ad Launch Session &nbsp;→
      </button>
    </div>
  )
}
