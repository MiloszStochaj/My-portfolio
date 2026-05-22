export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'footer'

export type NavItem = {
  id: SectionId
  label: string
}

export type SocialLink = {
  id: string
  label: string
  href: string
}
