import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-4189f395.js";const s={},d=a(`<h2 id="_1-react-简介" tabindex="-1"><a class="header-anchor" href="#_1-react-简介" aria-hidden="true">#</a> 1 React 简介</h2><h3 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念" aria-hidden="true">#</a> 1.1 概念</h3><ul><li><strong>React</strong>：用于构建用户界面的 Javascript 库，是一个将数据渲染为 HTML 视图的开源 Js 库。由 Facebook 开发，且开源（2013.5）。</li></ul><h3 id="_1-2-为什么要学" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么要学" aria-hidden="true">#</a> 1.2 为什么要学？</h3><ul><li>原生 js 操作 DOM 繁琐、效率低</li><li>使用 js 直接操作 DOM，浏览器会进行大量的重绘重排。</li><li>原生 js 没有组件化编码方案，代码复用率低。</li></ul><h3 id="_1-3-react-的特点" tabindex="-1"><a class="header-anchor" href="#_1-3-react-的特点" aria-hidden="true">#</a> 1.3 React 的特点</h3><ul><li>采用组件化模式、声明式编码，提高开发效率及组件复用率。</li><li>在 React Native 中可以使用 React 语法进行移动端开发。</li><li>使用虚拟 DOM+优秀的 Diffing 算法，尽量减少与真实 DOM 的交互。</li></ul><h2 id="_2-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-基本使用" aria-hidden="true">#</a> 2 基本使用</h2><h3 id="_2-1-相关-js-库" tabindex="-1"><a class="header-anchor" href="#_2-1-相关-js-库" aria-hidden="true">#</a> 2.1 相关 js 库</h3><ul><li>react.js：React 核心库。</li><li>react-dom.js：提供操作 DOM 的 react 的扩展库。</li><li>babel.min.js：解析 jsx 语法代码转为 js 代码的库。</li></ul><h3 id="_2-2-创建虚拟-dom-的两种方式" tabindex="-1"><a class="header-anchor" href="#_2-2-创建虚拟-dom-的两种方式" aria-hidden="true">#</a> 2.2 创建虚拟 DOM 的两种方式</h3><ul><li>使用 jsx 创建虚拟 DOM：</li><li>使用 js 创建虚拟 DOM：</li></ul><h3 id="_2-3-虚拟-dom-与真实-dom-的区别" tabindex="-1"><a class="header-anchor" href="#_2-3-虚拟-dom-与真实-dom-的区别" aria-hidden="true">#</a> 2.3 虚拟 DOM 与真实 DOM 的区别？</h3><ul><li><p><strong>虚拟 DOM</strong>：本质是 Object 类型的对象（一般对象），虚拟 DOM 比较“轻”，真实 DOM 比较“重”，因为虚拟 DOM 是 React 内部使用，无需真实 DOM 上那么多的属性。虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const VDOM = (&lt;h1 id=&quot;title&quot;&gt;&lt;span&gt;Hello,React&lt;/span&gt;&lt;/h1&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>真实 DOM</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const TDOM = document.getElementById(&#39;demo&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_2-4-jsx-语法" tabindex="-1"><a class="header-anchor" href="#_2-4-jsx-语法" aria-hidden="true">#</a> 2.4 JSX 语法</h3><ul><li><p>全称：Javascript XML</p></li><li><p>react 定义的一种类似 XML 的 js 扩展语法：JS+XML</p></li><li><p>本质是 React.createElement(component,props,...children)方法的语法糖。</p></li><li><p>作用：简化创建的虚拟 DOM</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ele = &lt;h1&gt;Hello JSX!&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意地，它不是字符串，也不是 HTML/XML 标签。它最终产生的就是一个 JS 对象，标签名任意：HTML 标签或其他标签。</p></li><li><p>语法规则：定义虚拟 DOM 时，不要写引号。标签中混入 JS 表达式时要用{}。样式的类名指定不要用 class，要用 className。内联样式，要用 style=&#39;{key:value}&#39;的形式去写。只有一个根标签。标签必须闭合。标签首字母：若小写字母开头，则将改标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，则报错；若大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错。</p></li></ul><h3 id="_2-5-js-表达式与语句区别" tabindex="-1"><a class="header-anchor" href="#_2-5-js-表达式与语句区别" aria-hidden="true">#</a> 2.5 js 表达式与语句区别</h3><ul><li><strong>表达式</strong>：一个表达式会产生一个值，可以放在任何一个需要值的地方。如 a+b</li><li><strong>语句</strong>：如 if(){}</li></ul><h2 id="_3-模块与组件" tabindex="-1"><a class="header-anchor" href="#_3-模块与组件" aria-hidden="true">#</a> 3 模块与组件</h2><h3 id="_3-1-模块" tabindex="-1"><a class="header-anchor" href="#_3-1-模块" aria-hidden="true">#</a> 3.1 模块</h3><ul><li>向外提供特定功能的 js 程序，一般就是一个 js 文件。</li></ul><h3 id="_3-2-模块化" tabindex="-1"><a class="header-anchor" href="#_3-2-模块化" aria-hidden="true">#</a> 3.2 模块化</h3><ul><li>当应用的 js 都以模块来编写，这个应用就是一个模块化的应用。</li></ul><h3 id="_3-3-组件" tabindex="-1"><a class="header-anchor" href="#_3-3-组件" aria-hidden="true">#</a> 3.3 组件</h3><ul><li>用来实现局部功能效果的代码和资源的集合</li></ul><h3 id="_3-4-组件化" tabindex="-1"><a class="header-anchor" href="#_3-4-组件化" aria-hidden="true">#</a> 3.4 组件化</h3><ul><li>当应用以多组件的方式实现，这个应用就是一个组件化的应用。</li></ul><h2 id="_4-安装-react-开发者工具" tabindex="-1"><a class="header-anchor" href="#_4-安装-react-开发者工具" aria-hidden="true">#</a> 4 安装 React 开发者工具</h2><ul><li>React Dev Tools</li></ul><h2 id="_5-react-组件" tabindex="-1"><a class="header-anchor" href="#_5-react-组件" aria-hidden="true">#</a> 5 React 组件</h2><ul><li><strong>函数式组件</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Demo(){
return &lt;h1&gt;----&lt;/h1&gt;
}

ReactDOM.render(&lt;Demo/&gt;,document.getElementById(&#39;test&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>类式组件</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Demo extends React.Component{
   render(){
      return &lt;h1&gt;类定义组件&lt;/h1&gt;
   }
}
ReactDOM.render(&lt;Demo/&gt;,document.getElementById(&#39;test&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行了 ReactDOM.render 之后发生了什么？</p><ul><li>React 解析组件标签，找到了 MyComponent 组件。</li><li>发现组件是使用类定义的，随后 new 出来该类的实例。并通过该实例调用到原型上的 render 方法。</li><li>将返回的虚拟 DOM 转为真实 DOM，随后呈现在页面上。</li></ul><h2 id="_6-组件实例三大属性之-state" tabindex="-1"><a class="header-anchor" href="#_6-组件实例三大属性之-state" aria-hidden="true">#</a> 6 组件实例三大属性之 state</h2><h3 id="_6-1-组件定义" tabindex="-1"><a class="header-anchor" href="#_6-1-组件定义" aria-hidden="true">#</a> 6.1 组件定义</h3><ul><li><p><strong>简单组件</strong>：使用一个名为 render 方法，接收输入的数据并返回需要展示的内容。被传入的数据可在组件中通过 this.props 在 render()访问。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class HelloMessage extends React.Component {
  render() {
    return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;
  }
}
root.render(&lt;HelloMessage name=&quot;Taylor&quot; /&gt;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>有状态组件</strong>：除了使用外部数据（通过 <code>this.props</code> 访问）以外，组件还可以维护其内部的状态数据（通过 <code>this.state</code> 访问）。当组件的状态数据改变时，组件会再次调用 <code>render()</code> 方法重新渲染对应的标记。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Timer extends React.Component {
   // 构造器调用一次
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state =&gt; ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() =&gt; this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // reader调用1+n次，n是状态更新次数
  render() {
    return (
      &lt;div&gt;
        Seconds: {this.state.seconds}
      &lt;/div&gt;
    );
  }
}
root.render(&lt;Timer /&gt;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_6-2-事件绑定" tabindex="-1"><a class="header-anchor" href="#_6-2-事件绑定" aria-hidden="true">#</a> 6.2 事件绑定</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> render() {
    return (
      &lt;div onClick={demo}&gt;
        Seconds: {this.state.seconds}
      &lt;/div&gt;
    );
  }

  function demo(){

  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-类中方法的-this" tabindex="-1"><a class="header-anchor" href="#_6-3-类中方法的-this" aria-hidden="true">#</a> 6.3 类中方法的 this</h3><ul><li>由于 html 中调用的方法是作为 onClick 的回调，所以不是通过实现调用的，是直接调用。</li><li>类中的方法默认开启了局部的严格模式，所以方法中的 this 为 undefined。</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>demo() {
   console.log(this);// undefined
}

 render() {
    return (
      &lt;div onClick={this.demo}&gt;
        Seconds: {this.state.seconds}
      &lt;/div&gt;
    );
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解决类中 this 指向问题：</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>constructor(props) {
    super(props);
    this.demo = this.demo.bind(this);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-setstate-的使用" tabindex="-1"><a class="header-anchor" href="#_6-4-setstate-的使用" aria-hidden="true">#</a> 6.4 setState 的使用</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>  constructor(props) {
    super(props);
    this.state = { seconds: 0,first:1 };
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>
    this.setState({first:2});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意地，状态必须通过 setState 进行更新，且更新是一种合并，不是替换。</p><h3 id="_6-5-state-的简写方式" tabindex="-1"><a class="header-anchor" href="#_6-5-state-的简写方式" aria-hidden="true">#</a> 6.5 state 的简写方式</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Timer extends React.Component {
  state = { seconds: 0,first:1 };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>state 是组件对象最重要的属性，值是对象（可以包含多个 key-value 的组合）</li><li>组件被称为“状态机”，通过更新组件的 state 来更新对应的页面显示（重新渲染组件）</li></ul><p>注意：</p><ul><li>组件中 render 方法中的 this 为组件实例对象。</li><li>组件自定义的方法中 this 为 undefined，如何解决？ <ul><li>强制绑定 this：通过函数对象的 bind()。</li><li>箭头函数。</li></ul></li><li>状态数据，不能直接修改或更新。</li></ul><h2 id="_7-组件实例三大属性之-props" tabindex="-1"><a class="header-anchor" href="#_7-组件实例三大属性之-props" aria-hidden="true">#</a> 7 组件实例三大属性之 props</h2><h3 id="_7-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_7-1-基本使用" aria-hidden="true">#</a> 7.1 基本使用</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Person extends React.component{
   render(){
      const {name,age,sex} = this.props;
   }
}

ReactDOM.render(&lt;Person name=&quot;jerry&quot; age=&quot;12&quot; sex=&quot;男&quot;&gt;,document.getELmentById(&#39;test1&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-批量传递-props" tabindex="-1"><a class="header-anchor" href="#_7-2-批量传递-props" aria-hidden="true">#</a> 7.2 批量传递 props：</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Person extends React.component{
   render(){
      const {name,age,sex} = this.props;
   }
}
const p = {name:&#39;老刘&#39;,age:18,sex:&#39;女&#39;}
ReactDOM.render(&lt;Person {...p}&gt;,document.getELmentById(&#39;test1&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-对-props-进行限制" tabindex="-1"><a class="header-anchor" href="#_7-3-对-props-进行限制" aria-hidden="true">#</a> 7.3 对 props 进行限制</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>Person.propTypes = {
   name:PropTypes.string.isRequired,
   sex:PropTypes.string,
   ....
}

Person.defaultProps = {
  sex:&#39;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-类式组件使用-props" tabindex="-1"><a class="header-anchor" href="#_7-4-类式组件使用-props" aria-hidden="true">#</a> 7.4 类式组件使用 props</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Person extends React.component{
   contructor(props){
     super(props)
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-函数式组件使用-props" tabindex="-1"><a class="header-anchor" href="#_7-5-函数式组件使用-props" aria-hidden="true">#</a> 7.5 函数式组件使用 props：</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function Person(props){
  const {} =props
  return ()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><h2 id="_8-ref" tabindex="-1"><a class="header-anchor" href="#_8-ref" aria-hidden="true">#</a> 8 ref</h2><ul><li><strong>ref</strong>：组件内的标签可以定义 ref 属性标识自己，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素，这是因为在每次渲染会创建一个新的函数实例，也就是清空旧的设置新的。</li></ul><h3 id="_8-1-字符串形式-ref" tabindex="-1"><a class="header-anchor" href="#_8-1-字符串形式-ref" aria-hidden="true">#</a> 8.1 字符串形式 ref</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;input ref=&quot;input1&quot; /&gt;

const {input1} = this.refs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-回调形式-ref" tabindex="-1"><a class="header-anchor" href="#_8-2-回调形式-ref" aria-hidden="true">#</a> 8.2 回调形式 ref</h3><p>函数中的参数就是当前标签：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;input ref=&quot;{(a)=&gt;{console.log(a)}}&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-3-createref-的使用" tabindex="-1"><a class="header-anchor" href="#_8-3-createref-的使用" aria-hidden="true">#</a> 8.3 createRef 的使用</h3><p>React.createRef 调用后可以返回一个容器，该容器可以存储被 ref 所标识的节点，该容器是专人专用的，只能存储一个</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Demo extends React.Component{
   myRef = React.createRef();
   &lt;input ref=&quot;{this.myRef}&quot; /&gt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>总结：</li></ul><h2 id="_9-react-中的事件处理" tabindex="-1"><a class="header-anchor" href="#_9-react-中的事件处理" aria-hidden="true">#</a> 9 react 中的事件处理</h2><ul><li>通过 onXxx 属性指定事件处理函数（注意大小写） <ul><li>react 使用的是自定义合成事件，而不是使用的原生 DOM 事件</li><li>react 中的事件是通过事件委托方式处理的，委托给组件最外层的元素</li></ul></li><li>通过 event.target 得到发生事件的 DOM 元素对象 --不要过度使用 refs</li></ul><h2 id="_10-受控组件和非受控组件" tabindex="-1"><a class="header-anchor" href="#_10-受控组件和非受控组件" aria-hidden="true">#</a> 10 受控组件和非受控组件</h2><p>区别就是：受控组件中输入的表单数据都存到 state，当修改时可以及时更新属性值，类似 vue 中的双向绑定，优点是能省略 ref 使用。</p><h3 id="_10-1-受控组件" tabindex="-1"><a class="header-anchor" href="#_10-1-受控组件" aria-hidden="true">#</a> 10.1 受控组件</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Demo extends React.Component{
  state = {
    username:&#39;&#39;,
    password:&#39;&#39;,
  }

  saveUserName = (event)=&gt;{
    this.setState({username:event.target.value})
  }

  savePassword = (event)=&gt;{
    this.setState({password:event.target.value})
  }

  handleSubmit = (event)=&gt;{
    event.preventDefault();
    const {username,password} = this.state;
    alert(\`输入的账号：\${username}，输入密码：\${password}\`)
  }

  render(){
    return (
      &lt;form onSubmit={this.handleSubmit}&gt;
         用户名：&lt;input onChange={ this.saveUserName } type=&quot;text&quot; name=&quot;username&quot;/&gt;
         密码：&lt;input onChange={ this.savePassword } type=&quot;text&quot; name=&quot;password&quot;/&gt;
      &lt;/form&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-非受控组件" tabindex="-1"><a class="header-anchor" href="#_10-2-非受控组件" aria-hidden="true">#</a> 10.2 非受控组件</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Demo extends React.Component{
  handleSubmit = (event)=&gt;{
    event.preventDefault(); // 阻止表单提交
    const {username,password} = this;
    alert(\`输入的账号：\${username.value}，输入密码：\${password.value}\`)
  }

  render(){
    return (
      &lt;form onSubmit={this.handleSubmit}&gt;
         用户名：&lt;input ref={ c=&gt;this.username = c } type=&quot;text&quot; name=&quot;username&quot;/&gt;
         密码：&lt;input ref={ c=&gt;this.pasword = c } type=&quot;text&quot; name=&quot;pasword&quot;/&gt;
      &lt;/form&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-高阶函数与函数柯里化" tabindex="-1"><a class="header-anchor" href="#_11-高阶函数与函数柯里化" aria-hidden="true">#</a> 11 高阶函数与函数柯里化</h2><ul><li><strong>高阶函数</strong>：如果一个函数符合下面 2 规范中任一个，那该函数就是高阶函数。常见的高阶函数：Promise、seTimeout、arr.map()等等。 <ul><li>若 A 函数，接收的参数是一个函数，那么 A 就可以称之为高阶函数</li><li>若 A 函数，调用返回值依然是一个函数，那么 A 就可以称之为高阶函数</li></ul></li><li><strong>函数柯里化</strong>：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Demo extends React.Component{
  state = {
    username:&#39;&#39;,
    password:&#39;&#39;,
  }

  setFormData = (dataType)=&gt;{
       return (event)=&gt;{
         this.setState({[dataType]:event.target.value})
       }
  }

  render(){
    return (
      &lt;form onSubmit={this.handleSubmit}&gt;
         用户名：&lt;input onChange={ this.setFormData(&#39;username&#39;) } type=&quot;text&quot; name=&quot;username&quot;/&gt;
         密码：&lt;input onChange={ this.setFormData(&#39;password&#39;) } type=&quot;text&quot; name=&quot;password&quot;/&gt;
      &lt;/form&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不用柯里化写法：</strong></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Demo extends React.Component{
  state = {
    username:&#39;&#39;,
    password:&#39;&#39;,
  }

  setFormData = (dataType,)=&gt;{
       return (event)=&gt;{
         this.setState({[dataType]:event.target.value})
       }
  }

  render(){
    return (
      &lt;form onSubmit={this.handleSubmit}&gt;
         用户名：&lt;input onChange={ (event)=&gt;this.setFormData(&#39;username&#39;,event.target.value) } type=&quot;text&quot; name=&quot;username&quot;/&gt;
         密码：&lt;input onChange={ (event)=&gt;this.setFormData(&#39;password&#39;,event.target.value) } type=&quot;text&quot; name=&quot;password&quot;/&gt;
      &lt;/form&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-react-生命周期" tabindex="-1"><a class="header-anchor" href="#_12-react-生命周期" aria-hidden="true">#</a> 12 React 生命周期</h2><p>组件从创建到死亡它会经历一些特定的阶段，React 组件中包含一系列钩子函数（生命周期回调函数）会在特定的时刻调用，我们在定义组件时，会在特定的生命周期回调函数中做特定的工作。</p><p><strong>旧生命周期</strong>：</p><ul><li><p><strong>初始化阶段</strong>：由 ReactDOM.render() 触发 --初次渲染</p><ul><li>constructor()</li><li>componentWillMount()：组件将要卸载。</li><li>render()：调用时机：初始化渲染、状态更新之后。</li><li>componentDidMount()：组件挂载完毕</li></ul></li><li><p><strong>更新阶段</strong>：由组件内部 this.setState()或父组件 render 触发</p><ul><li>shouldComponentUpdate()</li><li>componentWilltUpdatet()</li><li>render()</li><li>componentDidUpdate()</li></ul></li><li><p><strong>卸载组件</strong>：由 ReactDOM.unmountComponentAtNode 触发</p><ul><li>componentwillUnmount</li></ul></li></ul><p><strong>新生命周期</strong>：</p>`,97),l=[d];function r(t,c){return i(),n("div",null,l)}const o=e(s,[["render",r],["__file","react.html.vue"]]);export{o as default};
