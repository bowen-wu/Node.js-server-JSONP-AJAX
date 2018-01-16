window.onload = function () {
    let button = document.getElementById('button')
    window.jQuery = function(){}
    window.jQuery.ajax = (method,url,body,successFn,errorFn) => {
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
 
    button.addEventListener('click', () => {
        //window.jQuery.ajax()
        $.ajax(
            'GET',                      // method
            'http://127.0.0.1:8080/xxx',// url
            'a=1&b=2',                  // body
            (event) => {                // successFn
                console.log('sucess')
                console.log(event)
            },
            (event) => {                // errorFn
                console.log(event)
            }
        )
    })

    function successFn(){
        console.log('success')
        console.log()
    }
    function errorFn(){
        console.log('error')
    }
}