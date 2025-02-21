import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assignment-2/index.css'
import App from './assignment-2/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
