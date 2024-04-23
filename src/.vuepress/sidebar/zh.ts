import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/docs/': [
    // '', // 首页
    {
      text: '面试须知',
      icon: 'fa fa-file-text',
      prefix: 'notice/',
      link: 'notice/',
      children: 'structure',
    },
    {
      text: '个人简历',
      icon: 'fa fa-file-text',
      prefix: 'resume/',
      link: 'resume/',
      children: 'structure',
    },
    {
      text: '前端基础',
      icon: 'fa fa-book',
      prefix: 'swordman/',
      link: 'swordman/',
      // collapsible: true,// 是否折叠
      children: 'structure',
    },
    {
      text: '前端框架',
      icon: 'fa fa-book',
      prefix: 'frame/',
      link: 'frame/',
      children: 'structure',
    },
    {
      text: '打包工具',
      icon: 'fa fa-book',
      prefix: 'pack/',
      // 如果设置当前节点不可点，就注释掉，并删除当前目录下的REMADE.md文件
      // 这样面包屑会显示路径名，所以推荐只注释不删除
      // link: 'pack/',
      children: 'structure',
    },
    {
      text: '必会后端',
      icon: 'fa fa-book',
      prefix: 'backend/',
      children: 'structure',
    },
    {
      text: '微前端',
      icon: 'fa fa-file-text',
      prefix: 'micro/',
      link: 'micro/',
      children: 'structure',
    },
    {
      text: '计算机基础',
      icon: 'fa fa-book',
      prefix: 'computer/',
      link: 'computer/',
      children: 'structure',
    },
    {
      text: '笔试题集',
      icon: 'fa fa-file-text',
      prefix: 'write/',
      link: 'write/',
      children: 'structure',
    },
    {
      text: '计算机基础',
      icon: 'book',
      prefix: 'computer/',
      link: 'docs/computer/',
      children: 'structure',
    },
  ],
})
