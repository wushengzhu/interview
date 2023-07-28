import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  '/docs/',
  {
    text: '个人主页',
    icon: 'user',
    link: '/wszhu-home',
  },
  {
    text: '博客',
    icon: 'blog',
    children: [
      {
        text: '掘金',
        link: 'https://juejin.cn/user/2098283918929047',
        target: '_blank',
      },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/xian-feng-gu-ying',
        target: '_blank',
      },
    ],
  },
])
