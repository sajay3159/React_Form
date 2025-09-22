import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppOne from './AppOne.jsx'
import AppTwo from './AppTwo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppOne /> */}
    <AppTwo />
  </StrictMode>,
)
