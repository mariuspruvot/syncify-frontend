'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleHoverStart = () => setIsHovering(true)
        const handleHoverEnd = () => setIsHovering(false)

        window.addEventListener('mousemove', updateMousePosition)

        const clickables = document.querySelectorAll('.clickable, button, a, [role="button"]')
        clickables.forEach(element => {
            element.addEventListener('mouseenter', handleHoverStart)
            element.addEventListener('mouseleave', handleHoverEnd)
        })

        // Observer pour détecter quand le titre Syncify est ajouté
        const observer = new MutationObserver(() => {
            const syncifyTitle = document.querySelector('.syncify-title')
            if (syncifyTitle) {
                syncifyTitle.addEventListener('mouseenter', handleHoverStart)
                syncifyTitle.addEventListener('mouseleave', handleHoverEnd)
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            clickables.forEach(element => {
                element.removeEventListener('mouseenter', handleHoverStart)
                element.removeEventListener('mouseleave', handleHoverEnd)
            })
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary/50 rounded-full pointer-events-none z-[100]"
                animate={{
                    x: mousePosition.x - 5,
                    y: mousePosition.y - 5,
                    scale: isHovering ? 2 : 1
                }}
                transition={{
                    type: "spring",
                    damping: 15,
                    mass: 0.1,
                    stiffness: 200
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 border border-primary/20 rounded-full pointer-events-none z-[100]"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isHovering ? 2 : 1
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    mass: 0.15,
                    stiffness: 150
                }}
            />
        </>
    )
}