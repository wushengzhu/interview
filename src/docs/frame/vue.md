---
title: vue
date: 2023-07-28 11:00:03
# 一个页面可以有多个分类
category: ["前端框架"]
# 一个页面可以有多个标签
tag: ["frontend"]
---

**vue 是什么？**

一套用于构建用户界面的渐进式 JavaScript 框架。Vue 可以自底向上逐层的应用。2015 年 10 月 27 日正式发布 Vue1.0 版本，2016 年 10 月 1 日发布 Vue2.0 版本，2020 年 9 月 18 日正式发布 Vue3.0 版本。

**vue 特点？**

- 采用组件化模式，提高代码复用率，且让代码更好维护。

- 声明式编码，让编码人员无需直接操作 DOM，提高开发效率

  > 声明式编码如 v-for、模板语法等，命令式编码：需要用到 document 操作 DOM

- 使用虚拟 DOM+优秀的 Diff 算法，尽量复用 DOM 节点。

# Vue2-学习笔记

## 1 vue 基础

### 1.1 Vue 实例化

- Vue 工作，必须创建一个 Vue 实例，且要传入一个配置对象.
- root 容器里的代码依然符合 html 规范，只不过混入了一些特殊的 Vue 语法。
- root 容器里的代码被称为 Vue 模板。
- Vue 实例和容器是一一对应的。
- 模板中语法中的 xxx 要写 js 表达式，且 xxx 可以自动读取到 data 中所有属性。
- 一旦 data 中数据发生改变，那么模板中用到该数据的地方也会自动更新。

```js
new Vue({
  el: "#root", // el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
  data: {
    name: ""
  }
});
```

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script>
    const app = new Vue({
      el: "#app",
      data: {}
    });
  </script>
</html>
```

注意区分：js 代码（语句：const a=1;）和 js 表达式（一个表达式会生成一个值，可以放在任何一个需要值的地方，如 a+b）

### 1.2 模板语法

- 插值语法：用于解析标签体内容，写法如下，xxx 是 js 表达式，且可以直接读取到 data 中所有属性。

  ```vue
  <div>{{name}}</div>
  ```

- 指令语法：用于解析标签（包括标签属性、标签体内容、绑定事件...），如 v-bind:href=“xxx”，xxx 同样写 js 表达式，且可以直接读取到 data 中的所有属性。

  ```vue
  <a v-bind:href="url"></a>
  ```

### 1.3 数据绑定

- 单向绑定：只能从 data 中传递值，value 改变值不能改变存到 data 中的变量，通俗来说就是数据只能从 data 流向 data。

  ```vue
  单向数据绑定：
  <input v-bind:value="name1" />
  ```

- 双向绑定：data 中声明的默认值改变，value 可以改变；value 的改变同时可以改变存到 data 中的值，通俗来说就是数据不仅能从 data 流向页面，还可以从页面流向 data。

  ```vue
  双向数据绑定：
  <input v-model="name2" />
  <br />
  ```

​ 注意：v-model 只能用在表单元素，如果用在 h2 这种非表单元素是不支持报错的。v-model:value 可以简化为 v-model。

### 1.4 el 与 data 的两种写法

```js
// el第一种写法
const v = new Vue({
  el: "#root",
  data: {
    name: "abc"
  }
});

// el第二种写法
const v = new Vue({
  data: {
    name: "abc"
  }
});
v.$mount("#root");
```

```js
// data的第一种写法，在html中写vue就用这种
const v = new Vue({
  el: "#root",
  data: {
    name: "abc"
  }
});

// data的第二种写法，写组件的时候必须用这种
const v = new Vue({
  el: "#root",
  data() {
    return {
      name: "abc"
    };
  }
});
```

注意地，data 不能写成箭头函数。

### 1.5 理解 MVVM

- M：模型（Model），对应 data 中的数据。
- V：视图（View），模板 template。
- VM：视图模型（ViewModel），Vue 实例对象。

data 中所有的属性，最后都出现在 vm 身上了。vm 身上的所有属性及 Vue 原型上所有属性，在 Vue 模板中都可以直接使用。

### 1.6 数据代理

- Object.defineProperty：它有三个属性：目标对象、需要添加的属性、当前属性配置（是否可枚举、是否可写、是否可删除）。

- 数据代理：通过一个对象代理对另一个对象中属性的操作。

  ```js
  let obj = {x:100};
  let obj2 = {y:200};
  Object.defineProperty(obj2,'x',{
      get(){
       return obj.x;
      }
      set(value){

      }
  })
  ```

  vm.\_data === data，vue 中的数据代理通过 vm 对象来代理 data 对象中属性的操作。vue 中的数据代理作用是为了更加方便的操作 data 中的数据，基本原理：通过 defineProperty 把 data 对象中所有属性添加的 vm 上，为每一个添加到 vm 上的属性，都指定一个 getter/setter，在 getter/setter 内部去操作 data 中对应的属性。

  ```js
  let data = {
    name: "abc"
  };
  const v = new Vue({
    el: "#root",
    data
  });
  ```

### 1.7 事件处理

- 事件的基本使用

  - 使用 v-on:xxx 或@xxx 绑定事件，其中 xxx 是事件名

  - 事件的回调需要配置在 methods 对象中，最终会在 vm 了

  - methods 中配置的函数，不需要箭头函数，否则 this 就不是 vm 了

  - methods 中配置参数的函数，都是被 Vue 所管理的函数，this 的指向是 vm 或组件实例对象；

- 事件的修饰符（事件后加.事件修饰符，比如 click.prevent）
  - prevent：阻止默认事件
  - stop：阻止事件冒泡
  - once：事件只触发一次
  - capture：使用事件的捕获模式
  - self：只有 event.target 是当前操作的元素才触发事件
  - passive：事件默认行为立即执行，无须等待事件回调执行完毕。
- 键盘事件：如@keyup.esc
  - 回车 => enter
  - 删除 => delete
  - 退出 => esc
  - 空格 => space
  - 换行 => tab
  - 上（up）下（down）左（left）右（right）

### 1.8 计算属性与监听

#### 1.8.1 计算属性-computed

定义：要用的属性不存在（定义在 computed 里的属性没有在 data 中定义的），要通过已有属性（在 data 中已经定义的）计算得来。

原理：底层借助了 Object.defineproperty 方法提供的 getter 和 setter。get 函数什么时候被调用：1、初次读取时会执行一次。当依赖的数据发生变化改变时会被再次调用。具有缓存机制。

```js
data:{
  firstName:'',
  lastName:''
},
computed:{
  fullName(){
    return this.firstName+this.lastName;
  }
}
```

#### 1.8.2 计算属性-watch

#### 1.8.3 watch 与 computed 对比

- computed 能完成的功能，watch 都可以完成
- watch 能完成的功能，computed 不一定能完成，如：watch 可以进行异步操作
- 注意：被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或组件实例对象。
- 注意：所有不被 Vue 管理的函数（定时器的回调函数、ajax 的回调函数、promise 的回调函数等），最好写成箭头函数，这样 this 的指向才是 vm 或组件实例对象。

### 1.9 class 绑定与 style 绑定

#### 1.9.1 class 绑定

- 绑定 class 方式一：字符串写法，适用于：样式的类名不确定，需要动态指定。
- 绑定 class 方式二：数组写法，适用于：要绑定的样式个数不确定、名字也不确定。
- 绑定 class 方式三：对象写法，适用于：样式个数确定、名字也确定、但要动态决定要不要用。

```js
<div :class="dynamicClass"></div>
data:{
  dynamicClass:'user',
}
```

#### 1.9.2 style 绑定

- 绑定 style 样式方式之一：对象写法
- 绑定 style 样式方式之二：数组写法

```js
<div :style="color:curcolor"></div>
data:{
  curcolor:'#000'
}
```

### 1.10 条件渲染与列表渲染

#### 1.10.1 条件渲染

- v-show：不可以与 template 配合使用。适用于切换频率较高的场景。DOM 元素未被移除，只是使用样式隐藏掉。
- v-if 或 v-else：可以与 template 配合使用。适用于切换频率较低的场景。不展示的 DOM 元素会直接被移除。

#### 1.10.2 列表渲染

### 1.11 key 作用与原理

- 虚拟 DOM 中 key 的作用：key 是虚拟 DOM 对象的标识，当状态中的数据发生变化时，Vue 会根据新数据生成新的虚拟 DOM，随后 Vue 进行新虚拟 DOM 与旧虚拟 DOM 的差异比较，比较规则如下：

- 对比规则：

  1）旧虚拟 DOM 中找到与新虚拟 DOM 相同的 key：若虚拟 DOM 中内容没变，直接使用之前的真实 DOM；若虚拟 DOM 中内容变了，则生成新的真实 DOM，随后渲染到页面。

- 用 index 作为 key 可能会引发的问题：若对数据进行逆序添加、逆序删除等破坏顺序操作，会产生没有必要的真实 DOM 更新 => 界面效果没问题，但效率低；如果结构中还包含输入类的 DOM 会产生错误 DOM 更新 => 界面有问题。

- 开发中如何选择 key？最好使用每条数据的唯一标识作为 key，如 id、手机号、身份证号、学号等；如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用 index 作为 key 是没有问题的。

### 1.12 列表过滤与排序

### 1.13 Vue 监测数据的原理

- Vue.set()方法

可以动态增加没有在 data 中定义的属性

```html
 <div id="root">
      名字：{{student.name}}<br />
      性别：{{student.sex}}<br />
      年龄：{{student.age}}<br />
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false;
      const vm = new Vue({
        el: "#root",
        data: {
          student: {
            name: "孙悟空",
            age: 500,
          },
            hobby:[]
        },
      });
```

```js
// 修改data里的对象
// vm.$set(vm._data.student,'sex','男')
// Vue.set(vm._data.student,'sex','男')

// 修改data里的数组
vm.$set(vm._data.hobby, 1, "游泳");
// 也可以合理引用Vue官网认可修改数组元素的方法，如push，可查看官方文档
```

注意地，这两种方法只能给 data 对象里的对象添加属性，可以添加数组数据，不能直接在 data 根数据添加属性。主要是 data 里定义的非数组属性都会包含有 get、set 方法。

- Vue 检测对象原理：通过 setter 实现，且在 new Vue 实例化时就传入要监测的数组。对象后加的属性，Vue 默认不做响应处理，如果需要做响应处理，使用 set 方法。

- Vue 检测数组的原理：通过包裹数组更新元素的方法实现，本质就是做了两件事：调用原生对应的方法对数组进行更新；重新解析模板，进而更新页面。在 Vue 中修改数组使用 set 方法或 push、pop、shift、unshift、splice、sort、reverse。

### 1.14 收集表单数据

```html
<div id="root">
  <form @submit.prevent="demo">
    账号：<input type="text" v-model="userInfo.username" /><br /><br />
    密码：<input type="password" v-model="userInfo.password" /><br /><br />
    性别：
    <input type="radio" name="sex" v-model="userInfo.sex" value="male" />
    <input type="radio" name="sex" v-model="userInfo.sex" value="female" />
    <br /><br />
    爱好：<input type="checkbox" v-model="userInfo.hobby" value="学习" /> 学习
    <input type="checkbox" v-model="userInfo.hobby" value="游戏" />游戏
    <input type="checkbox" v-model="userInfo.hobby" value="编程" />编程
    <br /><br />
    <button>提交</button>
  </form>
</div>
<script type="text/javascript">
  Vue.config.productionTip = false;
  const vm = new Vue({
    el: "#root",
    data: {
      userInfo: {
        username: "",
        password: "",
        sex: "male",
        hobby: []
      }
    },
    methods: {
      demo() {
        console.log(this.userInfo);
      }
    }
  });
</script>
```

### 1.15 过滤器

- 过滤器：对数据进行格式化

```js
// 计算属性实现
// methods实现
// 过滤器实现：可以使用多个过滤器
<div>价格：{{money|moneyFormat}}</div>

// 局部过滤器
filters: {
	moneyFormat(value) {
	return "￥" + value;
	},
},

// 全局过滤器
Vue.filter("moneyFormat", (value) => {
    return "￥" + value;
});
```

### 1.16 指令

#### 1.16.1 Vue 内置指令

- **v-bind**：单向绑定解析表达式，可简写为：xxx。

- **v-model**：双向数据绑定。

- **v-for**：遍历数组/对象/字符串。

- **v-on**：绑定事件监听，简写为@。

- **v-if**：动态控制节点是否存在。

- **v-show**：动态控制节点是否展示。

- **v-text**：向其所在的节点中渲染文本内容。与插值语法的区别：v-text 会替换掉节点中的内容，不好扩展内容

  ```html
  <div>你好，{{name}}</div>
  <!-- name内容覆盖掉内容：你好 -->
  <div v-text="name">你好</div>
  ```

- **v-html**：

- **v-cloak**：没有值，是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性；使用 css 配合 v-cloak 可以解决网速慢时页面展示。

  ```html
  // css：当数据还没有加载出来就不显示
  [v-cloak]{
    display:none;
  }

  <h1 v-cloak>{{name}}</div>
  ```

- **v-once**：只渲染一次，在节点初次到动态渲染后，就视为静态内容了。以后数据的改变不会引起 v-once 所在结构的更新，可以用于优化性能。

  ```html
  <h1 v-once>初始化n值：{{n}}</h1>
  <h1>当前n值：{{n}}</h1>
  <button @click="n++">增加n</button>
  ```

- **v-pre**：跳过其所在节点的编译过程，可利用它跳过：没有使用指令语法，没有使用插值语法的节点，会加快节点。

  ```html
  <h1 v-pre>前端，你好1</h1>
  <h1>当前n值：{{n}}</h1>
  <button @click="n++">增加n</button>
  ```

#### 1.16.2 自定义指令

- 函数式：什么时候调用指令函数，指令与元素成功绑定时；指令所在的模板被重新解析时。

  ```html
  <h2>放大10倍n值：<span v-big="99+1+2"></span></h2>
  ```

  ```js
  // element：真实Html
  // binding：绑定真实
  big(element, binding) {
  // console.log(element, binding);
  element.innerText = binding.value * 10;
  },
  ```

- 对象式：

  ```html
  <h1>当前n值：{{n}}</h1>
  <button @click="n++">增加n</button><br />
  <input type="text" v-fbind:value="n" />
  ```

  ```js
  directives: {
      fbind: {
      // 指令与元素成功绑定时
      bind(element, binding) {
      element.value = binding.value;
      },
      // 指令所在元素被插入页面
      inserted(element, binding) {
      // 初始化时焦点聚焦
      element.focus();
      },
      // 指令所在的模板被重新解析
      update(element, binding) {
      element.value = binding.value;
      // 数据更新时也聚焦
      element.focus();
      },
  },
  ```

### 1.17 Vue 的生命周期

```html
<div id="root">{{info}}</div>
<script type="text/javascript">
  Vue.config.productionTip = false;
  const vm = new Vue({
    el: "#root",
    data: {
      info: "北极光之夜"
    },
    methods: {
      show(info, obj) {
        console.log(info);
        console.log("获取Vue实例data里的数据：", obj.info);
        console.log("挂载的对象，就是DOM：", obj.$el);
        console.log(
          "页面上已经挂载的DOM：",
          document.getElementById("root").innerHTML
        );
      }
    }
  });
</script>
```

- **beforeCreate**：此时 data 对象与 methods 这些都没有初始化好。data 里数据和 methods 都调不了。

  ```js
  beforeCreate: function () {
     this.show("vue实例初始化之后", this);
  },
  ```

- **created**：data 已经创建，可以读取 data 中数据，但是 DOM 还没渲染，也就是页面还没挂载。

  ```js
  created: function () {
     this.show("vue实例初始化之后", this);
  },
  // vue实例初始化之后
  // 获取Vue实例data里的数据： 北极光之夜
  // 挂载的对象，就是DOM： undefined
  // 页面上已经挂载的DOM： {{info}}
  ```

- **beforeMount**：完成了模板的编译，还没挂载，DOM 已经渲染，但是数据还没有渲染在页面上

  ```js
  beforeMount: function () {
  this.show("挂载之前", this);
  },
  // 挂载之前
  // 获取Vue实例data里的数据： 北极光之夜
  // 挂载的对象，就是DOM
  // 页面上已经挂载的DOM： {{info}}
  ```

- **mounted**：模板编译好了，也挂在到页面中，页面正常显示了。

  ```js
  mounted: function () {
   this.show("挂载之后", this);
  },
  // 挂载之后
  // 获取Vue实例data里的数据： 北极光之夜
  // 挂载的对象，就是DOM： <div id="root">北极光之夜</div>
  // 页面上已经挂载的DOM： 北极光之夜
  ```

- **beforeUpdate**：先在控制台执行 vm.info='王者荣耀'。data 已经更新，但是页面显示数据还是原来的，还没有重新开始渲染 DOM 树。

  ```js
  beforeUpdate: function () {
  this.show("更新之前", this);
  },
  // 更新之前
  // 获取Vue实例data里的数据： 王者荣耀
  // 挂载的对象，就是DOM： <div id="root">王者荣耀</div>
  // 页面上已经挂载的DOM： 北极光之夜
  ```

- **updated**：data 已经更新，但是页面显示数据还是原来的，重新开始渲染 DOM 树。

  ```js
  beforeUpdate: function () {
  this.show("更新之后", this);
  },
  // 更新之后
  // 获取Vue实例data里的数据： 王者荣耀
  // 挂载的对象，就是DOM： <div id="root">王者荣耀</div>
  // 页面上已经挂载的DOM： 王者荣耀
  ```

- **beforeDestroy**：vue 实例被销毁之前，vue 实例还能被使用。

  ```js
  beforeDestroy: function () {
  this.show("销毁之前", this);
  },
  // 销毁之前
  // 获取Vue实例data里的数据： 北极光之夜
  // 挂载的对象，就是DOM： <div id="root">北极光之夜</div>
  // 页面上已经挂载的DOM： 北极光之夜
  ```

- **destroyed**：这个阶段在 vue 实例销毁后调用，此时所有实例指示的所有东西都会解除绑定，事件监听器也都移除，子实例也被销毁。

  ```js
  destroyed: function () {
  this.show("销毁之后", this);
  }
  // 销毁之后
  // 获取Vue实例data里的数据： 北极光之夜
  // 挂载的对象，就是DOM： <div id="root">北极光之夜</div>
  // 页面上已经挂载的DOM： 北极光之夜
  // undefined
  ```

## 2 vue 组件化编程

### 2.1 什么是组件？

- 组件：实现应用中局部功能代码和资源的集合。

### 2.2 非单文件组件与单文件组件

- 非单文件组件：一个文件中包含有 n 个组件。
- 单文件组件：一个文件中只包含有 1 个组件。

### 2.3 组件的几个注意点

- 组件命名：一个单词时（首字母小写：home；首字母大写：Home），多个单词时（驼峰命名需要脚手架支持：MySchool，横线分割：my-school）、命名尽量回避 html 元素名称，如 h1、h2。

### 2.4 组件嵌套

### 2.5 VueComponent

- **VueComponent**：组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是**Vue.extend**生成的。我们只需要在 template 写组件，Vue 解析时会帮我们创建组件的实例对象，即 Vue 帮我们执行的**new VueComponent(options)**。注意地，每次调用 Vue.extend，返回的是一个全新的 VueComponent

- 关于 this 的指向：

  **组件配置**：data 函数、methods 中的函数、watch 中的函数、cpmputed 中的函数，它们的 this 均是**VueComponent 实例对象**。

  **new Vue 配置**：data 函数、methods 中的函数、watch 中的函数、cpmputed 中的函数，它们的 this 均是**Vue 实例对象**。

## 3 vue-cli

### 3.1 创建脚手架

### 3.2 脚手架结构

### 3.3 render 函数（模板解析器）

vue.js 文件与 vue.runtime.xxx.js 的区别：

（1）vue.js 是完整版的 Vue，包含：核心功能+模板解析器

（2）vue.runtime.xxx.js 是运行版的 vue，只包含核心功能，没有模板解析器，所以不能配置 template 配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容。

### 3.4 修改脚手架默认配置

- 查看 Vue 脚手架默认配置：

  ```
  vue inspect > output.js
  ```

- 使用 vue.config.js 可以对脚手架进行个性化定制。

## 4 Vue 一些特性

### 4.1 ref 属性

- 给标签添加 ref 属性：获取的是真实 DOM 元素。

- 给组件添加 ref 属性：组件的实例对象。

### 4.2 props 配置

- 传递数据：

  ```
  <Demo name="xxx"/>
  ```

- 接收数据：第一种方式（只接收）：props:['name']，第二种方式：限制类型，props:{name:Number}，第三种方式：限制类型、限制必要性、指定默认值，props:{name:{type:String,required:true,default:'老王'}}

### 4.3 mixin 混入

- **局部混合**：

```js
// js文件封装方法
export const hunhe = {
  methods: {
    showName() {
      alert(this.name);
    }
  }
};
```

```js
// vue组件
import {hunhe} '../mixins'
export default{
  data:{
    name:'书悟空',
  },
  mixins:[hunhe]
}
```

- **全局混合**：

  ```vue
  Vue.mixin(xxx);
  ```

### 4.4 插件

- 用于增强 Vue，本质：包含 install 方法的一个对象，install 的第一个参数是 Vue，第二个以后的参数是插件使用者传递的数据。

- 定义插件：

  ```
  对象.install = function (Vue,options){
    // 添加全局过滤器
    Vue.filter(....);
    // 添加全局指令
    Vue.directive(....);
    // 配置全局混入
    Vue.mixin(....);
    ....
  }
  ```

- 使用插件：Vue.use()

### 4.5 scoped 样式

## 5 组件的编码流程

- 拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。
- 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用。

## 6 浏览器的本地存储

- localStorage：localStorage 存储的内容需要手动清除才会消失。
- sessionStorage：存储的内容会随着浏览器关闭而消失。

## 7 组件的自定义事件

- 自定义实现方法一：v-on 或@使用

  ```vue
  <Demo @add="test" />
  <Demo v-on:add="test" />
  ```

- 自定义实现方法二：使用 ref

  ```js
  this.$refs.xxxx.$on("test", this.test);
  ```

- 触发自定义事件：

  ```
  this.$emit('add',数据)
  ```

​ 解绑所有自定义事件：

```js
this.$off("事件名称"); //解绑一个自定义事件
this.$off([]); // 解绑多个自定义事件
```

​ 销毁当前组件实例：

```js
this.$destory();
```

## 8 全局事件总线(GlobalEventBus)

- 全局事件总线：任意组件间通信。

  ```js
  new Vue({
    el: "#app",
    render: (h) => h(App),
    beforeCreate() {
      Vue.prototype.$bus = this; // 安装全局事件总线，$bus就是当前应用的vm
    }
  });
  ```

## 9 消息订阅与发布-pubsub

## 10 Vue 封装的过度与动画

作用：在插入、更新或移除 DOM 元素时，在合适的时候给元素添加样式类名，也就是添加 Vue 封装好的动画默认调用的 class 样式。

```js
v-enter：进入的起点
v-enter-active：进入的过程中
v-enter-to：进入的终点

v-leave：进入的起点
v-leave-active：进入的过程中
v-leave-to：进入的终点
```

- **transition**动画：Vue 的内置 Api，注意如果 transition 添加了 name 属性，样式的默认命名前缀 v-要改为 name 值-。不然样式不生效，。

```html
<button @click="isShow = !isShow">显示/隐藏</button>
<transition appear>
  <h1 v-show="isShow">你好啊！</h1>
</transition>
```

```css
h1 {
  background-color: orange;
}

.v-enter-active {
  animation: myani 0.5s linear;
}

.v-leave-active {
  animation: myani 0.5s linear reverse;
}

@keyframes myani {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}
```

- **过度效果**：不用动画只用过度实现上面内容。

```html
<button @click="isShow = !isShow">显示/隐藏</button>
<transition name="hello" appear>
  <h1 v-show="isShow">你好啊！</h1>
</transition>
```

```css
h1 {
  background-color: orange;
  /* 谁要动画就放在谁 */
  transition: 0.5s linear;
}
/* 元素进入的起点  元素离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 元素进入的终点  元素离开的起点 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
```

- **transition-group**：可以同时实现多个元素的动画，每一个元素都需要设置 key 值。
- **第三方的集成动画库**：**Animate.css**

## 11 Vue 配置代理

**devServer.proxy**：有 target、changeOrigin（改变 url 的 host，true 时，url 为 target）、ws、pathRewrite。

```
'/api':{
   target:'',
   changeOrigin:false,
   pathRewrite{
    '^/api':'';// 匹配到/api路径，由''代替
   }
}
```

## 12 Vuex

注意下，vue2 需要安装 vuex3 版本，vue3 需要安装 vuex4 版本

### 12.1 什么时候使用 vuex

- 多个组件依赖**同一状态** - 共享。
- 来自不同组件的行为需要变更**同一状态** - 共享。

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  shareBike: "共享单车，暂时没有人使用！",
  isUsed: false
};
const mutations = {
  USE_BIKE(state, value) {
    state.shareBike = value;
  },
  IS_USED(state, value) {
    state.isUsed = value;
  }
};
const actions = {
  useBike(context, value) {
    context.commit("USE_BIKE", value);
  },
  isUsed(context, value) {
    context.commit("IS_USED", value);
  }
};

const modules = {};
const getters = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
});
```

## 13 vue-router

为什么需要路由，因为以前都是多页面应用，也就是说一个页面有多个页面跳转，也就是多个 html，体验不好。如果用路由实现单页面，就可以通过路由切换单页面，一个路径一个页面。

### 13.1 路由的几个注意点

- 路由组件通常存放在 pages 文件夹，一般组件通常存在 components。
- 通过切换。隐藏路由组件，默认是被销毁的，需要的时候再去挂载。
- 每个组件都有自己的$route 属性，里面存着自己路由的信息。
- 整个应用只有一个 router，通过组件的$router 属性获取到。

### 13.2 嵌套（多级）路由

### 13.3 命名路由

也就是路由数组中定义了一个 name，在传参的时候可以简化路由字符串

```vue
<router-link :to="/home/message/detail"></router-link>

<router-link :to="{ name: 'detail' }"></router-link>
```

### 13.4 路由参数

- query：

  ```vue
  字符串写法
  <router-link :to="/home/message/detail?id=666&&title=你好"></router-link>

  对象写法
  <router-link :to="{ path: '', query: {} }"></router-link>
  ```

- params：

  ```vue
  path:'detail/:id/:title'

  <router-link :to="/home/message/detail/666/你好"></router-link>

  <router-link :to="{name:'detail',params:{id:,title:}}"></router-link>
  ```

### 13.5 路由的 props

让组件更方便获取路由参数。

- props 的第一种写法：值为对象，该对象中所有 key-value 都会以 props 的形式传给组件

```js
{
  name:,
  path:,
  component,
  props:{a:1,b:'666'}
}
```

- props 的第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传给组件。

  ```js
  // 在组件中接收
  props: ["id", "title"];
  ```

- props 的第三种写法：值为函数，返回值是一个对象.

  ```js
  props(route){
    return {id:route.query.id,title:route.query.title}
  }
  ```

### 13.6 router-link

- router-link：默认是使用栈存取路由（push），如果配置了 replace 就不是，直接替换掉上一条路由。

  ```vue
  <router-link replace :to="{name:'detail',params:{id:,title:}}"></router-link>
  ```

### 13.7 编程式路由导航

作用：不借助 router-link 实现路由跳转，让路由跳转更加灵活。

```js
this.$router.push({
   name:'xiangqing',
   params:{
     id:xxx,
     title:xxxx
   }
})

this.$router.replace({
   ...
})
```

### 13.8 缓存路由

- **keep-alive**：有一个属性 include（字符串或数组）指定需要缓存的组件。每次切换不会执行组件销毁

## 14 路由守卫

### 14.1 全局前置守卫（beforeEach）

- **beforeEach**：初始化的时候被调用、每次路由切换之前被调用

```js
// to：将要进入的路由
// from：将要离开的路由
// next：执行下去，放行，必须有。
router.beforeEach(to,form,next){
  ...
  next()
}
```

### 14.2 全局后置守卫（afterEach）

- **afterEach**：初始化的时候被调用、每次路由切换之后被调用

### 14.3 独享路由守卫（beforeEnter）

- **beforeEnter**：指定某个路由独立使用的守卫

### 14.4 组件内路由守卫

- **beforeRouteEnter**：通过路由规则，进入该组件时被调用。
- **beforeRouteLeave**：通过路由规则，离开该组件时被调用。

### 14.5 history 模式与 hash 模式

- **hash 模式**：默认方式，兼容性好，带`/#/`后面的路径，只是前端工作需要添加的，服务器会忽略。
- **history 模式**：路径都是提交给服务器的实在的资源路径，不会忽略，如果不做任何处理刷新页面会出现 404 错误。要想处理整个问题，这时候需要后端处理，比如安装中间件（安装 connect-history-api-fallback）。

# Vue3-学习笔记

## 1 Vue3 带来什么？

- 性能提升：打包大小减少 41%、初次渲染快 55%，更新渲染快 133%、内存减少 54%。
- 源码升级：使用 proxy 代替 defineProperty 实现响应式、重写虚拟 DOM 的实现和 Tree-Shaking
- 拥抱 Ts：可以更好支持 ts
- 新的特性：组合 API（Composition API）、新的内置组件等

## 2 初识 setup

- setup：Vue3 中一个新的配置项，值为一个函数，是所有 Composition API 的表演舞台，也就是组件中所用到的数据、方法等等，均要配置在 setup 中

- setup 函数的两种返回值：

  1）返回一个对象，则对象中的属性、方法、在模板中均可以直接使用。

  2）返回一个渲染函数：则可以自定义渲染内容。

- setup 两个注意点：

  1）尽量不要与 Vue2.x 配置使用，因为 Vue2 配置中可以访问到 setup 中的属性、方法。但在 setup 中不能访问到 Vue2 配置，如果有重名属性，setup 优先。

  2）setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中属性。

## 3 ref 函数

```js
setup(props,context) {
    const name = ref('张三');
    console.log(name);// RefImpl对象
    const obj = ref({
        name:'张三',
        age:15
    })
    const changeInfo = ()=>{
        name.value = '李四';
        obj.value.name = '李四';
        obj.value.age = '19'
    }
    return {
        name,
        obj,
        changeInfo,
    }
},
```

RefImpl：reference implement，引用实现。

ref 作用：定义一个响应式数据。接收的数据可以是基本类型，也可以是数据类型。

基本类型的数据：响应式依然是靠 Object.defineProperty()的 get 与 set 完成的。

对象类型的数据：内部“求助”了 Vue3 中的一个新函数：**reactive 函数**。

## 4 reactive 函数

- 作用：定义一个对象类型的响应式数据（基本数据类型不要用它，要用 ref 数据）。
- 原理：内部基于 proxy 实现，通过代理对象操作源对象内部数据进行操作。

```js
setup(props,context) {
    const name = ref('张三');
    const obj = reactive({
        name:'张三',
        age:15
    })
    const arr = reactive(['学习','游泳'])
    const changeInfo = ()=>{
        name.value = '李四';
        obj.name = '李四';
        obj.age = '19';
        arr[0] = '冲浪';
    }
    return {
        name,
        obj,
        changeInfo,
    }
},
```

## 5 响应原理

### 5.1 Vue2 的响应原理

- 对象类型：通过 object.defineProperty()对属性的读取、修改进行拦截（数据劫持）。
- 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）

存在问题：

- 新增属性、删除属性，界面不会更新。
- 直接通过下标修改数组，界面不会自动更新。

### 5.2 Vue3 的响应原理

- 实现原理：通过 proxy 代理，拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等；通过 Reflect 反射，对被代理对象的属性进行操作。

## 6 computed 计算属性

## 7 watch 侦听器

- 监视 ref 所定义的一个响应式数据

  ```
  watch(a,(newVal,oldVal))
  ```

- 监视 ref 所定义的多个响应式数据

  ```
  watch([],(newVal,oldVal))
  ```

- 监听 reactive 所定义的一个响应式数据的全部属性，无法获取正确的 oldVal，deep 配置无效。

- 监听 reactive 所定义的一个响应式数据中的某个属性

  ```vue
  watch([()=>person.name],(newVal,oldVal))
  ```

- 监视 reactvie 所定义的一个响应式数据中的某些属性

  ```
  watch([()=>person.name,()=>person.age],(newVal,oldVal))
  ```

- 监听 reactive 所定义的对象中某个嵌套对象属性，所以 deep 配置有效。

## 8 watchEffect 函数

- **watch**：既要指明监视的属性，也要指明监视的回调。

- **watchEffect**：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

  ```vue
  watchEffect(()=>{ // 在回调函数中使用到什么属性就监听什么 })
  ```

- watchEffect 优点像 computed：但 computed 注重计算出来的值（回调函数的返回值），所以必须要写返回值；watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。

## 9 自定义 hook 函数

什么是 hook？

本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装。类似于 vue2.x 中的 mixin。自定义 hook 的优势；复用代码，让 setup 中的逻辑更清楚易懂。

## 10 toRef 与 toRefs

toRef：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性；要将响应式对象中的某个属性单独提供给外部使用时。

```
const name = toRef(person,'name');
```

toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象，语法：toRefs(person);

## 11 shallowreactive 与 shallowRef

- **shallowreactive**：只处理对象最外层属性的响应式（浅响应式）
- **shallowRef**：只处理基本数据类型的响应式，不进行对象的响应式处理。

什么时候使用？

- 如果有一个对象数据，结构比较深，但变化时只是外层属性变化===>shallowReactive
- 如果有一个对象数据，结构比较深，后续功能不会修改对象中的属性，而是生新的对象来替换==>shallowRef

## 12 readonly 和 shallowReadonly

- **readonly**：让一个响应式数据变为只读的（深只读）。
- **shallowreadonly**：让一个响应式数据变为只读（浅只读）。
- 应用场景：不希望数据被修改时。

## 13 toRaw 和 markRaw

- **toRaw**：将一个由 reactive 生成的响应式对象为普通对象。

  使用场景：用于读取响应式对象的普通对象，对这个普通对象的所有操作，不会引起页面更新。

- **markRaw**：标记对象，使其永远不会再成为响应式对象。

  使用场景：有些值不应设置为响应式的，例如复杂的第三类库等；当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

```
let car = {name:'汽车'}
person.car = markRaw(car);// 新增car属性，如果不加markRaw就会成为person里的响应属性
```

## 14 customRef

- **customRef**：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

## 15 provide 与 inject

作用：实现祖孙组件间（跨级组件）的通信。

套路：父组件有一个 provide 选项来提供数据，子组件有一个 inject 选项来开始使用这些数据。一般跨级用这两个 api，父子直接用 props 就行。

## 16 响应式数据判断：isRef、isReactive、isReadonly、isProxy

- **isProxy**：检查一个对象是否由 reactive 或 readonly 方法创建的代理。

## 17 Composition API 的优势

- Options API 存在的问题：新增或者修改一个需求，就需要分别在 data，methods,computed 里修改。
- Composition API 的优势：更加优雅的组织我们的代码，函数，让相关功能代码更加有序的组织在一起。

## 18 Fragment 组件

- 在 Vue2 中：组件必须有一个根标签
- 在 Vue3 中：组件可以没有根标签，内部默认会将多个标签包含在一个 Fragment 虚拟元素中
- 好处：减少标签层级，减少内存占用。

## 19 Teleport 组件

- **Teleport**：是一种能够将我们的组件 html 结构移动到指定位置的技术。

## 20 Suspense 组件

- **Suspense**：等待异步组件时渲染一些二外内容，让内容有更好的用户体验。

```vue
<Suspense>
<template v-slot:default>
<test3/>
</template>
<template v-slot:fallback>
<h3>加载中...</h3>
</template>
</Suspense>
```
