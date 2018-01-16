# JSONP

本示例是使用 JSONP 实现跨域问题

JSONP 就是

请求方：前端（浏览器）

响应方：后端（服务器）

1. 请求方创建 ` script ` ，` src ` 指向响应方，同时传入一个查询参数 ?callback = 随机数

2. 响应方根据查询参数 callback ，构造形如 ` 随机数.call(undefined,"传给前端的数据") ` 这样的响应

3. 浏览器接收到响应，就会执行 ` 随机数.call(undefined,"传给前端的数据") `

4. 请求方获取到数据

