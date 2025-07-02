// uncomment each "Q"s individually and run the pgm

//Q1.create an employee class. create an instance of it .



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
//   log(){
//     console.log('loggin something')
//   }

}

let alice = new Employee("ALICE")
alice.login() //ALICE logged in 


// console.log(Employee === Employee.prototype.constructor) //true
// console.log(Employee.prototype.log)//true
// console.log(Object.getOwnPropertyNames(Employee.prototype))//['constructor', 'login', 'logout']

//Q2. example on concept of classes and related concepts. 

class Vehicle{
    #gears //private property
    constructor(name){
        this.name = name;
        this.#gears = 6;
    }
    
    move(){  //adding method
        console.log(`${this.name} can move`)
    }
    break(){
        console.log("applying brake")
    }
    drive(){
        console.log('driving ')
    }
    park(){
        console.log('parking')
    }
    static info(){  //static method. 
        console.log("driver should hold a driver's licence!")
    }
    #Gears(){
        console.log(`this vehicle  has ${this.#gears} no of gears`)
    }
    logGears(){
        this.#Gears()
    }


}
class Car extends Vehicle{
    constructor(brand,name){
        super(name) 
        this.brand = brand
        this.wheels=4 //adding property
        
    }
    
    drift(){console.log("drifting")}
    drive(){console.log("driving car")}  //overriding parent method  
    park(){
        super.park() //calling parent method inside child method
        console.log("car...!")
    }

}

let c1 = new Car("HYUNDAI","i10")
c1.drift()//drifting
console.log(c1.wheels)
c1.drive()
c1.park()
Vehicle.info() //using c1.info() would have been a type error static info() is not a fn. 
c1.logGears()//c1.#Gears() would have thrown error since its a private method and is being called outside the class






