// src/components/home/HomePage.tsx
'use client'
import { motion } from 'motion/react'
import { Hero } from './Hero'
import { ConnectButtons } from './ConnectButtons'
import { homeAnimations } from '@/lib/animations'

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <motion.div
                className="text-center space-y-6"
                variants={homeAnimations.container}
                initial="hidden"
                animate="show"
            >
                <Hero variants={homeAnimations.item} />
                <ConnectButtons variants={homeAnimations.item} />
            </motion.div>
        </div>
    )
}

export default HomePage