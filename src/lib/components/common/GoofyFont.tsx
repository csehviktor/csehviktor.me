import type { DescriptionModel } from '@/lib/models/components'
import { VT323 } from 'next/font/google'

const goofyFont = VT323({ subsets: ['latin'], weight: '400' })

export const GoofyFont = ({ children, className }: DescriptionModel) => {
    return(
        <div className={`${goofyFont.className} ${className}`}>
            { children }
        </div>
    )
}