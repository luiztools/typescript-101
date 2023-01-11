import {Router} from 'express';
import {Customer} from '../models/customer';

const customers : Customer[] = [];
const router = Router();

router.get('/', (req, res) => {
    res.json(customers);
})

type RequestBody = {
    id: number,
    name: string,
    birthDate: Date
}

router.post('/', (req, res) => {
    const body = req.body as RequestBody;
    const newCustomer : Customer = {
        id: req.body.id,
        name: req.body.name,
        birthDate: req.body.birthDate
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})

export default router;