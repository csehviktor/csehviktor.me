'use client'

import type { Children } from '@/lib/models/components'
import { ThemeProvider } from 'next-themes'

export default function({ children }: Children) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            { children }
        </ThemeProvider>
    )
}