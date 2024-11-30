'use client'
import { motion, Variant } from 'motion/react'
import { Button } from "@/components/ui/button"

type ConnectButtonProps = {
    icon: React.ElementType
    label: string
    color: string
    variants: Variant
}

export const ConnectButton = ({
                                  icon: Icon,
                                  label,
                                  color,
                                  variants
                              }: ConnectButtonProps) => (
    <motion.div
        variants={variants}
        whileHover={{
            scale: 1.05,
            rotate: [-1, 1, -1, 0],
            transition: {
                rotate: {
                    repeat: 0,
                    duration: 0.5
                },
                scale: { duration: 0.2 }
            }
        }}
        whileTap={{ scale: 0.95 }}
    >
        <Button
            size="lg"
            variant="outline"
            className="gap-2 w-40 transition-colors duration-300"
            style={{
                '--hover-bg': `${color}10`
            } as React.CSSProperties}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${color}10`;
                e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'hsl(var(--border))'; // Remet la couleur de bordure par défaut
            }}
        >
            <Icon className="w-5 h-5"/>
            {label}
        </Button>
    </motion.div>
)