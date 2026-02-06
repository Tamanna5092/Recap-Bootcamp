const numbers = [4, 20, 3, 45, 9, 12, 20];

// find method is used to find the first element in the array that satisfies the provided testing function. It returns the value of the first element that satisfies the condition, otherwise it returns undefined.
const firstEven = numbers.find(x => x %2 === 0)
console.log(firstEven)

const firstOdd = numbers.find(x => x % 2 !==0)
console.log(firstOdd)

const bigNumber = numbers.find(x => x > 50)
console.log(bigNumber)