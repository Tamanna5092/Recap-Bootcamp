const name= "Bangladesh"
const Newname = name + "Germany"
console.log(Newname)

let price = 25
price = 30
// console.log(price)

const students = ["Rahat, Shakil, Rafiq"]
students.push("Hadi")
console.log(students)

const person = {
    name: "Tonumoy",
    age: 24,
    country: "Bangladesh"
}
person.age = 25
console.log(person)

function sum(num1, num2=0){
    const total = num1 + num2
    console.log(total)
}

// sum(10,5, 3 ,8)

function multiply(num1=1, num2=1){
    const total = num1 * num2
    console.log(total)
}

// multiply(3,4)

function templateString(num1, num2){
    const result = num1 * num2
    const output = `sum of ${num1} and ${num2} is ${result}`
    console.log(output)
}

// templateString(5,10)

// function decleration
function sum(num1, num2){
    return num1 + num2
}

// console.log(sum(5, 10))

// function expression
const addition = function(num1, num2){
    return num1 + num2
}

const result = addition(4, 6)
// console.log(result)

// arrow function
const additin2 = (num1, num2) => {
    return num1 + num2
}

const result2 = additin2(7, 4)
// console.log(result2)


const isBig = (x, y) => x > y 
const isBigresult = isBig(3,2)
// console.log(isBigresult)

// annymouns function
// document.getElementById("").addEventListener("click", ()=>{
// })
// document.getElementById("btn-click").addEventListener("click", event => {
//     console.log("button clicked")
// })

const numbers = [2, 4, 6, 8, 10]
console.log(numbers)
console.log(Math.max(numbers))
console.log(...numbers)
console.log(Math.max(...numbers))
const newNumbers = [1, ...numbers, 12, 14]
console.log(newNumbers)