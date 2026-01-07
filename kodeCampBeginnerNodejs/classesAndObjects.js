class Car {
    constructor(color, numberOfTyres = 4, steering = 1) {
        this.color = color;
        this.numberOfTyres = numberOfTyres;
        this.steering = steering;
    }

    getCarProperty () {
        return {
            color: this.color,
            numberOfTyres: this.numberOfTyres,
            steering: this.steering
        };
    }
}


class Ferrari extends Car {
    constructor(canDrift) {
        super();
        this.canDrift = canDrift;
    }
}

let brandNewWhip = new Ferrari();
brandNewWhip.color = "red";
brandNewWhip.canDrift = true;
console.log(brandNewWhip.getCarProperty());