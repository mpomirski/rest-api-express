const express = require('express');
const Model = require('../models/model');
const router = express.Router()

module.exports = router;

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

router.get('/products', async (req, res) => {
    try {
        if (req.query.sort_by && typeof req.query.sort_by === 'string') {
            const sortQuery = req.query.sort_by.split('.');
            const fieldName = sortQuery[0]
            if (sortQuery[1] === "asc") {
                const data = await Model.find().sort({ fieldName: 1 });
                res.json(data)
            }
            else if (sortQuery[1] === "desc") {
                const data = await Model.find().sort({ fieldName: - 1 });
                res.json(data)
            }

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
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})