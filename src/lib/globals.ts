import type { BaseSection, HeaderSection, SiteProp } from '@/lib/models/props'
import { TbBrandTypescript, TbBrandKotlin, TbBrandNextjs, TbBrandVue, TbBrandTailwind, TbBrandMongodb } from 'react-icons/tb'
import { FaSpotify, FaGithub, FaInstagram } from 'react-icons/fa'
import { RiJavascriptLine } from 'react-icons/ri'
import { SiPostgresql } from 'react-icons/si'
import { LiaJava } from 'react-icons/lia'
import { calculateAge } from '@/lib/utils'


export const siteProperties: SiteProp = {
    metadata: {
        metadataBase: new URL('https://csehviktor.me'),
        title: 'csehviktor.me',
        description: `A(n) ${ calculateAge() }-year-old university student from Hungary`,
        openGraph: {
            images: './og_image.jpg',
            title: 'csehviktor.me',
            url: 'https://csehviktor.me',
        }
    },
    viewport: {
        themeColor: '#1da842'
    }
}

export const headerData: HeaderSection = {
    avatar: './avatar.jpg',
    name: 'Cseh Viktor',
    socials: [
        {
            url: 'https://github.com/csehviktor',
            icon: {
                icon: FaGithub,
                color: '#696969'
            }
        },
        {
            url: 'https://instagram.com/vehcsiktor',
            icon: {
                icon: FaInstagram,
                color: '#a31049',
            }
        },
        {
            url: 'https://open.spotify.com/user/qjv1p5h89mnt8ch9c1hdmz1i5',
            icon: {
                icon: FaSpotify,
                color: '#095e05',
            }
        }
    ]
}

export const baseData: BaseSection[] = [
    {
        title: 'skills',
        description: [
            { icon: TbBrandTypescript, color: '#3178c6' },
            { icon: RiJavascriptLine, color: '#f1e05a' },
            { icon: TbBrandNextjs, color: '#ffffff' },
            { icon: TbBrandVue, color: '#42b883' },
            { icon: TbBrandKotlin, color: '#b124ea' },
            { icon: LiaJava, color: '#b07219' },
            { icon: TbBrandTailwind, color: '#38bdf8' },
            { icon: TbBrandMongodb, color: '#00ed64' },
            { icon: SiPostgresql, color: '#0064a5' }
        ]
    },
    {
        title: 'languages',
        card: [
            {
                icon: {
                    icon: './icons/flag_hu.svg',
                },
                title: 'Hungarian',
                description: 'mother tongue'
            },
            {
                icon: {
                    icon: './icons/flag_gb.svg',
                },
                title: 'English',
                description: 'fluent - C1 level (CEFR)'
            },
            {
                icon: {
                    icon: './icons/flag_it.svg',
                },
                title: 'Italian',
                description: 'beginner - B1 level'
            }
        ]
    },
    {
        title: 'studies',
        card: [
            {
                title: 'Corvinus University of Budapest',
                description: 'BSc Business Administration and Management'
            },
            {
                title: 'Jedlik Ányos Secondary School',
                description: 'Informatics Class'
            }
        ]
    }
]