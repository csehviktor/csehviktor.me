import type { WrapperModel } from '@/lib/models/elements'

export const CardWrapper = ({ children, className }: WrapperModel) => {
    return(
        <div className={`max-h-full px-3 gap-5 ${className}`}>
            { children }
        </div>
    )
}