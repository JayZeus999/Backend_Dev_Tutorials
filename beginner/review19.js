// RegExp Anchors
let word = "Let there be light."
console.log(/^Let /.test(word));

let word2 = "Let there be light."
console.log(/.$/.test(word2));

// Word Boundaries.
console.log("Hello, JSscript! *JSs".match(/\bJS\b/));
console.log("Hello, JSscript! JS".match(/JS/));