class Person {
    #name;
    constructor(name) {
        this.#name = name;
    };

    toString() {
        return (`Name of person: ${this.#name}`);
    };
}

// Child class
class Student extends Person {
    constructor(name, id) {
        super(name); // Inherited properties from Super class.
        this.id = id;
    };

    toString() {
        return (`${super.toString()}, Student ID: ${this.id}`);
    };

};

let newPerson = new Person("Kai", 100);
console.log(newPerson.name);  // undefined.
console.log(newPerson.toString());  // Polymorphism. -->

let newStudent = new Student("Jay", "1000%");
console.log(newStudent.toString())  // --> Polymorphism.