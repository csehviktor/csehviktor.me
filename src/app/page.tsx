import { ImageWrapper } from '@/lib/components/wrapper/ImageWrapper'
import { Icon } from '@/lib/components/Icon'
import { Card } from '@/lib/components/Card'
import { Spotify } from '@/lib/components/Spotify'
import { CardWrapper } from '@/lib/components/wrapper/CardWrapper'
import { baseData, headerData, siteProperties } from '@/lib/globals'
import { truncate, parseURL, randomizeKey } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='my-48'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-y-5 gap-x-12 fade-in-animation animation-delay-100'>
                <ImageWrapper 
                    src={headerData.avatar} 
                    size={10}
                    className='rounded-3xl' 
                />
                <div className='flex flex-col'>
                    <h1 className='text-5xl md:text-6xl'>Cseh Viktor</h1>
                    <div className='text-[#5c5c5c]'>
                        { headerData.socials.map(social => {
                            return(
                                <Link key={randomizeKey(social.url)} href={social.url} target='_blank' aria-label='social url' className='flex justify-center md:justify-start items-center gap-x-1 text-xl md:text-2xl transition-colors duration-200 hover:text-[#9f9f9f]'>
                                    <Icon source={social.icon} />
                                    <p>{ parseURL(social.url) }</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <p className='m-5 text-center text-xl md:text-2xl fade-in-animation animation-delay-300'>{ siteProperties.metadata.description }</p>
            <div className='w-svw max-w-screen-lg min-h-fit'>
                { baseData.map(section => {
                    return(
                        <div key={randomizeKey(section.title)} className='mt-12 fade-in-animation animation-delay-500'>
                            <div className='px-5'>
                                <h1 className='text-3xl text-[#363636]'>{section.title}</h1>
                                <div className='mx-3'>
                                    { section.description?.map(line => {
                                        if(typeof line === 'object') {
                                            return (
                                                <Icon
                                                    key={randomizeKey(line.icon.length)}
                                                    source={line}
                                                    className='mr-3 my-3 inline-block text-4xl sm:text-5xl transition-transform duration-300 hover:scale-110' 
                                                />
                                            )
                                        }
                                        return <p key={randomizeKey(line)} className='my-3 text-xl md:text-2xl text-[#bbb]'>{ line }</p>
                                    })}
                                </div>
                            </div>
                            <CardWrapper className='flex flex-wrap md:flex-nowrap fade-in-animation animation-delay-700'>
                                { section.card?.map(card => {
                                    return(
                                        <Card key={randomizeKey(card.title)} color={card.color}>
                                            <div className='flex items-center gap-2'>
                                                { 
                                                    card.icon ? <Icon source={card.icon} className='w-7 h-7 mt-[1px]'/> : <></>
                                                }
                                                <h2 className='text-2xl sm:text-3xl'>{ card.title }</h2>
                                            </div>
                                            <p className='text-xl text-[#5c5c5c]'>{ truncate(card.description, 47) }</p>
                                        </Card>
                                    )
                                })}
                            </CardWrapper>
                        </div>
                    )
                })}
            </div>
            <CardWrapper className='my-5 fade-in-animation animation-delay-1500'>
                <hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent to-[#363636] opacity-55' />
                <Card color='#6fcc6a'>
                    <div className='flex text-xl md:text-2xl'>
                        <div className='md:flex md:space-x-2'>
                            <p>currently listening to </p>
                            <Spotify
                                defaultTitle='nothing' 
                                defaultUrl='https://open.spotify.com/'
                            />
                        </div>
                    </div>
                </Card>
            </CardWrapper>
        </div>
    )
}