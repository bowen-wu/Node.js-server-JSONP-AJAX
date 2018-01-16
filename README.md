# server-Node.js-demo

这是一个使用 Node.js 创建的服务器，提供 HTTP 服务。

### 实现功能
1. 用户请求 `/` 时，返回 html 内容
2. 该 html 内容里面由一个 css link 和一个 script
3. css link 会请求 `/style.css`，返回 css 内容
4. script 会请求 `/main.js`，返回 js 内容
5. 请求 `/` `/style.css` `/main.js` 以外的路径，则一律返回 404 状态码

### 使用说明

在 Git Bash 命令行中输入 `node server.js 端口号` ，即可开启服务器，并监听当前的端口号。之后在浏览器中输入 `http://localhost:端口号/[ path ]` ,即可看到相应的信息。

本服务器提供3个 `path` ,分别是 `/`、`/style.css`、`/main.js` 

`/` 响应内容为 `HTML`

`/style.css` 响应内容为 `css`

`/main.js` 响应内容为 `javascript`


### [创建过程](https://www.jianshu.com/p/19275eecb1b1)


