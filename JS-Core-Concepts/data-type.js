// JS is a dynamically typed language, which means that the type of a variable can change at runtime.
let data = 6
data = "Hello"
data = false
data = {name: "Tonumoy", age: 24}
data = null
data = undefined
console.log(typeof data)

// primitive data types: number, string, boolean, null, undefined, symbol
const num = 42
const str = "Hello, World!"
const bool = true
const nul = null
let undef = undefined
let isUndefined;

// non-primitive data types: object, array, function
const obj = {name: "Tonumoy", age: 24}
const arr = [1, 2, 3, 4, 5]
function greet(name) {
    return `Hello, ${name}!`
}
console.log(greet("Tonumoy"))