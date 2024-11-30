export const bounceAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: {
        y: [0, -20, 0],
        rotate: [0, -10, 10, -10, 0],
        transition: {
            duration: 1,
            times: [0, 0.4, 1],
            rotate: {
                times: [0, 0.2, 0.5, 0.8, 1]
            }
        }
    }
}
