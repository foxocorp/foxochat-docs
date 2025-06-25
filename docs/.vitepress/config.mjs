import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'

const spec = await (await fetch('https://api.foxochat.app/v3/api-docs')).json();
const specDev = await (await fetch('https://api-dev.foxochat.app/v3/api-docs')).json();

const sidebar = useSidebar({
  spec: spec,
  linkPrefix: '/references/production',
})

const sidebarDev = useSidebar({
  spec: specDev,
  linkPrefix: '/references/development',
})

export default defineConfig({
  title: 'FoxoCorp',
  description: 'FoxoCorp Developer Documentation',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://docs.foxochat.app'
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' }
    ],
    [
      'link',
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
    ],
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-title', content: 'FoxoCorp Docs' }
    ],
    [
      'link',
      { rel: 'manifest', href: '/manifest.json' }
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        text: 'API',
        link: '/api'
      },
      {
        text: 'Gateway',
        link: '/gateway'
      },
      {
        text: 'Resources',
        items: [
          {
            text: 'Attachment',
            link: '/resources/attachment'
          },
          {
            text: 'Channel',
            link: '/resources/channel'
          },
          {
            text: 'Member',
            link: '/resources/member'
          },
          {
            text: 'Message',
            link: '/resources/message'
          },
          {
            text: 'User',
            link: '/resources/user'
          },
        ]
      },
      {
        text: 'References',
        collapsed: true,
        items: [
          {
            text: 'Production',
            collapsed: true,
            items: [
              ...sidebar.generateSidebarGroups({
                linkPrefix: '/references/production/',
              }),
            ]
          },
          {
            text: 'Development',
            collapsed: true,
            items: [
              ...sidebarDev.generateSidebarGroups({
                linkPrefix: '/references/development/',
              }),
            ]
          }
        ]
      },
    ],
    docFooter: {
      prev: false,
      next: false
    },
  }
})
