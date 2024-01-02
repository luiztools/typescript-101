//address.ts
export default class Address {
    street: string;
    district: string;
    city: string;
    state: string;

    constructor(street: string, district: string, city: string, state: string) {
        this.street = street;
        this.district = district;
        this.city = city;
        this.state = state;
    }

    toString() {
        return this.street + ", " + this.district + ", " + this.city + "/" + this.state;
    }
}