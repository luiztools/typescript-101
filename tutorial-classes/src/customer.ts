import Person from "./Person";
import Address from "./address";

export default class Customer extends Person {
    address: Address;

    constructor(name: string, email: string, birthDate: Date, address: Address) {
        super(name, email, birthDate);
        this.address = address
    }
}