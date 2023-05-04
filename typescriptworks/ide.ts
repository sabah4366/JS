interface ide{
    run()
    debug()
}


class Pycharm implements ide{
    run() {
        console.log('run methodd');
        
    }
    debug() {
        console.log('dubug method');
        
    }
}

var pycharm=new Pycharm()
pycharm.run()
pycharm.debug()
