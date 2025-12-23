class Square {
    constructor (length) {
        this.length = length;
    };
    getPerimeter() {
        let perimeter = 4 * this.length;
        return perimeter;
    }
}

let squareOne = new Square(4);
console.log(squareOne.getPerimeter());