import Customer from '../models/customer';
import connect from '../db';
import { ObjectId } from 'mongodb';

const COLLECTION = "customers";

async function getCustomer(id: ObjectId | string): Promise<Customer | null> {
    if (!ObjectId.isValid(id)) throw new Error(`Invalid id.`);

    const db = await connect();
    const customer = await db.collection(COLLECTION)
        .findOne({ _id: new ObjectId(id) });

    if (!customer) return null;

    return new Customer(customer.name, customer.cpf, customer._id);
}

async function getCustomers(): Promise<Customer[]> {
    const db = await connect();
    const customers = await db.collection(COLLECTION)
        .find()
        .toArray();

    return customers.map(c => new Customer(c.name, c.cpf, c._id));
}

async function addCustomer(customer: Customer): Promise<Customer> {
    if (!customer.name || !customer.cpf)
        throw new Error(`Invalid customer.`);

    const db = await connect();
    const result = await db.collection(COLLECTION)
        .insertOne(customer);

    customer._id = result.insertedId;
    return customer;
}

async function updateCustomer(id: string | ObjectId, newCustomer: Customer): Promise<Customer | null> {
    if (!ObjectId.isValid(id)) throw new Error(`Invalid id.`);

    const db = await connect();
    await db.collection(COLLECTION)
        .updateOne({ _id: new ObjectId(id) }, { $set: newCustomer });

    return getCustomer(id);
}

async function deleteCustomer(id: string | ObjectId): Promise<boolean> {
    if (!ObjectId.isValid(id)) throw new Error(`Invalid id.`);
    
    const db = await connect();
    const result = await db.collection(COLLECTION)
        .deleteOne({ _id: new ObjectId(id) });

    return result.deletedCount > 0;
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}