// src/lib/animations.ts
export const homeAnimations = {
    container: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3,
            }
        }
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    }
}