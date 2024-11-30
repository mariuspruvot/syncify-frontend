import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {bounceAnimation} from "@/components/home/animations/BounceAnimations";

export const BetaButton = () => {
    const [isAnimating, setIsAnimating] = useState(false)

    const handleClick = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 2.5,
                duration: 1.5,
                ease: "easeOut"
            }}
        >
            <motion.span
                className="inline-block"
                variants={bounceAnimation}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
            >
                <Badge
                    variant="secondary"
                    className={cn(
                        // Base styles
                        "cursor-none rounded-full",
                        // Text styles
                        "text-xs sm:text-sm text-primary font-medium",
                        // Padding
                        "px-2 py-1 sm:px-3 sm:py-1",
                        // Background
                        "bg-primary/5 hover:bg-spotify-green/30",
                        // Transitions
                        "transition-colors duration-600 ease"
                    )}
                    onClick={handleClick}
                    role="button"
                    aria-label="Beta"
                >
                    Beta
                </Badge>
            </motion.span>
        </motion.div>
    )
}