'use client'

import { useTheme } from 'next-themes'
import { VscColorMode } from 'react-icons/vsc'
import { Themes } from '@/lib/models/variants'
import { Icon } from '@/lib/components/common/Icon'

export const Switcher = () => {
    const { setTheme, resolvedTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === Themes.LIGHT 
            ? Themes.DARK 
            : Themes.LIGHT
        )
    }

    return(
        <button onClick={() => toggleTheme()}>
            <Icon color={ undefined } type={ VscColorMode } className="text-2xl lg:text-3xl" label="themeSwitcher" />
        </button>
    )
}