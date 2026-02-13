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

// show default post
// loadPost()
