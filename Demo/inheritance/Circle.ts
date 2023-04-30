import { Shape } from "./Shape";

const PI: number = Math.PI;

export class Circle extends Shape {

    constructor(
        name: string,
        protected _radius: number
    ) {
        super(name);
    }

    getInformation(): string {
        return `Name: ${this._name}, Radius: ${this._radius}`;
    }
    getArea(): number {
        return PI * this._radius * this._radius;
    }
    getCircumference(): number {
        return PI * 2 * this._radius;
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

}