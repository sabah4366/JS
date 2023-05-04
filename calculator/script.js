

function modes(){
    let mylink=document.querySelector('#light-mode')
    let theme=mylink.getAttribute('href')
    
    if (theme=='./lightmode.css'){
        mylink.href="./darkmode.css"
    }
    if( theme=="./darkmode.css"){
        mylink.href="./lightmode.css"
    }
}



let flag=true

function displayNumber(event){
        if (flag){
            result.value+=event.target.value

        }
        else{
            result.value=event.target.value
            flag = true
        }
        
}

function clearBox(){
    result.value=""
}

function evaluateExpression(){
    let curexp=result.value
    let out=eval(curexp)
    result.value=out
    flag =false
}
