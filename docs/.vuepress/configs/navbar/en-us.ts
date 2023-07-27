import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEnUS: NavbarConfig = [
    {
        text: 'Start',
        link: '/start/'
    },
    {
        text: 'Deploy',
        link: '/deploy/'
    },
    {
        text: 'Activate',
        link: '/activate/'
    },
    {
        text: 'FAQ',
        link: '/faq/'
    },
    {
        text: 'More',
        children: [
            {
                text: 'Toolbox',
                link: '/toolbox/'
            },
            {
                text: 'Settings',
                link: '/settings/'
            },
            {
                text: 'Commands',
                link: '/commands/'
            }
        ]
    },
]