import Person from "./person.js";
import Address from "./address.js";

export default class Customer extends Person {
    address: Address;

    constructor(name: string, email: string, birthDate: Date, address: Address) {
        super(name, email, birthDate);
        this.address = address
    }
}