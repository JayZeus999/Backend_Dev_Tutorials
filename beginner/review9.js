class Car {
    constructor (color, maxLitre, steeringDiameter) {
        this.color = color;
        this.maxLitre = maxLitre;
        this.steeringDiameter = steeringDiameter;
    };

    startMyCar() {
        console.log("My car has started.")
    };

    horn() {
        console.log("Weoooouuu!!")
    };
}

// The role of a class is to create new objects modeled after it.
let vRolls = new Car("platinum-blonde", "1000 HP", "45cm");
console.log(vRolls["color"]);

let beachBuggy = new Car("velvet", "6L", "48cm");
console.log(beachBuggy["maxLitre"]);
console.log(beachBuggy.horn());


// Create a function that reverses a string.
let word = "Hello";
// console.log(word[4])

function reverseString(word) {
    let reversedWord = [];
    for (let i = word.length - 1; i >= 0; i--) {
        letter = word[i];
        reversedWord += letter;
    }
    console.log(reversedWord);
}

reverseString(word);