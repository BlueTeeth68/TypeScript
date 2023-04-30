import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";


let rectangle = new Rectangle("Rectangle", 20, 30);
console.log(rectangle.getInformation());
console.log(rectangle.getArea());
console.log(rectangle.getCircumference());

let square = new Square("Square", 20);
console.log(square.getInformation());
console.log(square.getArea());
console.log(square.getCircumference());

let circle = new Circle("Circle", 20);
console.log(circle.getInformation());
console.log(circle.getArea());
console.log(circle.getCircumference());