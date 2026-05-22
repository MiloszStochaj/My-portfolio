/**
 * Sidebar vs mobile navigation (aligned with Tailwind `lg` / original dashboard layout)
 * - < 1024px: phone + tablet → hamburger + drawer
 * - >= 1024px: laptop + desktop → fixed sidebar (w-80 / 32rem)
 */
export const SIDEBAR_MIN_WIDTH_PX = 1024

export const sidebarMediaQuery = `(min-width: ${SIDEBAR_MIN_WIDTH_PX}px)`

export const mobileNavMediaQuery = `(max-width: ${SIDEBAR_MIN_WIDTH_PX - 1}px)`
