# 项目设计

> time: 1h10m59s

## 1. 面试为何考察组件和状态设计

- 框架（Vue React）的使用（和高级特性）是必要条件
- 能独立负责项目？还是需要别人带着？---考察设计能力
- 面试必考（二面/三面），场景题

考察重点：

- 数据驱动视图
- 状态：数据结构设计（React-state，Vue-data）
- 视图：组件结构和拆分

回顾面试题：

- React设计todolist（组件结构，redux state 数据结构）
- Vue设计购物车（组件结构，vuex state 数据结构）

## 2. React 实现 Todo List

> time: 27m25s

## 3. Vue 实现购物车

> time: 35m55s

- data数据结构设计
- 组件设计和组件通讯
- 结合vuex

原型图：

![1](./imgs/%E8%B4%AD%E7%89%A9%E8%BD%A6-%E5%8E%9F%E5%9E%8B%E5%9B%BE.png)

### 3.1 data数据结构设计

原则：

- 用数据描述所有的内容
- 数据要结构化，易于程序操作（遍历、查找）
- 数据要可扩展，以便增加新的功能

```js
{
    productionList: [
        {
            id: 1,
            title: '商品1'，
            price: 10,
        },
        // ...
    ],
    carList: [
        {
            id: 1,
            quantity: 1,
        },
        // ...
    ]
}
```

### 3.2 组件设计

原则：

- 从功能上拆分
- 尽量让组件原子化
- 容器组件（只管理数据）& UI组件（只显示视图）

![1](./imgs/%E8%B4%AD%E7%89%A9%E8%BD%A6-%E7%BB%84%E4%BB%B6%E8%AE%BE%E8%AE%A1.png)

```html
<App><!-- 管理所有数据 -->
    <ProductionList><!-- 商品列表 -->
        <ProductionListItem/>
        <ProductionListItem/>
        <ProductionListItem/>
    </ProductionList>
    <CarList> <!-- 购物车列表和总价 -->
        <CarListItem/>
        <CarListItem/>
    </CarList>
</App>
```
