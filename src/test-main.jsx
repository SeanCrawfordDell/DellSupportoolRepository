import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Minimal React Test</h1>
      <p>If you can see this, React is working on GitLab Pages!</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  </StrictMode>,
)