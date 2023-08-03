import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    // '', // 首页
    {
      text: '面试须知',
      icon: 'file-text',
      prefix: 'notice/',
      link: 'docs/notice/',
      children: 'structure',
    },
    {
      text: '个人简历',
      icon: 'file',
      prefix: 'resume/',
      link: 'docs/resume/',
      children: 'structure',
    },
    {
      text: '前端基础',
      icon: 'book',
      prefix: 'docs/swordman/',
      link: 'docs/swordman/',
      children: 'structure',
    },
    {
      text: '前端框架',
      icon: 'book',
      prefix: 'docs/frame/',
      link: 'docs/frame/',
      children: 'structure',
    },
    {
      text: '打包工具',
      icon: 'book',
      prefix: 'docs/pack/',
      // 如果设置当前节点不可点，就注释掉，并删除当前目录下的REMADE.md文件
      // 这样面包屑会显示路径名，所以推荐只注释不删除
      // link: 'docs/pack/',
      children: 'structure',
    },
    {
      text: '必会后端',
      icon: 'file-text',
      prefix: 'docs/backend/',
      children: 'structure',
    },
    {
      text: '微前端',
      icon: 'file-text',
      prefix: 'micro/',
      link: 'docs/micro/',
      children: 'structure',
    },
    {
      text: '计算机基础',
      icon: 'file-text',
      prefix: 'computer/',
      link: 'docs/computer/',
      children: 'structure',
    },
    {
      text: '笔试题集',
      icon: 'file-text',
      prefix: 'write/',
      link: 'docs/write/',
      children: 'structure',
    },
  ],
})
