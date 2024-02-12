import type { Children } from '@/lib/models/components'

export const TooltipWrapper = ({ children }: Children) => {
    return(
        <div className="group relative flex justify-center">
            { children }
        </div>
    )
}