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


// Regular Expressions with ignore flag.

console.log(/hello/i.test("Hello people")); 
// OR

let re = /dogs/i;
let result = "Dogs are so cute and cuddly!";
console.log(re.test(result));

// RegExs with global flag. Why do we need the gf?
let result2 = result.match(/cute/ig); 
console.log(result2);


// Regular expression character classes. Break down everything & list the quirks.
var st = /w[aeo]rd[s-z]/g;
var st2 = /l[^A-I]st[^e-w0-9]/;
var statement = "He was lost for words, wards and weird werds.. weird wordz."

console.log(statement.match(st)); 
console.log(statement.match(st2)); // What's 1 difference btwn .test() & .match()?