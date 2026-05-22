import { Section } from '@/components/common'
import { Hero } from './hero'

export function HeroSection() {
  return (
    <Section id="hero" contained={false} className="section--hero" aria-label="Hero">
      <Hero />
    </Section>
  )
}
