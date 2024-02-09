'use client'

import type { SWRSubscriptionOptions } from 'swr/subscription'
import type { SongProps, SpotifyProps } from '@/lib/models/props'
import { RiMusicFill  } from 'react-icons/ri'
import { Icon } from '@/lib/components/common/Icon'
import { Description } from '@/lib/components/common/Description'
import { GoofyFont } from '@/lib/components/common/GoofyFont'
import { truncate } from '@/lib/utils'
import { useState } from 'react'
import Link from 'next/link'
import useSWRSubscription from 'swr/subscription'

export const SpotifyCard = ({ defaultUrl, defaultTitle }: SongProps) => {
    const [ spotify, setSpotify ] = useState<SpotifyProps>()

    useSWRSubscription(process.env.WS_ENDPOINT ?? 'ws://localhost:1337', (key: string | URL, { next }: SWRSubscriptionOptions) => {
        const socket = new WebSocket(key)

        socket.onopen = () => socket.send('HELP')
        socket.onmessage = ({ data }: { data: string }) => next(null, setSpotify(JSON.parse(data) as SpotifyProps))

        return () => {
            if (socket.readyState === 1) socket.close()
        }  
    })

    if(spotify && spotify.is_playing) {
        defaultUrl = spotify.item.external_urls.spotify
        defaultTitle = spotify.item.name
    }
    
    return(
        <GoofyFont className="flex items-center space-x-2 text-lg md:text-xl lg:text-2xl">
            <Icon color="#575757" type={RiMusicFill} />
            <div className="flex justify-center space-x-2">
                <Description className="hidden lg:flex">currently listening to </Description>
                <Link href={defaultUrl} target="_blank" className="font-semibold text-[#0a8f3b] dark:text-[#6fcc6a]">
                    { truncate(defaultTitle, 30) }
                </Link>
            </div>
        </GoofyFont>
    )
}   