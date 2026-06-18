const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

// const ordersRoutes = require('./routes/orders');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/productdb")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error( error));
// app.use("/", ordersRoutes);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});