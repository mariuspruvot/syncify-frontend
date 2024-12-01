// src/lib/animations.ts

import { Variant } from "motion/react";

export const homeAnimations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  },
  explodingText: (index: number) => ({
    y: 1000,
    x: Math.random() * 200 - 100,
    rotate: Math.random() * 720 - 360,
    opacity: 0,
    transition: {
      duration: 2.5,
      delay: index * 0.1,
      ease: [0.2, 0.4, 0.8, 0.8],
    },
  }),
};

export interface HomeVariants {
  hidden: Variant;
  show: Variant;
}
