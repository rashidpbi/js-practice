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