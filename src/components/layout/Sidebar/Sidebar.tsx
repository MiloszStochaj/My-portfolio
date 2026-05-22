import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { SOCIAL_LINKS } from '@/config/navigation'
import { SOCIAL_ICON_MAP } from '@/config/social-icons'
import { useNavigation } from '@/context/NavigationContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useNavigationContent } from '@/hooks/useNavigationContent'
import type { SectionId } from '@/types/navigation'
import { drawerVariants, overlayVariants } from './sidebar.motion'

function SidebarPanel({
  onNavClick,
  activeSection,
  variant = 'desktop',
}: {
  onNavClick: (event: MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => void
  activeSection: SectionId
  variant?: 'desktop' | 'mobile'
}) {
  const navigation = useNavigationContent()

  const localeSection = (
    <section className="sidebar__locale" aria-label={navigation.localeSectionLabel}>
      <h2 className="sidebar__section-label">{navigation.localeSectionLabel}</h2>
      <LocaleSwitcher />
    </section>
  )

  const themeSection = (
    <section className="sidebar__theme" aria-label={navigation.themeSectionLabel}>
      <h2 className="sidebar__section-label">{navigation.themeSectionLabel}</h2>
      <ThemeToggle />
    </section>
  )

  const preferences =
    variant === 'mobile' ? (
      <section className="sidebar__preferences sidebar__preferences--mobile">
        {localeSection}
        {themeSection}
      </section>
    ) : (
      <section className="sidebar__preferences">
        {themeSection}
        {localeSection}
      </section>
    )

  const nav = (
    <nav className="sidebar__nav" aria-label="Primary">
        <h2 className="sidebar__section-label">{navigation.navSectionLabel}</h2>
        <ul className="sidebar__nav-list">
          {navigation.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  'sidebar__nav-link',
                  activeSection === item.id && 'sidebar__nav-link--active',
                )}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={(event) => onNavClick(event, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  )

  const status = (
    <section className="sidebar__status" aria-label={navigation.statusSectionLabel}>
        <h2 className="sidebar__section-label">{navigation.statusSectionLabel}</h2>
        <div className="sidebar__status-badge">
          <span className="sidebar__status-dot" aria-hidden />
          <span>{navigation.status.label}</span>
        </div>
    </section>
  )

  const footer = (
    <footer className="sidebar__footer">
        <ul className="sidebar__social-list" aria-label="Social links">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICON_MAP[link.id as keyof typeof SOCIAL_ICON_MAP]

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="sidebar__social-link"
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                >
                  {Icon ? <Icon size={20} aria-hidden /> : link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a href={navigation.cv.href} className="sidebar__cv-link mono">
          {navigation.cv.label}
        </a>
    </footer>
  )

  if (variant === 'mobile') {
    return (
      <>
        {preferences}
        {nav}
        {status}
        {footer}
      </>
    )
  }

  return (
    <>
      {nav}
      {status}
      {preferences}
      {footer}
    </>
  )
}

export function Sidebar() {
  const navigation = useNavigationContent()
  const prefersReducedMotion = useReducedMotion()
  const drawerRef = useRef<HTMLElement>(null)
  const {
    activeSection,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToSection,
  } = useNavigation()

  useEffect(() => {
    if (!isMobileMenuOpen || !drawerRef.current) return

    const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    firstFocusable?.focus()
  }, [isMobileMenuOpen])

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  const instantTransition = { duration: 0 }
  const overlayMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: instantTransition,
      }
    : {
        variants: overlayVariants,
        initial: 'hidden' as const,
        animate: 'visible' as const,
        exit: 'exit' as const,
      }
  const drawerMotion = prefersReducedMotion
    ? {
        initial: { x: 0 },
        animate: { x: 0 },
        exit: { x: 0 },
        transition: instantTransition,
      }
    : {
        variants: drawerVariants,
        initial: 'hidden' as const,
        animate: 'visible' as const,
        exit: 'exit' as const,
      }

  return (
    <>
      {/* Tablet / phone — visibility controlled in SCSS */}
      <header className="sidebar-mobile-bar" aria-label="Site navigation">
        <a
          href="#hero"
          className="sidebar__brand"
          onClick={(event) => handleNavClick(event, 'hero')}
        >
          <span className="sidebar__brand-name">{navigation.brand.name}</span>
          <span className="sidebar__brand-role mono">{navigation.brand.role}</span>
        </a>

        <button
          type="button"
          className="sidebar__menu-toggle"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="sidebar-drawer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X size={24} aria-hidden />
          ) : (
            <Menu size={24} aria-hidden />
          )}
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              className="sidebar-overlay"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              {...overlayMotion}
            />

            <motion.aside
              ref={drawerRef}
              id="sidebar-drawer"
              className="sidebar-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              {...drawerMotion}
            >
              <div className="sidebar-drawer__inner">
                <SidebarPanel
                  variant="mobile"
                  onNavClick={handleNavClick}
                  activeSection={activeSection}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Laptop / desktop — fixed dashboard sidebar (always in DOM, CSS toggles) */}
      <aside className="sidebar sidebar--desktop" aria-label="Site navigation">
        <div className="sidebar__inner">
          <div className="sidebar__header">
            <a
              href="#hero"
              className="sidebar__brand"
              onClick={(event) => handleNavClick(event, 'hero')}
            >
              <span className="sidebar__brand-name">{navigation.brand.name}</span>
              <span className="sidebar__brand-role mono">{navigation.brand.role}</span>
            </a>
          </div>

          <div className="sidebar__panel sidebar__panel--desktop">
            <SidebarPanel
              onNavClick={handleNavClick}
              activeSection={activeSection}
            />
          </div>
        </div>
      </aside>
    </>
  )
}
