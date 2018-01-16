window.onload = function () {
    let button = document.getElementById('button')
    window.jQuery = function(){}
    window.jQuery.ajax = function ({ method, url, body, headers }) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest()
            request.open(method, url)
            for (let key in headers) {
                let value = headers[key]
                request.setRequestHeader(key, value)
            }
            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    if (request.status >= 200 && request.status < 300) {
                        let obj = window.JSON.parse(request.responseText)
                        resolve.call(null, obj)
                    } else if (request.status >= 400) {
                        reject.call(null, response)
                    }
                }
            }
            request.send(body)
        })    
    }
    window.$ = window.jQuery
 
    button.addEventListener('click', (event) => {
        //window.jQuery.ajax()
        $.ajax({
            method: 'GET',
            body: 'a=1&b=2',
            url: 'http://127.0.0.1:8080/xxx',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'who': 'bowen'
            },
        }).then(
            (event) => {  // event === obj === request.responseText 这是成功时调用的函数
                console.log('success')
                console.log(event)
            },
            (event) => {  // event === response   这是失败时调用的函数
                console.log('error')
                console.log(event)
            }
            )
    })

}