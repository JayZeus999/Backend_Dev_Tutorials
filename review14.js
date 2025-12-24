hello = (a = 5, b = 5) => {
    // let c = a * b;
    return a * b;
};

console.log(hello());

// Create a set.
let digits = new Set([1, 2, 2, 4, 16]);
// console.log(alphabets.size)
console.log(digits.has("a")); 
console.log(digits) // 4 elements; only permits unique values. 


let alphabets = new Set(["a", "b", "g", "x", "z"]);

for (let alphabet of alphabets) {
    console.log(alphabet);
};

for ([key, value] of alphabets.entries()) {
    console.log("Key", key);
    console.log("Value", value);
    console.log(key === value);
}  