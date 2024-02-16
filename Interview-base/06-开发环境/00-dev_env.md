# dev_env

## 1.知识点

1. git
2. 调试工具（chrome）
3. 抓包（charles，thor）
4. webpack babel
5. linux 常用命令

### 1.1 git

- `git add .` - 暂存
- `git checkout xxx` - 恢复xxx文件
- `git commit -m "xxx"` - 提交
- `git push origin master` - 推送
- `git pull origin master` - 下拉
- `git branch` - 查看所有分支
- `git merge xxx` - 合并xxx分支到当前分支
- `git checkout -b xxx` / `git checkout xxx` - 拉取新分支/切换分支

### 1.2 chrome

- Elements
- Network
- Console
- Application
- debugger

### 1.3 抓包

- windows -> fiddler
- Mac OS -> charles
- phone -> thor

### 1.4 webpack/babel

#### 1.4.1 webpack

`webpack`安装：

```bash
npm init -y
npm install webpack webpack-cli -D 
npm install html-webpack-plugin -D
npm install webpack-dev-server -D 
```

>网络不好的情况下，使用淘宝源`--registry=https://registry.npmmirror.com`

`webpack.config.js`配置:

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode 可选 development 或 production ，默认为后者
    // production 会默认压缩代码并进行其他优化（如 tree shaking）
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),       //入口文件
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')          //导出文件
    },
    plugins: [                              //html文件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),  // 根目录
        open: true,  // 自动打开浏览器
    }
}

```

`webpack`使用：

`package.json`文件

```bash
    "scripts": {
      "build": "webpack --config webpack.config.js",
      "dev": "webpack-dev-server"
    },
```

build默认的值就是·`webpack --config webpack.config.js`,可以省略不写

#### 1.4.2 babel

babel安装：

```bash
npm install @babel/core @babel/preset-env babel-loader -D
```

新建`.babelrc`文件:

```bash
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```

更新webpack.config.js配置文件：

```js
module.exports = {
      module: {
        rules: [             //es6 转 es5
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include:  path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
        ]
    },
}
```

#### 1.4.3 webpack生产环境配置

`webpack.config.js`文件修改:

```js
  // 第一步：
  output: {
    filename: 'bundle.[contenthash].js',             //生成带哈希值的js文件，便于缓存
    path: path.join(__dirname, 'dist')
  },
  // 第二步：
  // 删除 devServer 模块
```

`packeage.json`文件修改:

```js
"build": "webpack --config webpack.prod.js",
```

### 1.5 linux常用命令

- `ls`
- `ls -a`
- `ll`
- `clear`
- `mkdir` - 新建文件夹
- `rm -rf` - 删除文件夹
- `cd`
- `mv` - 重命名/移动 文件
- `cd ..` - 返回上级
- `cp`
- `vi` - 新建并打开vm编辑器
  - `i`
  - `ESC`
  - `:wq`
  - `:w`
  - `:q`
- `vim`
- `cat`
