// variable
// var number = 10

// let number = 9;
// number = 48;

// const country = "Bangladesh"
//  country = "USA" //cant change this

// if (number >= 50 && number < 60 ) {
//   console.log("This is a big number");
// } else {
//   console.log("This is not a big number");
// }

// const friends = ['Rahat', 'Arohi', 'Ayla', 'Gias', 'Tawan',]
// friends.push("Abrar")
// friends.pop()
// friends.unshift("Bella")
// friends.shift()
// console.log(friends.slice(2,3)) //index 2 থেকে শুরু index 3 এর আগ পর্যন্ত
// console.log(friends.splice(2,3)) //index থেকে শুরু Count সংখ্যক element, 3 elements

// for (let friend = 0; friend < friends.length; friend++) {
//     const element = friends[friend];
//     console.log(element)
// }

// function numbers(a,b) {
//     console.log(arguments)
//     result = a + b
//     return result
// }

// const output = numbers(3,4)
// console.log(output)

// const friends = ['Rahat', 'Arohi', 'Ayla', 'Tawan',]
// const person = {
//     name: 'Gias',
//     age: 23,
//     friend: friends
// }
// console.log(person.friend[3])

// console.log(`Hello friend, I am ${person.name}. Today I will introduce all my friends. Here are my friends: ${person.friend}.`)

// const count = (num1, num2) => {
//     const result = num1 + num2
//     return result
// }
// const output = count(3,2)
// console.log(output)

// const numbers = [2, 3, 4, 5, 6, 7, 8];
// console.log(numbers)
// console.log(...numbers , 9, 10);

// const num = '10'
// const type =  num + 2
// const type =  num - 2
// console.log(typeof num)
// console.log(typeof +num)
// console.log( type, typeof type)

const person = {
  name: "Gias",
  age: 23,
  friend: ['Tawan', 'Fushiguro', 'Nobara', 'Youji'],
  10: 'secret code',
  "lets-go": true
};

// console.log(person.name, person.age, person.friend)
// console.log(person['name'], person['age'], person['friend'])
// console.log(person.10) // dot notation wrong way
// console.log(person[10]) // bracket notation
// console.log(person.lets-go) wrong
console.log(person["lets-go"])
