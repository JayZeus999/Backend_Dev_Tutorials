let arachnids = ["spider", "scorpion", ""];

// "locust", "praying mantis"
console.log(arachnids[1]);
arachnids[2] = "dragonfly";
console.log(arachnids);

arachnids.push("locust");
console.log(arachnids);

arachnids.pop("locust");
console.log(arachnids);

console.log(arachnids.toString());

let a = arachnids.join(" & ");
console.log(a);

let b = arachnids.shift();
console.log(arachnids);

let c = arachnids.unshift("praying mantis");
console.log(arachnids);

// .concat creates a new array by merging 2 arrays into 1.
let myBreakfast = ["Yam", "Plantain"];
let myLunch = ["Semo", "Okro"];

let myFood = myBreakfast.concat(myLunch);
console.log(myFood);

myFood.splice(2, 1, "Eba");
console.log(myFood);

let lunch = myFood.slice(2, 4);
console.log(lunch);
