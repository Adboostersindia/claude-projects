import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThankYou from './pages/ThankYou'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>
)
