import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { THEME_STORAGE_KEY } from '@/config/theme'
import {
  applyTheme,
  getStoredThemePreference,
  getSystemTheme,
  persistThemePreference,
  resolveTheme,
} from '@/lib/theme'
import type { Theme, ThemePreference } from '@/types/theme'

type ThemeContextValue = {
  theme: Theme
  preference: ThemePreference
  isDark: boolean
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  resetToSystemTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [preference, setPreference] = useState<ThemePreference>(() =>
    getStoredThemePreference(),
  )
  const [theme, setThemeState] = useState<Theme>(() => resolveTheme(preference))

  const setTheme = useCallback((nextTheme: Theme) => {
    setPreference(nextTheme)
    setThemeState(nextTheme)
    persistThemePreference(nextTheme)
    applyTheme(nextTheme, { animate: true })
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  const resetToSystemTheme = useCallback(() => {
    setPreference(null)
    const systemTheme = getSystemTheme()
    setThemeState(systemTheme)
    window.localStorage.removeItem(THEME_STORAGE_KEY)
    applyTheme(systemTheme, { animate: true })
  }, [])

  useEffect(() => {
    if (preference !== null) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = () => {
      const systemTheme = getSystemTheme()
      setThemeState(systemTheme)
      applyTheme(systemTheme, { animate: true })
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [preference])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      preference,
      isDark: theme === 'dark',
      setTheme,
      toggleTheme,
      resetToSystemTheme,
    }),
    [preference, resetToSystemTheme, setTheme, theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
