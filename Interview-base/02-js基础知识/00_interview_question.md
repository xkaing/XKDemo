# JS基础知识

## 1. typeof能够判断哪些类型？

- 识别所有值类型
- 识别出函数
- 识别是否为引用类型（不能再细分，统一为object）

## 2. 何时使用 === 何时使用 == ？

- 除了 == null 之外，其他都一律用 ===

```js
    const obj = { x: 100 }

    if(obj.a == null){}
    // 相当于
    if(obj.a === null || obj.a === undeined){}

```

## 3.值类型和引用类型的区别?

- 存储位置和复制方式不一样，一个是值本身，一个是指针
- 引用类型可以添加属性和方法

## 4.手写深拷贝

- 判断值类型和引用类型
- 判断数组还是对象
- 递归

```js
/**
 * 深拷贝
 */

const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
obj2.arr[0] = 'a1'
console.log(obj1.address.city)
console.log(obj1.arr[0])

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        // obj 是 null ，或者不是对象和数组，直接返回
        return obj
    }

    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用！！！
            result[key] = deepClone(obj[key])
        }
    }

    // 返回结果
    return result
}
```

## 5.如何准确的判断一个变量是不是数组

`a instanceof Array`

## 6.手写一个简易的jQuery，考虑插件和扩展性

```js
class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
    // 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function (info) {
    alert(info)
}

// “造轮子”
class myJQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    // 扩展自己的方法
    addClass(className) {

    }
    style(data) {
        
    }
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))
```

## 7.class的原型本质，怎么理解?

原型关系

- 每个class都有显示原型 prototype
- 每个实例都有隐式原型 `__proto__`
- 实例的`__proto__`对于class的 prototype

基于原型的执行规则

- 获取属性xialuo.name 或执行方法xialuo.sayHi()时
- 先在自身属性和方法去找
- 如果找不到则组东去 `__proto__` 找

原型链
![原型链](./2.3-3-%E5%8E%9F%E5%9E%8B%E9%93%BE.png)

## 8.this的不同应用场景，如何取值?

## 9.手写bind函数

## 10.实际开发中的闭包场景，举例说明

## 11.同步和异步的区别是什么?

## 12.手写Promise加载一张图片

## 13.前端使用异步的场景有哪些?

## 14.请描述event loop（事件循环/事事件轮询）的机制，可画图

## 15.什么是宏任务，什么是微任务，有什么区别?

## 16.Promise有哪三种状态，如何变化?
