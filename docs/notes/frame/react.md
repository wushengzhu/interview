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

## 5 函数式组件

```
function Demo(){
return <h1>----</h1>
}

ReactDOM.render(<Demo/>,document.getElementById('test'));
```

## 6 类式组件

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

## 8 对 react 的 state 理解

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
