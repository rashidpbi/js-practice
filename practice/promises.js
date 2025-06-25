// let p1 = new Promise((res,rej)=>{
//     setTimeout(()=>res('loaded'),4000)
// })

// function load(){
//     return p1;
// }

// load().then(d=>console.log(d)).catch(err=>console.log(err))

// new Promise((res, rej) => {
//   setTimeout(() => res(1), 1000);
// })
//   .then((result) => result * 2)  //2
//   .then((result) =>result * 2)  //4
//   .then(
//     (result) =>
//       new Promise((res) => {
//         setTimeout(()=>res(result*2),1000) //8
//       })
//   )
//  .then((result)=>new Promise((res,rej)=>{setTimeout(()=>{rej(`error with result ${result}`)})}))
 
//   .catch((err) => console.log(err))
//   .finally(()=>console.log("finally would be executed anyway"));



//   new Promise((res, rej) => {
//   setTimeout(() => res(1), 1000);
// })
//   .then((result) => result * 2)  //2
//   .then((result) =>result * 2)  //4
//   .then(
//     (result) =>
//       new Promise((res) => {
//         setTimeout(()=>res(result*2),1000) //8
//       })
//   )
//  .then((result)=>new Promise((res,rej)=>{setTimeout(()=>{rej(`error with result ${result}`)})}))
 
//   .catch((err) => (err)).then(res=>console.log(res))
//   .finally(()=>console.log("finally would be executed anyway"));


//     new Promise((res, rej) => {
//   setTimeout(() => res(1), 1000);
// })
//   .then((result) => result * 2)  //2
//   .then((result) =>result * 2)  //4
//   .then(
//     (result) =>
//       new Promise((res) => {
//         setTimeout(()=>res(result*2),1000) //8
//       })
//   )
//  .then((result)=>new Promise((res,rej)=>{setTimeout(()=>{rej(`error with result ${result}`)})}))
 
//   .catch((err) => (err)).then(res=>(res)).then(res=>console.log("result from catch block",res)) //wont be shown 
//   .finally(()=>console.log("finally would be executed anyway"));



//     new Promise((res, rej) => {
//   setTimeout(() => res(1), 1000);
// })
//   .then((result) => result * 2)  //2
//   .then((result) =>result * 2)  //4
//   .then(
//     (result) =>
//       new Promise((res) => {
//         setTimeout(()=>res(result*2),1000) //8
//       })
//   )
//  .then((result)=>new Promise((res,rej)=>{setTimeout(()=>{rej(`error with result ${result}`)})}))
 
//   .catch((err) => (err)).then(res=>(res)).then(res=>console.log("result from catch block",res)) //wont be shown 
//   .finally(()=>console.log("finally would be executed anyway"));




// using async await makes the code easier and cleaner



