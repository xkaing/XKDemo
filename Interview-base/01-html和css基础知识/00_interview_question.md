# html&css

## 1.如何理解HTML语义化？

- 让人更容易读懂（增加代码可读性）
- 让搜索引擎更容易读懂（SEO）

## 2.在默认情况下，哪些HTML标签是块级元素、哪些是内联元素？

- 块级元素 `display:block/table`（div h1 h2 table ul ol p）
- 内联元素 `display:inline/inline-block`（span img input button

## 3.盒子模型宽度如何计算？

- `offsetWidth = width + padding  2 + border * 2`
- `box-sizing: border-box`（width === offsetWidth,内容缩减）
- [示例](./03-盒模型宽度问题.html)

## 4.margin 纵向重叠问题？

- 相邻元素的 `manrgin-top` 和 `margin-bottom` 会发生重叠
- 空白内容的 `<p></p>`也会重叠
- [示例](./04-margin纵向重叠问题.html)

## 5.margin 负值问题？

- `margin-top` 和 `margin-left` 负值，元素向上、向左移动
- `margin-right` 和 `margin- bottom` 负值，元素自身不受影响，右侧元素左移、下方元素上移动
- [示例](./05-margin负值.html)

## 6.BFC的理解应用

- Block format content 快级格式化上下文
- 一块独立渲染区域，内部元素的渲染不回影响边界以外的元素
- 形成BFC的条件
  - float 不是 none
  - position 是 fixed 或 absolute
  - overflow 不是 visible
  - display 是 flex inline-block等
- BFC 的常见应用： 清除浮动（overflow: hidden）
- [示例](./06-bfc.html)

## 7.float布局的问题，以及clearfix

- [圣杯布局](./07-1-圣杯布局.html)和[双飞翼布局](./07-2-双飞翼布局.html)
  - 使用float布局
  - 两侧使用margin负值。以便和中间内容横向重叠
  - 防止中间内容被两侧覆盖，一个用padding，一个用margin
- 手写clear fix

```css
/* 手写 clearfix */
.clearfix:after {
    content: '';
    display: table;
    clear: both;
}
.clearfix {
    *zoom: 1; /*兼容IE 低版本*/
}
```

## 8.flex画色子

```css
/* flex 画三个点的色子 */
.box {
    display: flex;  /* flex 布局 */
    justify-content: space-between; /* 两端对齐 */
    }
.item {
    /* 背景色、大小、边框 */
    }
.item:nth-child(2) {
    align-self: center; /* 第二项居中对齐 */
    }
.item:nth-child(3) {
    align-self: flex-end; /* 第三项尾对齐 */
    }
```

[示例](./08-flex色子.html)

flex概念

- 水平的为主轴，垂直的为交叉轴
- 父元素为容器，子元素为项目

容器常用的属性

- flex-direction (主轴的方向)
- flex-wrap (主轴放不下，如何换行)
- justify-content （容器中项目的主轴对齐方式）
- align-items （容器中项目的交叉轴对齐方式）

项目常用属性

- align-self （当前项目可以和其他项目拥有不一样的对齐方式）

## 9.absolute和relative分别依据什么定位？

- relative 依据自身定位
- absolute 依据最近一层的定位元素定位
  - absolute
  - relative
  - fixed
  - body
- fixed 依据浏览器窗口
- [示例](./09-position.html)

## 10.居中对齐有哪些实现方式？

- 水平居中
  - inline元素：text-align：center
  - block元素：margin：auto
  - absolute元素：left：50% + margin-left：负值
  - [示例](./10-1-居中-水平.html)
- 垂直居中
  - inline元素：line-height的值等于height的值
  - absolute元素：top50% + margin-top：负值
  - absolute元素：transform: translate(-50%, -50%)
  - absolute元素：top、left、right、bottom = 0 + margin：auto
  - [示例](./10-2-居中-垂直.html)

## 11.line-height的继承问题

- 写具体数值，如30px，则继承该值
- 写比例，如2/1.5，则继承该比例
- 写百分比，如200%，则先在父类计算好，再继承
- [示例](./11-line-height继承问题.html)

## 12.rem是什么？

rem是一个长度单位

- px，绝对长度单位
- em，相对长度单位，相对于父元素，不常用
- rem，相对长度单位，相对于根元素，常用于响应式
- [示例](./12-rem.html)

## 13.如何实现响应式

- media-query，根据不同的屏幕宽度设置根元素font-size
- rem，基于根元素的相对单位
- [示例](./13-响应式.html)

## 14.vm/vh

- rem的弊端：阶梯性 （vh，vw解决）
  - window.server.height （屏幕高度）
  - window.innerHeight = 100vh （视口高度）
  - doucment.body.clientHeight （body高度）
- vh 网页视口高度的1/100
- vw 网页视口宽度的1/100
- vmax 取两者最大值
- vmin 取两者最小值
- [示例](./14-vw-vh.html)
