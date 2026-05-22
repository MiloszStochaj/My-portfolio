import type { Variants } from 'framer-motion'
import {
  MOTION_DURATION,
  MOTION_DURATION_SLOW,
  MOTION_EASE,
  MOTION_OFFSET_Y,
  MOTION_STAGGER,
  MOTION_STAGGER_DELAY,
  MOTION_VIEWPORT,
} from '@/config/motion'

export const sectionViewport = MOTION_VIEWPORT

export const sectionStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION_STAGGER,
      delayChildren: MOTION_STAGGER_DELAY,
    },
  },
}

export const sectionFadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: MOTION_OFFSET_Y,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION,
      ease: MOTION_EASE,
    },
  },
}

export const sectionFadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATION_SLOW,
      ease: MOTION_EASE,
    },
  },
}

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}

export function getSectionMotionVariants(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) {
    return {
      stagger: reducedMotionVariants,
      fadeUp: reducedMotionVariants,
      fadeIn: reducedMotionVariants,
    }
  }

  return {
    stagger: sectionStaggerVariants,
    fadeUp: sectionFadeUpVariants,
    fadeIn: sectionFadeInVariants,
  }
}
