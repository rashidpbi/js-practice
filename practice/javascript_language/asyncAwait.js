// example of an await usage
async function f() {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      res("done ");
    }, 1000);
  });
  let result = await p;
  console.log(result);
}

f();

// example showing the easier way of handling using async await instead of then catch

async function load(url) {
  return fetch(url).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    throw new Error(res.status);
  });
}
load("test.json").catch(alert); //we are able to catch error because something that's returned by a then block is also a promise.

//example showing the simplication of handling when await is used

async function load(url) {
  let response = await fetch(url); //we are able to handle the return from a promise without the use of then block when await is used

  if (response.status === 200) {
    return response.json();
  }
  throw new Error(response.status);
}
load("test.json").catch(alert);

//TRY CATCH
//example showing the simplication when try catch is used

async function load(url) {
  try {
    let response = await fetch(url);

    if (response.status === 200) {
      return response.json();
    }
  } catch (error) {
    console.error("err:", error);
  }
}
load("test.json").catch(alert);

//example showing try catch not able to handle  error in an async callback fn in try block

try {
  setTimeout(() => {
    badFunction(); // uncaught
  }, 1000);
} catch (error) {
  console.log("won't catch this");
}
//inorder to catch that wrap the callback itself

setTimeout(() => {
  try {
    badFunction();
  } catch (error) {
    console.log("caught inside callback");
  }
}, 1000);
