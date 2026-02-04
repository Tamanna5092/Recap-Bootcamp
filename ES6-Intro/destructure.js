const {price, brand, gen= "10th Gen"} = { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" };

// const name = product.name;
// const price = product.price;
// const brand = product.brand;
// const color = product.color;
// console.log(name, price, brand, color);

// const discount = product.price * 15/100;
// const vatTax = product.price * 10/100;
// const finalPrice = product.price - discount + vatTax;

// const price = product.price;
// const discount = price * 15 / 100;
// const vatTax = price * 10 / 100;
// const finalPrice = price - discount + vatTax;
// console.log(discount, vatTax, finalPrice);

console.log(price, brand, gen);

const antherProduct = { name: "Smartphone", price: 22000, brandMob: "Samsung", color: "Black"};
const {brandMob} = antherProduct;
console.log(brandMob);

const numbers = [45, 37, 89, 12, 67];
const [first, second, third] = numbers;
console.log(first, second, third);

const marks = [65, 75, 85, 95, 70];
const [math, physics, chemistry, biology, english] = marks;
console.log(chemistry)