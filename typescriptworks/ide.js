var Pycharm = /** @class */ (function () {
    function Pycharm() {
    }
    Pycharm.prototype.run = function () {
        console.log('run methodd');
    };
    Pycharm.prototype.debug = function () {
        console.log('dubug method');
    };
    return Pycharm;
}());
var pycharm = new Pycharm();
pycharm.run();
pycharm.debug();
