import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

type TimelineProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Timeline({ children, className, ...props }: TimelineProps) {
  return (
    <div className={clsx('timeline', className)} {...props}>
      {children}
    </div>
  )
}
