/** Pixels from viewport bottom to treat page as “at end” (footer active). */
export const SCROLL_BOTTOM_THRESHOLD_PX = 80

/**
 * Activation line as ratio of viewport height from the top (matches prior IO rootMargin intent).
 */
export const SCROLL_SPY_VIEWPORT_RATIO = 0.2

export function getScrollOffset(): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    '--scroll-offset',
  )
  const parsed = Number.parseFloat(value)

  return Number.isNaN(parsed) ? 64 : parsed
}

export function getActivationScrollY(scrollY: number, offset: number): number {
  return scrollY + offset + window.innerHeight * SCROLL_SPY_VIEWPORT_RATIO
}

export function isNearPageBottom(scrollY: number): boolean {
  return (
    scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - SCROLL_BOTTOM_THRESHOLD_PX
  )
}
