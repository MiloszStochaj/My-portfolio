import { Outlet } from 'react-router-dom'
import { ScrollToTop, Sidebar, SkipLink } from '@/components/layout'
import { NavigationProvider, useNavigation } from '@/context/NavigationContext'
import { useSidebarLayout } from '@/hooks/useSidebarLayout'

function AppLayoutContent() {
  const { isMobileMenuOpen } = useNavigation()
  const isSidebarLayout = useSidebarLayout()
  const isContentHidden = isMobileMenuOpen && !isSidebarLayout

  return (
    <>
      <Sidebar />
      <div
        className="app-layout__content"
        aria-hidden={isContentHidden || undefined}
        {...(isContentHidden ? { inert: true } : {})}
      >
        <main className="app-layout__main" id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <ScrollToTop />
      </div>
    </>
  )
}

export function MainLayout() {
  return (
    <NavigationProvider>
      <SkipLink />
      <div className="app-layout">
        <AppLayoutContent />
      </div>
    </NavigationProvider>
  )
}
