import { Code2, Server, Wrench, type LucideIcon } from 'lucide-react'
import type { SkillIconKey } from '@/types/skills'

export const SKILL_ICON_MAP: Record<SkillIconKey, LucideIcon> = {
  code: Code2,
  server: Server,
  wrench: Wrench,
}

export function getSkillIcon(iconKey: SkillIconKey): LucideIcon {
  return SKILL_ICON_MAP[iconKey]
}
