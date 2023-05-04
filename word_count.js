// this  is method for
// first we split names into a array
// then we create a empty dictionary for take the count of words
var names="sabah irfan sabah irfan aslah safwan"
var wc={}
names.split(" ").map(w=> w in wc? wc[w]+=1 :wc[w]=1)
console.log(wc);