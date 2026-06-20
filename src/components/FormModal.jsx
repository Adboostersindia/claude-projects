import { createContext, useContext, useState } from 'react'
import LeadForm from './LeadForm'
import './FormModal.css'

const FormModalContext = createContext(() => {})

export function useFormModal() {
  return useContext(FormModalContext)
}

export function FormModalProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <FormModalContext.Provider value={() => setOpen(true)}>
      {children}
      {open && (
        <div className="form-modal-overlay" onClick={() => setOpen(false)}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <button className="form-modal-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <h3>Launch Your <span className="purple">Ads With Me</span></h3>
            <p className="form-modal-sub">Complete the application below. I'll reach out shortly.</p>
            <LeadForm onSuccess={() => setTimeout(() => setOpen(false), 2000)} />
            <div className="form-trust">
              <span><span className="check">✓</span> Sessions available in English, Hindi &amp; Tamil</span>
              <span><span className="check">✓</span> I'll personally review every application</span>
              <span><span className="check">✓</span> No spam. No sales pressure.</span>
            </div>
          </div>
        </div>
      )}
    </FormModalContext.Provider>
  )
}
