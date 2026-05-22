import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from './Container'
import type { SectionId } from '@/types/navigation'
import type { SectionSpacing } from '@/types'

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  id: SectionId
  as?: 'section' | 'div' | 'article' | 'aside' | 'footer'
  spacing?: SectionSpacing
  title?: string
  description?: string
  contained?: boolean
}

export function Section({
  children,
  className,
  id,
  as: Component = 'section',
  spacing = 'default',
  title,
  description,
  contained = true,
  ...props
}: SectionProps) {
  const body = (
    <>
      {(title || description) && (
        <header className="section__header">
          {title && (
            <h2 id={`${id}-title`} className="section__title">
              {title}
            </h2>
          )}
          {description && (
            <p className="section__description">{description}</p>
          )}
        </header>
      )}
      <div className="section__body">{children}</div>
    </>
  )

  return (
    <Component
      id={id}
      className={clsx(
        'section',
        spacing !== 'default' && `section--${spacing}`,
        className,
      )}
      aria-labelledby={title ? `${id}-title` : undefined}
      {...props}
    >
      {contained ? <Container>{body}</Container> : body}
    </Component>
  )
}
