class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }
    calculateSalary() {
        return (this.salary + this.bonus) * 12;
    }
}

const Employee1 = new Employee("Saad", 50000);
const Employee1salary = Employee1.calculateSalary();
console.log(`Employee 1: ${Employee1salary}`);

const Manager1 = new Manager("Moazzam", 90000, "Team-Lead", 120000);
const Manager1salary = Manager1.calculateSalary();
console.log(`Manager 1: ${Manager1salary}`);

const Manager2 = new Manager("Ali", 50000, "IT", 40000);
const Manager2salary = Manager2.calculateSalary();
console.log(`Manager 2: ${Manager2salary}`);
