const numbers = [1, 2, 3, 4, 5] 
for(const num of numbers){  // array jonno for of loop use kora hoy
    console.log(num)
}

const employee = {
    id: 101,
    name: "Rahat",
    designation: "Developer",
    salary: 50000,
    company: "Tech Ltd"
}
for(const key in employee){ // object jonno for in loop use kora hoy
    const value = employee[key]
    console.log(key)
}

const keys = Object.keys(employee)  // object er key gula ke array te convert kore
console.log("keys",keys)
for(const key of keys){  // tai for of loop use kora hoy
    const value = employee[key]
    console.log("value",value)
} 