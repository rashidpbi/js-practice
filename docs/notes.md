
<a name="Introduction"></a>
## Introduction

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

```javascript
// IDE: 
// *An IDE refers to integrated development environment where developer used to write programs. a typical one consist of a code editor, accesss to file systems, plugins ,debugger and testing tools.

```



<a name="Code Structure"></a>
## Code structure

```javascript


Statements: 
// statements are syntax constructs and commands that perform actions.
// they are seperated by semicolons

// semicolons:
// in most cases semicolons are placed implicitely by js where its required . but there are cases when its not implicitely places though required. 

// use strict:
// By  introduction of ecmascript 2015 (es5), many new features were added and modified existing codes. To disable those changes and to have old code working, dont use strict mode. 
// always use it at the top of the code 

// modern javascript uses 'classes' and 'modules' that enables 'use strict' automatically that you dont want to declare explicitely




```


<a name="basics"></a>

## 1. Basics

```javascript
//Compilation:    Conversion of whole high level code to machine level at a time.
//Interpretation: Code executed line by line

//Javascript is just in time compiled. ie a compination of compilation and interpretation. JS executes code line by line, the engine finds frequently used code and compiles it to optimized machine code.
```

Notes:-

```javascript
//The association of an identifier with a value is generally called a "binding."
```

<a name="primitives"></a>

### i.Values

#### a.Primitives

```javascript
// Numbers,Strings, Boolean, Null,Undefined,BigInt and Symbols are the primitive types.

String(10); //"10"
Number("10"); //10

//BigInt is used to handle large values without losing precision

const num = 9007199254740993; // Inaccurate (JS Number loses precision beyond 2⁵³ - 1)
const big = 9007199254740993n; // Accurate (BigInt)
```

#### b.special values

```javascript
//Includes objects and functions.

//"typeof" operator can be used to get the type of a value

//NaN represents the idea of an invalid number

typeof NaN; //number

//Further calculations with NaN will give you NaN again:

//functions:-

//functions are also objects

*let b = function(){ return 7 }

let a = b //points a to the function pointed by b

let a = b()//points a to the value returned by function pointed by b


//Objects

let junk = {};
junk = null; // Doesn't necessarily destroy an object.Instead, JavaScript is a garbage-collected language.

//primitive values always existed in the js universe. objects and functions allows us to create our own values.

// {} always gives a new one.hence {} =={} is false



// object.is() has direct meaning to our mental model. it corresponds to the idea of same value in our universe.

//  ===  behaves same as object.is() except in two cases.

// 1. nan === nan returns false even though they are same
// 2. -0===0 returns true even though they are different

//but Object.is(nan,nan) is true.

//object.is(0,-0) returns false


//PROPERTIES:-

// think of it as wires from objects that point to values.

//they are case sensitive . there shouldnt be identical properties

//properties dont point at variables. they always point at values

//new property can  be assinged to an obj using dot operator
let car = {
    brand: "Toyota",
    model:"Innova Hycross"
}

car.type = "petrol"
console.log(car)//{ brand: 'Toyota', model: 'Innova Hycross', type: 'petrol' }


// rules:
// 1. when value  before “dot” is undefined or null, an error is thrown immediately
// 2. if valid value exists before 'dot'  but  doesn’t after it, it outputs undefined

// its important to note that a property cannot be assigned to something not of a value. therefore a property cannot be created directly by assigning it to that object itself

let student = {
name:’dani’,
next:student
} //invalid



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


//

let a={
address:{location:"calicut"}
}

let b = {
address: a.address
}

b.address.location="kannur"

a.address// {location: 'kannur'}

// whereas 

let a={
address:{location:"calicut"}
}

let b = {
address: a.address
}

b.address={location :"kannur"}
a.address //{location: 'calicut'}



//PROTOTYPES

//  __proto__ points to the prototype of the object


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


<br/>

Notes:-

```javascript
//null and undefined are the only values of its own type respectively.

typeof null; //object . this is an historical error in js.its actually supposed to be null

typeof undefined; //undefined

//strings have few built in properties. but they are not objects.

//in js universe , object literal is not summoned by calling anything. its just creates a new one.

//object literal is not summoned by calling anything. its just creates a new one.

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

## 1. More Basic Syntax

### i.Variables

```javascript
//variable names can be called as identifiers

//it can start with a letter,_ or $ sign and can contain numbers and unicode characters.but should not include special characters like *,/,\ etc

//varibles always point to values. variables don’t point to each other
```
