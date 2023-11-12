const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "name": {
        required: true,
        unique: true,
        type: String,
        dropDups: true
    },
    "price": {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    },
    "description": {
        required: true,
        type: String
    },
    "quantity": {
        required: true,
        type: Number
    },
    "unit": {
        required: true,
        type: String
    },
},
    {
        collection: 'products'
    });

module.exports = mongoose.model('Data', dataSchema);