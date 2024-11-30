'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Hero } from './Hero'
import { ConnectButtons } from './ConnectButtons'
import { homeAnimations } from '@/lib/animations'
import { BetaButton } from "@/components/home/BetaButton"
import { CustomCursor } from "@/components/custom/CustomCursor"

const HomePage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden cursor-none">
            <CustomCursor />

            <motion.div
                className="absolute inset-0 -z-10 bg-background opacity-70"
                animate={{
                    background: [
                        `radial-gradient(1200px circle at ${mousePosition.x}% ${mousePosition.y}% , rgb(29 185 84 / 0.07), transparent 70%)`
                    ]
                }}
                transition={{
                    duration: 2,
                    ease: "linear"
                }}
            />

            <motion.div
                className="absolute inset-0 -z-10 bg-transparent opacity-50"
                animate={{
                    background: [
                        `radial-gradient(1000px circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(29 185 84 / 0.05), transparent 60%)`
                    ]
                }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
            />

            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background to-secondary/10" />

            <BetaButton />

            <div className="flex flex-col items-center justify-center min-h-screen">
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
        </div>
    )
}

export default HomePage