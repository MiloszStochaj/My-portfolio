import { useLocale } from '@/context/LocaleContext'

export function useExperienceContent() {
  const { content } = useLocale()
  return content.experience
}
