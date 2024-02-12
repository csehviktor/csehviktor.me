import type { Children } from '@/lib/models/components'
import { Inter } from 'next/font/google'
import { Margin } from '@/lib/components/Margin'
import { Navbar } from '@/lib/components/Navbar'
import { Switcher } from '@/lib/components/Switcher'
import { SpotifyCard } from '@/lib/components/profile/SpotifyCard'
import { globalData, navbarItems, siteProperties } from '@/lib/globals'
import Providers from '@/app/providers'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function({ children }: Children) {
    return (
        <html lang="zxx" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <Margin>
                        <div className="min-w-full flex items-center justify-between">
                            <SpotifyCard
                                defaultUrl={globalData.socials[2].url ?? 'https://open.spotify.com/'}
                                defaultTitle='nothing'
                            />
                            <Switcher />
                        </div>
                        { children }
                    </Margin>
                </Providers>
                <Navbar items={navbarItems} />
            </body>
        </html>
    )
}
export const metadata = siteProperties.metadata
export const viewport = siteProperties.viewport