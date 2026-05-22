import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/main.scss'
import App from '@/App'
import { LocaleProvider } from '@/context/LocaleContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { initTheme } from '@/lib/theme'

initTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>,
)
