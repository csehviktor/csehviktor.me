import type { IconType } from 'react-icons'
import type { Socials } from '@/lib/models/variants'
import type { Metadata, Viewport } from 'next'

export interface SpotifyProps {
    item: {
        name: string,
        external_urls: {
            spotify: string
        }
    }
    is_playing: boolean
}

export interface SiteProps {
    metadata: Metadata,
    viewport: Viewport
}

export interface IconProps {
    type: IconType
    label?: string
    path?: string
    color: string | undefined
}

export interface SocialProps {
    id: number
    label?: string
    url: string
    type: Socials
    icon: IconProps
}

export interface SongProps {
    defaultUrl: string
    defaultTitle: string
}

export interface CategoryProps {
    id: number
    label: string
    description?: string[]
    list?: {
        id: number,
        title: string
        subtitle: string
        description: string[]
    }[]
}

export interface GlobalProps {
    avatar: string
    name: string
    socials: SocialProps[]
}
