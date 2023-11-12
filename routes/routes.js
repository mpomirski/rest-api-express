const express = require('express');
const Model = require('../models/model');
const router = express.Router()

module.exports = router;

router.get('/products', async (req, res) => {
    try {
        if (req.query.sort_by) {
            const data = await Model.find({ _id: "6550dd1473d380721eb40ccd" });
        }
        else {
            const data = await Model.find();
        }
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/products/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})