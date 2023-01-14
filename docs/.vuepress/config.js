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
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '我的博客',
        items: [
          { text: 'Java基础', link: '/accumulate/' },
          { text: '图解算法', link: '/algorithm/' },
          { text: '手摸手造一个RPC', link: 'http://dubbo.io/' },
        ],
      },
    ],
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: '学前必读', path: '/' }],
      },
      {
        title: '前端学习笔记',
        path: '/notes/frame/vue',
        collapsable: false, // 不折叠
        children: [{ title: 'Vue学习笔记', path: '/notes/frame/vue' }],
      },
      {
        title: '前端面试专栏',
        path: '/notes/interview/vue',
        collapsable: false, // 折叠
        children: [{ title: 'Vue学习笔记', path: '/' }],
      },
    ],
  },
};
