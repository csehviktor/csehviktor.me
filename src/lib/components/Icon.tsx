import type { IconModel } from '@/lib/models/elements'
import { createElement } from 'react'
import { ImageWrapper } from '@/lib/components/wrapper/ImageWrapper'

export const Icon = ({ source, className }: IconModel) => {
    if(typeof source.icon === 'string') return <ImageWrapper className={className} src={source.icon} />

    return (
        <div style={{ color: source.color }} className={className}>
            { createElement(source.icon) }
        </div>
    )
}