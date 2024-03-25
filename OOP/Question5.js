class Shape{
    calculateArea(){
    throw new Error('Must calculateAre() must be overridden in subclass')
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius;
    }
    calculateArea(){
        console.log(Math.PI * this.radius * this.radius)
    }
}

class Triangle extends Shape{
   constructor(height, base){
    super()
     
    this.height = height; 
    this.base = base;
   }
   calculateArea(){
      console.log((this.height * this.base)/2)
   }
}

const Circlee = new Circle(220)
const Trianglee = new Triangle(5,15)

console.log("Area of Circle :")
Circlee.calculateArea()


console.log("Area of Triangle :")
Trianglee.calculateArea()