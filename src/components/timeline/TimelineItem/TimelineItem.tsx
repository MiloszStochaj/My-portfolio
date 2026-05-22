import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export type TimelineItemProps = HTMLAttributes<HTMLElement> & {
  dateRange: string
  role: string
  company: string
  achievements: string[]
}

export function TimelineItem({
  dateRange,
  role,
  company,
  achievements,
  className,
  ...props
}: TimelineItemProps) {
  return (
    <article
      className={clsx('timeline-item', className)}
      {...props}
    >
      <time className="timeline-item__date mono" dateTime={dateRange}>
        {dateRange}
      </time>

      <h3 className="timeline-item__role">{role}</h3>

      <p className="timeline-item__company">{company}</p>

      <ul className="timeline-item__achievements">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </article>
  )
}
