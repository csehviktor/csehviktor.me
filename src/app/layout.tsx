import type { Children } from '@/lib/models/elements'
import { siteProperties } from '@/lib/globals'
import { VT323 } from 'next/font/google'
import '@/app/globals.css'

const font = VT323({ subsets: ['latin'], weight: '400' })

export default function Layout({ children }: Children) {
    return (
        <html lang='zxx'>
            <body className={font.className}>
                <div className='flex justify-center'>
                    { children }
                </div>
            </body>
        </html>
    )
}
export const metadata = siteProperties.metadata
export const viewport = siteProperties.viewport