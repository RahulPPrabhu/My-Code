const mongoose = require('mongoose')
const Schema = mongoose.Schema

const currencySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CurrencyDetails', currencySchema)