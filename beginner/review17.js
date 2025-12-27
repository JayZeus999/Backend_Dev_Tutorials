// Rest parameter is used to represent an indefinite number of arguments as an array.
function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

// console.log(args); // where args is an array.
console.log(sum(1, 2, 3)); // Rest parameter has to be the last argument(s).


// Regular Expressions.
console.log(/hello/i.test("Hello people")); 
// OR
let re = /dogs/i;
let result = "Dogs are so cute and cuddly!";
console.log(re.test(result));