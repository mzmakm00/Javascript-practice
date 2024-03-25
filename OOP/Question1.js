class Person{
   constructor(name, age, country){
    this.name = name,
    this.age = age ,
    this.country = country
   }
   displayInfo(){
    console.log(`Name: ${this.name} \nAge : ${this.age} \nCountry : ${this.country}`);
   }
}

const Person1 = new Person('Francisa' , 25 , 'USA')
const Person2 = new Person('Raimond', 35 , 'CA')

console.log("Person 1")
Person1.displayInfo()


console.log("\nPerson 2")
Person2.displayInfo()
