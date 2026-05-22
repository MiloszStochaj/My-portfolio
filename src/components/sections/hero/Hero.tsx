import { motion } from 'framer-motion'
import { useHeroContent } from '@/hooks/useHeroContent'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { getSectionMotionVariants } from '@/components/sections/shared/section.motion'
import { heroContainerVariants, heroItemVariants } from './hero.motion'

export function Hero() {
  const { greeting, heading, subtitle, description, ctas } = useHeroContent()
  const prefersReducedMotion = useReducedMotion()
  const motionVariants = getSectionMotionVariants(prefersReducedMotion)

  const containerVariants = prefersReducedMotion
    ? motionVariants.stagger
    : heroContainerVariants
  const itemVariants = prefersReducedMotion
    ? motionVariants.fadeUp
    : heroItemVariants

  return (
    <motion.div
      className="hero__inner"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="hero__greeting mono" variants={itemVariants}>
        {greeting}
      </motion.p>

      <motion.h1 className="hero__heading" variants={itemVariants}>
        {heading.lead}
        <span className="hero__heading-muted">{heading.muted}</span>
        {heading.trail}
      </motion.h1>

      <motion.h2 className="hero__subtitle" variants={itemVariants}>
        {subtitle}
      </motion.h2>

      <motion.p className="hero__description" variants={itemVariants}>
        {description}
      </motion.p>

      <motion.div className="hero__actions" variants={itemVariants}>
        <a href={ctas.primary.href} className="hero__cta hero__cta--primary">
          {ctas.primary.label}
        </a>
        <a
          href={ctas.secondary.href}
          className="hero__cta hero__cta--secondary"
        >
          {ctas.secondary.label}
        </a>
      </motion.div>
    </motion.div>
  )
}
