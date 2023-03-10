module.exports = {
  title: 'Sapper（前端亿点点）',
  description: '个人网站',
  theme: 'reco',
  base: '/blog/',
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    subSidebar: 'auto',
    lastUpdated: '上次更新', // string | boolean
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
    nav: [
      {
        text: '我的博客',
        items: [
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
      {
        text: '代码仓库',
        items: [
          {
            text: 'github',
            link: 'https://github.com/wushengzhu',
            target: '_blank',
          },
          {
            text: 'gitee',
            link: 'https://gitee.com/wusheng_z',
            target: '_blank',
          },
        ],
      },
    ],
    sidebar: [
      {
        title: '首页',
        path: '/notes/home',
        collapsable: false, // 不折叠
      },
      {
        title: '前端学习笔记',
        path: '/notes/frame/vue',
        collapsable: true, // 不折叠
        children: [
          { title: 'Vue', path: '/notes/frame/vue' },
          { title: 'React', path: '/notes/frame/react' },
        ],
      },
      {
        title: '前端面试专栏',
        path: '/notes/interview/vue',
        collapsable: true, // 不折叠
        children: [
          { title: 'Vue', path: '/notes/interview/vue' },
          { title: 'React', path: '/notes/interview/react' },
          { title: 'Angular', path: '/notes/interview/angular' },
        ],
      },
    ],
  },
};
