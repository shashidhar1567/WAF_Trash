const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
    try {
        const result = await Employee.deleteMany({age: {$gt: 60}});

        res.json({message:"Employees deleted ", deletedCount: result.deletedCount});
    } 
    catch (err) {
        res.status(500).json(error);
    }
});
module.exports = router;