# AJAX-进阶

1. 首先回顾下 [window.jQuery](https://www.jianshu.com/p/3eb5f1c7937e)

2. 将 AJAX-基础 的[代码](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/master/AJAX-%E5%9F%BA%E7%A1%80)进行封装，封装为 window.jQuery.ajax，[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/da549df5393a229f1d3e878d27b491755e6e99bb)

3. 将封装的 window.jQuery.ajax 进行代码优化（给参数命名）。由于传入参数过多，将其参数设置为有结构的数据 ==> 对象，[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/80c6de9166b9efb60b2c34a5fb115aa9d0f61fcf)

4. 实现传入不定个参数的优化。既可以传入一个对象，也可以传入 url + 对象。[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/3ca84506652fa89c4f3854da77420d7f6094e240)。此时由于要使用 arguments ，所以不能使用箭头函数。

5. 优化代码，使用 ES6 解构赋值达到优化代码的目的，并增加 request.setRequestHeader() 功能。[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/5118accb4c21f0ed2b8da6f2c5677867d238bf51)。

6. 如果不实现传入不定个参数，还可以进一步使用 ES6 解构赋值优化。[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/88436fc2378cec3a814a96cc3260a5de133038da/AJAX-%E8%BF%9B%E9%98%B6)

7. 使用 Promise 规范进行优化，` return new Promise(function(resolve,reject){}) `，成功 === 调用 resolve，失败 === 调用 reject，之后在调用时使用 ` .then ` 方法。[代码地址]()

