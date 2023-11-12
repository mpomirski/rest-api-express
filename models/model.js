const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "name": {
        required: true,
        type: String
    },
    "price": {
        required: true,
        type: String
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