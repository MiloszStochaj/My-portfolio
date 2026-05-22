import { motion } from 'framer-motion'
import { SkillCard } from '@/components/cards'
import { SectionHeader } from '@/components/common'
import { SECTION_NUMBERS } from '@/config/sections'
import { useSkillsContent } from '@/hooks/useSkillsContent'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  getSectionMotionVariants,
  sectionViewport,
} from '@/components/sections/shared/section.motion'

export function Skills() {
  const { header, groups } = useSkillsContent()
  const sectionNumber = SECTION_NUMBERS.skills!
  const motionVariants = getSectionMotionVariants(useReducedMotion())

  return (
    <div className="skills">
      <motion.div
        variants={motionVariants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <SectionHeader
          number={sectionNumber}
          title={header.title}
          id="skills-title"
          className="skills__header"
        />
      </motion.div>

      <motion.div
        className="skills__grid"
        variants={motionVariants.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        {groups.map((group) => (
          <motion.div key={group.id} variants={motionVariants.fadeUp}>
            <SkillCard
              groupId={group.id}
              title={group.title}
              items={group.items}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
