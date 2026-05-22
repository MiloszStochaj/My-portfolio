import { useLocale } from '@/context/LocaleContext'

export function useHeroContent() {
  const { content } = useLocale()
  return content.hero
}
