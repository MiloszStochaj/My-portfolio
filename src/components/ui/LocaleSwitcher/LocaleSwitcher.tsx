import clsx from 'clsx'
import { motion } from 'framer-motion'
import { LOCALE_LABELS } from '@/config/locale'
import { useLocale } from '@/context/LocaleContext'
import { useNavigationContent } from '@/hooks/useNavigationContent'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { LOCALES } from '@/types/locale'

type LocaleSwitcherProps = {
  className?: string
  variant?: 'sidebar' | 'compact'
}

export function LocaleSwitcher({ className, variant = 'sidebar' }: LocaleSwitcherProps) {
  const { locale, setLocale } = useLocale()
  const navigation = useNavigationContent()
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={clsx(
        'locale-switcher',
        variant === 'compact' && 'locale-switcher--compact',
        className,
      )}
      role="group"
      aria-label={navigation.localeSectionLabel}
      layout={!prefersReducedMotion}
    >
      {LOCALES.map((item) => (
        <button
          key={item}
          type="button"
          className={clsx(
            'locale-switcher__button',
            locale === item && 'locale-switcher__button--active',
          )}
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
          aria-label={navigation.locale[item]}
          title={navigation.locale[item]}
        >
          <span className="locale-switcher__code">{LOCALE_LABELS[item]}</span>
        </button>
      ))}
    </motion.div>
  )
}
