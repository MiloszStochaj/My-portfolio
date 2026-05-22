import type { ReactElement } from 'react'
import clsx from 'clsx'
import { Code2, Server, Wrench } from 'lucide-react'
import { SKILL_GROUP_META } from '@/config/skill-groups'
import type { SkillGroupId, SkillIconKey } from '@/types/skills'

const skillIconElements: Record<SkillIconKey, ReactElement> = {
  code: <Code2 size={20} strokeWidth={2} />,
  server: <Server size={20} strokeWidth={2} />,
  wrench: <Wrench size={20} strokeWidth={2} />,
}

type SkillCardProps = {
  groupId: SkillGroupId
  title: string
  items: string[]
}

export function SkillCard({ groupId, title, items }: SkillCardProps) {
  const { iconKey, tone } = SKILL_GROUP_META[groupId]

  return (
    <article
      className={clsx('skill-card', `skill-card--${tone}`)}
      aria-labelledby={`skill-card-${groupId}-title`}
    >
      <div
        className={clsx('skill-card__icon', `skill-card__icon--${tone}`)}
        aria-hidden
      >
        {skillIconElements[iconKey]}
      </div>

      <h3 id={`skill-card-${groupId}-title`} className="skill-card__title">
        {title}
      </h3>

      <ul className="skill-card__list mono">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
