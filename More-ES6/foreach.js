const numbers = [1, 5, 3, 45, 16];
 
// foreach do not give output as a new array, it just perform the operation on each element of the array and return undefined.
 
numbers.forEach(x => console.log(x));
numbers.forEach((num) => {
  console.log(num);
});
