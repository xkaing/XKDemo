# NPM命令

1.查看npm仓库地址
`npm config get registry`

2.查看全局安装包，0级深度
`npm ls -g  --depth 0`

3.windows 更换淘宝源

```bash
npm install 
--registry=https://registry.npm.taobao.org                      淘宝npm包镜像
--unsafe-permnpm                                                添加权限
```

4.vue项目sass安装问题

```bash
npm run dev
uninstall node-sass                                                     （之前安装不成功的先卸载）
npm i node-sass -D
--sass_binary_site=https://npm.taobao.org/mirrors/node-sass/                node-sass镜像
```
