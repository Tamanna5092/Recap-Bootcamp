// primitive data types (like numbers, strings, booleans) value change kore na, karon ora pass by value. mane ora function er vitore change holeo, function er baire original value change hoy na.
const multiply = (x, y) => {
    x = x + 5
    y = y + 5
    const mult = x * y;
    return mult;
}

const a = 4;
const b = 5;
console.log("Before function call:", a, b);
const result = multiply(a, b);
console.log(result);
console.log("After function call:", a, b);

// non primitive data reference change kore karon ora pass by reference. mane ora function er vitore change holeo, function er baire original value change hoy.
const Alice = {name: "Alice", money: 2000};
const Usagi = {name: "Usagi", money: 3000};

const totalMoney = (person1, person2) => {
    person1.money = person1.money + 3000
    person2.money = person2.money + 12000/2
    const total = person1.money + person2.money;
    return total;
}
console.log("Before function call:", Alice, Usagi);
const balace = totalMoney(Alice, Usagi);
console.log(balace);
console.log("After function call:", Alice, Usagi);


// arguments er value change kore, karon ora pass by value. mane ora function er vitore change holeo, function er baire original value change hoy na.
function add(x, y){
    const sum = x + y;
    console.log("Sum:", sum);
    console.log("Arguments object:", arguments);
    const params = [...arguments]
    console.log("Parameters array:", params);
}

add(10, 20, 2, 34, 82, 19);