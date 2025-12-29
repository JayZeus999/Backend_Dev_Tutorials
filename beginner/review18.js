// RegExp Classes with match() always return ...?
let message = "I am the greatest emcee to ever stalk the stage!";
let letters = /\w\w\w/g;
let letterz = /\W/g;

console.log(message.match(letters));
console.log(message.match(letterz));

let phone = "My phone number is +1-(408)-555-0105"
let digit = /\d/;
let digits = /\d/g;
let digits2 = /\D/g;

console.log(phone.match(digits).join("")); 
console.log(phone.match(digits2)); 

// Spaces: Tabs: New lines. 
let pattern = /\w\s\d/g;
console.log("E 6, w 3".match(pattern));

let pattern2 = /\S\s\S/g; // What EXACTLY does this mean?
console.log("E 6 w 3".match(pattern2)); 

// Dot character.
let re = /E..6/g;
console.log("ES6 Eee6 6E76 E..6 E 6 E 7 6".match(re)); 