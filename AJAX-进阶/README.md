# AJAX-进阶

1. 首先回顾下 [window.jQuery](https://www.jianshu.com/p/3eb5f1c7937e)

2. 将 AJAX-基础 的[代码](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/master/AJAX-%E5%9F%BA%E7%A1%80)进行封装，封装为 window.jQuery.ajax，[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/da549df5393a229f1d3e878d27b491755e6e99bb)

3. 将封装的 window.jQuery.ajax 进行代码优化（给参数命名）。由于传入参数过多，将其参数设置为有结构的数据 ==> 对象，[代码地址](https://github.com/bowen-wu/Node.js-server-JSONP-AJAX/tree/80c6de9166b9efb60b2c34a5fb115aa9d0f61fcf)

4. 实现传入不定个参数的优化。既可以传入一个对象，也可以传入 url + 对象。[代码地址]()。此时由于要使用 arguments ，所以不能使用箭头函数。


