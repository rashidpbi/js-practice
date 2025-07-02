
// let f2= new Function('a','b','return a+b');
// console.log(f2(2,3))
// f2(2,3)



const user = {
  name: "Alice",
  greet() { console.log(this.name); }
};
user.greet();      // "Alice"
const fn = user.greet;
fn(); 

// here:-
// Method call (user.greet()): this = object

// Standalone call (fn()): this = window (but window.name is "" by default)

// This behavior changes in strict mode (this becomes undefined)