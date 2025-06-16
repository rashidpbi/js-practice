


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



// examples:-
//non strict mode
function check(){
    console.log("this:",this)
}
check()//window