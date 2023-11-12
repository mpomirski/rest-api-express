const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoString = "mongodb://127.0.0.1:27017/bazy"
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})



app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});

