//// uncomment each "Q"s individually and run the pgm

//Q1.Understanding call and bind.

let player ={
    name:"zlatan",
    greet:function(){
        console.log(`${this.name} greeting you`)
    }
}
let p1={name:"dani"}

player.greet.call(p1) //dani greeting you

