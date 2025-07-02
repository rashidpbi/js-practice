
// uncomment each "Q"s individually and run the pgm

//let change in global

//Q1. understanding variable change when calling fn 

// let v = "Vivek"

// function callV(){
//     console.log(v)
// }

// v="Vyshakh"
// callV()//Vysakh

//here above, in the memory allocation phase:-
//v and callV gets hoisted . v without initialization and callV as a whole fn.
//in execution phase:-
//v assigned "Vivek". 
// nothing happens for fn declaraton (already hoisted).
//  v reassigned to "vysakh".
// callV fn call. again EC created for this fn.
//reaches conosle.log. look for its local context . no value found. so lookup to
//global conext and find value "Vysakh" and prints it.



//Q2. understanding scope of variables 

// let v = "Vivek"

// function callV(){
//     console.log(v)
//     let v = "Vysakh"
// }

// callV()//ReferenceError: Cannot access 'v' before initialization


//Q3. sum(a)(b) = a+b


// function sum(a){
//     return function(b){
//         return a+b
//     }
// }
// sum(1)(2) //3

