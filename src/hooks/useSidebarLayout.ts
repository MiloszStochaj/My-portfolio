import { useEffect, useState } from 'react'
import { sidebarMediaQuery } from '@/config/breakpoints'

export function useSidebarLayout() {
  const [isSidebarLayout, setIsSidebarLayout] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(sidebarMediaQuery).matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(sidebarMediaQuery)

    const updateLayout = () => {
      setIsSidebarLayout(mediaQuery.matches)
    }

    updateLayout()
    mediaQuery.addEventListener('change', updateLayout)

    return () => mediaQuery.removeEventListener('change', updateLayout)
  }, [])

  return isSidebarLayout
}
