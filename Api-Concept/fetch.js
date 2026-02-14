const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
// console.log(result);

//  posts
const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
};

// todos
const loadTodos = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayTodos(data);
    })
}

// users
const loadUsers = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(json => {
        displayUsers(json);
    })
}

// array of object
const displayData = (posts) => {
  // 1. Get the container and clear the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  console.log(postContainer);
  console.log("Display Data", posts);
  posts.forEach((post) => {
    // console.log(post.title);
    // 2. create HTML element
    const div = document.createElement("div");
    div.innerHTML = `<div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;
    // 3. add div inside the container
    postContainer.appendChild(div);
    console.log(div);
  });
};

const displayTodos = (todos) => {
    // 1. get the container and clear the container
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";
    console.log(todoContainer);
    console.log("Display Todos", todos);
    // array of object map
    todos.forEach(todo => {
        // 2.create HTML element
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `<div class="todo-card">
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed == true ? '<i class="fa-regular fa-square-check"></i>' : '<i class="fa-solid fa-square-xmark"></i>'}</p>
        </div>`;
        // 3.add div inside the container
        todoContainer.append(todoCard);
    });
}


//  {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
const displayUsers = (users) => {
    const userContainer = document.getElementById("users-container");
    userContainer.innerHTML = "";
    users.forEach((user, i) => {
        console.log("user data",user.address.city);
        const userInfo = document.createElement("div");
        userInfo.innerHTML =`<div class="user-info">
        <p>${i+ 1}</p>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.address.city}</p>
        <p>${user.address.geo.lng}</p>
        <p>${user.company.name}</p>
        <p>${user.company.catchPhrase}</p>
        </div>`
        userContainer.append(userInfo)
    })
}

// show default post
// loadPost()
