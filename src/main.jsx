import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageContextProvider from './context/ImageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </StrictMode>,
)
