// add 2 numbers using functions
// 1st program
function maxm(num1,num2){
    if (num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }
    else{
        console.log(`${num2} is greater than ${num1}`);
    }
    }

maxm(2,5)


// 2nd program
function maxtwo(n1,n2){
    return console.log(`${n1>n2 ?n1:n2} is greater`)

}

maxtwo(22,32)



// 3rd program
function smartsub(n1,n2){
        return n1>n2 ? n1-n2:n2-n1

    
    }


console.log(smartsub(3,2));


// 4th program

function cube(n1){
    return n1**3
}

console.log(cube(3))