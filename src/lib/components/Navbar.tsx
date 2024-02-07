import type { IconModel } from '@/lib/models/components'
import { Icon } from '@/lib/components/common/Icon'
import { Tooltip } from '@/lib/components/common/Tooltip'
import { TooltipWrapper } from '@/lib/components/common/TooltipWrapper'
import Link from 'next/link'

export const Navbar = ({ items }: { items: IconModel[] }) => {
    return(
        <div className="flex justify-center fixed bottom-10 w-full">
            <div className="flex justify-around items-center min-w-fit px-8 py-5 lg:py-6 rounded-3xl opacity-95 bg-[#d6d6d6] dark:bg-[#0e0f10]">
                { items.map((item) => {
                    return (
                        <TooltipWrapper key={item.label}>
                            <Tooltip label={item.label} />
                            <Link href={item.path!}>
                                <Icon
                                    label={item.label}
                                    color={item.color}
                                    type={item.type}
                                    className="text-2xl md:text-3xl mx-3 md:mx-5 p-5 rounded-2xl cursor-pointer transition-colors duration-300 ease-in-out bg-[#d0d0d0] dark:bg-[#16181a] hover:bg-[#cdcdcd] hover:dark:bg-[#1b1d1f]"
                                />
                            </Link>
                        </TooltipWrapper>
                    )
                }) }
            </div>
        </div>
    )
}