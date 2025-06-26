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