// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// ekta kaj shes na kora porjonto wait kore. ekta shes kore tarpor onno kaje hat dey
const data = async() => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("Hello execute before the fetch")
    const json = await result.json()
    console.log(json)
    console.log(true, "execute after the fetch")
}

data()