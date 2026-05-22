import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { sidebarMediaQuery } from '@/config/breakpoints'
import { NAV_SECTION_IDS } from '@/config/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import type { SectionId } from '@/types/navigation'

type NavigationContextValue = {
  activeSection: SectionId
  isMobileMenuOpen: boolean
  openMobileMenu: () => void
  closeMobileMenu: () => void
  toggleMobileMenu: () => void
  scrollToSection: (sectionId: SectionId) => void
}

const NavigationContext = createContext<NavigationContextValue | null>(null)

type NavigationProviderProps = {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const activeSection = useActiveSection(NAV_SECTION_IDS)
  const scrollToSectionBase = useScrollToSection()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), [])
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((open) => !open),
    [],
  )

  const scrollToSection = useCallback(
    (sectionId: SectionId) => {
      scrollToSectionBase(sectionId)
      closeMobileMenu()
    },
    [closeMobileMenu, scrollToSectionBase],
  )

  useEffect(() => {
    document.body.classList.toggle('is-scroll-locked', isMobileMenuOpen)

    return () => {
      document.body.classList.remove('is-scroll-locked')
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeMobileMenu, isMobileMenuOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia(sidebarMediaQuery)

    const handleLayoutChange = () => {
      if (mediaQuery.matches) {
        closeMobileMenu()
      }
    }

    mediaQuery.addEventListener('change', handleLayoutChange)

    return () => mediaQuery.removeEventListener('change', handleLayoutChange)
  }, [closeMobileMenu])

  const value = useMemo<NavigationContextValue>(
    () => ({
      activeSection,
      isMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
      scrollToSection,
    }),
    [
      activeSection,
      closeMobileMenu,
      isMobileMenuOpen,
      openMobileMenu,
      scrollToSection,
      toggleMobileMenu,
    ],
  )

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }

  return context
}
