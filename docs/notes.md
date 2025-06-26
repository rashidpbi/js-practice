# JavaScript Notes

---

## 1. Overview

### 1.1 What is JavaScript?

<a name="Introduction"></a>

```javascript

// javascript is a dynamic programming language primarily used to create interactive behaviour on websites.its one of the core technologies of the web,alongside html and css

// javascript is used to "make  webpages alive". 

// javascript programs are called scripts.

// they can be written in webpage's html and run automatically as page loads

// they can run on which that have javascript engines. browsers have embedded js engines . eg: v8 in chrome

// functionalities of js depend on the environment on which it is run. nodejs running js can do functions like network requests, read/write arbritrary files etc.

// in-browser is abled to :-
// *handle user interaction
// *get and set cookies
// *communicate using newtork requests
// *add new html to the page


// js is build with the safety and privacy of user considerations.some of in-browser js safety-limitations are as follows:-
// *they dont have access to OS functions. they can't handle read/write operations on arbritary files in disk storage. 
// *they dont have permission to access to user devices like camera unless given explicit permission.
// *can't access to other windows or tabs unless set
// *can communicate effectively with the server which has supplied its webpages. but to communicate with websites from other domains, it has to follow different protocols.

// for different purposes in mind, different languages exists which are built on top of js. these are transpiled to js first inorder to be executed in browser .

// js is iniially created for browser only but is now used in other environments as well.
```

### 1.2 IDEs

```javascript
// IDE: 
// *An IDE refers to integrated development environment where developer used to write programs. a typical one consist of a code editor, accesss to file systems, plugins ,debugger and testing tools.
```

---

### 1.3 Logical operations


```javascript
// == has more precedence over ||
// || returns the first truthy value
// && returns the last truthy value

// unary operation (+/-) on a string can convert it to a number


````

## 2. Code Fundamentals

<a name="Code Structure"></a>

### 2.1 Statements and Semicolons

```javascript
// statements are syntax constructs and commands that perform actions.
// they are seperated by semicolons

// semicolons:
// in most cases semicolons are placed implicitely by js where its required . but there are cases when its not implicitely places though required. 
```

### 2.2 Strict Mode

```javascript
// use strict:
// By  introduction of ecmascript 2015 (es5), many new features were added and modified existing codes. To disable those changes and to have old code working, dont use strict mode. 
// always use it at the top of the code 

// modern javascript uses 'classes' and 'modules' that enables 'use strict' automatically that you dont want to declare explicitely
```

---

## 3. JavaScript Execution Model

<a name="basics"></a>

### 3.1 Compilation vs Interpretation

```javascript
//Compilation:    Conversion of whole high level code to machine level at a time.
//Interpretation: Code executed line by line

//Javascript is just in time compiled. ie a compination of compilation and interpretation. JS executes code line by line, the engine finds frequently used code and compiles it to optimized machine code.
```

### 3.2 Notes on Bindings

```javascript
//The association of an identifier with a value is generally called a "binding."
```

---

## 4. Data Types

<a name="primitives"></a>

### 4.1 Primitive Types

```javascript
// Number,String, Boolean, Null,Undefined,BigInt and Symbol are the primitive types.


//Number
Number("10"); //10

//there are special data types like Infinity,-Infinity,NaN that belongs to number data type
alert(1/0) //Infinity

String(10); //"10"

//numbers are limited by ±(253-1)

console.log(1 / 0); // Infinity
console.log("abc" / 2); // NaN

isFinite(5); // true
isFinite("abc"); // false


// isNaN(value) converts the value using Number(value) and checks if its NaN
isNaN("str") //true
isNaN(NaN) //true
isNaN(12) //false



parseInt("100px"); // 100
parseFloat("12.5em"); // 12.5

// String

const str = "hello";

console.log(str[1]);      // "e" 
console.log(str.charAt(1)); // "e" 

console.log(str[9]);      // undefined
console.log(str.charAt(1)); // "" 

// strings are immutable
str[0] = "H"; // doesn’t work

// searching

str.indexOf("lo") // position or -1

str.includes("he") // true/false

str.startsWith("he")  //true
 str.endsWith("lo") //true

 //Array

 //array is used to store a sequence of ordered data where each element can be accessed using its index

 //shift() removes data from beginning
 //unshift() to add data in the beginning

 //forEach((item,i)=>{})


//arrays are compared by reference. not by value
[1,2] == [1,2] //false


//typeof array is an obj

//array methods

[1, 2, 3].find(x => x > 1); // 2



const arr1 = [1,2,3]
console.log(arr1.reduce((a,c)=>a+c,0)) //6

[1, 2, 3].reverse(); // [3, 2, 1]

[1, 2].concat([3, 4]); // [1, 2, 3, 4]

[1, 2, 3].indexOf(2);   // 1
[1, 2, 3].includes(4);  // false
// sort()  converts the values to their unicode and sort accordinly

//it can optionaly accept two parameters a and b, it should return -1, if a should come before b and 1 if vice versa. 0 if both should be equal in sorting order. 

[4,2,7,1].sort((a,b)=>a-b) //1,2,4,7

[4,2,7,1].sort((a,b)=>b-a) //7,4,2,7


//BigInt is used to handle large values without losing precision

const num = 9007199254740993; // Inaccurate (JS Number loses precision beyond 2⁵³ - 1)
const big = 9007199254740993n; // Accurate (BigInt)

//SYMBOLS

// a symbol is a primitive unique value with an optional description

// its a unique identifier

// it can be created using Symbol() with an optional description

// a symbol will be unique even though same description be used at the time of creation

//they dont support implicit auto conversion to other types
let id1 = Symbol("id")
let id2 = Symobl("id")
console.log(id1==id2)//false

//by specification , only two types are allowed as keys in objects. they are strings and symbols. though obj[3] be used, it will be internaly converted to obj["3"]

//we use symbols to add keys to objects that are unique. so that even if another user use that object in a different library by using same id name,still the key would be different since created using Symbol hence avoiding any conflicts.

let user = { name: "John" };
let id = Symbol("id")
user[id] = "124"
//suppose in other library another user used another id and created using same description
let theirId = Symbol("id")
user[theirId]="456"
//suppose they would have used "let id =Symbol("id")" . still there would be no issue because the scope of let would be different and the new id created would anyway be different since created using Symbol. 

//but if a string was used to create id. then there would be a conflict

user[id] = "98"
//and if they also use user[id] , then there would be a conflict because both contain "id" string as a key. but in the earlier case it would have been a unique identifier created by the symbol that is being used as a key

//key idea:-
// when of the format obj[id],js dont convert key into a string "id" to store as a key in it. instead the value pointed by the variable id would be used as a key


//when we need to use symbol as a key in object literal , it should be used with a square brackets (inorder to be used as a variable

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};

//since hidden, symbols are skipped by for in loops.but direct access using the symbol  would work. ie user[id] 


//Object.keys(user) also ignores them. 

//but Object.assign({},user) would copy both symbol and string properties


//Global Symbols

//in order to access the same  symbol properties using the  exact same id in different part of the application, there is a global registry for saving global symbols. 

//Symbol.for(key) search for the key in the global symbol registry and creates a new one if not present

let id = Symbol.for("id")

let idAgain = Symbol.for("id")

console.log(id===idAgain) //true

//Symbol.keyFor() can be used to access name using symbol.

let sym = Symbol.key("name")
Symbol.keyFor(sym) //name 

 ```

### 4.2 Special Types (Functions, Objects)

```javascript
//Includes objects and functions.

//primitive values always existed in the js universe. objects and functions allows us to create our own values.

//"typeof" operator can be used to get the type of a value. it can be used with and without paranthesis

//NaN represents the idea of an invalid number


typeof NaN; //number

//Further calculations with NaN will give you NaN again with only one exception below
NaN ** 0 // 1


//OBJECTS
// {} always gives a new one.hence {} =={} is false


// object.is() has direct meaning to our mental model. it corresponds to the idea of same value in our universe.

//  ===  behaves same as object.is() except in two cases.

// 1. nan === nan returns false even though they are same
// 2. -0===0 returns true even though they are different

//but Object.is(nan,nan) is true.

//object.is(0,-0) returns false

//FUNCTIONS:-

//functions are also objects. one of the way to think of functions is 'callable action objects" . we are not only able to call it, but also add or remove properties into it. 



//

*let b = function(){ return 7 }

let a = b //points a to the function pointed by b

let a = b()//points a to the value returned by function pointed by b

//function expression:- a way to define  a fn by assigning it to variable or property. (anonymous)


//variables inside the inner functions  shadows the outer    

// ARROW FUNCTIONS:-
// do not use arrow functions if you need your own this, arguments or to construct objects 


// NAMED FUNCTION EXPRESSION (NFE)

// functcions that are written in the form of expression and given a nmae is NFE
// All functions have  a name property (name of fn). this is asssigned to all fn even if its created without a name.
// there is a length property which specifies the no of arguments paassed. rest parameter is treated as one ("1").
eg:-
function f1(a,b){}
f1.length //2

// functions can be dynamically created using the new Function syntax by passing strings into it. but their scope is limited to its function . they dont have access to its lexical environment.eg;_

var t;
let f2= new Function('a','b','return a+b'); //suppose t had a value and u were to use that inside this function, you wont have access because its scope is limited to its function block
console.log(f2(2,3))
//CALLBACKS


// a callback is a fn passed as an argument to another function to be executed later
// 1.synchronous callbacks:
// runs immediately when called. its blocking meaning next code blocks are executed only after this execution

// 2.async callbacks:
// fn thats executed later after the completion of something. its non blocking  

// callback hell or pyramid of doom:
// when many callbacks are nested , it becomes hard to read .as in example below:-
loadScript("1.js", (err) => {
  if (err) handle(err);
  else loadScript("2.js", (err) => {
    if (err) handle(err);
    else loadScript("3.js", (err) => {
      if (err) handle(err);
      else /* do something */;
    });
  });
});
```
### 4.3 Type conversion

```javascript

Number("10")//10

String(3) //"3"

alert("6"/"3")//2

Number("cliche")//NaN

//more examples below
--------------------------------------
           Number()  | Boolean()
     ""     0             false
     ' '    0             true
     "0"    0             true
     "12"   12            true
     "sa"   NaN           true
     []     0             true
     null   0             false
undefined   NaN           false
     NaN    NaN           false

----------------------------------------

// undefined is NaN as a number, not 0.
// "0" and space-only strings like " " are true as a boolean.

//a backslash (\) is  an escape character

//  when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

//this helps in being able to check a non existing value clearly. 

//use === for strict checking. for example to check "fast"
```
### 4.4 Methods of primitives

```javascript

// Certain methods are possible on primitives except null and undefined because these are wrapped around object that contain default properties
// these wrappers are light weight and hence optimized by js for each call
// this wrapper is temporary and is immediately removed. for eg:-

let str = 'hi'
str.test = "tester"
console.log(str.length()) //undefined in 'non strict' mode
//strict mode doesnt allow to add properties to wrapper object.

// in the above case , though test property is added , the wrapper object is immediately removed/disappeared and hence the newly added property cannot be accessed.

```
### Addtional notes

```javascript

JSON METHODS,  toJSON

what is json?
// jSON refers to javascript object notation. its a text based language independent format for  storing and exchanging  structured data. it looks like js object but its actually text 

json -> str  JSON.stringify()
str  -> json JSON.parse()
   

DESTRUCTURING

destructuring refers to unpacking values from arrays or objects

// a) array destructuring
// destructuring can work with ierables too. eg:
let [x,y,z]="bat"//x=b y=a z=t
//rest oprerator can also be used 

// b) object destructuring



REST AND SPREAD PARAMETERS



// 1.REST 

// allows to group items into an array
// used in function definition
// allows in flexibility by allowing any number of parameters
// since converted to array, can do array operations

function log(..rest){ 
   console.log(...rest) //real array of all args
}




// 2.SPREAD

// allows to spread items in an array/object
// used in calls/array/objects


let obj = {a:"asf",b:"asf"}
console.log(...obj) //a:"asf",b:"asf"

Math.max(...[12,23,43]) //43
let chars = [..."ABC"];    // ["A", "B", "C"]
let objCopy = {...{x:1, y:2}}; // {x:1, y:2}
```
---

## 5. Objects in JavaScript

### 5.1 Object Basics

```javascript
//OBJECTS 

//Objects are simply a collection of non ordered key value pairs. 

//object properties can be accessed either using a dot or a square bracket

//setting property names using quotes is equalent to not using quotes

//"in" can be used to check the existence of a property inside an object

let car = {
    brand: "Toyota",
    model:"Innova Hycross"
}
console.log("brand" in car)//true
console.log(brand in car)//true
```

### 5.2 Object Properties and methods

```javascript

// think of it as wires from objects that point to values.

//they are case sensitive . there shouldnt be identical properties

//properties dont point at variables. they always point at values

//properties should be inside "" when multi words are used
//there are no issues for using reserved words as property names
//new property can  be assinged to an obj using dot operator
//setting a property as undefined explicitely is valid though its not recommended. null is used actually for an intended empty value. 

//property can be deleted using "delete"

let junk = {};
junk = null; // Doesn't necessarily destroy an object.Instead, JavaScript is a garbage-collected language.

let car = {
    brand: "Toyota",
    model:"Innova Hycross"
}

car.type = "petrol"
console.log(car)//{ brand: 'Toyota', model: 'Innova Hycross', type: 'petrol' }


//there exists three ways to add method to an object literal
//1.function expression
//2.shorthand method
//3.using dot operator

let user = {
      play:function(){
        console.log("playing")
      },
      open(){
        console.log("opening")
      }
  }
  user.quit = function(){
    console.log("quitting")
  }
user.play()
user.open()
user.quit()

// Output:

// playing
// opening
// quitting
```

### 5.3 Mutations

```javascript
//MUTATIONS

// mutation means change

// it means changing an object’s property 

// since properties can point to different objects, changing it doesnt neccessary mean a change in the object where that property belongs


// an alternative to mutation would be to assign an entirely new objet

// A constant that contains an object is an immutable reference to a mutable data value. While the constant itself can't be changed, the properties of the referenced object can be altered, added to, or removed:

// const allow us to write read only variables(**but we can still mutate object properties)

// A new variable can be initialized with let or const inside a descendant block without errors, even if it uses the same identifier as a variable in a parent block:

{
    let scopedVariable = false;
    {
    let scopedVariable = true;
    }
    console.log( scopedVariable );//false
}


// rules:
// 1. when value  before “dot” is undefined or null, an error is thrown immediately
// 2. if valid value exists before 'dot'  but  doesn’t after it, it outputs undefined

// its important to note that a property cannot be assigned to something not of a value. therefore a property cannot be created directly by assigning it to that object itself

let student = {
name:'dani',
next:student
} //invalid


// but at the same time, using "this" to reference to the same object wont be an issue because the value of "this" will be substituted only at execution time. 

let student = {
name:'dani',
next:this
} //valid
```

### 5.4 Referencing and Copying

```javascript


// Objects are assigned and copied by reference. A variable actually stores reference to object

let a={ address:{location:"calicut"} }
let b = { address: a.address }

b.address.location="kannur"
a.address // {location: 'kannur'}

b.address={location :"kannur"}
a.address //{location: 'calicut'}


//using Object.assign()


// "Object.assign(dest,..sources)" can be used to assign properties to an existing object with the new ones . do as many in the sources.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Object.assign(salaries,{mary:1000})
console.log(salaries)//{ John: 100, Ann: 160, Pete: 130, mary: 1000 }

//Object.assign() can also be used for simple object cloning
let employees = {}
Object.assign(employees,salaries)//{ John: 100, Ann: 160, Pete: 130, mary: 1000 }

//a simple spread operator syntax can also be used for the same
let members = {}
members = {...salaries}

// note  that under the hood , each properties are being copied in a loop when using Object.assing(). ie employees.john = salaries.john, and etc. so when the property is an object, its the reference that's being copied. so mutating it would cause the original to be also changed.  see the example below


let user = {
  name: "John",
  age: 30,
  profile:{
      company:'ABC',
      place:'Kochi'
  }
};


let clone = Object.assign({}, user);
console.log("clone",clone)//clone { name: 'John', age: 30, profile: { company: 'ABC', place: 'Kochi' } }
clone.age = 40; //doesnt cause original to change
clone.profile.company = "XYZ" //cause original to change because object was copied by reference
console.log(user)//{ name: 'John', age: 30, profile: { company: 'XYZ', place: 'Kochi' } }



//structuredClone()
//this when used be able to copy nested objects too. 

let stucturedClonedUser = structuredClone(user)
stucturedClonedUser.profile.place = "Calicut" 
console.log(user.profile.place)//"Kochi" ie original not changed. meaning both objects are unrelated

```

### 5.5 Prototypes and Inheritance

```javascript
//PROTOTYPES

//a prototype is an object that serves as a blueprint for other objects. It allows objects to inherit properties and methods from another object, enabling prototype-based inheritance.

// a prototype is a property existing on constructor functions that defines what __proto__ of an instance of that function should point to 

//value of prototype method is acutally an object that contains a constructor property that points back to the same constructor function 


//objects contain an implicit property __proto__  . also known as internal prototype or  [[prototype]]

//therefore , parent prototype's properties are accessible by the child.

//if a property doesnt exist inside an object upon request, it looks in the parent prototype and continue this process which is called prototype chaining.


//prototype exists as a property in constructor fn. 

//prototype property is only used when its called using "new" 


let man = new Living('male')
//under the hood
//man.__proto__ = Living.prototype


//prototype property has no effect on objects

let player = {
  name:"ibra"
  prototype:"bla bla" //no magic 
}

// though an object.property looks for prototype chaining if that property doesnt exists on its own, assigning new value using dot operator makes new property on that object instead of mutating by looking into prototype chain as shown below.


let spider = {
  legs: 8
};
let miles = {
  __proto__: spider
};
// miles.legs = 2;


spider.legs //8



// The built-in method hasOwnProperty() checks if a property exists in an object, excluding properties in an object's prototype.

//there is no more chaining beyond Object.prototype.
Object.prototype.__proto__ //null

//always remember that an object can inherit from only one object at a time. ie __proto__ or [[prototype]] can only point to one object


//other built-in prototypes
//when we initialize an array as "let arr = [1,2,3]" , arr gets access to some default methods. this is because internally its equivalent to being used as "new Array()" constructor method. its getting access to these properties from Array.prototype. similarly for Number()  . 
//ie primitives also store methods in prototypes of wrapper objects: Number.prototype , Array.prototype , Boolean.prototype

//Built in prototypes can be modified or populated with new methods. but its not recommmended to change them





```
### 5.6 Garbage collection

```javascript

#Reachability

// reachable values are that are accessible or usable somehow.

// 1.inherently reachable (also called 'roots'):-
// a) current executing function, their variables and parameters 
// b) functions belonging to the nested calls, their variables and parameters
// c) global variables
// 2. Any other values are reachable if they are reachable from root by a reference or a chain of references

let player={
  name:'Zlatan'
}
player = {}//now player gets reassigned to a new object. the old object has nothing referencing to it and hence would be garbage collected


//Only incoming references matter for garbage collection. If objectA is not reachable from the root (like global scope), it will be garbage collected, even if it holds a reference to objectB, which is still reachable. In other words, outgoing references don't keep an object alive; only being part of a reachable chain of references from the root does.
```
### 5.7 Object methods,"this"

```javascript
// understanding the value of this. 

// 1. inside global space, it will be global object. eg: window in case of browsers, global in case of Node. 

// 2. value of "this" inside a function is undefined. But when in  'non strict' mode , due to this substitution , its value will be global object.
//    it also depends on the way it is called. 

//    function show(){
//     console.log(this)
//    }
//    in strict mode:

//    show()//undefined
//    window.show()//window

//    in non strict mode:
//    show()//window
//    window.show()//window

//value of this inside regular functions depends on how is it called (whom is it wrapped with).

// it may be a bit confusing to understand that object doesnt have this at all. ie "this" doesnt
// have anything to inherit from "object scope".therefore value of "this" inside an object is global.
//hence the value of "this" of an arrow method of an object will be global.  

//3.inside object's method, it references to the object

//constructor function instances are also objects

//4. arrow fn  doesnt have their own "this". thus its value will be the value of enclosing lexical context
//5.Inside dom elements, it reference to that html element.


//note:-
// object methods are own properties of the object. they  dont inherit from Function.prototype. meaning they are not instances of Function.prototype. but since they are fn, they delegates to Function.prototype hence able to access methods from Function.prototype like bind, call etc. 


//value of "this" is undefined in function , code block and object literal

```

### 5.8 Optional chaining

```javascript
//optional chaining is a safer way to access nested object properties

//using (?.)

//it stops the execution and returns undefined if the value before "?." doesnt exist.but if it does returns the accessed property

let user = {}
console.log(user?.address?.street)//undefined . //instead of throwing an error

let player ={name:'zlatan'}
console.log(player?.name) //zlatan 


//its equivaly important to note that the variable must be declared before using ?. with it. otherwise it would throw an error

company?.name // ReferenceError: company is not defined


//"?." is not an operator but a syntax construct which can also work with functions and square brackets.Also we can use ?. with delete:



let school = {
  name:'ABC',
  open:function(){
    console.log("opening school")
  }
}
school.open?.() //opening school


```

### 5.9 Objects to primitive conversion

```javascript

// unlike other languages there are no mathematical operation between objects 

// objects are converted to primitives before operations


// All objects are true in a boolean context


// other mathematical operations apply when a number is expected out of the operation 

// example for string conversion is when alert(obj) is used. there are other cotexts also 

// we can implement string and number conversions ourselves by using the object methods


// js determines the type to be converted with the help of hints
Boolean({}) //true

```
### 5.10 Global object

```javascript

// Global object is the root container for all global variables and functions. 

// any variables or functions is set as methods of global by default. eg:-

var x = 34
console.log(window.x)//34

// it varies according to platform. eg:- window (browser), global(node), 

// globalThis is the universal name to access it any js environment

// adding too many manual properties to global can cause name conflicts, memory leaks etc

```
---

## 6. Special Notes on Types

```javascript
//null and undefined are the only values of its own type respectively.

typeof null; //object
typeof undefined; //undefined

//strings have few built in properties. but they are not objects.

//in js universe , object literal is not summoned by calling anything. its just creates a new one.


//object literal is not summoned by calling anything. it's just creates a new one.
```

---

## 7. Expressions and Scope

```javascript
//an expression is a valid unit of code that produces a value
//a function is also an expression. it answers by creating a new fn value every time we asks.

// Assigning a value to a variable without explicitly declaring it (that is, by never using var, let, or const to create it) elevates a variable to the global scope, even when initialized inside of a function or block. A variable created using this pattern is sometimes called an "implied global."

function myFunction() {
    globalVariable = "global";

    return globalVariable
}

myFunction()\
> "global"

globalVariable\
> "global"
```

---

## 8. Basic Syntax (Extended)

### 8.1 Variables

```javascript
//variable names can be called as identifiers

//it can start with a letter,_ or $ sign and can contain numbers and unicode characters.but should not include special characters like *,/,\ etc

//varibles always point to values. variables don’t point to each other

//a variable can be of any data type. 

//"dynamic typed " languages are those that allow variables to be not limited to be bounded by any particular data type
```
### 8.2 Variables and closures

```javascript
// A scope is the space where functions and variables are accessible

// A lexical environment is the space where its hierarchially present

// A function along with its lexical environment forms a closure


// in strict mode, fn inside blocks is block scoped.

```


#### Temporal dead zone

```javascript
// Its the period between when a variables scope begins and when its fully initialized. 
// It only affects the variables declared using let and const . When tried to access at TDZ, it throws a reference error. 

let a = "asd";
let b = "asd";

[a,b] = ["1","2"];  // Throws TDZ error 

// this happens because in destructuring , for the left hand side evalueation , js tries to access these variables from tdz (since they are declared using let). here destructuring assignment takes place before initialisation. this behaviour in js is to catch potential bugs while destructuring . 
// if we were to use as below it just works fine

let x = 1;
[x] = [2];  // Works fine

let y;
[y] = [2];  // Also works



```
---

## 9. Object-Oriented JavaScript

<a name="oops"></a>

### 9.1 Constructor Functions

```javascript
// Its a convention to use capital for constructor functions

//they are used to create object instances from it (using 'new' operator)

//when 'new' operator is used to create an instance from a constructor function, these steps takes place.1) "this" is assigned to an empty object {} 2)this object with added properties into it is returned


function School(name){
    // this = {}   //implicit
    this.name = name
    this.display= function(){
        console.log("displaying things in school")
    }
    // return this //implicit
}

let uhhss = new School("UHHSS")

//when an object is returned explicitely inside the constructor function , this object is returned instead of the object with which properties where added using this. ie

function Player(name){
  this.name = name
  return {
    name:'messi'
  }
}

let p1 = new Player('Zlatan')
console.log(p1.name) //messi


//if there is no argument to be passed , then there is no need of using paranthesis. 

let user = new User() 
let user = new User //both have same effects and are same



//shorthand method cannot be used to create methods in consturctor functions

```

### 9.2 Classes


```javascript
we use classes for creating objects.

class Employee{

  constructor(name){
    this.name = name
  }
  login(){
    console.log(`${this.name} logged in `)
  }
  logout(){
    console.log(`${this.name} logged out`)
  }

}

let alice = new Employee("ALICE")
alice.login()// ALICE logged in 

//under the hood , a fn is created as User. its prototype being the User. (ie User === User.prototype.Constructor). these methods are added to the prototype 



//note that there is no comma seperation between methods in class



//in the case of constructor functions , we used "F.prototype.method_name = fn(){}  " to add methods to the prototype. but in the case of classes, we can add methods in a simpler syntax .


//class inheritance:-

//classess can iherit properies and methods from a parent. (inheritance)

//parent methods can be overriden 

//built in classes can also be extended

//static properties and methods:-
//they only belong to classes. they cannot be accessed by instances. 

//private properites and methods:-

//using a "#" before a name(property/method) makes it private 
//private methods/properties can only be accessed inside the class. not outside. cannot be accessed from subclasses or instances. 
```

### Getters and setters
```javascript

// Getters and setters are special methods that allows controlled access and modification to object properties.

let player={
  firstName:"Zlatan",
  lastName:"Ibrahimovic",

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(name){
      [this.firstName,this.lastName] = name.split(" ")
  }
}
console.log(player.fullName) //Zlatan Ibrahimovic;
player.fullName = 'Kyser Soze'
console.log(player.fullName)   //Kyser Soze

```

### 10. promises , async/await 

```javascript

// promises represents the result of asynchronous operation

// a promise can be resolved or rejected. a promise can be resolved with a value or another promise. 
//  a promise resolved with a value is said to be fulfilled


//chaining of promises
// in promise chaining, each subsequent  then block gets access to what is returned from the earlier one. resolved value is accessed by the first "then" block that comes after resolve. rejected value is accessed by the first "catch" block that comes after rejection. 

//Promise APIs
// 1.Promise.all() : returns the first failed if presnet. else waits for all to be resolved and returns the array of their results

//2.Promise.allSettled(): returns an array of settled results be it resolved or rejected
// 3.Promise.race() : returns the first settled result (resolve or reject)
// 4.Promise.any(): waits for any of the promise to be resolved. if not it returns the AggregateError (array of errors)


// imoortant to note that all erros are caught with catch() 


// ASYNC AWAIT

//  all async fn returns a promise. 

// whem a non promise value is returned in an async fn it is implicitely  wrapped  with a promise.resolve(). for eg:-

//a promise 
async function get(){
  return 56
}

get() // Promise {<fulfilled>: 42}

//whereas if an error is thrown it is implicitely wrapped with promise.reject()


async function push(){
  throw new Error("error in pushing")
}
push()


//prefixing a fn with async always make it return a promise

//AWAIT

// using await makes the fn pause until the settling of that line.eg:-

let result = await promise;

// using async await makes the code easier and cleaner (because there is no need of using then blocks to handle promise)





// async await is preferred at sequential async actions where one depends on the other

// TRY CATCH

// using try catch , we are able to handle async await more effectively. any triggered error ("thrown error") caused is passed automatically to the catch block

// finally along with try catch is used for cleanup like releasing files since it will run anyway


```
### Additonal notes
```javascript
// Return from a setTimeout function  is ignored.It doesnt make sense to return a value from a setTimeout. 

// loops:
// "for" and "while" differences primarily in their syntax. 
// usecases:
//   for: when known number of iterations. eg: looping through an array
//   while: to iterate till a condition is met. eg: waiting for user input

// typeof value for "i" in "for in " is always string.(this syntax is generally used
// for iterating through an object.keys are always string values (except symbols))

let arr = ['apple','bread']


arr.forEach((str,i)=>{
    console.log(str,i) 
})
// apple 0
// bread 1


```
### 11. Modules

```javascript

// A module is a self contained file that organises the code into reusable pieces

// A functionality of a module can be accessed from outside from another one. 

// modules always work in strict mode

// since module uses special keywords , browser should be told to treat it as  a module

// ie <script type="module"></script>

// "this" in a module is undefined

// normal js scripts (<script></script>) execute immediately. but module scripts are executed only after the full load of html page. 

// note that html page is rendered though script may not be loaded fully. better to use loading indicators in those cases. 

// each module has its own global level scope. variables from one dont leak into another 

// Modules must be loaded via HTTP(s)—they don’t work via file:// protocol

// modules can be dynamically imported

let mod = await import(./module)
mod.doSomething()


// The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.

// We can use it dynamically in any place of the code, for instance:

let modulePath = prompt("Which module to load?");

// import(modulePath)
//   .then(obj => <module object>)
//   .catch(err => <loading error, e.g. if no such module>);

// Re-export syntax "export ... from ... " allows to import things and immediately export them (possibly under another name), like this:

// export {sayHi} from './say.js'; // re-export sayHi

// export {default as User} from './user.js'; // re-export default


// Namespace import:
// Collect all named exports under one object:

import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');



// Alias import
// Rename imports locally:

import { sayHi as hi, sayBye as bye } from './say.js';
hi('John');
bye('John');



```
## Browser: Document, Events, Interfaces

### Document

```javascript

// Document Object Model (Dom ) is a structural representation of document where elements, attributes and texts are organized as nodes in a tree like hierarchy


// Browser loads webpage in such a way that it turns HTML into tree structure of nodes

// Dom nodes are objects in javascript . they are the instances of classes (like Element,Text,Comment ) that represents part of the html document
// some properties

// element.parentNode , childNode, previousSibling, nextSibling, 

// Each node has .nodeType property which is  a number

| nodeType | Meaning      |
| -------- | ------------ |
| 1        | Element node |
| 3        | Text node    |
| 8        | Comment node |


// nodeName is available on all nodes.

// tagName is only for element nodes.


// children referes to only element nodes whereas childNodes refers to  all including space and comments 




//list of methods
getElementById()
getElementsByClassName()
querySelector() //though usually used with classnames,id etc to accessnodes, can be used with tagnames also


// Attributes and properties:

// <input type="checkbox" checked>

const elem = document.querySelector('input')
elem.getAttribute("type") //checkbox
elem.checked //true
elem.setAttribute('class', 'form')

// others:

elem.hasAttribute(name)
elem.removeAttribute(name)
elem.attributes // a live NamedNodeMap of all attributes

<input data-id="test"  />



// tagName property is the uppercase name of an element's tag
``` 
