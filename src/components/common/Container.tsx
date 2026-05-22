import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import type { ContainerSize } from '@/types'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  size?: ContainerSize
}

export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'container',
        size !== 'default' && `container--${size}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
