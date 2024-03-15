import type { IconProp } from '@/lib/models/props'
import type { ReactNode } from 'react'

export interface ClassName { 
    className?: string 
}

export interface Children { 
    children?: Readonly<ReactNode> 
}

export interface SongModel {
    defaultUrl: string
    defaultTitle: string
}

export interface CardModel extends Children {
    color: string,
}

export interface IconModel extends ClassName {
    source: IconProp
}

export interface ImageWrapperModel extends WrapperModel {
    src: string
    size?: number
}

export interface WrapperModel extends Children, ClassName { }
