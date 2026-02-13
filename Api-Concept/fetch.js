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

const displayData = (posts) => {
    console.log("Display Data", posts);
    posts.forEach(post => {
        console.log(post);
    })
}