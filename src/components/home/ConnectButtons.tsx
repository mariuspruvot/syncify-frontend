'use client'
import { Variant } from 'motion/react'
import SpotifyIcon from "@/components/assets/icons/spotify-music"
import YoutubeMusicIcon from "@/components/assets/icons/youtube-music"
import AppleMusicIcon from "@/components/assets/icons/apple-music"
import { ConnectButton } from "./ConnectButton"
import { cn } from "@/lib/utils"

interface MusicService {
    icon: React.ElementType
    label: string
    color: string
}

interface ConnectButtonsProps {
    variants: {
        hidden: Variant
        show: Variant
    }
}

const MUSIC_SERVICES: MusicService[] = [
    { icon: SpotifyIcon, label: 'Spotify', color: '#1DB954' },
    { icon: YoutubeMusicIcon, label: 'Youtube', color: '#FF0000' },
    { icon: AppleMusicIcon, label: 'Apple', color: '#FA57C1' }
] as const

export const ConnectButtons = ({ variants }: ConnectButtonsProps) => (
    <div
        className={cn(
            "flex flex-col sm:flex-row",
            "gap-4",
            "justify-center",
            "mt-8"
        )}
    >
        {MUSIC_SERVICES.map(service => (
            <ConnectButton
                key={service.label}
                {...service}
                variants={variants}
            />
        ))}
    </div>
)