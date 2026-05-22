import type { SkillGroupId } from '@/types/skills'

export type SkillGroupContent = {
  id: SkillGroupId
  title: string
  items: string[]
}

export type SkillsContent = {
  header: {
    title: string
  }
  groups: SkillGroupContent[]
}
