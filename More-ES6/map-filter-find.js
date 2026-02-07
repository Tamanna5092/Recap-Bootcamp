const students = [
    {id: 1, name: "Tonumoy", age: 24, mark: 85, country: "Bangladesh"},
    {id: 2, name: "John", age: 30, mark: 92, country: "USA"},
    {id: 3, name: "Alice", age: 28, mark: 78, country: "UK"},
    {id: 4, name: "Bob", age: 22, mark: 90, country: "Canada"}
]

// return output as a new array
const studentNames = students.map(student => student.name) 
console.log(studentNames)
// checked condition and return all the condition match element
const goodStudents = students.filter(student => student.mark > 80)
console.log(goodStudents)
// checked condition and return the first element
const goodStudent = students.find(student => student.mark > 80)
console.log(goodStudent)

const numbers = [1, 5, 3, 45, 16];
let sum = 0
for(const num of numbers){
    sum = sum + num;
}
console.log(sum)

// using reduce method
const total = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(total)

const nums = [1,2,3,4,5];
const output = nums.filter(n => n%2);
console.log(output);