
//sample constructor function 
function school(name){
    this.name = name
    this.display= function(){
        console.log("displaying things in school")
        console.log("this:",this)
    }
}

let uhhss = new school("UHHSS")
console.log(uhhss.display())



