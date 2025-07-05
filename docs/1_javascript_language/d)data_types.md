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
   
// in case of using stringify to store in local storage for example, instead of storing the object as its direct conversion to string, variable values in object is valuated and then converted to string and stored?
// in case of parsing when used to retrieve data from local storage for example, instead of just removing the "strings" the actual object is retrieved along with its prototype
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