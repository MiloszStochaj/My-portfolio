import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { useNavigation } from '@/context/NavigationContext'

const SCROLL_THRESHOLD = 500

export function ScrollToTop() {
  const { scrollToSection } = useNavigation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Scroll to top"
      onClick={() => scrollToSection('hero')}
    >
      <ChevronUp size={20} aria-hidden />
    </button>
  )
}
