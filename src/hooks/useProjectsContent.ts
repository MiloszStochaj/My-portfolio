import { useLocale } from '@/context/LocaleContext'

export function useProjectsContent() {
  const { content } = useLocale()
  return content.projects
}
