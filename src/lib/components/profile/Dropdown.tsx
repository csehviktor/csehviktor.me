'use client'

import type { DropdownModel } from '@/lib/models/components'
import { useState } from 'react'
import { Header } from '@/lib/components/common/Header'
import { Headers } from '@/lib/models/variants'
import { IoIosArrowUp } from 'react-icons/io'
import { Icon } from '@/lib/components/common/Icon'

export const Dropdown = ({ title, subtitle, children, className }: DropdownModel) => {
    const [ open, setOpen ] = useState<boolean>(false)

    const toggleOpen = () => {
        setOpen(open => !open)
    }
    const transClass = open ? 'max-h-96 duration-500' : 'max-h-0 duration-200'
    const transIcon = open ? 'rotate-180' : 'rotate-0'

    return(
        <div className={`min-w-full max-w-[40rem] relative rounded-xl my-5 pb-2 p-5 bg-[#d6d6d6] dark:bg-[#0e0f10] ${className}`}>
            <div className="min-w-full flex items-center cursor-pointer justify-between" onClick={() => toggleOpen()}>
                <Header type={Headers.SUBTITLE} className="text-lg w-full select-none dark:text-white">
                    { title }
                    <span className="text-sm ml-2 text-[#8c8c8c]">{ subtitle }</span>
                </Header>
                <Icon
                    color="#696969"
                    type={IoIosArrowUp}
                    className={`justify-end transition-transform duration-200 ease-linear ${transIcon}`}
                />
            </div>
            <div className={`flex flex-col transition-all ease-linear rounded-md overflow-hidden mt-3 ${transClass}`}>
                { children }
            </div>
        </div>
    )
}