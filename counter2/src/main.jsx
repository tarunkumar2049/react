import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ExampleProvider from './globalData/Context2.jsx'
import ThemeProvider from './globalData/ThemeContext.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExampleProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </ExampleProvider>
  </StrictMode>,
)
