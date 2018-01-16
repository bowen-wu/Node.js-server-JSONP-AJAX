window.onload = function () {
    let button = document.getElementById('button')
    window.jQuery = function(){}
    window.jQuery.ajax = function(options){
        let url
        if(arguments.length === 1){
            url = options.url
        }else if(arguments.length === 2){
            url = arguments[0]
            options = arguments[1]
        }
        let {method,body,headers,successFn,errorFn} = options   // ES6 解构赋值 优化代码
        let request = new XMLHttpRequest()
        request.open(method, url)
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange = () => {              
            if (request.readyState === 4) {                 
                if (request.status >= 200 && request.status < 300) {  
                    let obj = window.JSON.parse(request.responseText)
                    successFn.call(null,obj)
                } else if (request.status >= 400) {
                    errorFn.call(null,response)
                }
            }
        }
        request.send(body)    
    }
    window.$ = window.jQuery
 
    button.addEventListener('click', (event) => {
        //window.jQuery.ajax()
        $.ajax('http://127.0.0.1:8080/xxx',{
            method: 'GET',
            body: 'a=1&b=2',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'who': 'bowen'
            },
            successFn: successFn,
            errorFn: errorFn
        })
    })

    function successFn(event){
        console.log('success')
        console.log(event)
    }
    function errorFn(event){
        console.log('error')
        console.log(event)
    }
}