class Square {
    #length ;  // # sign makes properties private;
    constructor (length) {
        this.#length = length;
    };

    getPerimeter() {
        let perimeter = 4 * this.#length;
        return perimeter;
    };

    setLength(newLength) {
        this.#length = newLength;
    };

    #privateLength() {
        console.log("This is a private method.")
    };

    revealPrivateLength() {
        this.#privateLength();
    };
}

let squareOne = new Square();

console.log(squareOne.getPerimeter()); // NaN

squareOne.setLength(5); // Setters ensure the user cannot just access any variable/method anyhow.

squareOne.revealPrivateLength();

console.log(squareOne.getPerimeter()); // Different value for perimeter. 