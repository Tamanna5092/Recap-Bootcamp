function counter(){
    let count = 10;
    function innerFunction(person){
        count++;
        console.log("inner function called",person, count)
    }
    return innerFunction
}

// closeure er maddhome amra inner function er access pai, jar karone amra count variable ke modify korte pari. counter function call korle amra innerFunction ke return kori, jar karone amra count variable ke increment korte pari. prottek bar innerFunction call korle count variable er value increment hobe, karon ora same count variable ke access kore. 
const output = counter();
output("person1");
output("person1");
output("person1");
const output2 = counter();
output2("person2");
output2("person2");
output2("person2");
output2("person2");
const output3 = counter();
output3("person3");
output3("person3");