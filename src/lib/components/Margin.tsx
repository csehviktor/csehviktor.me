import type { Children } from '@/lib/models/components'

export const Margin = ({ children}: Children) => {
    return(
        <div className={`max-h-screen transition-all duration-300 m-[5%] my-[8%] xl:my-[5%] 2xl:my-[5%] 2xl:mx-[15%] flex flex-col items-center`}>
            { children }
        </div>
    )
}