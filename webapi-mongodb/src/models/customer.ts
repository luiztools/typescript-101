import { ObjectId } from "mongodb";

export default class Customer {
    _id?: ObjectId;
    name: string;
    cpf: string;

    constructor(name: string, cpf: string, id?: ObjectId) {
        this._id = id;
        this.name = name;
        this.cpf = cpf;
    }
}