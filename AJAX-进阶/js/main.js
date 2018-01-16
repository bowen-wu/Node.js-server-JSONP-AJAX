window.onload = function () {
    let button = document.getElementById('button')
    window.jQuery = function(){}
    window.jQuery.ajax = (options) => {
        let method = options.method
        let url = options.url
        let body = options.body
        let successFn = options.successFn
        let errorFn = options.errorFn

        let request = new XMLHttpRequest()
        request.open(method, url)  
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
        let options = {
            method: 'GET',                     
            url: 'http://127.0.0.1:8080/xxx',
            body: 'a=1&b=2',                  
            successFn: successFn,
            errorFn: errorFn
        }
        $.ajax(options)
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