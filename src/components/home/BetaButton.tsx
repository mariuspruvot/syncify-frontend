import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"

export const BetaButton = () => {
    const [isAnimating, setIsAnimating] = useState(false)

    const bounceAnimation = {
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

    const handleClick = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
        }
    }

    return (
        <motion.div
            className="absolute top-6 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
        >
            <motion.span
                style={{ display: 'inline-block' }}
                variants={bounceAnimation}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
            >
                <Badge
                    variant="secondary"
                    className="text-xs bg-primary/5 hover:bg-primary/10 text-primary px-3 py-1 rounded-full font-medium  cursor-none"
                    onClick={handleClick}
                    role="button"
                >
                    Beta
                </Badge>
            </motion.span>
        </motion.div>
    )
}