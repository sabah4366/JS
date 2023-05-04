var mypro=new Promise((res,rej)=>{
    let jscompleted=true
    if(jscompleted){
        res("finished")
    }
})



mypro.then(res=>console.log("lets fetch start"))