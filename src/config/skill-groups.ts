import type { SkillCardTone, SkillGroupId, SkillIconKey } from '@/types/skills'

type SkillGroupMeta = {
  iconKey: SkillIconKey
  tone: SkillCardTone
}

export const SKILL_GROUP_META: Record<SkillGroupId, SkillGroupMeta> = {
  frontend: { iconKey: 'code', tone: 'indigo' },
  backend: { iconKey: 'server', tone: 'emerald' },
  infrastructure: { iconKey: 'wrench', tone: 'amber' },
}
