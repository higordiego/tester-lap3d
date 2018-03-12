const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employees = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    participation: {type: String, required: true}
})

Employees.index({name: 1, lastName: 1})

module.exports = mongoose.model('Employees', Employees)
