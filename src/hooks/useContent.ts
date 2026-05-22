import { useLocale } from '@/context/LocaleContext'

export function useContent() {
  const { content } = useLocale()
  return content
}
