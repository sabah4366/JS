// arrow function is same as python lambda function
// first program
function addtwonum(n1,n2){
    return n1+n2
}
console.log(addtwonum(12,22))

// arrow function of upper program

var sum=(n1,n2)=>n1+n2
console.log(sum(12,22))

// second program
// smart sub
var smartsub=(n1,n2)=>n1>n2 ?n1-n2:n2-n1
console.log(smartsub(23,3))