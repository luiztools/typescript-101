import { Router, Request, Response } from 'express';
import { Customer } from '../models/customer';

const customers: Customer[] = [];
const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json(customers);
})

type PostBody = {
    id: number,
    name: string,
    birthDate: string
}

router.post('/', (req: Request, res: Response) => {
    const body = req.body as PostBody;
    const newCustomer: Customer = {
        id: body.id,
        name: body.name,
        birthDate: new Date(Date.parse(body.birthDate))
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})

export default router;