import type { ReactNode } from 'react'
import type { IconProps } from '@/lib/models/props'
import type { Headers } from '@/lib/models/variants'

export interface Children {
    children?: ReactNode
}

export interface ClassName {
    className?: string
}

export interface HeaderModel extends Children, ClassName {
    type?: Headers
}

export interface DropdownModel extends Children, ClassName {
    title: string
    subtitle: string
}

export interface IconModel extends IconProps, ClassName { }

export interface DescriptionModel extends Children, ClassName { }
