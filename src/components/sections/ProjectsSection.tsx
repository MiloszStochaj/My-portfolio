import { Section } from '@/components/common'
import { Projects } from './projects'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      contained={false}
      className="section--projects"
      aria-labelledby="projects-title"
    >
      <Projects />
    </Section>
  )
}
