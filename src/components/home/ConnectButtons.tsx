// src/components/home/ConnectButtons.tsx
'use client'
import { Variant } from 'motion/react'  // ou framer-motion selon votre import
import SpotifyIcon from "@/components/assets/icons/spotify-music"
import YoutubeMusicIcon from "@/components/assets/icons/youtube-music"
import AppleMusicIcon from "@/components/assets/icons/apple-music"
import { ConnectButton } from "./ConnectButton"

// src/components/home/ConnectButtons.tsx
const buttons = [
    { icon: SpotifyIcon, label: 'Spotify', color: '#1DB954' },
    { icon: YoutubeMusicIcon, label: 'Youtube', color: '#FF0000' },
    { icon: AppleMusicIcon, label: 'Apple', color: '#FA57C1' }
] as const;

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