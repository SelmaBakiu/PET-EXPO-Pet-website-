const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDB = require('./control/dbConnection');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;
connectDB();

app.use(express.json());
app.use('/api/animals', require('./routes/animalRoutes'));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/api/animals`);
    });