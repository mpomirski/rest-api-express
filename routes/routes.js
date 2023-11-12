const express = require('express');
const Model = require('../models/model');
const router = express.Router()

module.exports = router;

//Get product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get all products, avaliable queries: 
// - order_by = <field_name>.<asc|desc>
// - filter as key-value mongodb pair i.e
//      /products?quantity=100
router.get('/products', async (req, res) => {
    try {
        if (req.query.sort_by) {
            const sortQuery = req.query.sort_by.split('.');
            const fieldName = sortQuery[0]
            if (sortQuery[1] === "asc") {
                const data = await Model.find().sort({ [fieldName]: 1 });
                res.json(data)
            }
            else if (sortQuery[1] === "desc") {
                const data = await Model.find().sort({ [fieldName]: - 1 });
                res.json(data)
            }

        }
        else if (req.query) {
            const data = await Model.find(req.query);
            res.json(data)
        }
        else {
            const data = await Model.find();
            res.json(data)
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.post('/products', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        unit: req.body.unit,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})