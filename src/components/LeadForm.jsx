import { useState } from 'react'
import './LeadForm.css'

export default function LeadForm({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      if (onSuccess) onSuccess()
      window.location.href = '/thank-you.html'
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="WhatsApp / Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="business"
        placeholder="Business / Website (optional)"
        value={form.business}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Tell me a bit about your business, goals, or any questions you have"
        rows="4"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" className="lead-form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Submit'}
        {status !== 'submitting' && <span>&nbsp;→</span>}
      </button>
      {status === 'error' && (
        <p className="lead-form-error">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
