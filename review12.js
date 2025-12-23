class Person {
    constructor(name) {
        this.name = name;
    };

    toString() {
        return (`Name of person: ${this.name}`);
    };
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    };

    toString() {
        return (`${super.toString()}, Student ID: ${this.id}`);
    }
}

let newStudent = new Student("Jay", "1000%");
console.log(newStudent.toString())