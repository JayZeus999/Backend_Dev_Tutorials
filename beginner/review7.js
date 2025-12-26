let person = {firstName: "Jay",
              lastName: "Royce"};
console.log(typeof(person));
console.log(person.firstName);

// for ( let persons in person){
//     console.log(persons);
// }

let bitches = ["wench", "hoe"];

// fruits[1] = "Orange";
// fruits[2] = "Lemon";
// fruits[3] = "Watermelon";

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (let bitch in bitches) {
    console.log(bitch);
} 

// How to use forEach()
bitches.forEach(function(bitch) {
    console.log(bitch);
});

let avaMax = {song1: "Sweet but Psycho",
              song2: "Kings & Queens"};

for (keys in avaMax) {
    console.log(keys + " is " + avaMax[keys])
}

//
function hello (pirate) {
    console.log(`Howdy, ${pirate}!`)
}

hello("James");