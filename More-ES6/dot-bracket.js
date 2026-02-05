const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    gpa: 3.8,
    1: 40,
    "home-town": "New York",
    location: {
        country: "USA",
        city: "New York",
        state: "NY"
    }
}
// dot notation
// console.log(student.1);  number diye access kora jabe na
// const studentName = student.name;
// console.log(studentName);

// bracket notation
// console.log(student["1"]);
// console.log(student["name"]);
// console.log(student["home-town"]);

// nested object with optional chaining
console.log(student.location?.city)