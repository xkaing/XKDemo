# Vue的使用

> 2h38m2s  
> [Vue2.X官方文档](https://v2.cn.vuejs.org/v2/guide/)

## 1. 基本使用

1. 模版（插值，指令）
    - 插值，表达式
    - 指令，动态属性
    - v-html：会有XSS分险，会覆盖子组件
2. computed和watch
    - computed 有缓存，data不变则不会重新计算
    - watch 如何深度监听？
    - watch 监听引用类型，拿不到oldVal
3. class和style
    - 动态属性
    - 使用驼峰式写法
4. 条件
    - v-if v-else的用法，可使用变量，也可以使用 === 表达式
    - v-if 和 v-show 的区别
    - v-if 和 v-show 的使用场景
5. 循环
    - 如何遍历对象？ --- 也可以用v-for
    - key的重要性，key不能乱写（如random和index）
    - v-for和v-if不能一起使用
6. 事件
    - event 参数，自定义参数
    - 事件修饰符，按键修饰符
    - 【观察】事件被绑定在哪里
7. 表单
    - v-model
    - 常见表单项 textarea checkbox radio select
    - 修饰符 lazy number trim
8. 组件使用
    - props 和 $emit
    - 组件间通讯-自定义事件
    - 组件生命周期（单组件-父子组件）

## 2. 高级特性

1. 自定义 v-model
2. $nextTick
    - Vue 是异步渲染
    - data改变之后，DOM不会立刻渲染
    - $nextTick会在DOM渲染之后被触发，以获取最新的DOM节点
    
### 3. slot
    - 基本使用
    - 作用域插槽
    - 具名插槽
4. 动态、异步组件
    - import()函数
    - 按需加载，异步加载大组件
5. keep-alive
    - 缓存组件
    - 频繁切换，不需要重复渲染
    - Vue常见性能优化
6. mixin
    - 多个组件有相同的逻辑，抽离出来
    - mixin并不是完美的解决方案，会有一些问题
        - 变量来源不明确，不利于阅读
        - 多mixin可能会造成命名冲突
        - mixin和组件可能组成多对多关系，复杂度较高
    - Vue3 提出的Composition API旨在解决这些问题

## 周边插件

### Vuex

基本概念

- state
- getters
- action
- mutation

用于Vue组件

- dispatch
- commit
- mapState
- mapGetters
- mapActions
- mapMutations

[Vuex](./Vuex.png)

### Vue-router

- 路由模式（hash、H5 history）
  - hash模式（默认），如`http://abc.com/#/user/10`
  - H5 history模式，如`http://abc.com/user/10`
  - 后者需要server端支持，因此无特殊需求可选择前者
- 路由配置（动态路由、懒加载）
