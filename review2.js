let alphabets = "abcdefghijklmnopqrstuvwxyz";
let length = alphabets.length;
console.log(length)

// NOTE THE DIFFERENCE BETWEEN A PROPERTY & A METHOD.
let mantra = "I will become the Hokage one day!"
let mantraGoal = mantra.slice(18, 24)
let mantraGoal2 = mantra.slice(18)
let mantraGoal3 = mantra.slice(-15)
console.log(mantraGoal)
console.log(mantraGoal2)
console.log(mantraGoal3)

let mantraReset = mantra.replace("day", "night")
console.log(mantraReset)
console.log(mantra)

let mantraUpperCase = mantra.toUpperCase();
console.log(mantraUpperCase)

let mantraLowerCase = mantra.toLowerCase();
console.log(mantraLowerCase)

console.log(alphabets.toUpperCase())

let text = "Please visit  Microsoft!  "
let textReplace = text.replace(/MICROSOFT/i, "Amazon")
console.log(textReplace);

let textTrim = text.trim();
console.log(textTrim);