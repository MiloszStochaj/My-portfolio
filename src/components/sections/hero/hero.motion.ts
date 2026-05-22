import type { Variants } from 'framer-motion'
import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_OFFSET_Y,
  MOTION_STAGGER,
  MOTION_STAGGER_DELAY,
} from '@/config/motion'

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION_STAGGER + 0.02,
      delayChildren: MOTION_STAGGER_DELAY,
    },
  },
}

export const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: MOTION_OFFSET_Y + 4,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION + 0.05,
      ease: MOTION_EASE,
    },
  },
}
