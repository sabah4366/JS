var frameWorks=[
    {id:1,name:"django",language:"python",side:"server","rating":5},
    {id:2,name:"fastapi",language:"python",side:"server","rating":4},
    {id:3,name:"angular",language:"js",side:"client","rating":4},
    {id:4,name:"react",language:"js",side:"client","rating":4},
    {id:5,name:"spring",language:"java",side:"server","rating":4},
    {id:6,name:"asp.net",language:"c#",side:"server","rating":3}
]

// length of the frameworks
console.log(frameWorks.length);

// print all names in frameworks 
frameWorks.map(fw=>fw.name).forEach(n=>console.log(n))
// or
// frameWorks.forEach(n=>console.log(n.name))


// print python language name only
frameWorks.filter(fw=>fw.language=="python").forEach(n=>console.log(n.name))


// print server side name only
frameWorks.filter(fw=>fw.side=="server").forEach(n=>console.log(n.name))



// highest rating from the frameworks
console.log(frameWorks.reduce((fw1,fw2)=>fw1.rating>fw2.rating?fw1:fw2))

// if we want check any thing prescent in the frameworks then we use some() method it is return boolean value
var isprescent=frameWorks.some(fw=>fw.language=='php')
console.log(isprescent);