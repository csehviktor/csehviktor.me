import type { IconType } from 'react-icons'
import type { Metadata, Viewport } from 'next'

export interface SiteProp {
    metadata: Metadata
    viewport: Viewport
}

export interface IconProp {
    icon: IconType | string
    label?: string
    path?: string
    color?: string
}

export interface HeaderSection {
    avatar: string
    name: string
    socials: {
        label?: string
        url: string
        icon: IconProp
    }[]
}

export interface BaseSection {
    title: string
    card?: CardProp[]
    description?: string[] | IconProp[]
}

export interface CardProp {
    icon?: IconProp
    color?: string
    title: string
    description: string
}

export interface CurrentTrack {
    item: {
        name: string
        external_urls: {
            spotify: string
        }
    }
    is_playing: boolean
}
