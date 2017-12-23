var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/













  console.log('HTTP 路径为\n' + path)
    if(path == '/style.css'){
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write('body{ background-color: #303052; } img { width: 550px; height: 400px; position: absolute; left: 50%; top: 50%; transform: translate( -50%,-50% ); }')
        response.end()
    }else if(path == '/main.js'){
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write('alert("您好，尊敬的用户！")')
        response.end()
    }else if(path == '/'){
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write('<!DOCTYPE html>\n<html>\n'  +
            '<head>\n<title>饥人谷</title>\n<link rel="stylesheet" href="/style.css">\n' +
            '</head>\n<body>\n'  +
            '<img src="https://jirengu.com/addons/theme/stv1/_static/app/index-new/imgs/logo.png" alt = "饥人谷">\n' +
            '<script src="/main.js"></script>' +
            '</body>\n</html>\n')
        response.end()
    }else{
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write('<!DOCTYPE html>\n<html>\n'  +
            '<head>\n<title> NOT FOUND </title>\n' +
            '<style type = "text/css">\nbody {\nbackground: url(http://img.zcool.cn/community/015c4357764df30000012e7e576eae.jpg) no-repeat;\nbackground-size : cover;\n }\n h1 {\n color: red; \n}\n</style>\n' +
            '</head>\n<body>\n'  +
            '</body>\n</html>\n')
        response.end()
    }









  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


