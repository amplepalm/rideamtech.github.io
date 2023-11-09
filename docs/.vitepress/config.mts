import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mandla Money",
  description: "Digital wallet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: 'https://mandla.money/web/'},
      {text: 'Docs', link: '/wallet/mandlasmswallet'}
    ],

    sidebar: [
      {
        text: 'Mandla Wallet',
        base: '/wallet',
        items: [
          {text: 'Overview', link: '/mandlasmswallet'}
        ]
      },
      {
        text: 'Mandla Admin',
        base: '/admin',
        items: [
          {text: 'Overview', link: '/mandlawalletadmin'}
        ]
      },
      {
        text: 'Contact Us',
        link: '/contact-us'
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Mandla-Money'}
    ]
  }
})
