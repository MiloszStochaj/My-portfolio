import { useLocale } from '@/context/LocaleContext'

export function useSkillsContent() {
  const { content } = useLocale()
  return content.skills
}
