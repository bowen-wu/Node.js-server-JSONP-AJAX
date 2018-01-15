window.onload = function(){
    let button = document.getElementById('button')
    let money = document.getElementById('money')
    button.addEventListener('click',(event) => {
        let script = document.createElement('script')
        let functionName = 'bowen' + parseInt(Math.random()*100000,10)
        window[ functionName ] = (result) => {
            if(result.success){
                money.innerText = result.left
            }else{
                alert('fail')
            }
        }
        script.src = '/pay?callback=' + functionName
        document.body.appendChild(script)
        script.onload = (event) => {
            event.currentTarget.remove()
            delete window[ functionName ]
        }
        script.onerror = (event) => {
            alert('error')
            event.currentTarget.remove()
            delete window[ functionName ]
        }
    })
       
}