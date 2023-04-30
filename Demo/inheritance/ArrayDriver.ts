import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";


let rectangle = new Rectangle("Rectangle", 20, 30);

let square = new Square("Square", 20);

let circle = new Circle("Circle", 20);

let array: Shape[] = [];

array.push(rectangle);
array.push(circle);
array.push(square);

console.log(JSON.stringify(array, null, 2));

for (let arr of array) {
    console.log(arr.getInformation());
}