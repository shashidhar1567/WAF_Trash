const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => 
    {
        try {
            const employees = await Employee.insertMany([
                {
                  empid: 101,
                    name: 'John Doe',
                    age: 30,
                    department: 'IT',
                    salary: 50000,
                },
                {
                    empid: 102,
                    name: 'Jane Smith',
                    age: 28,
                    department: 'HR',
                    salary: 45000,
                },     
            ]);
            res.json(employees);
        } 
        catch (err) 
        { 
            res.status(500).json(error);
        }
    });
    module.exports = router;
        