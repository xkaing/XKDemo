# Shell 操作

## 修改hosts

sudo vim /etc/hosts

按i健进入插入模式编辑,esc进入正常模式,输入:wq保存退出

## Install Homebrew

/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/master/install.sh>)"

brew -v
brew update
brew list

## 修改shell

chsh -s /bin/zsh

echo $ZSH_THEME
~/.oh-my-zsh/themes
vim ~/.zshrc

source ~/.zshrc

## 隐藏用户名和主机名

prompt_context() {}

## oh my zsh安装和设置

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

如果是无法连接，查询raw.githubusercontent.com的ip地址，再把地址添加到hosts

1. [查询ip](https://www.ipaddress.com/) -> `199.232.68.133  raw.githubusercontent.com`
2. `sudo vim /etc/hosts` 添加ip和域名

设置

1. `chsh -s /bin/zsh` 设置zsh
2. `echo $ZSH_THEME` 查看zsh当前主题
3. `~/.oh-my-zsh/themes` 主题目录
4. `vim ~/.zshrc` 修改配置
5. `source ~/.zshrc` 重启配置
