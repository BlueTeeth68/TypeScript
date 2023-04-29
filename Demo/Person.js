"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//This class is used to demo class short cut
class Person {
    constructor(_firstName, _lastName, _age = 21) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
exports.Person = Person;
