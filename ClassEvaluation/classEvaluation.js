class Rectangle{
    constructor(length,breadth){
        this.getArea = length * breadth
    }
}
class Square extends Rectangle{
    constructor(side){
        super(side,side)
        this.getPerimeter =(side)=>{
            return `Perimenter is ${2*(side+side)}`
        }
        this.getArea =(side)=>{
            return `Area is ${side*side}`
        }
    }
}

console.log(new Rectangle(4,5))
console.log(new Square(5))
console.log(new Square().getPerimeter(4))
console.log(new Square().getArea(6))