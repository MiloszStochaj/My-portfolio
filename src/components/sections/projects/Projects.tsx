import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/cards'
import { SectionHeader } from '@/components/common'
import { SECTION_NUMBERS } from '@/config/sections'
import { useProjectsContent } from '@/hooks/useProjectsContent'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  getSectionMotionVariants,
  sectionViewport,
} from '@/components/sections/shared/section.motion'

export function Projects() {
  const { header, items } = useProjectsContent()
  const sectionNumber = SECTION_NUMBERS.projects!
  const motionVariants = getSectionMotionVariants(useReducedMotion())

  return (
    <div className="projects">
      <motion.div
        variants={motionVariants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <SectionHeader
          number={sectionNumber}
          title={header.title}
          id="projects-title"
          className="projects__header"
        />
      </motion.div>

      <motion.div
        className="projects__grid"
        variants={motionVariants.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        {items.map((project) => (
          <motion.div key={project.id} variants={motionVariants.fadeUp}>
            <ProjectCard
              projectId={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
