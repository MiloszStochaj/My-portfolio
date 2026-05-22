import { motion } from 'framer-motion'
import profileImage from '@/assets/images/profile.jpg'
import { SectionHeader } from '@/components/common'
import { SECTION_NUMBERS } from '@/config/sections'
import { useAboutContent } from '@/hooks/useAboutContent'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  getSectionMotionVariants,
  sectionViewport,
} from '@/components/sections/shared/section.motion'

export function About() {
  const { header, paragraphs, image } = useAboutContent()
  const sectionNumber = SECTION_NUMBERS.about!
  const motionVariants = getSectionMotionVariants(useReducedMotion())

  return (
    <div className="about">
      <motion.div
        className="about__media"
        variants={motionVariants.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <img
          src={profileImage}
          alt={image.alt}
          className="about__image"
          loading="lazy"
          decoding="async"
          width={1288}
          height={1288}
        />
        <div className="about__overlay" aria-hidden />
      </motion.div>

      <motion.div
        className="about__content"
        variants={motionVariants.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={motionVariants.fadeUp}>
          <SectionHeader
            number={sectionNumber}
            title={header.title}
            id="about-title"
          />
        </motion.div>

        <div className="about__paragraphs">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="about__paragraph"
              variants={motionVariants.fadeUp}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
