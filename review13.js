class BankAccount {
    constructor(name, accountType, balance) {
        this.name = name;
        this.accountType = accountType;
        this.balance = balance;
    };

    getAccountBalance() {
        console.log(this.balance);
    };

    deposit(amount) {
        this.balance += amount;
    };

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("You can't withrdaw more than a million.")
        } else {
            this.balance -= amount;
        }
    };

};

let qudusAccount = new BankAccount();
qudusAccount.name = "Qudus";
qudusAccount.accountType = "Savings";
qudusAccount.balance = 5000;
  
qudusAccount.deposit(4000);
qudusAccount.getAccountBalance();

qudusAccount.withdraw(600000000);
qudusAccount.getAccountBalance(); 