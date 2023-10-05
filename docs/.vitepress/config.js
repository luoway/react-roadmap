import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

import githubLink from './github-link'
import sidebar from './sidebar'
console.log('sidebar: ', sidebar)

export default withPwa(defineConfig({
    title: 'React路线图',
    description: 'React路线图，记录个人积累',
    lang: 'zh-CN',
    themeConfig: {
        socialLinks: [
          { icon: 'github', link: githubLink },
        ],
        outline: 'deep',
        sidebarMenuLabel: '菜单',
        outlineTitle: '导航',
        darkModeSwitchLabel: '夜间模式',
        returnToTopLabel: '返回顶部',
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
            id: 'nodejs-roadmap',
            name: 'Node.js路线图',
            short_name: 'Node.js路线图',
            description: 'Node.js路线图，记录个人积累',
            icons: [
                {
                    src: './512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ],
            theme_color: '#80B40D',
            background_color: '#80B40D',
            lang: 'zh-CN',
        },
        workbox: {
            globPatterns:  ["**\/*.{js,css}"],
            runtimeCaching: [
                {
                    handler: 'StaleWhileRevalidate',
                    urlPattern: /\.html$/,
                    method: 'GET',
                },
                {
                    handler: 'CacheFirst',
                    urlPattern: /\.(js|css|png|jpg|jpeg|gif|woff2)$/,
                    method: 'GET',
                }
            ]
        },
    }
}))
