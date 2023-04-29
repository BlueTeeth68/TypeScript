//in JavaScript, there are no concept about access modifier
// in TypeScript, we have 3 access modifier: 
// - public (default)
// - private
// - protected

class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
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
