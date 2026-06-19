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
      redirect: 'follow',
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        phone,
        business: business || '',
        message: message || '',
      }),
    })

    const text = await response.text().catch(() => '')
    console.log('submit-lead script response:', response.status, text)

    if (!response.ok && response.status !== 302) {
      throw new Error(`Script responded with ${response.status}: ${text}`)
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('submit-lead error:', err.message || err)
    return res.status(500).json({ error: 'Failed to save lead', detail: err.message })
  }
}
