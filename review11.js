class Square {
    #length ;  // # sign makes properties private;
    constructor (length) {
        this.#length = length;
    };
    getPerimeter() {
        let perimeter = 4 * this.#length;
        return perimeter;
    }
}

let squareOne = new Square(4);
squareOne.length = 5;
console.log(squareOne.getPerimeter());