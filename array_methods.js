// push() method
// push() method is used for a value insert in the array
var expences=[10000,20000,39000,24000,25000,26000]
expences.push(50000)
console.log(expences) 

// pop() method
// pop() method is used for delete the last  value  in the array
expences.pop(50000)
console.log(expences) 


// includes(object) method
// includes(object) method used for checking if the object is prescent in the array if it prescent print True or False

console.log(expences.includes(23300)) 

console.log(expences.includes(10000)) 


// map() method
// map() method is used for we can add or substract or anyother with the already prescent expence
// map() is playing like for loop
// add 5000 with expences
console.log(expences.map(exp =>exp+120)) 





// new program
// squares of all numbers

var values=[2,4,6,8,9]

console.log(values.map(sqr=>sqr**2))
console.log(values.map(cubes=>cubes**3));


// filter()
// filter() method is used for if we have any condition at the the time fetching any record in th array
var evens=[1,2,3,4,5,6,7,8,9]
var newvar=evens.filter(ev=>ev%2==0)
console.log(newvar); 

var expences=[10000,20000,39000,24000,25000,26000]
console.log(expences.filter(exp=>exp>23000))



// sort()
// sorting is little complicated in js but it is easy
// in sort method we will consider the order
// so first understand the concept
var arr=[1,3,5,6,7,8,9,0,10,54,23]

// this is a simple ascending sorting o1-o2 is not o1 minus o2 it is just a term that is o1 is greater than o2  aanenkil first o1 print chyyanam ennulla oru conecpt aan
// this is for ascending
console.log(arr.sort((o1,o2)=>o1-o2))  


// this is for descending sorting
console.log(arr.sort((o1,o2)=>o2-o1))


// reduce()
// in reduce method we will not consider the order
// reduce method is used for add total sum of the array or like other things
// if we want to add the sum of the total in the array
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum)

// find the maximum 
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

// find the minimum
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min)

// we can use multiple method in one line
// first get the even numbers in the list and calculate the  square of  that numbers and print that numbers
var arr=[1,2,3,4,5,6,7,8,9,10]
arr.filter(n=>n%2==0).map(n=>n**3).forEach(n=>console.log(n))


// some() method return booleanvalue