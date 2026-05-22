import { useLocale } from '@/context/LocaleContext'

export function useFooterContent() {
  const { content } = useLocale()
  return content.footer
}
