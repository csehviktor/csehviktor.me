import type { CategoryProps, GlobalProps, IconProps, SiteProps } from '@/lib/models/props'
import { Socials } from '@/lib/models/variants'
import { calculateAge } from '@/lib/utils'
import { FaCode, FaGithub, FaHome, FaInstagram, FaSpotify, FaStar } from 'react-icons/fa'

export const siteProperties: SiteProps = {
    metadata: {
        metadataBase: new URL('https://csehviktor.me'),
        title: 'csehviktor.me',
        description: `A(n) ${ calculateAge() }-year-old university student from Hungary`,
        openGraph: {
            images: '/og_image.jpg',
            title: 'csehviktor.me',
            url: 'https://csehviktor.me',
        }
    },
    viewport: {
        themeColor: '#1da842'
    }
}

export const globalData: GlobalProps = {
    avatar: './avatar.jpg',
    name: 'Cseh Viktor',
    socials: [
        {
            id: 0,
            type: Socials.GITHUB,
            url: 'https://github.com/csehviktor',
            icon: {
                type: FaGithub,
                color: '#696969'
            }
        },
        {
            id: 1,
            type: Socials.INSTAGRAM,
            url: 'https://instagram.com/vehcsiktor',
            icon: {
                type: FaInstagram,
                color: '#a31049',
            }
        },
        {
            id: 2,
            type: Socials.SPOTIFY,
            url: 'https://open.spotify.com/user/qjv1p5h89mnt8ch9c1hdmz1i5',
            icon: {
                type: FaSpotify,
                color: '#095e05',
            }
        },
    ]
}

export const descriptionData: CategoryProps[] = [
    {
        id: 0,
        label: 'About Me 👋',
        description: [
            `A(n) <strong>${ calculateAge() }</strong>-year-old university student from Hungary, whose main source of entertainment comes from web development and bug hunting.`,
            'Able to use certain web frameworks prominently, such as Nextjs or Remix, along with languages like TypeScript/JavaScript, Vue, Java, Kotlin, C#.',
        ]
    },
    {
        id: 1,
        label: 'Studies 📚',
        list: [
            {
                id: 0,
                title: 'Jedlik Ányos Secondary School',
                subtitle: '(2019-2023)',
                description: [
                    '<strong>Informatics Class - Advanced IT education</strong>',
                    'A substantial portion of the knowledge forming the foundation of my "achievements" in IT is related to this place.'
                ]
            },
            {
                id: 1,
                title: 'Corvinus University of Budapest',
                subtitle: '(2023-)',
                description: [
                    '<strong>Business Administration and Management</strong>',
                    'Due to the extreme valuableness of combining IT and economics, I\'m pursuing my university studies in the field of economics.'
                ]
            },
        ]
    }
]

export const navbarItems: IconProps[] = [
    {
        type: FaHome,
        color: '#0a8f3b',
        path: '/',
        label: 'Home', 
    },
    {
        type: FaStar,
        color: '#c29810',
        path: '/projects',
        label: 'Projects', 
    },
    {
        type: FaCode,
        color: '#4f81fe',
        path: 'https://github.com/csehviktor/csehviktor.me',
        label: 'Source code'
    }
]