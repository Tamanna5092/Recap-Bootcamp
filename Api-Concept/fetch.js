const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => console.log(data))
// console.log(result);

const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
}

const loadPost = () => {
    const url = ("https://jsonplaceholder.typicode.com/posts");
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayData(data);
    })
}

// array of object
const displayData = (posts) => {
    // 1. Get the container
    const postContainer = document.getElementById("post-container");
    console.log(postContainer);
    console.log("Display Data", posts);
    posts.forEach(post => {
        // console.log(post.title);
        // 2. create HTML element
        const li = document.createElement("li");
        li.innerText = post.title;
        // 3. add li inside the container
        postContainer.appendChild(li);
        console.log(li);
    })
}