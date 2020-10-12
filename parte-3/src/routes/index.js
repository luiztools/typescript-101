"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customers = [];
var router = express_1.Router();
router.get('/', function (req, res) {
    res.json(customers);
});
router.post('/', function (req, res) {
    var body = req.body;
    var newCustomer = {
        id: req.body.id,
        name: req.body.name,
        birthDate: req.body.birthDate
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});
exports.default = router;
