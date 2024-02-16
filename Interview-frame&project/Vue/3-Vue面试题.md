# Vue2真题演练

> 25m0s

## 1. v-show v-if的区别

- v-show通过CSS dispaly 控制显示和隐藏
- v-if组件真正的渲染和销毁，而不是显示和隐藏
- 频繁切换显示状态用v-show，否则用v-if

## 2. 为何v-for中要使用key

- 必须用key，且不能是index和random
- diff算法中通过tag和key来判断，是否是sameNode
- 减少渲染次数，提升渲染性能

## 3. 描述Vue组件生命周期（有父子组件的情况）

- 单组件生命周期图
  1. beforeCreate
  2. created
  3. beforeMount
  4. mounted
  5. beforeMount
  6. updated
  7. beforeDestroy
  8. destroyed
- 父子组件生命周期关系(嵌套关系)
  - father created
    - son created
    - son mounted
  - fanther mounted

## 4. Vue组件如何通讯(常见)

- 父子组件 props和this.$emit
- 自定义事件
  - event.$on (绑定)
  - event.$emit (调用)
  - event.$off (销毁，防止内存泄漏)
- vuex

## 5. 描述组件渲染和更新的过程

![vue](./imgs/vue%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.png)

## 6. 双向数据绑定v-model的实现原理

- input元素的value = this.name
- 绑定input事件的this.name = $event.target.value
- data 更新触发re-redner

## 7. 对MVVM的理解

![1](./imgs/Vue-MVVM.png)

## 8. computed有何特点

- 缓存，data不变不会重新计算
- 提高性能

## 9. 为何组件data必须是个函数

```js
export default{
  name: 'app'
  data() {
    return {
      name: 'vue',
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    changeName() {
      this.name = 'xxx'
    }
  }
}
```

- vue文件编译完后，组件实际上是个class
- 使用组件相当于class的实例化
- 实例化后执行data函数，函数在在闭包中
- 如果不是函数的话，每一个组件的实例都共享了，其中一个修改data里面的数据，其他组件都会变动

## 10. ajax请求应该放在那个生命周期

- mounted
- JS是单线程的，ajax异步获取数据
- 放在mounted之前没有用，只会让逻辑更混乱

## 11. 如何将组件所有props传递给子组件

- $props
- `<User v-bind= "$props" />`
- 细节知识点，优先级不高

## 12. 如何自己实现v-model

```vue
<template>
    <!-- 例如：vue 颜色选择 -->
    <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    >
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
    model: {
        prop: 'text1', // 对应 props text1
        event: 'change1'
    },
    props: {
        text1: String,
        default() {
            return ''
        }
    }
}
</script>
```

## 13. 多个组件有相同的逻辑，如何抽离

- mixin
- 以及mixin的一些缺点

## 14. 何时要使用异步组件

- 加载大组件
- 路由异步加载

## 15.何时需要使用keep-alive

- 缓存组件，不需要重复渲染
- 如多个静态tab页的切换
- 优化性能

## 16. 何时需要使用beforeDestory

> 防止内存泄漏

- 解绑自定义事件 event.$off
- 清除定时器
- 解绑自定义的DOM事件，如window scroll等

## 17. 什么是作用域插槽

```js
<!-- 父组件 -->
<ScopedSlotDemo :url="website.url">
    <template v-slot="slotProps">
        <!-- soltProps 名字可自定义 -->
        {{slotProps.slotData.title}}
    </template>
</ScopedSlotDemo>

<script>
export default {
    props: ['url'],
    data() {
        return {
            website: {
                url: 'http://imooc.com/',
                title: 'imooc',
                subTitle: '程序员的梦工厂'
            },
        }
    }
}
</script>
```

```js
<!-- 子组件 -->
<template>
    <a :href="url">
        <slot :slotData="website">
            {{website.subTitle}} <!-- 默认值显示 subTitle ，即父组件不传内容时 -->
        </slot>
    </a>
</template>

<script>
export default {
    props: ['url'],
    data() {
        return {
            website: {
                url: 'http://wangEditor.com/',
                title: 'wangEditor',
                subTitle: '轻量级富文本编辑器'
            }
        }
    }
}
</script>
```

## 18. Vuex中action和mutation有何区别

- action 中处理异步，mutation不可以
- mutation 做原子操作
- action可以整合多个mutation

## 19. Vue-router 常用的路由模式

- hash默认
- H5 histroy（需要服务端支持）
- 两者比较

## 20. 如何配置Vue-router异步加载

```js
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./../components/Navogator')
    },
    {
      path: '/feedback',
      component: () => import('./../components/FeedBack')
    }
  ]
})
```

## 21. 请用vnode描述一个DOM结构

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 20px">
    <li>a</li>
  </ul>
</div>
```

```js
{
  tag: 'div',
  props: {
    id: 'div1',
    className: 'container'
  }
  children: [
    {
      tag: 'p',
      children: 'vdom'
    },
    {
      tag: 'ul',
      props: { style: 'font-size:20px'}
      children: [
        {
          tag: 'li',
          children: 'a'
        }
      ]
    }
  ]
}
```

## 22.监听data变化的核心API是什么

- Object.defineProperty
- 以及深度监听、监听数组
- 有何缺点

## 23. Vue 如何监听数组变化

- Object.defineProperty 不能监听数组变化
- 重新定义原型，重写push pop等方法，实现监听
- Proxy可以原生支持监听数组变化

## 24. 请描述响应式原理

- 监听data变化
- 组件渲染和更新的过程

## 25. diff算法的事件复杂度

- O(n)
- 在O(n^3)基础上做了一些调整
- 只比较同一层级，tag不相同直接销毁重建，不再深度比较
- 判断tag和key相同的话，不再重复对比

## 26. 简述diff算法过程

- patch(elem,vnode)和patch(vnode,newVnode)
- patchVnode 和 addVnodes 和 removeVnodes
- updateChildren(key的重要性)

## 27. Vue为何是异步渲染，$nextTick何用

- 异步渲染(以及合并data修改)，以提高渲染性能
- $nextTick在DOM更新完之后，触发回调

## 28. Vue常见性能优化方式

- 合理使用V-show和v-if
- 合理使用computed
- v-for时加key，以及避免和v-if同时使用
- 自定义事件，DOM事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深
- 使用vue-loader在开发环境做模版编译（预编译）
- webpack层面的优化
- 前端通用的性能优化，如图片懒加载
- 使用SSR
