import { useLocale } from '@/context/LocaleContext'

export function useNavigationContent() {
  const { content } = useLocale()
  return content.navigation
}
