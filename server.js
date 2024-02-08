const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();


const mongoString = process.env.DATABASE_URI;
mongoose.connect(`mongodb://${mongoString}`);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})



app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});

