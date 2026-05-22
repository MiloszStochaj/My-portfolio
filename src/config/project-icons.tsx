import { ExternalLink, Folder, type LucideIcon } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'

export const PROJECT_FOLDER_ICON: LucideIcon = Folder

export const PROJECT_LINK_ICONS = {
  github: GithubIcon,
  external: ExternalLink,
} as const

export type ProjectLinkType = keyof typeof PROJECT_LINK_ICONS
