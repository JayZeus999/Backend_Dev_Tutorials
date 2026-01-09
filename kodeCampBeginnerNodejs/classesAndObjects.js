class Car {
    // constructor(color, numberOfTyres = 4, steering = 1) {
    //     this.color = color;
    //     this.numberOfTyres = numberOfTyres;
    //     this.steering = steering;
    // }

    #balance = 400
    getCarProperty () {
        return {
            color: this.color,
            numberOfTyres: this.numberOfTyres,
            steering: this.steering,
            balance: this.#balance
        };
    };
}
 

class Ferrari extends Car {
    constructor(canDrift) {
        super();
        this.canDrift = canDrift;
        this.rooftopExists = true;
    }
}

let brandNewWhip = new Ferrari(true);
brandNewWhip.color = "red";
brandNewWhip.steering = true;
brandNewWhip.canDrift = true;
console.log(brandNewWhip);