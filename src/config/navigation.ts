import type { SectionId, SocialLink } from '@/types/navigation'

/** Sections linked in sidebar navigation (scroll spy tracks these only). */
export const NAV_SECTION_IDS: SectionId[] = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
]

/** All page sections including footer (not in sidebar nav). */
export const SECTION_IDS: SectionId[] = [...NAV_SECTION_IDS, 'footer']

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/MiloszStochaj' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mi%C5%82osz-stochaj-931296125/' },
  { id: 'email', label: 'Email', href: 'mailto:milosz.stochaj@gmail.com' },
]
