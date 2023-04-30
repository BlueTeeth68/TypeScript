import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(
        name: string,
        protected _width: number,
        protected _height: number
    ) {
        super(name);
    }

    getInformation(): string {
        return `Name: ${this._name}, Width: ${this._width}, Height: ${this._height}`;
    }
    getArea(): number {
        return this._width * this._height;
    }
    getCircumference(): number {
        return (this._width + this._height) * 2;
    }

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

}