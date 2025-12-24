hello = (a = 5, b = 5) => {
    // let c = a * b;
    return a * b;
};

console.log(hello());

// Create a set.
let alphabets = new Set([1, 2, 2, 4, 16]);
// console.log(alphabets.size)
console.log(alphabets.has("a")); 
console.log(alphabets) // 4 elements; only permits unique values. 

