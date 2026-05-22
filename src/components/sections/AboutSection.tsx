import { Section } from '@/components/common'
import { About } from './about'

export function AboutSection() {
  return (
    <Section
      id="about"
      contained={false}
      className="section--about"
      aria-labelledby="about-title"
    >
      <About />
    </Section>
  )
}
