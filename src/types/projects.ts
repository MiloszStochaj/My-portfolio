export const PROJECT_IDS = ['fintech-analytics', 'saas-resource-manager'] as const

export type ProjectId = (typeof PROJECT_IDS)[number]
