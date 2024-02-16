# 命名规范

## 1. 命名方法

1. 小驼峰命名法（lowerCamelCase） ：第一个单词以小写字母开始，第二个单词的首字母大写，例如：firstName、lastName。
2. 大驼峰命名法（CamelCase） ：每一个单词的首字母都采用大写字母，例如：FirstName、LastName。
3. 下划线命名法（snake_case）：下划线命名法也叫蛇形法，全由小写字母和下划线组成，在两个单词之间用下滑线连接。例如：first_name。
4. 中划线命名法（kebab-case）：中划线命名法也叫串式命名法，各个单词之间通过下划线“-”连接。例如：first-name。

## 2. 目录/资源文件命名

强制使用：中划线命名法

命名规则：

1. 文件名不得含有空格
2. 文件名建议只使用小写字母，不使用大写字母
3. 文件名包含多个单词时，单词之间建议连词线 ( - ) 分隔
4. 有复数结构式，要使用复数

示例：login 、 error-page、 icons

## 3. 说明文件命名

强制使用：全部大写字母

为了醒目，某些说明文件的文件名，可以使用大写字母

示例：README

补充说明: README 标准

- 项目简介。
- 注意事项。
- 线上的示例地址（测试、正式）。
- 支持运行的环境。
- 必要的依赖准备，以及如何搭建。
- 项目的安装指南。
- 相关的文档链接。
- 相关人员的联系方式。

README.md 示例：

```bash

一、项目简介
管理后台功能说明

二、注意事项
1、如果启动mock数据 node 版本 不能是12.12.0 -- 12.20.0

三、线上的示例地址
测试地址：

正式地址：

四、支持运行的环境
node >= 10

npm >= 6.7

五、必要的依赖准备，以及如何搭建
1、脚手架：wlg-cli-temp 全局安装：

npm install -g wlg-cli-temp
初始化构建项目

ff2 init <name>
查看功能

ff2 list
2、公共函数库：

3、公共组件库：

六、项目的安装指南
安装依赖

npm install
运行测试环境

npm run dev
运行mock数据

npm run dev:mock
运行正式环境

npm run prod
构建正式环境

npm run build:prod
七、相关的文档链接
脚手架文档：https://www.processon.com/view/link/615fa8757d9c0806d55a8067#map

公共组件库文档：

公共函数库文档：

八、相关人员的联系方式
第一负责人：FF

第二负责人：

```

## 4. 函数命名

强制使用：小驼峰命名法

命名规则：前缀为动词，见名知意

1. onXxx 监听事件的回调
2. handleXxx 处理事件
3. getXxx 获取某个值
4. setXxx 设置某个值

常见场景：

a、事件处理：

(1).事件主动监听采用 onXxx ,被动处理使用handleXxx

示例：onXxxSubmit: '提交表单'  
handleXxxSizeChange: '处理分页页数改变'  
handleXxxPageChange: '处理分页每页大小改变'  
onXxxKeydown: '按下键'  

(2). 其他命名：元素+click、 元素+change、select+范围

示例：selectAllXxx: '选择所有'  
xxxCellClick: '当某个单元格被点击时会触发该事件'  
xxxSortChange: '当表格的排序条件发生变化的时候会触发该事件'  

b、增删改查处理：

增: addXxx 添加子项  
    createXxx 创建大项

删: deleteXxx 真删除  
    removeXxx 伪删除

改：updateXxx

查: getXxx 获取原始数据需要修改  
    fetchXxx 原始数据

示例：  
getUserList: '获取用户列表',  
fetchToken: '取得Token',  
deleteUser: '删除用户',  
removeTag: '移除标签',  
updateUserInfo: '更新用户信息',  
addUser: '添加用户',  
createAccount: '创建账户'

c、API接口函数：

get: getXxxApi  
post: postXxxApi  
patch: patchXxxApi  
delect: delectXxxApi  
域名：xxxUrl  

## 5. 变量命名

一般属性变量 强制使用：小驼峰命名法

### 5.1、布尔值

命名规则：前缀为判断性动词

hasXxx 判断是否含有某个值。true：含有此值； false：不含有此值

isXxx 判断是否为某个值。true：为某个值； false：不为某个值

示例：isShow: '是否显示', isLoading: '是否处于加载中'， hasToken: '是否包含Token',

### 5.2、数组命名

命名规则：使用名词+List组合

示例: userList: '用户列表'

### 5.3、私有属性变量

命名规则：前缀为下划线(_)后面和变量命名一样。

### 5.4、枚举变量 \textcolor{red}{强制使用：大驼峰命名法}

枚举的属性使用全大写字母，单词间用下划线隔开。

示例：let TargetState = { READING: 1, READED: 2, APPLIED: 3, READY: 4 };

### 5.5、常量： 强制使用：使用全大写字母，单词间用下划线隔开

### 5.6、组件命名规则

强制使用：大驼峰命名法

命名规则：可参考vue官网风格指南

例如： 1、按照功能来命名

2、应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

3、组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

示例：components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

### 5.7、class、id 、标签、属性命名

强制使用: 中划线命名法

命名规则：

1.class、id 、标签、属性的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用中划线 “-” 连接

2.class必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。

3.元素 id 必须保证页面唯一。

4.禁止创建无样式信息的 class

示例：

```html
<div class="sidebar"></div>
<div id="navigation"></div>
<my-button :button-text="查询"></my-button>
```

### 5.8、命名其他注意事项

1、尽量不要缩写、简写的单词。除了 template => tmp、message => msg、image => img、property => prop 这些单词已经被公认的缩写

2、可读性强的命名优先于简短的命名

3、命名长度最好在 20 个字符以内，避免多长带来的阅读不便

4、命名要有具体的含义，避免使用一些泛指和无具体含义的词

5、不要使用拼音，更不要使用中文

6、正则表达式用 Exp 结尾

7、ref：使用Ref结尾
