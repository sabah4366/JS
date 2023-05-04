interface car{
    start()
    stop()
    accelerator()
}



var benz:car={
    start(){
        console.log('start car');
        
    },
    stop(){
        console.log('stop the car');
        
    },
    accelerator(){
        console.log('accelarate the car')
    }

    
}


interface onInit{
    ngOnInit()


}

var component:onInit={
    ngOnInit(){
        console.log("initialisation");
        
    }
}