window.onload = function () {
    let button = document.getElementById('button')
    button.addEventListener('click', () => {
        let request = new XMLHttpRequest()
        request.open('POST', 'http://127.0.0.1:8080/xxx')  // 初始化
        request.setRequestHeader('who','bowen')            // 设置请求 header
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        request.onreadystatechange = () => {                // 监听 state 变化
            if (request.readyState === 4) {                 
                console.log('请求和响应都完成了')
                if (request.status >= 200 && request.status < 300) {  // 状态码
                    console.log('请求成功')
                    let status = request.status
                    let statusText = request.statusText
                    let contentType = request.getResponseHeader('Content-Type')
                    let allSecondContent = request.getAllResponseHeaders()
                    let responseText = request.responseText
                    console.log('status：', status)
                    console.log('statusText：', statusText)
                    console.log('contentType：', contentType)
                    console.log('allSecondContent：', allSecondContent)
                    console.log('responseText：', responseText)
                    console.log('responseText 的类型：',typeof responseText)
                    let obj = window.JSON.parse(responseText)
                    console.log('responseText 使用 JSON.parse 之后的类型：',typeof obj)
                    console.log('使用 JSON.parse 之后的数据：',obj)
                } else if (request.status >= 400) {
                    console.log('请求失败')
                }
            }
        }
        request.send('a=1&b=2')    // 发送( POST 包含数据； GET 不包含数据)
        // 在 node.js 中有 CORS 跨域
    })
}