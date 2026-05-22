import type { ExperienceItemId } from '@/types/experience'

export type ExperienceItemContent = {
  id: ExperienceItemId
  dateRange: string
  role: string
  company: string
  achievements: string[]
}

export type ExperienceContent = {
  header: {
    title: string
  }
  items: ExperienceItemContent[]
}
