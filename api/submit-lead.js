export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, business, message } = req.body || {}

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email and phone are required' })
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL
  if (!scriptUrl) {
    console.error('submit-lead error: GOOGLE_SCRIPT_URL is not set')
    return res.status(500).json({ error: 'Form is not configured yet' })
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        phone,
        business: business || '',
        message: message || '',
      }),
    })

    if (!response.ok) throw new Error(`Script responded with ${response.status}`)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('submit-lead error:', err)
    return res.status(500).json({ error: 'Failed to save lead' })
  }
}
