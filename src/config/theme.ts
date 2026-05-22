import type { Theme } from '@/types/theme'

export const THEME_STORAGE_KEY = 'portfolio-theme-preference'

/** Applied when the user has not chosen a theme yet (no localStorage entry). */
export const DEFAULT_THEME: Theme = 'dark'

export const THEME_META_COLORS = {
  dark: '#0f172a',
  light: '#eceff4',
} as const

export const THEME_TRANSITION_MS = 400
