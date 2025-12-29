// RegExp Anchors
let word = "Let there be light."
console.log(/^Let /.test(word));

let word2 = "Let there be light."
console.log(/.$/.test(word2));

// Word Boundaries.
console.log("Hello, JSscript! *JSs".match(/\bJS\b/));
console.log("Hello, JSscript! JS".match(/JS/));

// Exact count {n} quantifier.
let str = "ECMAScript 2020";
let re = /\d{4}/;
console.log(str.match(re));

// Range {n,m} quantifier.
let re2 = /\w{4,10}/;
console.log(str.match(re2));

// Sets search for patterned instances of characters; Ranges do that en masse.
let str3 = "A stitch in time saves nine."
let re3 = /[t][i]/g;
console.log(str3.match(re3));

let str4 = "rats sat tats vats xats"
let re4 = /[r-v]ats/g;
console.log(str4.match(re4));