import { Section } from '@/components/common'
import { Skills } from './skills'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      contained={false}
      className="section--skills"
      aria-labelledby="skills-title"
    >
      <Skills />
    </Section>
  )
}
