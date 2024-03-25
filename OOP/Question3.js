class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        console.log(` Make : ${this.make} \n Model : ${this.model} \n Year : ${this.year} `)
    }
}

class Car extends Vehicle{
    constructor(make, model, year, door) {
        super(make, model, year); 
        this.door = door;
    }
    displayInfo(){
        console.log(` Make : ${this.make} \n Model : ${this.model} \n Year : ${this.year} \n Doors : ${this.door}`)
    }
}

const Vehiclee = new Vehicle('Vezel','Z-Sensing',2022)
const Carr = new Car('Honda','Accord',2020,4)

console.log("Vehicle Details : ")
Vehiclee.displayInfo()


console.log("Car Details : ")
Carr.displayInfo()