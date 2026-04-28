import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactQueryProvider from './lib/react-query.tsx'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider >
      <AuthProvider >
        <Toaster position="top-right" />
        <App />
      </AuthProvider>
    </ReactQueryProvider>
  </StrictMode>,
)
