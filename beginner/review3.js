let numberOne = 10;
let numberTwo = "5";
console.log(numberOne + numberTwo);
console.log(typeof(numberOne + numberTwo));

//Concatenation happens with strings.
console.log(numberOne - numberTwo);
console.log(typeof(numberOne - numberTwo));

// typeof can be very useful in the future.
numberOne = -55;
numberTwo = 0;
c = (numberOne / numberTwo).toString();
console.log(c);
console.log(typeof(c));  

let num = Number("555.89");
console.log(typeof(num));
console.log(parseInt(num));
console.log(Number("hello"));

console.log(Boolean((2>=1) +1));

// The difference between equal to & equivalent to.
// (the former converts both values to the same data type before comparing.)
console.log(Boolean(5 == "5"));
console.log(Boolean(5 === "5"));

console.log(Boolean(!true));