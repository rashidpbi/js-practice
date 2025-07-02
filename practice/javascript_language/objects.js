let car = {
    brand: "Toyota",
    model:"Innova Hycross"
}
car.drive= function(){
    console.log("driving")
}
console.log(car.prototype)





// excercises
// uncommment each 'Q's

function isEmpty(obj){
    for(let key in  obj){
        return false
    }
    return true
}
console.log(isEmpty({a:"nas"}))
