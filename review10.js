// let car = {
//     color: "green",
//     plateNumber: "1000%",
//     getPlateNumber: function() {
//         return this.plateNumber;
//     }
// }


// console.log(car.getPlateNumber())


// let car = {
//     getPlateNumber: function() {
//         return this.plateNumber;
//     }
// }

// let myCar = Object.create(car);
// myCar.color = "green";
// myCar.plateNumber = "30BIILION"
// console.log(myCar.getPlateNumber());


class Car {
    constructor (color, plateNumber) {
        this.color = color;
        this.plateNumber = plateNumber;
    };
    getPlateNumber() {
        return this.plateNumber;
    }
}

let myCar = new Car();
myCar.getPlateNumber();
