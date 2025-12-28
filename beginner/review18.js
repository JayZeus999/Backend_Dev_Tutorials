let message = "I am the greatest emcee to ever stalk the stage!";
let letters = /\w\w\w/g;
let letterz = /\W/g;

console.log(message.match(letters));
console.log(message.match(letterz));