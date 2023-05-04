// for exp in expences   => if we use  (for let exp in expences)) then it will be print the index postion
// for exp of expences   => if we use  (for let exp in expences)) then it will be print the value of that index
expences=[23000,25000,22000,16000,7000,84000]

for (let exp of expences){
    if (exp>23000){
        console.log(exp);

    }
    
    
}