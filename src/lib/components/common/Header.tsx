import type { HeaderModel } from '@/lib/models/components'
import { Headers } from '@/lib/models/variants'

export const Header = ({ children, type, className }: HeaderModel) => {
    return(
        <h1 className={`${className} font-semibold ${type === Headers.TITLE ? "text-3xl lg:text-5xl" : "text-2xl"}`}>
            { children }
        </h1>
    )
}