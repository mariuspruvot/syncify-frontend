'use client'
import { motion } from 'motion/react'
import { Hero } from './Hero'
import { ConnectButtons } from './ConnectButtons'
import { homeAnimations } from '@/lib/animations'
import {BetaButton} from "@/components/home/BetaButton";
import {Cursor} from "@/components/cursor/Cursor";

const HomePage = () => {
    return (

        // Add a relative container for absolute positioning
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-background to-secondary/20 cursor-none">
            <Cursor />

            {/* Animated background: slowly moving radial gradient */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 20%, rgba(29, 185, 84, 0.03) 0%, transparent 100%)",
                        "radial-gradient(circle at 80% 80%, rgba(29, 185, 84, 0.03) 0%, transparent 100%)",
                        "radial-gradient(circle at 20% 20%, rgba(29, 185, 84, 0.03) 0%, transparent 50%)"
                    ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Beta badge - top right corner */}

                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <BetaButton/>
                </div>

            {/* Main content container */}
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">


                <motion.div
                    className="text-center space-y-4 sm:space-y-6"
                    variants={homeAnimations.container}
                    initial="hidden"
                    animate="show"
                >
                    <Hero variants={homeAnimations.item}/>
                    <ConnectButtons variants={homeAnimations.item}/>
                </motion.div>
            </div>
        </div>
    )
}

export default HomePage