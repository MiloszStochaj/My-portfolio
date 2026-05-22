import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useNavigationContent } from '@/hooks/useNavigationContent'

type ThemeToggleProps = {
  className?: string
  variant?: 'sidebar' | 'compact'
}

export function ThemeToggle({ className, variant = 'sidebar' }: ThemeToggleProps) {
  const { theme, toggleTheme, isDark } = useTheme()
  const navigation = useNavigationContent()
  const prefersReducedMotion = useReducedMotion()

  const label = isDark
    ? navigation.theme.switchToLight
    : navigation.theme.switchToDark

  const iconTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }

  const iconMotion = prefersReducedMotion
    ? undefined
    : {
        initial: { opacity: 0, rotate: -40, scale: 0.8 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: 40, scale: 0.8 },
      }

  return (
    <button
      type="button"
      className={clsx(
        'theme-toggle',
        variant === 'compact' && 'theme-toggle--compact',
        className,
      )}
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={!isDark}
      data-theme-state={theme}
    >
      <span className="theme-toggle__track" aria-hidden>
        <motion.span
          className="theme-toggle__thumb"
          layout
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 500, damping: 32 }
          }
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isDark ? 'moon' : 'sun'}
              className="theme-toggle__icon"
              transition={iconTransition}
              {...iconMotion}
            >
              {isDark ? <Moon size={16} strokeWidth={2} /> : <Sun size={16} strokeWidth={2} />}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </span>
      {variant === 'sidebar' && (
        <span className="theme-toggle__label">{label}</span>
      )}
    </button>
  )
}
