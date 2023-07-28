import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/interview-column/',

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    '/': {
      lang: 'zh-CN',
      title: '路灯下的光',
      description: '本专栏由路灯下的光撰写',
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
})
