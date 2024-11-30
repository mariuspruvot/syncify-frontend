// src/components/home/Hero.tsx
'use client'
import { motion } from 'motion/react'

const HERO_TEXT = {
    title: "Syncify",
    subtitle: "Share music with your friends. Together."
} as const

export const Hero = ({ variants }: { variants: any }) => (
    <>
        <motion.h1
            variants={variants}
            className="text-4xl font-bold tracking-normal sm:text-6xl text-primary"
        >
            {HERO_TEXT.title}
        </motion.h1>
        <motion.p
            variants={variants}
            className="text-xl text-muted-foreground max-w-prose mx-auto"
        >
            {HERO_TEXT.subtitle}
        </motion.p>
    </>
)