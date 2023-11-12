const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
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
app.use('/app', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});

