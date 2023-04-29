//This class is used to demo class short cut
export class Person {

    constructor(
        private _firstName: string,
        private _lastName: string,
        private _age: number = 21
    ) {
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

}