import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

import githubLink from './github-link'
import sidebar from './sidebar'
console.log('sidebar: ', sidebar)

export default withPwa(defineConfig({
    title: '前端路线图',
    description: '前端路线图，记录个人积累',
    lang: 'zh-CN',
    themeConfig: {
        socialLinks: [
          { icon: 'github', link: githubLink },
        ],
        outline: 'deep',
        sidebarMenuLabel: '菜单',
        outlineTitle: '导航',
        darkModeSwitchLabel: '夜间模式',
        sidebar,
    },
    locales: {
        root: {
            lang: 'zh-cn',
            label: '简体中文'
        },
    },
    markdown: {
        theme: 'github-dark',
    },
    head: [
        [
            'link',
            {
                rel: 'apple-touch-icon',
                href: './apple-touch-icon.jpeg',
                sizes: '180x180'
            }
        ]
    ],
    pwa: {
        registerType: 'autoUpdate',
        includeAssets: [
            'favicon.icon',
            'robots.txt',
            'apple-touch-icon.jpeg',
        ],
        manifest: {
            id: 'frontend-roadmap',
            name: '前端路线图',
            short_name: '前端路线图',
            description: '前端路线图，记录个人积累',
            theme_color: '#80B40D',
            background_color: '#80B40D',
            icons: [
                {
                    src: './512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workbox: {
            globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
        },
    }
}))
