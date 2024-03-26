class Bank {
    constructor(bank_name) {
        this.bank_names = bank_name;
        this.branches = [];
    }

    addBranch(branch_name) {
        this.branches.push(branch_name);
    }

    removeBranch(branch_name) {
        const index = this.branches.indexOf(branch_name);
        if (index !== -1) {
            this.branches.splice(index, 3);
        }
    }

    display() {
        console.log("Display All Branches:");
        this.branches.forEach(branch => {
            console.log(branch);
        });
    }
}

const Bankclass = new Bank("Example Bank");

Bankclass.addBranch('Bahria Town');
Bankclass.addBranch('DHA');
Bankclass.addBranch('Johar Town');
Bankclass.addBranch('JTown');
Bankclass.addBranch('Daroghawala');
Bankclass.addBranch('Sabazar');

console.log("After adding branches:");
Bankclass.display();

Bankclass.removeBranch('JTown');

console.log("\nAfter removing a branch:");
Bankclass.display();
