# interview-column
基于[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/get-started/install.html)搭建的面试专栏，本专栏主要是收集网上大部分前端面试题，并记录一下自己的面试经验，希望对你有一定的帮助！
> Node版本>=16.14.1 
## 准备
```
pnpm create vuepress-theme-hope project-name
```
根据终端提示，一步一步执行，主题分为blog和docs，本项目是以docs为模板进行相关修改并开源。
> 注意地，在构建和部署期间可能会出现很多问题，这些都是由于版本问题，可以参考本项目，也可以看看官网建议：[常见问题](https://theme-hope.vuejs.press/zh/faq/)
## 部署
- 部署github page
  ```
  bash deploy.sh
  ```
  > 注意地，任何以 @vuepress/ 开头的官方包应该和 VuePress 保持相同版本。
  ```
  pnpm dlx vp-update // 升级主题和vuepress
  ```
## 预览
- 本地：http://localhost:8080/+baseUrl （在主题中设置的基本Url），如**http://localhost:8080/interview-column/**
- github-page：http://个人github-page的url/+baseUrl，如**http://wushengzhu.github.io/interview-column/**
> 注意地i，如果部署成功，但样式失效，务必设置baseUrl=`/仓库名称/` 
