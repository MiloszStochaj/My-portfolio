import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

type SectionHeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  number: string
  title: string
}

export function SectionHeader({
  number,
  title,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <h2 className={clsx('section-header', className)} {...props}>
      {number}. {title}
    </h2>
  )
}
