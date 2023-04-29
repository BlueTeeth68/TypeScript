"use strict";
//in JavaScript, there are no concept about access modifier
// in TypeScript, we have 3 access modifier: 
// - public (default)
// - private
// - protected
class Customer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// create an instance
// let customer = new Customer();
// customer.firstName = "Minh Tri";
// customer.lastName = "Dao";
let customer = new Customer("Minh Tri", "Dao");
console.log(`Customer's first name: ${customer.firstName}`);
console.log(`Customer's last name: ${customer.lastName}`);
