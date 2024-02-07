'use client'

import Link from 'next/link'
import useSWRSubscription from 'swr/subscription'
import { RiMusicFill  } from 'react-icons/ri'
import { Icon } from '@/lib/components/common/Icon'
import { Description } from '@/lib/components/common/Description'
import { GoofyFont } from '@/lib/components/common/GoofyFont'
import { SongProps, SpotifyProps } from '@/lib/models/props'
import { truncate } from '@/lib/utils'

export const SpotifyCard = ({ defaultUrl, defaultTitle }: SongProps) => {
    var isPlaying = false

    const { data } = useSWRSubscription<SpotifyProps, any>(process.env.WS_ENDPOINT ?? 'ws://localhost:8080', (key: string | URL, { next }: any) => {
        const socket = new WebSocket(key)

        socket.onopen = () => socket.send('HELP')
        socket.onmessage = (event) => next(null, JSON.parse(event.data))

        return () => {
            if (socket.readyState === 1) socket.close()
        }  
    })

    if(data && data.is_playing) {
        defaultUrl = data.item.external_urls.spotify
        defaultTitle = data.item.name
        isPlaying = data.is_playing
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