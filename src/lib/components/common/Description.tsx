import type { DescriptionModel } from '@/lib/models/components'

export const Description = ({ children, className }: DescriptionModel) => {
    return(
        <div className={`text-[#292929] dark:text-[#b0b0b0] ${className}`}>
            { children }
        </div>
    )
}