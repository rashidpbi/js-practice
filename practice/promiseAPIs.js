
//promise.all

// let p1 = new Promise(function(res,rej){
//     setTimeout(()=>{res("p1 success")},2000)
// })
// let p2 = new Promise(function(res,rej){
//     setTimeout(()=>{res("p2 success")},1000)
// })
// let p3 = new Promise(function(res,rej){
//     setTimeout(()=>{res("p3 success")},3000)
// })

// Promise.all([p1,p2,p3]).then((res)=>console.log(res))

// in above , if any of them would have been fail  , it would be an uncaught error since catch block not added.
// **dont ever have uncaught error in your code. it means you are not aware of the code. you should be able to catch your error



// let p4 = new Promise(function(res,rej){
//     setTimeout(()=>{res("p4 success")},2000)
// })
// let p5 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p5 fail")},1000)
// })
// let p6 = new Promise(function(res,rej){
//     setTimeout(()=>{res("p6 success")},3000)
// })

// Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log(err))


//promise.race

// let p12 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p12 success")},2000)
// })
// let p13 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p13 fail")},1000)
// })
// let p14 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p14 success")},3000)
// })

// Promise.race([p12,p13,p14]).then(res=>console.log(res)).catch(err=>console.log(err))


//promise.any


// let p9 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p9 success")},2000)
// })
// let p10 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p10 fail")},1000)
// })
// let p11 = new Promise(function(res,rej){
//     setTimeout(()=>{rej("p11 success")},3000)
// })

// Promise.any([p9,p10,p11]).then(res=>console.log(res)).catch(err=>console.log(err))


// promise.allSettled


let p16 = new Promise(function(res,rej){
    setTimeout(()=>{rej("p16 success")},2000)
})
let p17 = new Promise(function(res,rej){
    setTimeout(()=>{rej("p17 fail")},1000)
})
let p18 = new Promise(function(res,rej){
    setTimeout(()=>{rej("p18 success")},3000)
})

Promise.allSettled([p16,p17,p18]).then(res=>console.log(res)).catch(err=>console.log(err))
