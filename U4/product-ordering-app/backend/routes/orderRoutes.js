const express = require('express');

const router = express.Router();

const products = require('../models/product');
const Order = require('../models/order');

router.post('/orders', async (req, res) => {
    try {
        const product = await products.findById(req.body);
        res.json(product);
        