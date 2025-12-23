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
}

let squareOne = new Square(15);

console.log(squareOne.getPerimeter()); 

squareOne.setLength(5);

console.log(squareOne.getPerimeter()); 