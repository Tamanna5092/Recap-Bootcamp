// double equals (==) checks for value equality.
// console.log(2 == 2)
// console.log(2 == 1)
// console.log(true == 1)
// console.log(false == 0)
// console.log(true == "1")
// console.log(false == "0")
// console.log(null == undefined)
// console.log("" == 0)
// console.log([] == "")
// console.log([5] == "5")
// console.log([5] == 5)
// console.log({} == {})
// console.log([] == [])
console.log([4] == [4]) // different reference, so false
const p = [2, 5, 10]
const q = p
 console.log(p == q)   // same reference, so true


// triple equals (===) checks for both value and type equality. first it checks if the type is same then it checks for value equality. if the type is same then returns true otherwise returns false without checking for value equality.
// console.log(2 === 2)
// console.log(2 === 1)
// console.log(2 === "2")
// console.log(true === 1)
// console.log(false === 0)
// console.log(true === "1")
// console.log(false === "0")
// console.log(null === undefined)
// console.log("" === 0)
// console.log("" === "0")
// console.log([4, 2, 1, 7] === [ 4, 2, 1, 7 ]) // different reference, so false
// console.log({} === {}) // different reference, so false
// const p = [2, 5, 10]
// const q = p
// console.log(p === q)   // same reference, so true