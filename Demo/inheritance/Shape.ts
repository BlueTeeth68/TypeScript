export abstract class Shape {

    //demo constructor in abstract class
    constructor(
        protected _name: string
    ) {
    }

    //abstract method
    abstract getInformation(): string;
    abstract getArea(): number;
    abstract getCircumference(): number;

    //concrete method
    toString(): void {
        console.log(`This is a ${this._name}`);
    }

    //getter and setter method
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}