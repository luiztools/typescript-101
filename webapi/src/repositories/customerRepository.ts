import Customer from '../models/customer';

const customers: Customer[] = [];

async function getCustomer(id: number): Promise<Customer | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(customers.find(c => c.id === id));
    })
}

async function getCustomers(): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
        return resolve(customers);
    })
}

async function addCustomer(customer: Customer): Promise<Customer> {
    return new Promise((resolve, reject) => {
        if (!customer.name || !customer.cpf)
            return reject(new Error(`Invalid customer.`));

        const newCustomer = new Customer(customer.name, customer.cpf);
        customers.push(newCustomer);

        return resolve(newCustomer);
    })
}

async function updateCustomer(id: number, newCustomer: Customer): Promise<Customer | undefined> {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newCustomer.name && customers[index].name !== newCustomer.name)
                customers[index].name = newCustomer.name;

            if (newCustomer.cpf && customers[index].cpf !== newCustomer.cpf)
                customers[index].cpf = newCustomer.cpf;

            return resolve(customers[index]);
        }

        return resolve(undefined);
    })
}

async function deleteCustomer(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            customers.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}