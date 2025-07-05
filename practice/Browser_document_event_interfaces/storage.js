//local storage

localStorage.setItem("player", "Ibrahimovic");
localStorage.setItem("game", "football");
localStorage.setItem("ground", "puttekkad");
// Get
localStorage.getItem("username");

localStorage.removeItem("username");



console.log("localStorage: ",localStorage);
// for(let key of localStorage){
//     console.log(key)
// }

console.log(localStorage.length); //0

let firstName = "Zlatan";
localStorage.setItem("user", JSON.stringify({ name: firstName }));
console.log(JSON.parse(localStorage.getItem("user")));
console.log((localStorage.getItem("user")));

window.addEventListener("storage", (event) => {
  //   console.log("storage e",event.key, event.newValue);
  console.log("storage changed");
});

//session storage


//steps followed
// *methods in localstorage
// *individual methods - done
// *listing all in local storage using a loop - not iterable
// *stringify to store object
// *parse to retrieve
// *localstorage being persistent across tabs
// *"storage" event listener

// pendings:

// sessionStorage
// *consideration for the number in storage changes for storage listener


