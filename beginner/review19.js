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