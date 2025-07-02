//synchronous callback
// function start(vehicle,callback){

//      console.log(`starting ${vehicle}`)
//      callback()
// }

// function finish(){
//     console.log("finished")
// }


// start("car",finish)


//asynchronous callback
// function load(script,runner){

//     setTimeout(()=>{
//         runner()
//     },1000)
//     console.log(`executing ${script}`)



// }
// function runFn(){
//     console.log("running ")
// }

// load("loader.js",runFn)

// pracitcal example of callback in async functions 

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Load failed: ${src}`));

  document.head.append(script);
}

loadScript("/my/script.js", (err, script) => {
  if (err) console.error(err);
  else console.log(`${script.src} loaded`);
});

//callback hell/ pyramid of doom









