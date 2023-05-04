class Students{
    s_name:string;
    s_age:number;
    s_course:string;
    s_address:string;

    constructor(name,age,course,address){
        this.s_name=name
        this.s_age=age
        this.s_course=course
        this.s_address=address
    }

    printstudentdetails(){
        console.log(this.s_name,this.s_age,this.s_course,this.s_address);
        
    } 

}

var obj=new Students('sabah',22,'python','noormahal')
obj.printstudentdetails()