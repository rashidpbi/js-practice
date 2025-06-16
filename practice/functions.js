
//sample constructor function 
function school(name){
    this.name = name
    this.display= function(){
        console.log("displaying things in school")
    }
}

let uhhss = new school("UHHSS")
console.log(uhhss.display())



