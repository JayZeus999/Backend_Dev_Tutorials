// Destructuring helps to simplify accessing an array's values & their assignments.
let theTrinity = ["Superman", "Wonder Woman", "Batman"];
let [Metropolis, Themiscyra, Gotham] = theTrinity;

console.log(Gotham);

// Destructuring an object.
let aboutMe = {name: "Jay", age: 21, favFood: "Rice & Beans etc"};
let {name, age, favFood} = aboutMe;
console.log(aboutMe)


// Destructuring an object inside another object.
let aboutMe2 = {
    details: {
        named: "Jay",
        aged: 21
    }
};

let {named, aged} = aboutMe2.details;
console.log(named);