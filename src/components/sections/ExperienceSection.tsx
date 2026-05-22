import { Section } from '@/components/common'
import { Experience } from './experience'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      contained={false}
      className="section--experience"
      aria-labelledby="experience-title"
    >
      <Experience />
    </Section>
  )
}
