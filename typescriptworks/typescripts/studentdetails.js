var Studentss = /** @class */ (function () {
    function Studentss(name, age, course, address) {
        this.s_name = name;
        this.s_age = age;
        this.s_course = course;
        this.s_address = address;
    }
    Studentss.prototype.printstudentdetails = function () {
        console.log(this.s_name, this.s_age, this.s_course, this.s_address);
    };
    return Studentss;
}());
var obj = new Studentss('sabah', 22, 'python', 'noormahal');
obj.printstudentdetails();
