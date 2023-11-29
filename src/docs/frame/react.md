---
# 这是文章的标题
title: react
# 这是页面的图标
icon: 'fa fa-file-text'
# 这是侧边栏的顺序
order: 2
# 设置作者
author: wushengzhu
# 设置写作时间
date: 2020-01-01
# 一个页面可以有多个分类
# 一个页面可以有多个分类
category: ['前端框架']
# 一个页面可以有多个标签
tag: ['frontend']
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---

## 1 React 简介

### 1.1 概念

- **React**：用于构建用户界面的 Javascript 库，是一个将数据渲染为 HTML 视图的开源 Js 库。由 Facebook 开发，且开源（2013.5）。

### 1.2 为什么要学？

- 原生 js 操作 DOM 繁琐、效率低
- 使用 js 直接操作 DOM，浏览器会进行大量的重绘重排。
- 原生 js 没有组件化编码方案，代码复用率低。

### 1.3 React 的特点

- 采用组件化模式、声明式编码，提高开发效率及组件复用率。
- 在 React Native 中可以使用 React 语法进行移动端开发。
- 使用虚拟 DOM+优秀的 Diffing 算法，尽量减少与真实 DOM 的交互。

## 2 基本使用

### 2.1 相关 js 库

- react.js：React 核心库。
- react-dom.js：提供操作 DOM 的 react 的扩展库。
- babel.min.js：解析 jsx 语法代码转为 js 代码的库。

### 2.2 创建虚拟 DOM 的两种方式

- 使用 jsx 创建虚拟 DOM：
- 使用 js 创建虚拟 DOM：

### 2.3 虚拟 DOM 与真实 DOM 的区别？

- **虚拟 DOM**：本质是 Object 类型的对象（一般对象），虚拟 DOM 比较“轻”，真实 DOM 比较“重”，因为虚拟 DOM 是 React 内部使用，无需真实 DOM 上那么多的属性。虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。

  ```
  const VDOM = (<h1 id="title"><span>Hello,React</span></h1>)
  ```

- **真实 DOM**：

  ```
  const TDOM = document.getElementById('demo');
  ```

### 2.4 JSX 语法

- 全称：Javascript XML

- react 定义的一种类似 XML 的 js 扩展语法：JS+XML

- 本质是 React.createElement(component,props,...children)方法的语法糖。

- 作用：简化创建的虚拟 DOM

  ```
  var ele = <h1>Hello JSX!</h1>
  ```

  注意地，它不是字符串，也不是 HTML/XML 标签。它最终产生的就是一个 JS 对象，标签名任意：HTML 标签或其他标签。

- 语法规则：定义虚拟 DOM 时，不要写引号。标签中混入 JS 表达式时要用{}。样式的类名指定不要用 class，要用 className。内联样式，要用 style='{key:value}'的形式去写。只有一个根标签。标签必须闭合。标签首字母：若小写字母开头，则将改标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，则报错；若大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错。

### 2.5 js 表达式与语句区别

- **表达式**：一个表达式会产生一个值，可以放在任何一个需要值的地方。如 a+b
- **语句**：如 if(){}

## 3 模块与组件

### 3.1 模块

- 向外提供特定功能的 js 程序，一般就是一个 js 文件。

### 3.2 模块化

- 当应用的 js 都以模块来编写，这个应用就是一个模块化的应用。

### 3.3 组件

- 用来实现局部功能效果的代码和资源的集合

### 3.4 组件化

- 当应用以多组件的方式实现，这个应用就是一个组件化的应用。

## 4 安装 React 开发者工具

- React Dev Tools

## 5 React 组件

- **函数式组件**

```
function Demo(){
return <h1>----</h1>
}

ReactDOM.render(<Demo/>,document.getElementById('test'));
```

- **类式组件**

```
class Demo extends React.Component{
   render(){
      return <h1>类定义组件</h1>
   }
}
ReactDOM.render(<Demo/>,document.getElementById('test'));
```

执行了 ReactDOM.render 之后发生了什么？

- React 解析组件标签，找到了 MyComponent 组件。
- 发现组件是使用类定义的，随后 new 出来该类的实例。并通过该实例调用到原型上的 render 方法。
- 将返回的虚拟 DOM 转为真实 DOM，随后呈现在页面上。

## 6 组件实例三大属性之 state

### 6.1 组件定义

- **简单组件**：使用一个名为 render 方法，接收输入的数据并返回需要展示的内容。被传入的数据可在组件中通过 this.props 在 render()访问。

  ```react
  class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }
  root.render(<HelloMessage name="Taylor" />);
  ```

- **有状态组件**：除了使用外部数据（通过 `this.props` 访问）以外，组件还可以维护其内部的状态数据（通过 `this.state` 访问）。当组件的状态数据改变时，组件会再次调用 `render()` 方法重新渲染对应的标记。

  ```react
  class Timer extends React.Component {
     // 构造器调用一次
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }

    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    // reader调用1+n次，n是状态更新次数
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }
  root.render(<Timer />);
  ```

### 6.2 事件绑定

```react
 render() {
    return (
      <div onClick={demo}>
        Seconds: {this.state.seconds}
      </div>
    );
  }

  function demo(){

  }
```

### 6.3 类中方法的 this

- 由于 html 中调用的方法是作为 onClick 的回调，所以不是通过实现调用的，是直接调用。
- 类中的方法默认开启了局部的严格模式，所以方法中的 this 为 undefined。

```react
demo() {
   console.log(this);// undefined
}

 render() {
    return (
      <div onClick={this.demo}>
        Seconds: {this.state.seconds}
      </div>
    );
  }
```

- 解决类中 this 指向问题：

```react
constructor(props) {
    super(props);
    this.demo = this.demo.bind(this);
  }
```

### 6.4 setState 的使用

```react
  constructor(props) {
    super(props);
    this.state = { seconds: 0,first:1 };
  }
```

```react

    this.setState({first:2});
```

注意地，状态必须通过 setState 进行更新，且更新是一种合并，不是替换。

### 6.5 state 的简写方式

```react
class Timer extends React.Component {
  state = { seconds: 0,first:1 };
}
```

总结：

- state 是组件对象最重要的属性，值是对象（可以包含多个 key-value 的组合）
- 组件被称为“状态机”，通过更新组件的 state 来更新对应的页面显示（重新渲染组件）

注意：

- 组件中 render 方法中的 this 为组件实例对象。
- 组件自定义的方法中 this 为 undefined，如何解决？
  - 强制绑定 this：通过函数对象的 bind()。
  - 箭头函数。
- 状态数据，不能直接修改或更新。

## 7 组件实例三大属性之 props

### 7.1 基本使用

```react
class Person extends React.component{
   render(){
      const {name,age,sex} = this.props;
   }
}

ReactDOM.render(<Person name="jerry" age="12" sex="男">,document.getELmentById('test1'))
```

### 7.2 批量传递 props：

```react
class Person extends React.component{
   render(){
      const {name,age,sex} = this.props;
   }
}
const p = {name:'老刘',age:18,sex:'女'}
ReactDOM.render(<Person {...p}>,document.getELmentById('test1'))
```

### 7.3 对 props 进行限制

```react
Person.propTypes = {
   name:PropTypes.string.isRequired,
   sex:PropTypes.string,
   ....
}

Person.defaultProps = {
  sex:''
}
```

### 7.4 类式组件使用 props

```react
class Person extends React.component{
   contructor(props){
     super(props)
   }
}
```

### 7.5 函数式组件使用 props：

```react
function Person(props){
  const {} =props
  return ()
}
```

总结：

## 8 ref

- **ref**：组件内的标签可以定义 ref 属性标识自己，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素，这是因为在每次渲染会创建一个新的函数实例，也就是清空旧的设置新的。

### 8.1 字符串形式 ref

```react
<input ref="input1" />

const {input1} = this.refs
```

### 8.2 回调形式 ref

函数中的参数就是当前标签：

```react
<input ref="{(a)=>{console.log(a)}}" />
```

### 8.3 createRef 的使用

React.createRef 调用后可以返回一个容器，该容器可以存储被 ref 所标识的节点，该容器是专人专用的，只能存储一个

```react
class Demo extends React.Component{
   myRef = React.createRef();
   <input ref="{this.myRef}" />
}
```

- 总结：

## 9 react 中的事件处理

- 通过 onXxx 属性指定事件处理函数（注意大小写）
  - react 使用的是自定义合成事件，而不是使用的原生 DOM 事件
  - react 中的事件是通过事件委托方式处理的，委托给组件最外层的元素
- 通过 event.target 得到发生事件的 DOM 元素对象 --不要过度使用 refs

## 10 受控组件和非受控组件

区别就是：受控组件中输入的表单数据都存到 state，当修改时可以及时更新属性值，类似 vue 中的双向绑定，优点是能省略 ref 使用。

### 10.1 受控组件

```react
class Demo extends React.Component{
  state = {
    username:'',
    password:'',
  }

  saveUserName = (event)=>{
    this.setState({username:event.target.value})
  }

  savePassword = (event)=>{
    this.setState({password:event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    const {username,password} = this.state;
    alert(`输入的账号：${username}，输入密码：${password}`)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
         用户名：<input onChange={ this.saveUserName } type="text" name="username"/>
         密码：<input onChange={ this.savePassword } type="text" name="password"/>
      </form>
    )
  }
}
```

### 10.2 非受控组件

```react
class Demo extends React.Component{
  handleSubmit = (event)=>{
    event.preventDefault(); // 阻止表单提交
    const {username,password} = this;
    alert(`输入的账号：${username.value}，输入密码：${password.value}`)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
         用户名：<input ref={ c=>this.username = c } type="text" name="username"/>
         密码：<input ref={ c=>this.pasword = c } type="text" name="pasword"/>
      </form>
    )
  }
}
```

## 11 高阶函数与函数柯里化

- **高阶函数**：如果一个函数符合下面 2 规范中任一个，那该函数就是高阶函数。常见的高阶函数：Promise、seTimeout、arr.map()等等。
  - 若 A 函数，接收的参数是一个函数，那么 A 就可以称之为高阶函数
  - 若 A 函数，调用返回值依然是一个函数，那么 A 就可以称之为高阶函数
- **函数柯里化**：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

```react
class Demo extends React.Component{
  state = {
    username:'',
    password:'',
  }

  setFormData = (dataType)=>{
       return (event)=>{
         this.setState({[dataType]:event.target.value})
       }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
         用户名：<input onChange={ this.setFormData('username') } type="text" name="username"/>
         密码：<input onChange={ this.setFormData('password') } type="text" name="password"/>
      </form>
    )
  }
}
```

**不用柯里化写法：**

```react
class Demo extends React.Component{
  state = {
    username:'',
    password:'',
  }

  setFormData = (dataType,)=>{
       return (event)=>{
         this.setState({[dataType]:event.target.value})
       }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
         用户名：<input onChange={ (event)=>this.setFormData('username',event.target.value) } type="text" name="username"/>
         密码：<input onChange={ (event)=>this.setFormData('password',event.target.value) } type="text" name="password"/>
      </form>
    )
  }
}
```

## 12 React 生命周期

组件从创建到死亡它会经历一些特定的阶段，React 组件中包含一系列钩子函数（生命周期回调函数）会在特定的时刻调用，我们在定义组件时，会在特定的生命周期回调函数中做特定的工作。

**旧生命周期**：

- **初始化阶段**：由 ReactDOM.render() 触发 --初次渲染

  - constructor()
  - componentWillMount()：组件将要卸载。
  - render()：调用时机：初始化渲染、状态更新之后。
  - componentDidMount()：组件挂载完毕

- **更新阶段**：由组件内部 this.setState()或父组件 render 触发
  - shouldComponentUpdate()
  - componentWilltUpdatet()
  - render()
  - componentDidUpdate()
- **卸载组件**：由 ReactDOM.unmountComponentAtNode 触发
  - componentwillUnmount

**新生命周期**：
