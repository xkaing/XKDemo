# git 配置操作

## 查看配置

```bash
git config user.name
git config user.email
```

## 配置本地用户名和邮箱

```bash
git config --global user.name "fuck-fe"
git config --global user.email "wx.kai@outlook.com"
```

## 生成SSH-key

```bash
ssh-keygen -t rsa -C “wx.kai@outlook.com”
cat ~/.ssh/id_rsa.pub
```
