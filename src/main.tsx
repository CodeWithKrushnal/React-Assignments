import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assignment-1/index.css'
import App from './assignment-1/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
