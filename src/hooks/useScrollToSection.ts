import { useCallback } from 'react'
import { getScrollOffset } from '@/lib/scroll'

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (!element) return

    const offset = getScrollOffset()
    const top = element.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    })

    window.history.replaceState(null, '', `#${sectionId}`)
  }, [])

  return scrollToSection
}
