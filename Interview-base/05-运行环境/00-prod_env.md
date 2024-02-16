# 运行环境（浏览器）prod-env

> sever端有nodejs

## 1.题目

1. 从输入url到渲染出页面的整个过程？
2. window.onload和DOMContentLoaded的区别？
3. 常见的web端攻击方式有哪些？

## 2.知识点

1. 网页加载过程
2. 性能优化
3. 安全

### 2.1 网页加载过程

1. 加载资源的形式
2. 加载资源的过程
3. 渲染页面的过程

#### 2.1.1 加载资源的形式

- html代码
- 媒体文件。如图片，视频等
- javascript，css

#### 2.1.2 加载资源的过程

- DNS解析：域名 -> IP地址
- 浏览器根据IP地址向服务器发起http请求
- 服务器处理http请求，并返回给浏览器

#### 2.1.3 渲染页面的过程

- 根据HTML代码生成DOM Tree
- 根据CSS代码生成CSSOM
- 将DOM Tree和CSSOM整合形成 Reader Tree
- 根据Reader Tree 渲染页面
- 遇到`<script>`则暂停渲染，优先加载并执行JS代码，完成再继续
- 直至把Reader Tree 渲染完成

#### 2.1.4 window.onload和DOMContentLoaded

```js
window.addEventListener('load',function (){
    //页面的全部资源加载完才会执行，包括图片，视频等
})
document.addEventListener('DOMContentLoaded',function(){
    //DOM 渲染完即可执行，此时图片，视频还可能没有加载完
})
```

### 2.2 性能优化

优化原则：

- 多使用内存，缓存或其他方法
- 减少CPU计算量，减少网络加载耗时时
- 空间换时间

1. 让加载更快
2. 让渲染更快

#### 2.2.1 让加载更快

- 减少资源体积：压缩代码
- 减少访问次数：合并代码，SSR服务端渲染，缓存
- 使用更快的网络：使用CDN

#### 2.2.2 让渲染更快

- CSS放在head，JS放在body最下面
- 尽早开始执行JS，用DOMContentLOaded触发
- 懒加载（图片懒加载，上滑加载更多）
- 对DOM查询进行缓存
- 频繁DOM操作，合并到一起插入DOM结构
- 节流 throttle，防抖 debounce

#### 2.2.3 懒加载

```html
<img id="img1" src="preview.png" data-realsrc="abc.png" />
<script type="text/javascript">
    var img1 = document.getElementById('img1')
    igm1.src = img1.getAttrisbute('data-realsrc')
<script />    
// 判断屏幕是否滑倒img标签，滑倒就替换src（图片出现屏幕可视区域）

    getBoundingClientRect().top //获取元素相对浏览器视窗的位置，和
    document.documentElement.ClientHeight //比较位置
```

#### 2.2.4 防抖 debounce

- 监听一个输入框，文字变化后触发change事件
- 直接用keyup事件，则会频繁触发change事件
- 防抖：用户输入结束或暂停，才会触发change事件
- [示例](./01-debounce.html)

#### 2.2.5 节流 throttle

- 拖拽一个元素时，要随时拿到该元素的被拖拽的位置
- 直接用drag事件，则会频繁触发，狠容易导致卡顿
- 节流：无论拖拽速度多快，都会每隔设定时间触发一次
- [示例](./02-throttle.html)

### 2.3 安全

1. XSS 跨域请求攻击
2. XSRF 跨站请求伪造

#### 2.3.1 XSS

XSS攻击：

- 一个博客网站，我发表一篇博客，其中嵌入`<script>`脚本
- 脚本内容：获取cookie，发送到我的服务器（服务器配合跨域）
- 发布这篇博客，有人查看它，我轻松收割访问者的cookie

XSS防御：

- 替换特殊字符，如`<`变为`&lt;`，`>`变为`&gt;`
- `<script>` 变为 `&lt;script&gt;`，直接显示，不会作为脚本执行
- 前后端都要替换

#### 2.3.2 XSRF

XSRF攻击

- 你正在购物，看中了某个商品，商品id时100
- 付费接口时`xxx.com/pay?id=100`，但没有任何验证
- 我时攻击者，我看中一个商品，id为200
- 我向你发送了一封电子邮件，邮件标题很吸引人
- 但邮件正文隐藏着`<img src=xxx.com/pay？id=200 />`
- 你一查看邮件，就帮我购买了id是200的商品

XSRF预防

- 使用post接口
- 增加验证，例如密码，短信，指纹
