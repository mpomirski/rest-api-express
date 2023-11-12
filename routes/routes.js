const express = require('express');
const Model = require('../models/model');
const router = express.Router()

module.exports = router;


router.get('/products/summary', async (req, res) => {
    try {
        const data = await Model.aggregate([
            {
                $group:
                {
                    _id: '$name',
                    totalPrice: { $sum: { $multiply: ["$price.amount", "$quantity"] } },
                }
            },
            {
                $addFields: {
                    quantity: 1
                }
            }

        ]);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

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



//Add a new product (with unique name)
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



//Edit product by id
router.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete product by ID
router.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})