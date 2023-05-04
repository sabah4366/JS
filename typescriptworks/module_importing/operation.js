"use strict";
exports.__esModule = true;
exports.Calculate = void 0;
var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.add = function () {
        var num1 = 23;
        var num2 = 23;
        var sum = num1 + num2;
        console.log(sum);
    };
    Calculate.prototype.sub = function () {
        var num1 = 27;
        var num2 = 23;
        var sum = num1 - num2;
        console.log(sum);
    };
    return Calculate;
}());
exports.Calculate = Calculate;
