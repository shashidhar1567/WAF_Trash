const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
    try {
        const allEmployees = await Employee.find();
        const highestSalaryEmployee = await Employee.find({salary: {$gt: 50000 
        }});
        const updateResult = await Employee.updateMany(
            {
                salary: {$gt: 50000}
            },
            {
                $inc: {salary: 5000}
        }
        );
        const totalEmployees = await Employee.countDocuments();
        res.jsoson({
            allEmployees,
            highestSalaryEmployee,
            updateResult,
            totalEmployees
        });
    }
    catch (err) {
        res.status(500).json(err);
    }

});
module.exports = router;

