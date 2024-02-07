import Link from 'next/link'
import { Avatar } from '@/lib/components/profile/Avatar'
import { Header } from '@/lib/components/common/Header'
import { Description } from '@/lib/components/common/Description'
import { Icon } from '@/lib/components/common/Icon'
import { Dropdown } from '@/lib/components/profile/Dropdown'
import { GoofyFont } from '@/lib/components/common/GoofyFont'
import { Headers } from '@/lib/models/variants'
import { parseURL, randomizeKey } from '@/lib/utils'
import { globalData, descriptionData } from '@/lib/globals'

export default function() {
    return (
        <div className="flex flex-col xl:flex-row max-w-[90%] xl:max-w-[75%]">
            <div className="xl:min-w-[40%] 2xl:min-w-[30%] flex flex-col mt-20 items-center">
                <Avatar avatar={globalData.avatar} />
                <Header type={Headers.TITLE} className="mt-5">{ globalData.name }</Header>
                <GoofyFont className="mt-5">
                    { globalData.socials.map((social) => {
                        return(
                            <Link key={social.id} href={social.url} target="_blank" className="flex items-center justify-center -ml-3 w-full lg:w-min lg:justify-start">
                                <Icon
                                    type={social.icon.type}
                                    color={social.icon.color}
                                    className="text-2xl lg:text-3xl p-2"
                                />
                                <Description className="text-xl">
                                    { parseURL(social.url) }
                                </Description>
                            </Link>
                        )
                    })}
                </GoofyFont>
            </div>
            <div className="max-w-full my-20 ml-[5%] mb-40">
                { descriptionData.map((category) => {
                    return(
                        <div key={category.id}>
                            <Header type={ Headers.SUBTITLE }>
                                { category.label }
                            </Header>
                            <Description className="xl:ml-5 mb-11">
                                { category.description?.map((line) => {
                                    return (
                                        <span key={randomizeKey(line)} className="flex flex-col my-2" dangerouslySetInnerHTML={{ __html: line }} />
                                    )
                                }) }
                                
                                { category.list?.toReversed().map((item) => {
                                    return(
                                        <Dropdown key={item.id} title={item.title} subtitle={item.subtitle}>
                                            <div className="ml-3 -mt-3">
                                                { item.description.map((line) => {
                                                    return (
                                                        <span key={randomizeKey(line)} className="flex flex-col my-2" dangerouslySetInnerHTML={{ __html: line }} />
                                                    )
                                                }) } 
                                            </div>
                                    </Dropdown>
                                    )
                                })}
                            </Description>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}