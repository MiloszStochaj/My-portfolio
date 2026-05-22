import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LOCALE_STORAGE_KEY } from '@/config/locale'
import { contentByLocale } from '@/lib/content'
import type { LocaleContent } from '@/types/content'
import { DEFAULT_LOCALE, type Locale } from '@/types/locale'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  content: LocaleContent
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored === 'pl' || stored === 'en') return stored

  const documentLang = document.documentElement.lang
  if (documentLang === 'en') return 'en'

  return DEFAULT_LOCALE
}

type LocaleProviderProps = {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const content = contentByLocale[locale]

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    document.documentElement.lang = nextLocale
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  }, [])

  useEffect(() => {
    document.title = content.footer.seo.title

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', content.footer.seo.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    ogTitle?.setAttribute('content', content.footer.seo.title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    ogDescription?.setAttribute('content', content.footer.seo.description)
  }, [content.footer.seo.description, content.footer.seo.title])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      content,
    }),
    [content, locale, setLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
