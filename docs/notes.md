# JavaScript Notes

---

## 1. Overview

### 1.1 What is JavaScript?

<a name="Introduction"></a>

```javascript
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
// Numbers,Strings, Boolean, Null,Undefined,BigInt and Symbols are the primitive types.

String(10); //"10"
Number("10"); //10

//BigInt is used to handle large values without losing precision

const num = 9007199254740993; // Inaccurate (JS Number loses precision beyond 2⁵³ - 1)
const big = 9007199254740993n; // Accurate (BigInt)
```

### 4.2 Special Types (Functions, Objects)

```javascript
//Includes objects and functions.

//primitive values always existed in the js universe. objects and functions allows us to create our own values.

//"typeof" operator can be used to get the type of a value

//NaN represents the idea of an invalid number

typeof NaN; //number

//Further calculations with NaN will give you NaN again:
// {} always gives a new one.hence {} =={} is false



// object.is() has direct meaning to our mental model. it corresponds to the idea of same value in our universe.

//  ===  behaves same as object.is() except in two cases.

// 1. nan === nan returns false even though they are same
// 2. -0===0 returns true even though they are different

//but Object.is(nan,nan) is true.

//object.is(0,-0) returns false

//FUNCTIONS:-

//functions are also objects

*let b = function(){ return 7 }

let a = b //points a to the function pointed by b

let a = b()//points a to the value returned by function pointed by b
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

### 5.2 Object Properties

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
name:’dani’,
next:student
} //invalid
```

### 5.4 Referencing and Copying

```javascript
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
```

### 5.5 Prototypes and Inheritance

```javascript
//PROTOTYPES

//objects contain an implicit property __proto__

//therefore , parent prototype's properties are accessible by the child.

//if a property doesnt exist inside an object upon request, it looks in the parent prototype and continue this process which is called prototype chaining.


//prototype exists as a property in constructor fn. 


let man = new Living('male')
//under the hood
//man.__proto__ = Living.prototype



// though an object.property looks for prototype chaining if that property doesnt exists on its own, assigning new value using dot operator makes new property on that object instead of mutating by looking into prototype chain as shown below.

let spider = {
  legs: 8
};
let miles = {
  __proto__: spider
};
miles.legs = 2;

spider.legs //8



// The built-in method hasOwnProperty() checks if a property exists in an object, excluding properties in an object's prototype.
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

f// Assigning a value to a variable without explicitly declaring it (that is, by never using var, let, or const to create it) elevates a variable to the global scope, even when initialized inside of a function or block. A variable created using this pattern is sometimes called an "implied global."

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
```

---

## 9. Object-Oriented JavaScript

<a name="oops"></a>

### 9.1 Constructor Functions

```javascript
// Its a convention to use capital for constructor functions
```