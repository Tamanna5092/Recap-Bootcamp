const globalVar = 'I am a global variable'

if(true){
    const number = 42
    console.log(number, globalVar)
    greet('Alice')
}

// console.log(number) ReferenceError: number is not defined

for(const num of [1, 2, 3]){
    // console.log(num)
}
// console.log(num) ReferenceError: num is not defined

// function or local scope
function greet(name){
    const greeting = `Hello, ${name}!`
    console.log(greeting)
    function innerFunction(name2){
        const fullGreeting = `Hi, ${name2}!`
        return fullGreeting
    }
    console.log('This is an inner function',(innerFunction("Alvarez")))
}