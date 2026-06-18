const mongoose = require('mongoose');
const employeeschema = new mongoose.Schema({
    empid: Number,
    name: String,
    age: Number,
    department: String,
    salary: Number,
});
module.exports = mongoose.model('Employee', employeeschema);