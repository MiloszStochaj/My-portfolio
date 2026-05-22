import { useLocale } from '@/context/LocaleContext'

export function useAboutContent() {
  const { content } = useLocale()
  return content.about
}
