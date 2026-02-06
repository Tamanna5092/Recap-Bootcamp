const numbers= [1, 2, 3, 4, 5]
// if we want output or return a new array then use map method. It is used to create a new array.
const double = []
for(const num of numbers){
    const result = num * 2
    double.push(result)
}
// console.log(double)

// const doubleIt = x => x * 2;
// const doubleNumbers = numbers.map(doubleIt)
// console.log(doubleNumbers)

// const doubleNumbers2 = numbers.map( x => x * 2 )
// console.log(doubleNumbers2)

const fiveTimes = numbers.map(num => num * 5)
const square = numbers.map(num => num * num)
// console.log(fiveTimes, square)

const friday = ["egg", "paratha", "chicken", "beef", "fish"]
const fridayItems = friday.map(item => item.toUpperCase())
const fridayItemLength = friday.map(item => item.length)
const firstLetter = friday.map(item => item[0])
// console.log(fridayItems)
// console.log(fridayItemLength)
// console.log(firstLetter)

const result = numbers.map((num, index) => {
    console.log(num * index);
    return index
})
console.log(result)