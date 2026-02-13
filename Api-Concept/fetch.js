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

// show default post
// loadPost()
