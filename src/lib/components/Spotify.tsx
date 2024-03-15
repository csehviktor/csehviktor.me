'use client'
import type { SWRSubscriptionOptions } from 'swr/subscription'
import type { CurrentTrack } from '@/lib/models/props'
import type { SongModel } from '@/lib/models/elements'
import { truncate } from '@/lib/utils'
import { useState } from 'react'
import Link from 'next/link'
import useSWRSubscription from 'swr/subscription'

export const Spotify = ({ defaultUrl, defaultTitle }: SongModel) => {
    const [ spotify, setSpotify ] = useState<CurrentTrack>()

    useSWRSubscription(process.env.WS_ENDPOINT ?? 'ws://localhost:1337', (key: string | URL, { next }: SWRSubscriptionOptions) => {
        const socket = new WebSocket(key)

        socket.onopen = () => socket.send('HELP')
        socket.onmessage = ({ data }: { data: string }) => next(null, setSpotify(JSON.parse(data) as CurrentTrack))

        return () => {
            if (socket.readyState === 1) socket.close()
        }  
    })

    if(spotify && spotify.is_playing) {
        defaultUrl = spotify.item.external_urls.spotify
        defaultTitle = spotify.item.name
    }
    
    return(
        <Link href={defaultUrl} target='_blank' aria-label='spotify url' className='font-semibold text-[#6fcc6a]'>
            { truncate(defaultTitle, 32) }
        </Link>
    )
}