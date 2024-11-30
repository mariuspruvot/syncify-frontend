// src/components/home/ConnectButton.tsx
'use client'
import { motion } from 'motion/react'
import { Button } from "@/components/ui/button"

type ConnectButtonProps = {
    icon: React.ElementType
    label: string
    variants: any
}

export const ConnectButton = ({ icon: Icon, label, variants }: ConnectButtonProps) => (
    <motion.div variants={variants}>
        <Button size="lg" variant="outline" className="gap-2 w-40">
            <Icon className="w-5 h-5"/>
            {label}
        </Button>
    </motion.div>
)