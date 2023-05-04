var person={
    name:'sabah',
    age:23,
    place:'kannur',
    pin:670601

}
console.log(person.name);
console.log(person.age);


// this is we are checking salary indon check chyyunn person l 
console.log('salary' in person);

// adding a attribute  salary into person

person.salary=45000
console.log(person);

// we are adding extra salary to the current salary

person.salary+=5000  
// Or
// person['salary']+=5000
console.log(person);