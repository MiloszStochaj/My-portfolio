export const SKILL_GROUP_IDS = [
  'frontend',
  'backend',
  'infrastructure',
] as const

export type SkillGroupId = (typeof SKILL_GROUP_IDS)[number]

export const SKILL_ICON_KEYS = ['code', 'server', 'wrench'] as const

export type SkillIconKey = (typeof SKILL_ICON_KEYS)[number]

export const SKILL_CARD_TONES = ['indigo', 'emerald', 'amber'] as const

export type SkillCardTone = (typeof SKILL_CARD_TONES)[number]
