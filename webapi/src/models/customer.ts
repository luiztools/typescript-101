export default class Customer {
    id: number;
    name: string;
    cpf: string;

    private static nextId = 1;

    constructor(name: string, cpf: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.cpf = cpf;
    }
}