//requirements and following steps:
// 1.search 'users' by adding this to the fetch url by utilizing formData
// plain fetch using then chainging
// making request on submitting
// seeing the content of formData
//  finding the input value from event object
//  adding value to input element on submission
// handling data using formData
// submitting the req
//  seeing the users list on submission - done
// doing a post request

let searchKeyWord = "";
const searchInput = document.getElementById("search");
const onSearchFormSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log("formData : ", formData);
  for (let [key, value] of formData) {
    if (key == "search") {
      searchKeyWord = value;
    }
  }
  let users;
  await fetch(`https://fakeapi.net/${searchKeyWord}`)
    .then((response) => response.json())
    .then((result) => {
      users = result;
      console.log(users);
    });
  document.querySelector(".users-list").innerHTML = users.data.map(
    (user) => `<li>${user.username}</li>`
  );
};
const onResourceFormSubmit = async (e) => {
  e.preventDefault();
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const searchForm = document.getElementById("searchForm");
searchForm.onsubmit = onSearchFormSubmit;

const resourceForm = document.getElementById("resourceForm");
resourceForm.onsubmit = onResourceFormSubmit;
// testing

//do later
// fix comma in names list

//next steps
// using formData for post request for resourceForm
