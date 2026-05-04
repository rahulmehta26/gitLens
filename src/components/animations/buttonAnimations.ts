import type { Variants } from "motion";

export const leftIconVariants: Variants = {
  initial: {
    x: -40,
    opacity: 0,
    filter: "blur(8px)",
  },
  hover: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const rightIconVariants: Variants = {
  initial: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  hover: {
    x: 40,
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

export const moveRight: Variants = {
  hover: {
    x: 5,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};
