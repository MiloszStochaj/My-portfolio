import type { SectionId } from '@/types/navigation'
import type { Locale } from '@/types/locale'

export type NavItemContent = {
  id: SectionId
  label: string
}

export type NavigationContent = {
  brand: {
    name: string
    role: string
  }
  navSectionLabel: string
  statusSectionLabel: string
  status: {
    label: string
  }
  themeSectionLabel: string
  theme: {
    switchToLight: string
    switchToDark: string
  }
  localeSectionLabel: string
  locale: Record<Locale, string>
  cv: {
    label: string
    href: string
  }
  nav: NavItemContent[]
}
