import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactQueryProvider from './lib/react-query.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider >
      <Toaster position="top-right" />
      <App />
    </ReactQueryProvider>
  </StrictMode>,
)
