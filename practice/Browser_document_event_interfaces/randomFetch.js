//requirements and following steps:
// 1.search 'users' by adding this to the fetch url by utilizing formData
// plain fetch using then chainging - done
// making request on submitting - done
// seeing the content of formData - done
//  finding the input value from event object
//  adding value to input element on submission
// handling data using formData
// submitting the req
//  seeing the users list on submission

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

const searchForm = document.getElementById("searchForm");
const searchSubmitter = document.querySelector('button[id="submitSearch"]');
const searchFormData = new FormData(searchForm, searchSubmitter);

searchForm.onsubmit = onSearchFormSubmit;

// testing

//do later
// fix comma in names list
