let student
console.log(student)

function numberOfStudents(a,b){
    console.log("The sum is:", a , b)
    sum = a + b
    // return sum = a + b
    console.log("The sum is:", sum)
}

// numberOfStudents(4)
const result = numberOfStudents(4, 5)
// console.log("The result is:", result)


function numbers (a, b) {
    if(a === undefined || b === undefined) {
        console.log("One or both of the arguments are undefined");
        return
    }
    else {
        const sum = a + b
        return sum
    }
}

const result1 = numbers(16)
console.log("The result is:", result1)

console.log("The type of undefined is:", typeof undefined)