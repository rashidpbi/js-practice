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