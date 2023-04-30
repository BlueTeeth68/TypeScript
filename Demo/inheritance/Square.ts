import { Rectangle } from "./Rectangle";

//function and constant use super, not this
export class Square extends Rectangle {

    constructor(
        name: string,
        width: number
    ) {
        super(name, width, width);
    }

    getInformation(): string {
        return `Name: ${this._name}, Width: ${this._width}`;
    }
    getArea(): number {
        return this._width * this._width;
    }
    getCircumference(): number {
        return this._width * 4;
    }

    public set height(value: number) {
        this._height = value;
        this._width = value;
    }
    public set width(value: number) {
        this._height = value;
        this._width = value;
    }
}