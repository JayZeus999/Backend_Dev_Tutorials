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

// Spread operator.
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];

rivers.push(...moreRivers); // we can also use .concat() as well
console.log(rivers);

// Create a new array with spread.
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);  

// You can copy arrays with spread.
let val = [8, 9, 10];
let copyVal = [...val];

console.log(val);
console.log(copyVal);

// You can spread strings.
let greeting = "hello";
console.log([...greeting]);