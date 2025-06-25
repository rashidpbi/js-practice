//a)arrays
// let arr = ['apple','ball']
// let [a,b] = arr
// console.log(a,b)


// let [x,y,z]="bat"
// console.log(x,y,z)



// let [first,...second] = [1,2,3,4]
// console.log(first,second)

//b)objects

//basic destructuring 
let med = {aspirin:124,bicol:454}
let {aspirin,bicol} = med
console.log(aspirin, bicol)

//along with renaming
let {aspirin:a,bicol:b} = med
console.log(a,b)

//by setting default values (ie if that property doesnt exist )
let emp1 = {name:"mahi",age:30}
let {name,age,height=60} = emp1
console.log(height)

//nested
const data = {links: { twitter: "t", fb: "f" }};
// const {links:{twitter,fb}} = data //only destructures twitter and fb. loging "links " would be an error
let {links,links:{twitter,fb}} = data 
//u could do both using "let {links,links:{twitter,fb}} = data ""
console.log(links,twitter)  //destructure links, twitter and fb
//could have also did seperately . ie let {links} = data , let {twitter,fb} = links

//iterating

for(let [x,y] of Object.entries({name:"ibra",position:"f"},{name:"pedri",position:"lb"})){
    console.log([x,y])
} //ie u could use an array for destructuring iterable values . 

