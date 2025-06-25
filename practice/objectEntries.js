let user = {
    name:'zlatan',
    age:30,

}

console.log(Object.keys(user)) // ["name", "age"]
console.log(Object.values(user)) //[ 'zlatan', 30 ]

console.log("entries:",Object.entries(user))

for(let [key,val] of Object.entries(user)){
    console.log(`${key}:${val}`)
}


let arr = [["name", "Zlatan"], ["age", 30]];
let obj = Object.fromEntries(arr);
console.log(obj); // { name: "Zlatan", age: 30 }