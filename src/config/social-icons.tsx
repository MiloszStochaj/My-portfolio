import { ExternalLink, Mail, type LucideIcon } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'

export const SOCIAL_ICON_MAP = {
  github: GithubIcon,
  linkedin: ExternalLink,
  email: Mail,
} as const satisfies Record<string, LucideIcon | typeof GithubIcon>

export type SocialIconId = keyof typeof SOCIAL_ICON_MAP
