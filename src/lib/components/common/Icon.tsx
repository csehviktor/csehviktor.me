import type { IconModel } from '@/lib/models/components'
import { createElement } from 'react'

export const Icon = ({ type, color, label, className }: IconModel) => {
    return (
        <div className={className} key={label} style={{ color: color }}>
            { createElement(type) }
        </div>
    )
}