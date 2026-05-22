import { motion } from 'framer-motion'
import {
  MOTION_HOVER_LIFT,
  MOTION_HOVER_TRANSITION,
} from '@/config/motion'
import {
  PROJECT_FOLDER_ICON,
  PROJECT_LINK_ICONS,
  type ProjectLinkType,
} from '@/config/project-icons'
import type { ProjectLinksContent } from '@/types/content'
import type { ProjectId } from '@/types/projects'

type ProjectCardProps = {
  projectId: ProjectId
  title: string
  description: string
  tags: string[]
  links: ProjectLinksContent
}

const linkLabels: Record<ProjectLinkType, string> = {
  github: 'GitHub repository',
  external: 'Live project',
}

export function ProjectCard({
  projectId,
  title,
  description,
  tags,
  links,
}: ProjectCardProps) {
  const FolderIcon = PROJECT_FOLDER_ICON
  const activeLinks = (
    Object.entries(links) as [ProjectLinkType, string | undefined][]
  ).filter((entry): entry is [ProjectLinkType, string] => Boolean(entry[1]))

  return (
    <motion.article
      className="project-card"
      aria-labelledby={`project-card-${projectId}-title`}
      whileHover={{ y: MOTION_HOVER_LIFT }}
      transition={MOTION_HOVER_TRANSITION}
    >
      <div className="project-card__header">
        <div className="project-card__icon" aria-hidden>
          <FolderIcon size={36} strokeWidth={1.5} />
        </div>

        {activeLinks.length > 0 && (
          <div className="project-card__links">
            {activeLinks.map(([type, href]) => {
              const Icon = PROJECT_LINK_ICONS[type]

              return (
                <a
                  key={type}
                  href={href}
                  className="project-card__link"
                  aria-label={linkLabels[type]}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                >
                  <Icon size={20} strokeWidth={2} />
                </a>
              )
            })}
          </div>
        )}
      </div>

      <h3 id={`project-card-${projectId}-title`} className="project-card__title">
        {title}
      </h3>

      <p className="project-card__description">{description}</p>

      <ul className="project-card__tags mono" aria-label="Technologies">
        {tags.map((tag) => (
          <li key={tag}>
            <span>{tag}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
