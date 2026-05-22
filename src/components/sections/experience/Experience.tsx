import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'
import { Timeline, TimelineItem } from '@/components/timeline'
import { SECTION_NUMBERS } from '@/config/sections'
import { useExperienceContent } from '@/hooks/useExperienceContent'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  getSectionMotionVariants,
  sectionViewport,
} from '@/components/sections/shared/section.motion'

export function Experience() {
  const { header, items } = useExperienceContent()
  const sectionNumber = SECTION_NUMBERS.experience!
  const motionVariants = getSectionMotionVariants(useReducedMotion())

  return (
    <div className="experience">
      <motion.div
        variants={motionVariants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <SectionHeader
          number={sectionNumber}
          title={header.title}
          id="experience-title"
          className="experience__header"
        />
      </motion.div>

      <Timeline>
        <motion.ol
          className="timeline__list"
          variants={motionVariants.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
        >
          {items.map((item) => (
            <motion.li
              key={item.id}
              className="timeline__item"
              variants={motionVariants.fadeUp}
            >
              <TimelineItem
                dateRange={item.dateRange}
                role={item.role}
                company={item.company}
                achievements={item.achievements}
              />
            </motion.li>
          ))}
        </motion.ol>
      </Timeline>
    </div>
  )
}
