class MyBank {
    #balance;

    constructor() {
        this.balance = 100;
    }

    #sayHello() {
        console.log("Hello");
    }
};

let zenith = new MyBank();
console.log(zenith.balance);
zenith.#sayHello();