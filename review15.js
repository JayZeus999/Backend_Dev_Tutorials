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
 studentMap.set(student1, "computer science");
 studentMap.set(student2, "mathematical biology");
 studentMap.set(student3, "engineering physics");

// console.log(studentMap.size);
// console.log(studentMap.get(student1));
// studentMap.delete(student3);

// console.log(studentMap.has(student3));

// Map forEach function : (value, key)
studentMap.forEach((department, student) => {
    console.log(`My name is ${student.name} with 
        reg No. ${student.regNo}. My department is ${department}`);
});