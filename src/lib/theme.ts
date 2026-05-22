import { THEME_META_COLORS, THEME_STORAGE_KEY, THEME_TRANSITION_MS } from '@/config/theme'
import type { Theme, ThemePreference } from '@/types/theme'

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getStoredThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return null

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)

  if (stored === 'dark' || stored === 'light') return stored

  return null
}

export function resolveTheme(preference: ThemePreference = getStoredThemePreference()): Theme {
  return preference ?? getSystemTheme()
}

export function applyTheme(theme: Theme, options?: { animate?: boolean }) {
  const root = document.documentElement

  if (options?.animate) {
    root.classList.add('theme-transition')
  }

  if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
    root.style.colorScheme = 'light'
  } else {
    root.removeAttribute('data-theme')
    root.style.colorScheme = 'dark'
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_META_COLORS[theme])

  if (options?.animate) {
    window.setTimeout(() => {
      root.classList.remove('theme-transition')
    }, THEME_TRANSITION_MS)
  }
}

export function persistThemePreference(theme: Theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function clearThemePreference() {
  window.localStorage.removeItem(THEME_STORAGE_KEY)
}

export function initTheme(): Theme {
  const theme = resolveTheme()
  applyTheme(theme)
  return theme
}
