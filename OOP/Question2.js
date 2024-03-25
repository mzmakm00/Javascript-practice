class Rectangle{
    constructor(width,height){
        this.width = width,
        this.height = height
    }
    area(){
        const calculate = this.width * this.height
        console.log(calculate) 
    }
    perimeter(){
        const perimeter = 2 * (this.width * this.height)
        console.log(perimeter)
    }
}

const Rectangle1 = new Rectangle(5,10)

console.log("Area of the Rectangle")
Rectangle1.area()


console.log("Perimeter of the Rectangle")
Rectangle1.perimeter()
