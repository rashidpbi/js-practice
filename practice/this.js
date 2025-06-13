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

//3.inside object's method, it references to the object
//constructor function instances are also objects

//4. arrow fn  doesnt have their own "this". thus its value will be the value of enclosing lexical context
//5.Inside dom elements, it reference to that html element.



// function school(name){
//     this.name = name
//     this.display= function(){
//         console.log("displaying things in school")
//         console.log("this:",this)
//     }
// }

// let uhhss = new school("UHHSS")
// console.log(uhhss.display())

//Class constructors

// class Company{
//     constructor(name){
//         name;
//         this.time = "9-5"
//         this.work = function (){
//             console.log('do some work')
            
//         }
//         this.logThis=function(){
//             console.log("this:",this)
//         }
//     }
// }

// let google = new Company("GOOGLE")
// google.logThis()



const attack = ()=>{
    console.log("this inside arrow fn:",this)
}
attack()