import { useEffect, useRef, useState } from 'react'
import {
  getActivationScrollY,
  getScrollOffset,
  isNearPageBottom,
  SCROLL_BOTTOM_THRESHOLD_PX,
} from '@/lib/scroll'
import type { SectionId } from '@/types/navigation'

type SectionMetrics = {
  id: SectionId
  top: number
  bottom: number
}

function measureSections(sectionIds: SectionId[]): SectionMetrics[] {
  return sectionIds.flatMap((id) => {
    const element = document.getElementById(id)

    if (!element) return []

    const top = element.getBoundingClientRect().top + window.scrollY

    return [
      {
        id,
        top,
        bottom: top + element.offsetHeight,
      },
    ]
  })
}

function resolveActiveSection(
  sections: SectionMetrics[],
  scrollY: number,
  offset: number,
): SectionId | null {
  if (sections.length === 0) return null

  const lastSection = sections[sections.length - 1]
  const viewportBottom = scrollY + window.innerHeight

  // Bottom of page or footer visible → keep last nav item (projects) active
  if (
    isNearPageBottom(scrollY) ||
    viewportBottom >= lastSection.bottom - SCROLL_BOTTOM_THRESHOLD_PX
  ) {
    return lastSection.id
  }

  const activationY = getActivationScrollY(scrollY, offset)

  let active = sections[0].id

  for (const section of sections) {
    if (section.top <= activationY) {
      active = section.id
    }
  }

  return active
}

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(
    () => sectionIds[0],
  )
  const sectionIdsRef = useRef(sectionIds)

  useEffect(() => {
    sectionIdsRef.current = sectionIds
  }, [sectionIds])

  useEffect(() => {
    let frameId = 0
    let isTicking = false

    const updateActiveSection = () => {
      isTicking = false

      const sections = measureSections(sectionIdsRef.current)

      if (sections.length === 0) return

      const next = resolveActiveSection(
        sections,
        window.scrollY,
        getScrollOffset(),
      )

      if (!next) return

      setActiveSection((current) => (current === next ? current : next))
    }

    const scheduleUpdate = () => {
      if (isTicking) return

      isTicking = true
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    const handleResize = () => {
      window.cancelAnimationFrame(frameId)
      scheduleUpdate()
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('load', scheduleUpdate)

    scheduleUpdate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', scheduleUpdate)
    }
  }, [sectionIds])

  return activeSection
}
