export const EXPERIENCE_ITEM_IDS = [
  'senior-fullstack',
  'mid-backend',
  'junior-web',
] as const

export type ExperienceItemId = (typeof EXPERIENCE_ITEM_IDS)[number]
