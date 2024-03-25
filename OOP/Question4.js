class BankAccount {
    constructor(AcNo, Balance) {
        this.AcNo = AcNo;
        this.Balance = Balance;
    }

    deposit(amount) {
        this.Balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.Balance) {
            this.Balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

const BankAccount1 = new BankAccount(1579, 1600);

console.log("Initial Balance: " + BankAccount1.Balance);

console.log("\nDepositing $500...");
BankAccount1.deposit(500);
console.log("Current Balance after deposit: " + BankAccount1.Balance);

console.log("\nWithdrawing $200...");
BankAccount1.withdraw(200);
console.log("Current Balance after withdrawal: " + BankAccount1.Balance);

console.log("\nAttempting to withdraw $2000...");
BankAccount1.withdraw(2000);
console.log("Current Balance after attempted withdrawal: " + BankAccount1.Balance);
