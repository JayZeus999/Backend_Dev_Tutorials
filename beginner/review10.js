// let car = {
//     color: "green",
//     plateNumber: "1000%",
//     getPlateNumber: function() {
//         return this.plateNumber;
//     }
// }


// console.log(car.getPlateNumber())


let Car = {
    getPlateNumber: function() {
        return this.plateNumber;
    }
}

let myCar = Object.create(Car);
myCar.color = "green";
myCar.plateNumber = "30BIILION"
console.log(myCar.getPlateNumber());


// class Car {
//     constructor (color, plateNumber) {
//         this.color = color;
//         this.plateNumber = plateNumber;
//     };
//     getPlateNumber() {
//         return this.plateNumber;
//     }
// }

// let myCar = new Car();
// myCar.getPlateNumber();

let mySecondCar = Object.create(Car);
mySecondCar.plateNumber = "MerryChristmas";
// console.log(mySecondCar.plateNumber)
console.log(mySecondCar.getPlateNumber());