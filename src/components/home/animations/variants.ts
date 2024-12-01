export const buttonAnimations = {
  beta: {
    container: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: 2.5,
        duration: 1.5,
        ease: "easeOut",
      },
    },
    badge: {
      initial: { y: 0, rotate: 0 },
      animate: {
        y: [0, -20, 0],
        rotate: [0, -10, 10, -10, 0],
        transition: {
          duration: 1,
          times: [0, 0.4, 1],
          rotate: {
            times: [0, 0.2, 0.5, 0.8, 1],
          },
        },
      },
    },
  },
  modeToggle: {
    container: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 2.5,
        duration: 1.5,
        ease: "easeOut",
      },
    },
  },
};
