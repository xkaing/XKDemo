# Vue原理

> 3h39m36s

1. 组件化和MVVM
2. 响应式原理
3. vdom和diff算法
4. 模版编译
5. 组件渲染过程
6. 前端路由

## 1. 组件化

- 组件化
- 数据驱动视图

![MVVM](./imgs/Vue-MVVM.png)

## 2. 响应式

- 组件data的数据一旦变化，立刻触发视图的更新
- 实现数据驱动视图的第一步
- 考察Vue原理的第一题
- 核心API - Object.defineProperty
- Object.defineProperty 的一些缺点（Vue3.0 启用Proxy）
  - Proxy有兼容性不好，缺无法polyfill

### Object.defineProperty基本用法

![api](./imgs/Object.defineProperty%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95.png)

### Object.defineProperty实现响应式

- 监听对象，监听数组
- 复杂对象，深度监听
- 缺点
  - 深度监听，需要递归到底，一次性计算量大
  - 无法监听新增属性/删除属性（Vue.set/Vue.delete）
  - 无法原生监听数组，需要特殊处理

## 3. 虚拟DOM（Virtual DOM）和 diff

- vdom是实现vue和react的重要基石
- diff算法是vdom中最核心，最关键的部分
- vdom是一个热门话题，也是面试中的热门问题

背景：

- DOM操作非常耗费性能
- 以前用jQuery，可以自行控制DOM操作的时机，手动调整
- Vue和React是数据驱动视图，如何有效控制DOM操作

解放方案-vdom

- 有了一定复杂度，想减少计算次数比较难
- 能不能把计算，更多的转移为JS计算？因为JS执行速度很快
- vdom-用JS模拟DOM结构，计算出最小的变更，操作DOM

用JS模拟DOM结构

![1](./imgs/%E7%94%A8JS%E6%A8%A1%E6%8B%9FDOM%E7%BB%93%E6%9E%84.png)

通过snabbdom学习vdom

- 简单强大的vdom库，易学易用
- Vue参考它实现的vdom和diff
- [snabbdom仓库](https://github.com/snabbdom/snabbdom)
- Vue3.0重写了vdom的代码，优化了性能
- 但vdom的基本理念不变，面试考点不变
- React vdom具体实现和Vue也不同，但不妨碍统一学习

snabbdom总结

- h函数
- vnode数据结构
- patch函数

vdom总结

- 用JS模拟DOM结构（vnode）
- 新旧vnode对比，得出最小的更新范围，最后更新DOM
- 数据驱动视图的模式下，有效控制DOM操作

### diff算法

- diff算法是vdom中最核心、最关键的部分
- diff算法能在日常使用vue React中体现出来（如key）
- diff算法是前端热门话题，面试“宠儿”

diff算法概述：

- diff即对比，是一个广泛的概念，如linux diff命令、git diff等
- 两个js对象也可以做diff，如[jiff](http://github.com/cujojs)
- 两颗树做diff，如这里的vdom diff

![diff](./imgs/diff%E7%AE%97%E6%B3%95%E6%A6%82%E8%BF%B0.png)

树diff的时间复杂度O(n^3)

- 第一，遍历tree1
- 第二，遍历tree2
- 第三，排序
- 1000个节点，要计算1亿次，算法不可用

优化时间复杂度到O(n)

- 只比较同一层级，不跨级比较
- tag不相同，则直接删掉重建，不再深度比较
- tag和key，两者都相同，则认为是相同节点，不再深度比较

![diff](./imgs/diff%E7%AE%97%E6%B3%95-%E5%8F%AA%E6%AF%94%E8%BE%83%E5%90%8C%E4%B8%80%E5%B1%82%E7%BA%A7.png)
![diff](./imgs/diff%E7%AE%97%E6%B3%95-tag%E4%B8%8D%E5%90%8C.png)

## 4. 模版编译

- 模版是vue开发中最常用的部分，即与使用想关联的原理
- 它不是html，有指令、插值、JS表达式，到底是什么？
- 面试不会直接问，但会通过“组件渲染和更新过程”考察
- 前置知识：JS的with语法
- vue template complier将模版编译为render函数
- 执行render函数生成vnode
![with](./imgs/with%E8%AF%AD%E6%B3%95.png)
- 改变{}内自由变量的查找规则，当作obj属性来查找
- 如果找不到匹配的obj属性，就会报错
- with要慎用，它打破了作用域规则，易读性变差
- 模版不是html，有指令、插值、JS表达式，能实现判断、循环
- html是标签语言，只有JS才能实现判断、循环（图灵完备的）
- 因此，模版一定是转换为某种JS代码，即编译模版
- vue-template-compiler
- 模版编译为render函数，执行render函数返回vnode
- 基于vnode再执行patch和diff
- 使用webpack vue-loader,会在开发环境下编译模版（重要）
![redner](./imgs/vue-render%E6%9B%BF%E4%BB%A3template.png)
- with语法
- 模版到render函数，再到vnode，再到渲染和更新
- vue组件可以用render代替template

## 5. 组件渲染过程

- 初次渲染过程
- 更新过程
- 异步渲染

## 6. 前端路由

- hash
- H5 history
- 对比
