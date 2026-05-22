import plAbout from '@content/pl/about.json'
import plExperience from '@content/pl/experience.json'
import plFooter from '@content/pl/footer.json'
import plHero from '@content/pl/hero.json'
import plNavigation from '@content/pl/navigation.json'
import plProjects from '@content/pl/projects.json'
import plSkills from '@content/pl/skills.json'
import enAbout from '@content/en/about.json'
import enExperience from '@content/en/experience.json'
import enFooter from '@content/en/footer.json'
import enHero from '@content/en/hero.json'
import enNavigation from '@content/en/navigation.json'
import enProjects from '@content/en/projects.json'
import enSkills from '@content/en/skills.json'
import type { Locale } from '@/types/locale'
import type { LocaleContent } from '@/types/content'

export const contentByLocale: Record<Locale, LocaleContent> = {
  pl: {
    navigation: plNavigation as LocaleContent['navigation'],
    footer: plFooter as LocaleContent['footer'],
    hero: plHero as LocaleContent['hero'],
    about: plAbout as LocaleContent['about'],
    skills: plSkills as LocaleContent['skills'],
    experience: plExperience as LocaleContent['experience'],
    projects: plProjects as LocaleContent['projects'],
  },
  en: {
    navigation: enNavigation as LocaleContent['navigation'],
    footer: enFooter as LocaleContent['footer'],
    hero: enHero as LocaleContent['hero'],
    about: enAbout as LocaleContent['about'],
    skills: enSkills as LocaleContent['skills'],
    experience: enExperience as LocaleContent['experience'],
    projects: enProjects as LocaleContent['projects'],
  },
}

export function getLocaleContent(locale: Locale): LocaleContent {
  return contentByLocale[locale]
}
