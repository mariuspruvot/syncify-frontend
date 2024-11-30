// src/components/home/ConnectButtons.tsx
'use client'
import { Variant } from 'motion/react'  // ou framer-motion selon votre import
import SpotifyIcon from "@/components/assets/icons/spotify-music"
import YoutubeMusicIcon from "@/components/assets/icons/youtube-music"
import AppleMusicIcon from "@/components/assets/icons/apple-music"
import { ConnectButton } from "./ConnectButton"

const buttons = [
    { icon: SpotifyIcon, label: 'Spotify' },
    { icon: YoutubeMusicIcon, label: 'Youtube' },
    { icon: AppleMusicIcon, label: 'Apple' }
] as const

interface ConnectButtonsProps {
    variants: {
        hidden: Variant;
        show: Variant;
    }
}

export const ConnectButtons = ({ variants }: ConnectButtonsProps) => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        {buttons.map(button => (
            <ConnectButton
                key={button.label}
                {...button}
                variants={variants}
            />
        ))}
    </div>
)