const name= "Bangladesh"
const Newname = name + "Germany"
console.log(Newname)

let price = 25
price = 30
console.log(price)

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

templateString(5,10)
