import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer';
import customerRepository from '../repositories/customerRepository';

async function getCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = await customerRepository.getCustomer(parseInt(id));
    if (customer)
        res.json(customer);
    else
        res.sendStatus(404);
}

async function getCustomers(req: Request, res: Response, next: NextFunction) {
    const customers = await customerRepository.getCustomers();
    res.json(customers);
}

async function postCustomer(req: Request, res: Response, next: NextFunction) {
    const customer = req.body as Customer;
    const result = await customerRepository.addCustomer(customer);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

async function patchCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = req.body as Customer;
    const result = await customerRepository.updateCustomer(parseInt(id), customer);
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await customerRepository.deleteCustomer(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getCustomer,
    getCustomers,
    postCustomer,
    patchCustomer,
    deleteCustomer
}