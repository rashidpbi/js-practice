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