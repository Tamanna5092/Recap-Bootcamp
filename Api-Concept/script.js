const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    country: "USA",
    occupation: "Software Engineer",
    hobby: ["coding", "hiking", "photography", "travel"]
}

console.log(person, typeof person);

// js object with notation

// JSON.stringify() method converts object to JSON string
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

// JSON.parse() method parses JSON string to object
const personObj = JSON.parse(personJSON);
console.log(personObj, typeof personObj);