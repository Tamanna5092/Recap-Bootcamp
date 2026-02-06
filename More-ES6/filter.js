const numbers = [1, 25, 13, 45, 16, 8, 9, 12, 20];
 
// filter cheked condition if the condition is true then it will return the element in the new array otherwise it will not return empty array.
const gaterThanTen = numbers.filter(x => x > 10)
console.log(gaterThanTen)

const evenNumber = numbers.filter(x => x % 2 ===0)
console.log(evenNumber)

const oddNumber = numbers.filter(x => x % 2 !== 0)
console.log(oddNumber)
