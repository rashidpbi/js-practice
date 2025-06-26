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