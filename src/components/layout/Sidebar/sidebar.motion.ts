import type { Variants } from 'framer-motion'
import { MOTION_EASE } from '@/config/motion'

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: MOTION_EASE },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: MOTION_EASE },
  },
}

export const drawerVariants: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: MOTION_EASE },
  },
  exit: {
    x: '-100%',
    transition: { duration: 0.28, ease: MOTION_EASE },
  },
}
