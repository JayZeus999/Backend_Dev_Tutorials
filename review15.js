// Map method. 
 let student1 = {
    name: "Victor",
    regNo: "001"
 },

 student2 = {
    name: "Reed",
    regNo: "002"
 },
 
 student3 = {
    name: "Tony",
    regNo: "003"
 };

 let studentMap = new Map();

 // The onjects above are the keys; & they are assigned to the values (course strings)
 studentMap.set(student1, "computer science");  // set() assigns a value to a key.
 studentMap.set(student2, "mathematical biology");
 studentMap.set(student3, "engineering physics");

// console.log(studentMap.size);
console.log(studentMap.get(student1));  // get() retrieves the value of a key.
console.log(studentMap.get(student2));
console.log(studentMap.get(student3));
// studentMap.delete(student3);

// console.log(studentMap.has(student3));
 

// Map forEach function : (value, key)
studentMap.forEach((department, student) => {
    console.log(`My name is ${student.name} with 
        reg No. ${student.regNo}. My department is ${department}\n`);
});

// Using for loop to iterate through each key-value pair.
for (let [student, department] of studentMap.entries()) {
    console.log(`\nMy name is ${student.name} with 
        reg No. ${student.regNo}. My department is ${department}`);
};

// studentMap.clear(); // Clears key-value pairs in studentMap().

// Returns an array of the keys & values in the Map.
let studentMapKeys = [...studentMap.keys()];
let studentMapValues = [...studentMap.values()];
console.log(studentMapKeys);
console.log(studentMapValues);



// Using map() with arrays.
 let pupils = [{
    name: "Victor",
    regNo: "001"
 },

 {
    name: "Reed",
    regNo: "002"
 },
 
 {
    name: "Tony",
    regNo: "003"
 }];

console.log(
    pupils.map(pupil => {
        return pupil.name
}));

// a normal array for comaparison with the abbove array of objects.
let names = ["Jay", "John", "Dave", "AY", "JT"];

console.log(
    names.map(name => {
        return `My name is ${name}`;
    })
);