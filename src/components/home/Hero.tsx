'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import { homeAnimations, HomeVariants } from '@/lib/animations'
import {HERO_TEXT} from "@/lib/constants/text";

interface HeroProps {
    variants: HomeVariants
}

export const Hero = ({ variants }: HeroProps) => {
    const [isExploded, setIsExploded] = useState(false)

    const resetAnimation = () => {
        setIsExploded(false)
    }

    return (
        <>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold tracking-normal sm:text-6xl text-primary cursor-pointer relative"
                    onClick={() => !isExploded && setIsExploded(true)}
                >
                    {HERO_TEXT.title.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            style={{ display: 'inline-block' }}
                            animate={isExploded ? homeAnimations.explodingText(index) : {}}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {isExploded && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            onClick={resetAnimation}
                            className="absolute top-1 left-1/2 -translate-x-1/2 text-sm bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
                        >
                            Reset
                        </motion.button>
                    )}
                </motion.div>
            </div>
            <motion.p
                variants={variants}
                className="text-xl text-muted-foreground max-w-prose mx-auto"
            >
                {HERO_TEXT.subtitle}
            </motion.p>
        </>
    )
}