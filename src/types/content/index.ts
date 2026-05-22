import type { AboutContent } from './about'
import type { ExperienceContent } from './experience'
import type { FooterContent } from './footer'
import type { HeroContent } from './hero'
import type { NavigationContent } from './navigation'
import type { ProjectsContent } from './projects'
import type { SkillsContent } from './skills'

export type { NavigationContent, NavItemContent } from './navigation'
export type { FooterContent } from './footer'
export type { HeroContent } from './hero'
export type { AboutContent } from './about'
export type { SkillsContent, SkillGroupContent } from './skills'
export type { ExperienceContent, ExperienceItemContent } from './experience'
export type {
  ProjectsContent,
  ProjectItemContent,
  ProjectLinksContent,
} from './projects'

export type LocaleContent = {
  navigation: NavigationContent
  footer: FooterContent
  hero: HeroContent
  about: AboutContent
  skills: SkillsContent
  experience: ExperienceContent
  projects: ProjectsContent
}
