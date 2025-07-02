

function makeCounter(){
    let count = 0
    return function(){
        return count++
    }
}

let c1 = makeCounter()
c1()
c1()//1

// here even though makeCounter is removed from memory , count still exist since it is being utilized by the closure made by the inner fn 