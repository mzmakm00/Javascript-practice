class Animal{
    constructor(species,sound){
        this.species = species;
        this.sound = sound;
    }
    displaysound(){
        console.log(`Animal sound : ${this.sound}`)
    }
}

class Dog extends Animal{
    constructor(species,sound,color){
        super(species,sound)
        this.color = color
    }
    displaysound(){
        super.displaysound();
        console.log(`Color : ${this.color}`)
    }
}

const Dog1 = new Dog('Jerman-Shepard', 'waaao-waooo','brown')
Dog1.displaysound()